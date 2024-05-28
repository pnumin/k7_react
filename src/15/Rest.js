import { useEffect, useState } from "react" ;

export default function Rest() {
  const [tdata, setTdata] = useState([]) ;
  const [tags, setTags] = useState();

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
