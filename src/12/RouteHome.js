import { Link } from "react-router-dom" ;
export default function RouteHome() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="w-full text-2xl font-bold 
                     flex justify-center items-center">
        RouteHome
      </h1>
      <div className="w-1/2 grid grid-cols-2 m-10">
        <div className="w-full flex flex-col 
                        m-2 p-2
                        justify-start items-center text-xl">
          <h2 className="w-full text-xl font-bold 
                      bg-slate-100
                      p-2 m-2
                     flex justify-center items-center">Page1</h2>
          <ul>
            <li><Link to='/p1/🍎'>사과🍎</Link></li>
            <li><Link to='/p1/🍌'>바나나🍌</Link></li>
            <li><Link to='/p1/🥕'>당근🥕</Link></li>
          </ul>
        </div>
        <div className="w-full flex flex-col 
                        m-2 p-2
                        justify-start items-center text-xl">
          <h2 className="w-full text-xl font-bold 
                      bg-slate-100
                      p-2 m-2
                     flex justify-center items-center">
            Page2</h2>
          <ul>
            {/* <li><Link to='/p2?item=🍎'>사과🍎</Link></li>
            <li><Link to='/p2?item=🍌'>바나나🍌</Link></li>
            <li><Link to='/p2?item=🥕'>당근🥕</Link></li> */}

            <li><Link to='/p2?item1=🍎&item2=🍌&item3=🥕&item4=🍉'>
              사과🍎,바나나🍌,당근🥕,수박🍉
            </Link></li>   
          </ul>
        </div>
      </div>
    </div>
  )
}
