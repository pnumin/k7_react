import { useState, useEffect } from "react";

export default function TrafficMain() {
  const [tdata, setTdata] = useState([]) ;    //전체 fetch데이터
  const [c1, setC1] = useState() ;            //대분류
  
  //fetch 함수로 데이터 가져오기
  const getFetchData = (url) => {
    fetch(url)
      .then(resp => resp.json()) 
      .then(data => setTdata(data.data))
      .catch(err => console.log(err)) ;
  }

  //컴포넌트 생성시 한번 실행
  useEffect(()=>{
    let url = 'https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?'
    url = `${url}page=1&perPage=17&returnType=json`;
    url = `${url}&serviceKey=${process.env.REACT_APP_API_KEY}`;
    
    console.log(url)
    getFetchData(url) ;
  }, []) ;

  //tdata가 변경이 되면 실행
  useEffect(() => {
    if (tdata.length === 0) return ; 

    console.log("tdata=", tdata) ;
    let tm = tdata.map(item => item['사고유형_대분류'])
    tm = [...new Set(tm)] ;

    setC1(tm);
  } , [tdata]);

  //대분류 생성후 
  useEffect(()=>{
    if (!c1) return ;
    console.log('c1=', c1) ;
  }, [c1]);

  return (
    <div>
      교통사고
    </div>
  )
}
