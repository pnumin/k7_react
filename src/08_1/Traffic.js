import TrafficNav from "./TrafficNav" ;
import { useState, useEffect } from "react";

export default function Traffic() {
  const [tdata, setTdata] = useState() ;


  //사용자 정의함수
  const getFetchData = (url) => {
    fetch(url)
      .then(resp => resp.json())
      .then(data => setTdata(data.data))
      .catch( err => console.log(err)) ;
  }

  //컴포넌트 생성시 
  useEffect(()=>{
    let url = 'https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?'
    url = `${url}page=1&perPage=17&returnType=json`;
    url = `${url}&serviceKey=${process.env.REACT_APP_API_KEY}`;
    
    console.log(url)
    getFetchData(url) ;
  }, []);
  
  return (
    <div className="w-full h-full flex flex-col
                    justify-start items-center">
      <TrafficNav />
    </div>
  )
}
