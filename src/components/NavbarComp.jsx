import React, { useEffect, useState } from "react";
import assets from "../assets/logo.png";
import menu from "../assets/menu_icon.svg";
import cross from "../assets/cross_icon.svg";
import { Link } from "react-router-dom";

const NavbarComp = () => {
  const [showMobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10 navcol h-18">
      <div className="container mx-auto flex justify justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={assets} alt="" className="max-w-30" />
        <ul className="hidden md:flex gap-7 text-white">
          <Link to="/" className="cursor-pointer hover:text-gray-400">
            Home
          </Link>
          <Link to="/about" className="cursor-pointer hover:text-gray-400">
            About
          </Link>
          <a href="#Services" className="cursor-pointer hover:text-gray-400">
            Our Services
          </a>
          <a
            href="#Testimonials"
            className="cursor-pointer hover:text-gray-400"
          >
            Testimonials
          </a>
        </ul>
        <button className="hiddwn md:block bg-white px-8 py-2 rounded-full ">
          Sign Up
        </button>
        <img
          onClick={() => setMobileMenu(true)}
          src={menu}
          alt=""
          className=" w-7 cursor-pointer md:hidden"
        />
      </div>
      {/*-------------mobile-menu-------------*/}
      <div
        className={` ${
          showMobileMenu ? "fixed w-full" : "h-0 w-0"
        } right-0 top-0 bottom-0 overflow-hidden bg-white transition-all md:hidden lg:hidden`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            onClick={() => setMobileMenu(false)}
            src={cross}
            className="w-6"
            alt=""
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <a
            onClick={() => setMobileMenu(false)}
            href="#Header"
            className="px-4 py-2 rounded-full"
          >
            Home
          </a>
          <a
            onClick={() => setMobileMenu(false)}
            href="#About"
            className="px-4 py-2 rounded-full"
          >
            About
          </a>
          <a
            onClick={() => setMobileMenu(false)}
            href="#Services"
            className="px-4 py-2 rounded-full"
          >
            Our Services
          </a>
          <a
            onClick={() => setMobileMenu(false)}
            href="#Testimonials"
            className="px-4 py-2 rounded-full"
          >
            Testimonials
          </a>
        </ul>
      </div>
    </div>
  );
};

export default NavbarComp;
