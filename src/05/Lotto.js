import Ball  from "./Ball" ;
import ButtonC from "../UI/ButtonC";
import { useState } from "react";

export default function Lotto() {
  const [tags, setTags] = useState() ;

  const handleOk = () => {
    let arr = [] ;

    while(arr.length < 7){
      let n = Math.floor(Math.random() * 45) + 1 ;

      if (!arr.includes(n)) arr.push(n)
    }

    let tm = arr.map(item => <Ball n={item} key={item} /> );

    //배열 중간 추가
    tm.splice(6, 0, <span className="text-3xl mx-2" key="sp">+</span>);
    // console.log(tags)

    setTags(tm) ;
  }
  return (
    <div className="w-full flex flex-col
                    justify-center items-center">
      <div className="m-10">
        {tags}
      </div>
      <div>
        <ButtonC caption={'로또번호생성'} bcolor={'blue'} handleClick={handleOk} />
      </div>
    </div>
  )
}
