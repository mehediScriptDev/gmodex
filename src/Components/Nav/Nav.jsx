import "../../index.css";
import { MdMenu } from "react-icons/md";
import Marquee from "react-fast-marquee";
import { NavLink } from "react-router-dom";
import 'animate.css';

const Nav = () => {
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
        <NavLink to={"/Kedney"}>Kedney</NavLink>
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
              <a onClick={oldModelModal} className="cursor-pointer font-genuine">My Account</a>
            </li>
            |
            <li>
              <a onClick={()=>document.getElementById('my_modal_2').showModal()} className="cursor-pointer font-genuine" >Help</a>
            </li>
          </ul>
          <dialog id="my_modal_1" className="modal">
  <div className="modal-box bg-gray-900 border-2 border-gray-300 rounded-none">
    <h3 className="font-bold text-2xl text-red-600 text-center font-primaryHack">You're not one of us!</h3>
    <p className="py-2 text-gray-300 text-sm font-primaryHack text-center">We dont allow any outsider..</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-xs rounded-none font-primaryHack">Close</button>
      </form>
    </div>
  </div>
</dialog>
          <dialog id="my_modal_2" className="modal">
  <div className="modal-box bg-gray-900 border-2 border-gray-300 rounded-none">
    <h3 className="font-bold text-2xl text-red-600 text-center font-primaryHack">You're not one of us!</h3>
    <p className="py-2 text-gray-300 text-sm font-primaryHack text-center">We dont allow any outsider..</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-xs rounded-none font-primaryHack">Close</button>
      </form>
    </div>
  </div>
</dialog>
        </div>
      </div>
      <div>
        <div className=" bg-gray-800 text-white shadow-sm">
          
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
             <MdMenu className="text-xl animate__shakeX animate__animated"/> <Marquee className="px-2 text-red-600">
  Its no real life Dark web... Dark web is dark web no one will be able to copy it..
</Marquee>
              
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gray-800 text-white rounded-box z-1 mt-3 w-52 p-2 shadow"
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
