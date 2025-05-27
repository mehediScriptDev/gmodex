import React from "react";

const Nav = () => {
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
    </section>
  );
};

export default Nav;
