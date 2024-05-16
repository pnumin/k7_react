import ButtonC from "../UI/ButtonC";
// import { useState } from "react";

export default function TrafficNav({title, c, sel, setSel}) {
  // const title = '중분류' ;
  // const c = ['횡단중', '차도통행중', '길가장자리구역통행중', '보도통행중', '기타'] ;
  // const [sel, setSel] = useState() ;
  const cTag = c.map((item) => <ButtonC 
                                  caption = {item}
                                  bcolor = {sel === item ? 'orange' : 'blue'}
                                  key = {item}
                                  handleClick = {() => handleClick(item)}
                                />);  

  // 버튼이 눌러진 경우
  const handleClick = (item) => {
    // console.log(item)
    setSel(item) ;
  }
  return (
    <div className="w-full flex justify-start items-start my-5">
      <div className="w-1/5 flex justify-start items-center">
        교통사고 {title}
      </div>
      <div className="w-4/5 grid grid-cols-1 
                      md:grid-cols-2 lg:grid-cols-4 gap-2">
        {cTag}
      </div>
    </div>
  )
}
