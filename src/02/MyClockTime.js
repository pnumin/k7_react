import './MyClock.css';
import style from './My.module.css' ;
import { useState, useEffect } from 'react';

function MyClockTime() {
  const [ctime, setCTime] = useState(new Date()) ;
   
  useEffect(() =>{
    const tm = setInterval(()=>{
      setCTime(new Date())
    }, 1000) ;

    return () =>{
      clearInterval(tm);
    }
  }, []) ;
  return(
    <>
      <div className={style.c1}>
        {ctime.toLocaleTimeString()}
      </div> 
    </>
  );
}

export default MyClockTime ;