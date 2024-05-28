import { useEffect, useState, useRef } from "react" ;
import TailInput from "../UI/TailInput";
import ButtonC from "../UI/ButtonC";

export default function Rest() {
  const [tdata, setTdata] = useState([]) ;
  const [tags, setTags] = useState();

  const txt1Ref = useRef() ;
  const txt2Ref = useRef() ;

  const jsonPost = async() => {
    console.log('post') ;

    if (txt1Ref.current.value === "") {
      alert('제목을 입력하세요.') ;
      txt1Ref.current.focus()
      return ;
    }
    if (txt2Ref.current.value === "") {
      alert('작성자를 입력하세요.') ;
      txt2Ref.current.focus()
      return ;
    }

  }


  const handleOk = () => {
    jsonPost() ;
  }

  const getFetch = async (url) => {
    const resp = await fetch(url) ;
    const data = await resp.json() ;
    setTdata(data)
  }

  useEffect(()=>{
    // if (!tdata) return ;

    console.log(tdata)
    let tm = tdata.map(item  => <tr key={item.id} 
                                    className="h-10 border-b border-neutral-200 hover:bg-neutral-100 ">
                                  <td>
                                    {item.title}
                                  </td>
                                  <td>
                                    {item.author}
                                  </td>
                                  <td className="text-center">
                                    [삭제]
                                  </td>
                                  <td className="text-center">
                                    [편집]
                                  </td>
                                </tr>);
    setTags(tm) ;
  }, [tdata]) ;

  //컴포넌트 생성시
  useEffect(()=>{
    let url = 'http://localhost:3005/posts' ;

    getFetch(url) ;
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-11/12 grid grid-cols-1 md:grid-cols-7 
                      bg-slate-100
                      text-center mb-5">          
          
          <label htmlFor="txt1" className="my-2">제목</label>
          <div className="flex col-span-2">
          <TailInput id ="txt1" 
                      type ="text"
                      inRef ={txt1Ref} />
          </div>
          <label htmlFor="txt2" className="my-2">작성자</label>
          <div className="flex col-span-2 w-full">
          <TailInput id ="txt2"
                      type ="text"
                      inRef ={txt2Ref} />
          </div>
          <ButtonC caption = "입력"
                    bcolor = "blue"
                    handleClick = {handleOk} />
      </div>
      <table
        className="w-11/12 text-left text-sm font-light text-surface">
        <thead
          className="border-b border-neutral-200 font-medium">
          <tr className="bg-black text-white font-bold text-center">
            <th scope="col" className="px-6 py-3">제목</th>
            <th scope="col" className="px-6 py-3">작성자</th>
            <th scope="col" className="px-6 py-3">삭제</th>
            <th scope="col" className="px-6 py-3">편집</th>
          </tr>
        </thead>
        <tbody>
            {tags}
        </tbody>
      </table>
    </div>
  )
}
