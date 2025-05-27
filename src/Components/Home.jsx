import React from "react";
import Nav from "./Nav/Nav";
import murder from "../Images/murder.gif";
import joker from "../Images/joker.gif";
import eyes from "../Images/scaryEyes.gif";
import deadbody from "../Images/bodyfall.gif";
import movie from "../Images/girlwatchingmovie.gif";
import scarry from "../Images/realscary.gif";
import real from "../Images/realbody.png";

const Home = () => {
  return (
    <section>
      <Nav></Nav>
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <div className="w-[220px] mx-auto mt-2  rounded-md border-2 border-gray-900 ">
            {/* Header */}
            <div className="bg-gray-900 rounded-t-md text-center text-white font-bold ">
              SEARCH
            </div>

            {/* Input field */}
            <div className="bg-white p-2 flex flex-col gap-2">
              <input
                type="text"
                placeholder="Search..."
                className="border border-gray-900 rounded-md px-2 py-1 outline-none"
              />

              {/* Dropdown */}
              <select className="border border-gray-900 rounded-md px-2 py-1 outline-none">
                <option>All Products</option>
                <option>Category 1</option>
                <option>Category 2</option>
              </select>

              {/* Search Button */}
              <div className="flex justify-center items-center"><button className="bg-red-600 btn btn-xs hover:bg-red-700 text-white font-bold py-1 rounded-md shadow-md tracking-widest">
                ▶ SEARCH ◀
              </button></div>
            </div>
          </div>
        </div>
        <div className="col-span-8"></div>
        <div className="col-span-2">
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
