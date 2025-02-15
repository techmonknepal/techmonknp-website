import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";

import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";

import Button from "../buttons/Button";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <nav className="mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4  bg-darkWhite">
        <div className="flex justify-between w-full max-w-[2000px] mx-auto  items-center">
          <NavbarLogo />
          <div
            className={`${
              menuOpen ? "sm:block" : "sm:hidden"
            } lg:block lg:ml-[900px]`}
          >
            <NavbarLinks />
          </div>
          <Button
            href="#"
            text="Start Building"
            className="inline-block font-poppins  lg:px-4 lg:py-2 rounded-r-lg rounded-l-lg lg:text-[18px] lg:leading-[27px] md:p-3  font-medium text-white bg-gradient-to-r from-blue to to-darkBlue hover:scale-110  transform all duration-500 sm:py-2 sm:px-2 sm:text-xs sm:ml-3 "
          ></Button>
        </div>

        <div className="lg:hidden sm:block p-6 bg-darkWhite items-center justify-center ">
          <button
            className=" font-poppins font-semibold text-[18px] leading-[27px] p-3 border border-black rounded-full text-black hover:scale-110 duration-500"
            onClick={toggleMenu}
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavbarMain;
