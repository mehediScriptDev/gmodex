import "./App.css";
import Home from "./Components/Home";
import murder from './Images/murder.gif'
import joker from './Images/joker.gif'
import eyes from './Images/scaryEyes.gif'
import deadbody from './Images/bodyfall.gif'
import movie from './Images/girlwatchingmovie.gif'
import scarry from './Images/realscary.gif'
import real from './Images/realbody.png'
import { Outlet } from "react-router-dom";


function App() {
  return (
    <div className="w-11/12 mx-auto grid grid-cols-12 gap-2">
      <div className="col-span-12">
        <Home></Home>
        
      </div>
      {/* <div className="col-span-2 grid grid-cols-1">
          <img className="border-2 border-gray-400 p-2" src={eyes} alt="eyesphoto" />
          <img className="border-2 border-gray-400 p-2" src={real} alt="eyesphoto" />
          <img className="border-2 border-gray-400 p-2" src={scarry} alt="eyesphoto" />
          <img className="border-2 border-gray-400 p-2" src={joker} alt="eyesphoto" />
          
          <img className="border-2 border-gray-400 p-2" src={movie} alt="eyesphoto" />
          <img className="border-2 border-gray-400 p-2" src={murder} alt="eyesphoto" />
      </div> */}
    </div>
  );
}

export default App;
