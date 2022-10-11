import React from "react";

import Logo from "../assets/Logo.png";
import MenuIcon from "../assets/menu-icon.svg";
import CaretDown from "../assets/caret-down-solid.svg";

function Navbar() {
  return (
    <nav className="flex flex-row justify-between items-center pt-[2%] px-[3%] lg:pl-[6%] lg:pr-[10%] lg:pt-[2%]">
      <div>
        <img src={Logo} alt="logo" className="h-6 lg:h-8" />
      </div>
      <div>
        <ul className="hidden md:flex flex-row justify-between items-start uppercase">
          <li className="flex flex-row justify-between items-start mr-10 lg:mr-14 text-sm font-bold cursor-pointer">
            Home
            <img src={CaretDown} alt="caret" className="h-4 pl-1" />
          </li>
          <li className="flex flex-row justify-between items-start mr-10 lg:mr-14 text-sm font-bold cursor-pointer">
            Project
          </li>
          <li className="flex flex-row justify-between items-start mr-10 lg:mr-14 text-sm font-bold cursor-pointer">
            About
          </li>
          <li className="flex flex-row justify-between items-start mr-10 lg:mr-14 text-sm font-bold cursor-pointer">
            Contact
          </li>
          <li className="flex flex-row justify-between items-start text-sm font-bold cursor-pointer">
            Other page
            <img src={CaretDown} alt="caret" className="h-4 pl-1" />
          </li>
        </ul>
      </div>
      <img
        src={MenuIcon}
        alt="menu-icon"
        className="h-6 lg:h-8 inline-block md:hidden cursor-pointer"
      />
    </nav>
  );
}

export default Navbar;
