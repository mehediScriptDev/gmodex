
import Nav from "./Nav/Nav";
import murder from "../Images/murder.gif";
import joker from "../Images/joker.gif";
import eyes from "../Images/scaryEyes.gif";
import deadbody from "../Images/bodyfall.gif";
import movie from "../Images/girlwatchingmovie.gif";
import scarry from "../Images/realscary.gif";
import real from "../Images/realbody.png";
import { Outlet } from "react-router-dom";
import LeftNav from "./LeftNav";

const Home = () => {
  


  return (
    <section className="">
      <Nav></Nav>
      <div className="grid grid-cols-12 gap-2 ">
        <div className="lg:col-span-2 hidden lg:block space-y-3">
          <LeftNav></LeftNav>
        </div>

        <div className="lg:col-span-8 col-span-12 overflow-hidden">
          <Outlet></Outlet>
        </div>

        <div className="lg:col-span-2 lg:block hidden">
          <img
            className="border-2 border-gray-400 p-2"
            src={eyes}
            alt="eyesphoto"
          />
          <img
            className="border-2 border-gray-400 p-2"
            src={real}
            alt="eyesphoto"
          />
          <img
            className="border-2 border-gray-400 p-2"
            src={scarry}
            alt="eyesphoto"
          />
          <img
            className="border-2 border-gray-400 p-2"
            src={joker}
            alt="eyesphoto"
          />

          <img
            className="border-2 border-gray-400 p-2"
            src={movie}
            alt="eyesphoto"
          />
          <img
            className="border-2 border-gray-400 p-2"
            src={murder}
            alt="eyesphoto"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
