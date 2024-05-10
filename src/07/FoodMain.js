import fooddata from './fooddata.json' ;  
import ButtonC from '../UI/ButtonC' ;
import FoodCard from './FoodCard';

export default function FoodMain() {
  let c1 = fooddata.map(item => item['운영주체 분류']) ;
  c1 = new Set(c1) ;
  c1 = [...c1] ;
  console.log("c1", c1) ;

  const handleC1 = (c) => {
    console.log(c) ;
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
      <div className='flex w-full 
                      my-5 px-5
                      justify-between items-center'>
        {c1Bts}
      </div>
      <div>
        <FoodCard />
      </div>
    </div>
  )
}
