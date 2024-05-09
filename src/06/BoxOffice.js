import box from "./BoxOffice.json";
import BoxOfficeThead from "./BoxOfficeThead";
import BoxOfficeTbody from "./BoxOfficeTbody";

export default function BoxOffice() {
  const dailyList = box.boxOfficeResult.dailyBoxOfficeList;
  
  return (
    <div className="w-full h-full">
      <div className="w-full flex flex-col justify-start items-center mt-10">
        <table
          className="w-11/12 text-left text-sm font-light text-surface">
          <BoxOfficeThead />
          <BoxOfficeTbody dailyList = {dailyList} />
        </table>
      </div>
    </div>
  )
}
