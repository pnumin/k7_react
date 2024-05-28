import ButtonC from "../UI/ButtonC" ;

export default function RecoilDiv3({n, setN, n2}) {
  const handleUP = () => {
    setN(n + 1) ; 
  }

  const handleDOWN = () => {
    setN(n - 1) ; 
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
      </div>             
    </div>
  )
}
