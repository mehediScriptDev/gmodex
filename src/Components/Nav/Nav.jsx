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
              <a href="">My Account</a>
            </li>
            |
            <li>
              <a href="">Help</a>
            </li>
          </ul>
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
            <ul className="menu menu-horizontal lg:text-xl font-bold px-1 flex justify-between items-center w-full bg-gray-900 text-white ">
              {links}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nav;
