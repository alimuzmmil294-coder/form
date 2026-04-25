import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Projects", path: "/projects" },
  ];
  return (
    <div>
      <nav className="flex justify-between  items-center bg-green-800 px-2 py-3">
        <div className="flex items-center gap-4">
          <p className="text-white font-bold text-2xl">Logo</p>
          <p className="text-black lg:hidden" onClick={() => setOpen(!open)}>
            🍔
          </p>
        </div>
        <ul
          className={`${open ? " pl-2.5 flex items-start flex-col w-[40%] h-screen justify-around  text-white  bg-gray-700 fixed left-0 right-0 top-0 opacity-90 z-10" : "hidden"} `}
        >
          {links.map((link) => (
            <li
              onClick={() => setOpen(false)}
              key={link.id}
              className="px-3.5  py-2.5 w-[50%] hover:underline rounded-md hover:bg-gray-900  bg-black "
            >
              <NavLink to={link.path}>{link.name}</NavLink>
            </li>
          ))}
        </ul>
        <ul className=" justify-between hidden lg:flex gap-5 text-white text-[22px] px-2 py-7">
          {links.map((link) => (
            <li
              key={link.id}
              className="px-3.5 py-1 hover:underline rounded-md hover:bg-gray-900  bg-black "
            >
              <NavLink to={link.path}>{link.name}</NavLink>
            </li>
          ))}
        </ul>
        <NavLink
          to={"/contact"}
          className="px-3.5  py-2.5 text-white hover:underline rounded-md hover:bg-gray-900  bg-black"
        >
          Contact
        </NavLink>
      </nav>
      <div
        className={`${open ? "fixed left-0 top-0 w-screen h-screen bg-black opacity-50" : "hidden"}`}
        onClick={() => setOpen(false)}
      ></div>
    </div>
  );
};

export default Navbar;
