import { useSearchParams, useLocation } from "react-router-dom";
export default function RoutePage2() {
  const fruits = ['🍎', '🍌', '🍉'] ;

  const loc = useLocation() ;
  console.log(loc.pathname , loc.search)

  const [sParams] = useSearchParams() ;

  //키값 목록
  // const queryList = [...sParams];
  // console.log(queryList)
  // const k = queryList.map(item => item[0])
  // console.log(k)

  let tm = [] ;
  sParams.forEach(item => fruits.includes(item) 
                          ? tm.push(<li key={item}>{`${item} : 과일`}</li>)   
                          : tm.push(<li key={item}>{`${item} : 과일아님`}</li>)   
                      )
 

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="w-full text-2xl font-bold 
                     flex justify-center items-center">
        RoutePage2
      </h1>
      <div className="flex justify-center items-center
                      text-2xl font-bold "> 
        <ul>
        { tm }
        </ul>
      </div>
    </div>
  )
}
