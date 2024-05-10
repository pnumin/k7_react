import fooddata from './fooddata.json' ; 
export default function FoodMain() {
  let c1 = fooddata.map(item => item['운영주체 분류']) ;
  c1 = new Set(c1) ;
  c1 = [...c1] ;
  console.log("c1", c1) ;
  
  return (
    <div>
      FoodMain
    </div>
  )
}
