
import Nav from "./Nav/Nav";
import murder from "../Images/murder.gif";
import joker from "../Images/joker.gif";
import eyes from "../Images/scaryEyes.gif";
import movie from "../Images/girlwatchingmovie.gif";
import scarry from "../Images/realscary.gif";
import real from "../Images/horror.gif"
import { Outlet } from "react-router-dom";
import LeftNav from "./LeftNav";

const Home = () => {
  


  return (
    <section className="">
      <Nav></Nav>
      <div className="grid grid-cols-12 gap-2 ">
        <aside className="lg:col-span-2 sm:col-span-2 sm:block hidden lg:block space-y-3">
          <LeftNav></LeftNav>
        </aside>

        <div className="lg:col-span-8 col-span-12 sm:col-span-8  overflow-hidden">
          <Outlet></Outlet>
        </div>

        <aside className="lg:col-span-2 sm:block sm:col-span-2 lg:block hidden">
          <img
            className="border-2 border-gray-400 p-2"
            src={eyes}
            alt="eyes"
          />
          <img
            className="border-2 border-gray-400 p-2"
            src={real}
            alt="nun"
          />
          <img
            className="border-2 border-gray-400 p-2"
            src={scarry}
            alt="joker"
          />
          <img
            className="border-2 border-gray-400 p-2"
            src={joker}
            alt="joker2"
          />

          <img
            className="border-2 border-gray-400 p-2"
            src={movie}
            alt="lady"
          />
          <img
            className="border-2 border-gray-400 p-2"
            src={murder}
            alt="zombie"
          />
        </aside>
      </div>
    </section>
  );
};

export default Home;
