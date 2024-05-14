import { useState, useEffect } from "react";

export default function TrafficMain() {
  const [tdata, setTdata] = useState([]) ;
  
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
    console.log("tdata=", tdata) ;
  } , [tdata]);

  return (
    <div>
      교통사고
    </div>
  )
}
