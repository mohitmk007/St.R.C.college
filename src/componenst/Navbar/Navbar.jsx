// import React from 'react'

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-[70px] text-white bg-gray-500 flex items-center justify-center">
      <ul className="flex items-center justify-center gap-5 text-2xl ">
        <li className="">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/api">Api</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/todo">Todo</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
