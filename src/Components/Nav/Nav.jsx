import '../../index.css'
import { NavLink } from "react-router-dom";

const Nav = () => {
  const links = (
    <>
      <li className=''>
        <NavLink to={'/'}>Home</NavLink>
      </li>
      
      <li>
        <NavLink to={'/guns'}>Guns</NavLink>
      </li>
     
      <li>
        <NavLink to={'/drugs'}>Drugs</NavLink>
      </li>
    
      <li>
        <NavLink to={'/girls'}>Girls</NavLink>
      </li>
     
      <li>
        <NavLink to={'/crypto'}>Crypto</NavLink>
      </li>
    
      <li>
        <NavLink to={'/shooter'}>Shooter</NavLink>
      </li>
     
      <li>
        <NavLink to={'/hitter'}>Hitter</NavLink>
      </li>
   
      <li>
        <NavLink to={'/kidappers'}>Kidnappers</NavLink>
      </li>
  
      <li>
        <NavLink to={'/Kedney'}>Kedney</NavLink>
      </li>
    </>
  );
  return (
    <section>
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
        <div className=" bg-base-100 shadow-sm">
          <div className=" hidden lg:flex justify-around w-full items-center bg-gray-400 p-1">
            <ul className="menu menu-horizontal lg:text-2xl font-bold px-1 flex justify-between items-center w-full bg-gray-900 text-white ">
              {links}
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Nav;
