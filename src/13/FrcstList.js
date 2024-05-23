import { useSearchParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import TailSelect from "../UI/TailSelect";

import getcode from './getcode.json';

export default function FrcstList() {
  //url 전달 값 
  const [sParms] = useSearchParams();
  const gubun = sParms.get('gubun');
  const x = sParms.get('x');
  const y = sParms.get('y');
  const dt = sParms.get('dt');
  const area = sParms.get('area');
  console.log(gubun, x, y, dt, area);

  //state 변수
  const [tdata, setTdata] = useState();       //예보 정보
  const [ops, setOps] = useState([]);
  const [selItem, setSelItem] = useState();  //선택한 항목 코드 정보
  const [tags, setTags] = useState();        //화면 tr생성

  //ref 변수
  const selRef = useRef();

  //code 변수
  const sky = {"1" : "☀️(맑음)", "3": "☁️(구름많음)", "4":"🌥️(흐림)"} ;
  const pty = {"0" : "없음" , "1" : "비", "2": "비/눈",
               "3" : "눈", "4" : "소나기" , "5" : "빗방울", 
               "6" : "빗방울눈날림", "7" : "눈날림" }
 

  //항목선택
  // data fetch
  const getFetchData = (url) => {
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        console.log("fetch", data)
        setTdata(data.response.body.items.item)
      })
      ;
  }
  const handleSelect = () => {
    // console.log(selRef.current.value)
    let tm = getcode.filter(item => (gubun === '단기'
      ? item["예보구분"] === "단기예보"
      : item["예보구분"] === "초단기예보") &&
      item["항목명"] === selRef.current.value);
    console.log("select item", tm)
    setSelItem(tm[0]);
  }

  //컴포넌트 생성시
  useEffect(() => {
    //항목 select 
    let tm = getcode.filter(item => gubun === '단기'
      ? item["예보구분"] === "단기예보"
      : item["예보구분"] === "초단기예보")
      .map(item => item["항목명"])

    // console.log(tm)
    setOps(tm);

    let url;
    if (gubun === '초단기') {
      url = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?`;
      url = url + `serviceKey=${process.env.REACT_APP_API_KEY}&numOfRows=900&pageNo=1`;
      url = url + `&dataType=json&base_date=${dt}&base_time=0630&nx=${x}&ny=${y}`;
    }
    else {
      url = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?`;
      url = url + `serviceKey=${process.env.REACT_APP_API_KEY}&numOfRows=900&pageNo=1`;
      url = url + `&dataType=json&base_date=${dt}&base_time=0500&nx=${x}&ny=${y}`;
    }

    getFetchData(url);
  }, []);

  useEffect(() => {
    console.log(tdata)
  }, [tdata]);

  useEffect(() => {
    if (!selItem) return;
    console.log("selItem", selItem)

    let tm = tdata.filter(item => item['category'] === selItem['항목값'])
                  .map(item =>
                    <tr key={`${item["fcstDate"]}${item["fcstTime"]}`}  
                        className="border-b border-neutral-200 hover:bg-neutral-100 text-center">
                      <td scope="col" className="px-6 py-3">
                        {selItem["항목명"]}({item["category"]})
                      </td>
                      <td scope="col" className="px-6 py-3">
                        {`${item["fcstDate"].substring(0, 4)}-${item["fcstDate"].substring(4, 6)}-${item["fcstDate"].substring(6, 8)}`}
                      </td>
                      <td scope="col" className="px-6 py-3">
                        {`${item["fcstTime"].substring(0, 2)}:${item["fcstTime"].substring(2, 4)}`}
                      </td>
                      <td scope="col" className="px-6 py-3">
                        {item["category"] === 'SKY'
                          ? sky[item["fcstValue"]] 
                          : item["category"] === 'PTY' 
                            ? pty[item["fcstValue"]]
                            : `${item["fcstValue"]} ${selItem["단위"]}`} 
                      </td>
                    </tr>

      );
    console.log("tdata filter", tm);
    setTags(tm);  

  }, [selItem])
  return (
    <div className="w-full h-full flex flex-col
                        justify-start items-center">
      <div className="w-10/12 
                    grid grid-cols-1 md:grid-cols-2 p-2 gap-2">
        <h1 className="w-full text-2xl font-bold 
                     flex justify-center items-center m-5">
          {gubun}예보 ( <div className="text-blue-800">{area}</div> )
        </h1>
        <div className="flex justify-center items-center m-5">
          <TailSelect id="sel"
            ops={ops}
            selRef={selRef}
            initText="--- 항목선택 ---"
            handleChange={handleSelect} />
        </div>
      </div>
      <table
        className="w-11/12 text-left text-sm font-light text-surface">
        <thead
          className="border-b border-neutral-200 font-medium">
          <tr className="bg-black text-white font-bold text-center">
            <th scope="col" className="px-6 py-3">항목명</th>
            <th scope="col" className="px-6 py-3">예측일자</th>
            <th scope="col" className="px-6 py-3">예측시간</th>
            <th scope="col" className="px-6 py-3">항목값</th>
          </tr>
          {tags}
        </thead>
      </table>
    </div>
  )
}
