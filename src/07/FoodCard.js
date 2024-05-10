import bank from './img/bank.png' ;
import busan from './img/busan.png' ;
import market from './img/market.png' ;

import { useState } from 'react';

export default function FoodCard({data}) {
  const [isShow, setIsShow] = useState(false) ;
  const hadndleShow = () => {
    setIsShow(!isShow);      
  }

  return (
    <div className='flex w-full h-60 
                    justify-center items-start'>
      <div className='w-1/4 h-60'>
          <img src={data["구분"] === "광역지원센터" ? busan : 
                    data["구분"] === "기초푸드뱅크" ? bank : market} />
      </div>     
      <div className='w-3/4 flex flex-col
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
          <div className='w-full p-2 h-10 bg-slate-400'
               onClick={hadndleShow}>
            { isShow && <p className='text-white font-bold'>
              Tel. {data["연락처(대표번호)"]}
            </p>
            }
          </div>
      </div>
    </div>
  )
}
