import React, { useState } from "react";
import logoW from "../assets/logo_nav.png";
import { BsTelephoneFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="w-full h-full">
      <nav
        className="w-full fixed shadow-md bg-white opacity-95 z-20"
        style={{
          color: "#303030",
        }}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-12 lg:py-2">
          <div className="flex justify-between ">
            <div className="flex items-center">
              <div className="flex items-center md:hidden">
                <button
                  onClick={toggleMenu}
                  className="text-black font-bold"
                  style={{ color: "#FF55C1" }}
                >
                  <svg
                    className="h-7 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex-shrink-0 text-white">
                <div className="flex items-center cursor-pointer lg:py-0 py-2">
                  <img
                    src={logoW}
                    alt="Logo"
                    className="w-20 lg:w-11/12 h-12 mr-2 lg:h-14"
                    onClick={() => navigate("/")}
                  />
                </div>
              </div>
            </div>
            <div className="hidden md:flex justify-between items-center grow md:px-2 lg:px-24">
              <Link
                to="https://acetech-landing.vercel.app/"
                target="_blank"
                className="text-black lg:text-sm font-medium"
              >
                Visitors
              </Link>
              <Link to="/about" className="text-black text-sm font-medium">
                About Us
              </Link>
              <Link to="/city" className="text-black text-sm font-medium">
                Hall Layout
              </Link>
              <Link to="/sponsors" className="text-black text-sm font-medium">
                Sponsors
              </Link>
              <Link to="/contact" className="text-black text-sm font-medium">
                Contact
              </Link>
              <Link
                to="https://online.fliphtml5.com/cyizs/yntm/#p=1"
                target="_blank"
                className="text-black text-sm font-medium"
              >
                View Brochure
              </Link>
              <Link
                to="https://blogs.whatcode.in"
                target="_blank"
                className="text-black text-sm font-medium"
              >
                Blogs
              </Link>
            </div>
            <div className="flex justify-between items-center">
              <a href="tel:+918000887877" target="_blank" rel="noreferrer">
                <div className="w-9 h-9 rounded-full flex justify-center items-center lg:w-12 lg:h-12 cursor-pointer bg-[#EC008C] hover:bg-opacity-80">
                  <BsTelephoneFill className="text-white" />
                </div>
              </a>
              <button
                className="w-24 h-9 text-xs text-white font-semibold ml-3 rounded-3xl md:w-24 md:py-4 md:text-sm lg:w-36 lg:py-6 flex items-center justify-center lg:text-lg bg-[#EC008C] hover:bg-opacity-80"
                style={{
                  fontFamily: "montserrat",
                }}
              >
                <a href="https://bit.ly/acetech_bengaluru" target="_blank">
                  REGISTER
                </a>
              </button>
            </div>
          </div>
        </div>
        {showMenu && (
          <>
            <div className="md:hidden">
              <div className="px-1 pt-4 pb-3 space-y-1">
                <ul className="list-none" style={{ fontFamily: "Montserrat" }}>
                  <li>
                    <Link
                      to="https://acetech-landing.vercel.app/"
                      target="_blank"
                      className="ml-6 w-14 h-6 text-black text-base font-medium font-montserrat"
                    >
                      Visitors
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      to="/about"
                      className="ml-6 w-14 h-6 text-black text-base font-medium"
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      to="/city"
                      className="ml-6 w-14 h-6 text-black text-base font-medium"
                    >
                      Hall Layout
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      to="/sponsors"
                      className="ml-6 w-14 h-6 text-black text-base font-medium"
                    >
                      Sponsors
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      to="/contact"
                      className="ml-6 w-14 h-6 text-black text-base font-medium"
                    >
                      Contact
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      to="https://online.fliphtml5.com/cyizs/yntm/#p=1"
                      target="_blank"
                      className="ml-6 w-14 h-6 text-black text-base font-medium"
                    >
                      View Brochure
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      to="https://blogs.whatcode.in"
                      target="_blank"
                      className="ml-6 w-14 h-6 text-black text-base font-medium"
                    >
                      Blogs
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </>
        )}
      </nav>
    </div>
  );
};
