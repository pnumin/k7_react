import fooddata from './fooddata.json' ;  
import ButtonC from '../UI/ButtonC' ;
import FoodCard from './FoodCard';

import { useState } from 'react';

export default function FoodMain() {
  const [c1List, setC1List] = useState([]) ;

  let c1 = fooddata.map(item => item['운영주체 분류']) ;
  c1 = new Set(c1) ;
  c1 = [...c1] ;
  console.log("c1", c1) ;

  const handleC1 = (c) => {
    console.log(c) ;
    let tm = fooddata.filter(item => item['운영주체 분류'] === c)
                     .map(item => 
                              <FoodCard data={item} key={item["사업장명"]} />)

    setC1List(tm);
  }

  const c1Bts = c1.map(item =>
                        <ButtonC caption = {item}
                                 key = {item}
                                 bcolor = {'blue'}
                                 handleClick = {() => handleC1(item)} />
  ) ;


  

  return (
    <div className='flex flex-col w-full h-full
                    justify-start items-center'>
      <div className='w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-1 
                      my-2'>
        {c1Bts}
      </div>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-2'>
        {c1List}
      </div>
    </div>
  )
}
