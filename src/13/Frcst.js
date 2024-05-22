import ButtonC from "../UI/ButtonC";
import TailSelect from "../UI/TailSelect";
import TailInput from "../UI/TailInput";

import getxy from "./getxy.json";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function Frcst() {
  const navigate = useNavigate();
  const [ops, setOps] = useState([]);
  const [x, setX] = useState();
  const [y, setY] = useState();

  const inRef = useRef();
  const selRef = useRef();

  const handleArea = () => {

  }

  const handleUrl = (gubun) => {

  }

  return (
    <div className="w-full h-full flex flex-col
                        justify-start items-center">
      <h1 className="w-10/12 text-2xl font-bold 
                     flex justify-center items-center m-5">
        단기예보
      </h1>
      <div className="w-full flex justify-center items-center ">
        <div className="w-10/12 
                    grid grid-cols-1 md:grid-cols-2 p-2 gap-2">
          <TailInput id="dt"
                      type="date"
                      inRef={inRef} />
          <TailSelect id="sel"
                      ops={ops}
                      selRef={selRef}
                      initText="--- 지역선택 ---"
                      handleChange={handleArea} />
          <ButtonC caption="초단기예보"
                    bcolor="blue"
                    handleClick={() => handleUrl('초단기')} />
          <ButtonC caption="단기예보"
                    bcolor="blue"
                    handleClick={() => handleUrl('단기')} />
        </div>
      </div>
    </div>
  )
}
