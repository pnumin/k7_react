import box from "./BoxOffice.json";
import BoxOfficeThead from "./BoxOfficeThead";
import BoxOfficeTbody from "./BoxOfficeTbody";
import BoxOfficeInfo from "./BoxOfficeInfo";

import { useState, useEffect } from "react";

export default function BoxOffice() {
  const [dailyList , setDailyList] = useState([]);
  const [selMv, setSelMv] = useState();

  useEffect(() => {
    setDailyList(box.boxOfficeResult.dailyBoxOfficeList);
  }, []);

  useEffect(() => {
    setSelMv(dailyList[0]);
  } , [dailyList]);
 
  return (
    <div className="w-full h-full">
      <div className="w-full flex flex-col justify-start items-center mt-10">
        <table
          className="w-11/12 text-left text-sm font-light text-surface">
          <BoxOfficeThead />
          <BoxOfficeTbody dailyList = {dailyList} setSelMv ={setSelMv} />
        </table>
        {selMv && <BoxOfficeInfo selMv ={selMv} />}
      </div>
    </div>
  )
}
