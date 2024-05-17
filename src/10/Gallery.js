import GalleryCard from "./GalleryCard" ;

import { useState, useEffect } from "react";

export default function Gallery() {
  const [gdata, setGdata] = useState() ;
  const [cards, setCards] = useState() ;

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
    let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=${process.env.REACT_APP_API_KEY}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%ED%83%9C%EC%A2%85%EB%8C%80&_type=json`;
    
    getFetchData(url) ;
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
      <div className="w-full flex justify-center items-center my-5 h-40">
        입력
      </div>
      <div className="w-full grid grid-cols-1 
                    md:grid-cols-2 lg:grid-cols-3 
                    gap-2">
        {cards}
      </div>
    </div>
  )
}
