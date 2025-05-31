import "../../index.css";
import { MdMenu } from "react-icons/md";
import Marquee from "react-fast-marquee";
import { NavLink } from "react-router-dom";
import gif from "../../Images/loaderjoker.gif";
import { useState } from "react";
import cross from "../../Images/cross.png";
import 'animate.css';

const Nav = () => {
   const [secondpass, setSecondpass] = useState("");
   const lastModal = (e) => {
    e.preventDefault();

    const pass = e.target.pass.value;
    setSecondpass(pass);
    document.getElementById("my_modal_22").showModal();
    document.getElementById("my_modal_5").close();
    e.target.reset();
    // document.getElementById('my_modal_22').close()
  };
  const submitlastModal = (e) => {
    e.preventDefault();
    document.getElementById("my_modal_22").close();
  };
  const links = (
    <>
      <li className="">
        <NavLink to={"/"}>Home</NavLink>
      </li>

      <li>
        <NavLink to={"/guns"}>Guns</NavLink>
      </li>

      <li>
        <NavLink to={"/drugs"}>Drugs</NavLink>
      </li>

      <li>
        <NavLink to={"/girls"}>Girls</NavLink>
      </li>

      <li>
        <NavLink to={"/crypto"}>Crypto</NavLink>
      </li>

      <li>
        <NavLink to={"/shooter"}>Shooter</NavLink>
      </li>

      <li>
        <NavLink to={"/hitter"}>Hitter</NavLink>
      </li>

      <li>
        <NavLink to={"/kidappers"}>Kidnappers</NavLink>
      </li>

      <li>
        <NavLink to={"/organs"}>Organs</NavLink>
      </li>
    </>
  );
  const oldModelModal = () =>{
    document.getElementById('my_modal_1').showModal();
  }
  return (
    <section className="">
      <div className="flex justify-between">
        <div className="join text-3xl font-boldHack mt-1 font-extrabold">
          <span className="text-red-600 font-extrabold join-item">g</span>
          <span className="join-item font-bold">Modex</span>
        </div>
        <div>
          <ul
            className="flex
             gap-2 font-semibold text-gray-400"
          >
            <li>
              <a onClick={()=>document.getElementById('my_modal_5').showModal()} className="cursor-pointer font-genuine">My Account</a>
            </li>
            |
            <li>
              <a onClick={()=>document.getElementById('my_modal_5').showModal()} className="cursor-pointer font-genuine" >Help</a>
            </li>
          </ul>
         <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
                 <div className="modal-box p-0 rounded-none border-2 relative border-white bg-gray-900">
                   <h3 className="font-bold text-lg text-center bg-gray-400 font-boldHack py-1">
                     IDENTIFY YOURSELF{" "}
                   </h3>
                   <button
                     type="button"
                     onClick={() => document.getElementById("my_modal_5").close()}
                     className="absolute top-1 right-1 px-2 font-semibold"
                   >
                     x
                   </button>
                   <form onSubmit={lastModal}>
                     <div className="space-y-2 flex justify-center items-center flex-col mt-4">
                       <div>
                         <img
                           className="rounded-full object-cover lg:w-40 w-28 h-28  lg:h-40"
                           src={gif}
                           alt=""
                         />
                       </div>
                       <p className=" rounded-none font-terminalfont text-gray-700 border-gray-700 border-2  text-sm w-8/12 text-center px-1">
                         USER LOGIN
                       </p>
                       <input
                         autoComplete="agent007"
                         type="password"
                         required
                         name="pass"
                         className="placeholder-gray-700 border-gray-400 border-2 w-8/12 mx-auto bg-gray-800 font-terminalfont text-sm px-2"
                         placeholder=" TYPE PASSCODE HERE"
                         id=""
                       />
                     </div>
         
                     <div className="modal-action mt-0 py-2  flex justify-center items-center">
                       {/* if there is a button in form, it will close the modal */}
                       <div>
                         <button className="btn btn-xs font-terminalfont rounded-none px-10 bg-red-600 text-white">
                           LOGIN
                         </button>
                       </div>
                     </div>
                   </form>
                 </div>
               </dialog>
               <dialog id="my_modal_22" className="modal">
                 <div className="modal-box bg-gray-400 border-2 p-0 border-gray-300 rounded-none">
                   <h1 className="text-center bg-gray-800 font-terminalfont text-gray-400">
                     System message
                   </h1>
                   <h3 className="font-bold text-2xl flex items-center  py-3 text-gray-900 text-center font-primaryHack">
                     <img className="w-10 lg:w-16" src={cross} alt="" />
                     No match found for{" "}
                     <span className="text-red-700 pl-2"> {secondpass}</span>
                   </h3>
                   {/* <p className="py-2 text-gray-300 text-sm font-primaryHack text-center">We dont allow any outsider..</p> */}
                   <div className="modal-action px-4 py-2">
                     <form onSubmit={submitlastModal} method="dialog ">
                       {/* if there is a button in form, it will close the modal */}
                       <button
                         type="submit"
                         className="btn btn-xs rounded-none font-primaryHack px-3"
                       >
                         Ok
                       </button>
                     </form>
                   </div>
                 </div>
               </dialog>
        </div>
      </div>
      <div>
        <div className=" bg-gray-800 text-white shadow-sm">
          
          <div className="dropdown rounded-none">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden rounded-none">
             <MdMenu className="text-xl animate__shakeX animate__animated"/> <Marquee className="px-2 font-genuine text-red-600">
  Its no real life Dark web... Dark web is dark web no one will be able to copy it..The dark web isnt a myth, it’s a digital shadow market where lives, identities, and safety are traded like currency. Be aware. Stay safe."
</Marquee>
              
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-none bg-gray-800 text-white  z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className=" hidden lg:flex justify-around w-full items-center bg-gray-400 p-1">
            <ul className="menu menu-horizontal lg:text-xl font-bold px-1 flex justify-between items-center w-full bg-gray-900 text-white font-genuine">
              {links}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nav;
