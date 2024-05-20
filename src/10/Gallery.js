import GalleryCard from "./GalleryCard" ;
import ButtonC from "../UI/ButtonC";

import { useState, useEffect, useRef } from "react";

export default function Gallery() {
  const [gdata, setGdata] = useState() ;
  const [cards, setCards] = useState() ;
  const inRef = useRef() ;

  //사용자 정의함수
  const handleOk = (e) => {
      e.preventDefault();
      console.log(inRef.current.value) ;
      if (inRef.current.value == '') {
        alert('키워드를 입력하세요.') ;
        inRef.current.focus();
        return ;
      }

      let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?`;
      url = url +  `serviceKey=${process.env.REACT_APP_API_KEY}`;
      url = url +  `&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A`;
      url = url +  `&keyword=${encodeURI(inRef.current.value)}&_type=json`;
    
      getFetchData(url) ;
  }
  const handleClear = (e) => {
    e.preventDefault();
    setGdata('') ;
    setCards('') ;
    inRef.current.value = '' ;
    inRef.current.focus();
  }

  const handleKeyCheck = (e) => {
    if (e.key === 'Enter') {
      console.log("엔터")
      handleOk(e) ;
    }
    else {
      console.log(e.key)
    }
  }

  // data fetch
  const getFetchData = (url) => {
    fetch(url)
      .then(resp => resp.json()) 
      .then(data => {
        console.log("fetch", data)
        setGdata(data.response.body.items.item)
      })  
      ;

    console.log("getFetchData", url)  
  }
  //컴포넌트 생성시
  useEffect(()=>{
    
  }, []);

  //gdata 만들어질때
  useEffect(() => {
    if (!gdata) return;
    console.log("gdata", gdata) ;

    let tm = gdata.map(item => 
                        <GalleryCard key = {item.galContentId} 
                                    imgUrl = {item.galWebImageUrl}
                                    title = {item.galTitle}
                                    content = {item.galPhotographyLocation}
                                    spTag = {item.galSearchKeyword} 
                        />  
              ) ;

    setCards(tm) ;         
  } , [gdata]) ;

  return (
    <div className="w-full h-full flex flex-col justify-start items-start"> 
      <form className="w-full flex justify-center items-center">
      <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 my-5">
        <div>
        <input type="text" id="txt1" 
               ref={inRef}
               onKeyDown = {handleKeyCheck}
               className="bg-gray-50 border
                          border-gray-300
                          text-gray-900 
                          text-sm 
                          rounded-lg
                          focus:ring-blue-500
                          focus:border-blue-500 
                          block w-full p-2.5" />
        </div>
        <div>
          <ButtonC caption = "확인"
                    bcolor = "blue"
                    handleClick = {handleOk} />
          <ButtonC caption = "취소"
                    bcolor = "blue"
                    handleClick = {handleClear} />
        </div>
      </div>
      </form>
      <div className="w-full grid grid-cols-1 
                    md:grid-cols-2 lg:grid-cols-3 
                    gap-2">
        {cards}
      </div>
    </div>
  )
}
