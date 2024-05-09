export default function BoxOfficeInfo({selMv}) {
  console.log("BoxOfficeInfo ", selMv)
  return (
    <div className="w-11/12 h-10 flex justify-center items-center
                    bg-slate-600 text-white font-bold">
      [{selMv.movieCd}-{selMv.movieNm}] 
      개봉일 : {selMv.openDt} 
      (
         <span className={selMv.rankOldAndNew === 'OLD' ? "text-white" 
                                                        :  "text-yellow-200"}>
          {selMv.rankOldAndNew}
        </span>
      )
    </div>
  )
}
