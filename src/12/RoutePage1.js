import { useParams } from "react-router-dom" ;
export default function RoutePage1() {
  const item = useParams().item ;
  const fruits = ['🍎', '🍌', '🍉'] ;
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="w-full text-2xl font-bold 
                     flex justify-center items-center">
        RoutePage1
      </h1>
      <div className="flex justify-center items-center
                      text-2xl font-bold "> 
        {fruits.includes(item) ? `${item} : 과일입니다.`
                                : `${item} : 과일이 아닙니다.`}
      </div>
    </div>
  )
}
