import bank from './img/bank.png' ;
import busan from './img/busan.png' ;
import market from './img/market.png' ;

export default function FoodCard() {
  const data = {
    "구분": "기초푸드뱅크",
    "시군구": "수영구",
    "사업장명": "수영구기초푸드뱅크",
    "신고기준": "임의",
    "사업장 소재지": "부산광역시 수영구 금련로43번길 54(망미동)",
    "연락처(대표번호)": "051)755-3367",
    "팩스번호": "051)755-2268",
    "운영주체 분류": "1. 사회복지법인",
    "운영주체명": "부산종합사회복지관"
  }

  return (
    <div className='flex w-full h-40 
                    justify-center items-start'>
      <div className='w-40 h-80'>
          <img src={bank} />
      </div>     
      <div className='flex flex-col
                      justify-start items-start
                      mx-5'>
          <div className='my-5'>
            <h1 className='text-2xl text-gray-600 font-bold'>
              {data["사업장명"]}
            </h1>
            <h2 className='text-xl text-gray-500 font-bold'>
              {data["운영주체명"]}
            </h2>
            <p className='text-sm text-gray-400 font-bold'> 
              {data["사업장 소재지"]}
            </p>
          </div>
          <div className='w-full p-2 h-10 bg-slate-400'>
            <p className='text-white font-bold'>
              Tel. {data["연락처(대표번호)"]}
            </p>
          </div>
      </div>
    </div>
  )
}
