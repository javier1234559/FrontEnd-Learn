import React from "react";
import { logo ,close , menu} from "../assets";
import { navLinks } from "../constants"
import { useState } from "react";

const Navbar = () => {
  const [active , setActive] = useState("Home");
  const [toggle , setToggle] = useState(true);
  return (
    <nav className="flex justify-between py-6 w-full ">
      <img src={logo} alt="hookbank" className="w-[124px] h-[32px]" />
      <ul className="flex items-center justify-items">
        {navLinks.map((item) => (
          <li
            key={item.id}
            className={`list-none sm:flex hidden justify-end items-center flex-1 pl-8 cursor-pointer text-[18px]
            font-normal
            ${active === item.title ? "text-white" : "text-dimWhite"}`}
            onClick={() => {setActive(item.title)}}
          >
            <a href={`#${item.id}`}>{item.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex align-middle">
        <img 
        src={toggle ? menu : close} 
        alt="menu" 
        className="w-[30px] h-[30px] object-contain "
        onClick={() =>setToggle(!toggle) }
        />
        
        <div className={`sm:hidden ${
            toggle ? "hidden" : "flex"
        } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
        <ul className="flex-col items-center leading-10 ">
        {navLinks.map((item) => (
          <li
            key={item.id} 
            className={`list-none flex-1 cursor-pointer text-[18px]
            font-normal
            ${active === item.title ? "text-white" : "text-dimWhite"}`}
            onClick={() => {setActive(item.title)}}
          >
            <a href={`#${item.id}`}>{item.title}</a>
          </li>
        ))}
      </ul>
        </div>

      </div>

    </nav>
  );
};

export default Navbar;
