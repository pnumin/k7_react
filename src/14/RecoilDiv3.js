import ButtonC from "../UI/ButtonC" ;
import { AtomN } from "./AtomN";
import { useRecoilState } from "recoil";

export default function RecoilDiv3() {
  const [n, setN] = useRecoilState(AtomN)  ;
  const handleUP = () => {
    setN(n + 1) ;
  }

  const handleDOWN = () => {
    setN(n - 1) ;
  }

  const handleSave = () => {
    localStorage.setItem ("n", n) ;
  }

  const handleDel = () => {
    localStorage.removeItem ("n") ;
    
    setN(0) ;
  }
  return (
    <div className="flex flex-col justify-center items-center
                    text-2xl font-bold">
      <div>
        RecoilDiv3 :  n = {n} 
      </div>   
      <div className="mt-10">
        <ButtonC caption = "증가"
                 bcolor="blue" 
                 handleClick = {handleUP} />
        <ButtonC caption = "감소"
                 bcolor="blue" 
                 handleClick = {handleDOWN} />   
        <ButtonC caption = "local 저장"
                 bcolor="blue" 
                 handleClick = {handleSave} />    
        <ButtonC caption = "local 삭제"
                 bcolor="blue" 
                 handleClick = {handleDel} /> 
      </div>             
    </div>
  )
}
