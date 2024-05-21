import './App.css';
// import logo from './logo.svg' ;
// import MyClock from './02/MyClock'; 
import { RiHomeHeartFill } from "react-icons/ri";
// import MyDiv from './03/MyDiv'; 
// import MyList from './04/MyList';
// import Lotto from './05/Lotto';
// import BoxOffice from './06/BoxOffice';
// import FoodMain from  './07/FoodMain' ;
// import TrafficMain from './08/TrafficMain'; 
// import TrafficNav from './08_1/TrafficNav';
// import Traffic from './08_1/Traffic';
// import MyRef from './09/MyRef';
// import Gallery from './10/Gallery';
// import Festival from './11/Festival' ;
import RouteMain from './12/RouteMain';

function App() {
  return (
    <div className="flex flex-col w-full max-w-screen-lg h-screen mx-auto">
      <header className='flex justify-between items-center text-xl font-bold h-20 p-10 bg-slate-200'>
        <p>리액트 실습</p>
        <p><RiHomeHeartFill className='text-3xl text-green-900' /></p>
      </header>
      <main className='grow w-full flex justify-center items-center overflow-y-auto '>
        {/* <div className='flex justify-center items-center w-1/3 h-1/2'>
          <img src={logo} alt="logo" />
        </div> */}
        {/* <MyClock /> */}
        {/* <MyDiv /> */}
        {/* <MyList /> */}
        {/* <Lotto /> */}
        {/* <BoxOffice /> */}
        {/* <FoodMain /> */}
        {/* <TrafficMain /> */}
        {/* <TrafficNav /> */}
        {/* <Traffic /> */}
        {/* <MyRef /> */}
        {/* <Gallery /> */}
        {/* <Festival /> */}
        <RouteMain />
      </main>
      <footer className='flex justify-center items-center h-20 bg-black text-slate-100'>
        ⓒ Kim Kyung Min , K-digital-7
      </footer>
    </div>
  );
}

export default App;
