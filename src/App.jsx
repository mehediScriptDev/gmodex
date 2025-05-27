import "./App.css";
import Home from "./Components/Home";
import { useEffect, useState } from "react";
import gif from './Images/loader.gif'


function App() {
  const [showgif,setGif] = useState(true);
  useEffect(()=>{
    const timer = setTimeout(()=>setGif(false),2000);
    return ()=> clearTimeout(timer);
  },[])
  if(showgif){
    return (
      <div className="flex max-h-screen bg-black py-10 justify-center items-center">
      <img src={gif} alt="loader" className="py-10" />
    </div>
    )
  }
  return (
    <section>
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
    </section>
  );
}

export default App;
