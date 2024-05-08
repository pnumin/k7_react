import Ball  from "./Ball" ;
import ButtonC from "../UI/ButtonC";
import { useState } from "react";

export default function Lotto() {
  const [tags, setTags] = useState() ;

  const handleOk = () => {
    setTags(Math.floor(Math.random() * 45) + 1) ;
  }
  return (
    <div className="w-full flex flex-col
                    justify-center items-center">
      <div className="m-10">
        {tags}
      </div>
      <div>
        <ButtonC caption={'확인'} bcolor={'orange'} handleClick={handleOk} />
      </div>
    </div>
  )
}
