import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { TbRectangleVertical } from "react-icons/tb";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  const [shadow, setShadow] = useState(false);
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) setShadow(true);
      else setShadow(false);
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed  top-0 w-full  z-50 shadow-md  left-0 bg-[#ecf0f3]"
          : "fixed  top-0 w-full  z-50 left-0  bg-[#ecf0f3]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-8 2xl:px-16">
        <Link
          href="/"
          className="h-[75px] text-[#5651e4] font-semibold text-4xl flex items-center hover:underline"
        >
          Sirawit
          <TbRectangleVertical />
        </Link>
        <div>
          <ul className="hidden md:flex ">
            <Link href="/#main">
              <li className="ml-10 text-sm uppercase hover:border-b border-gray-300">
                HOME
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b border-gray-300">
                ABOUT
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b border-gray-300">
                TECHNOLOGIES
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b border-gray-300">
                PROJECTS
              </li>
            </Link>
            {/* <Link href="/resume">
              <li className="ml-10 text-sm uppercase hover:border-b border-gray-300">
                RESUME
              </li>
            </Link> */}
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b border-gray-300">
                CONTACT
              </li>
            </Link>
          </ul>
          <div className="md:hidden" onClick={handleNav}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 " : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[80%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-6 ease-in duration-500"
              : "fixed left-[-100%] top-0  p-10 ease-in duration-500 "
          }
        >
          <div className="flex w-full items-center justify-between">
            <Link
              href="/"
              className="h-[75px] text-[#5651e4] font-semibold text-4xl flex items-center hover:underline"
            >
              Sirawit
              <TbRectangleVertical />
            </Link>
            <div
              onClick={handleNav}
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="border-b border-gray-300 my-4">
            {/* <p className="w-[85%] md:w-[90%] py-4">
              Lorem ipsum dolor sit amet.
            </p> */}
          </div>
          <div className="flex flex-col py-4 justify-center gap-3 items-start">
            <ul className="uppercase">
              <Link href="/#main">
                <li className="py-4 text-sm" onClick={() => setNav(!nav)}>
                  HOME
                </li>
              </Link>
              <Link href="/#about">
                <li className="py-4 text-sm" onClick={() => setNav(!nav)}>
                  ABOUT
                </li>
              </Link>
              <Link href="/#skills">
                <li className="py-4 text-sm" onClick={() => setNav(!nav)}>
                  TECHNOLOGIES
                </li>
              </Link>
              <Link href="/#projects">
                <li className="py-4 text-sm" onClick={() => setNav(!nav)}>
                  PROJECTS
                </li>
              </Link>
              {/* <Link href="/resume">
                <li className="py-4 text-sm" onClick={() => setNav(!nav)}>
                  RESUME
                </li>
              </Link> */}
              <Link href="/#contact">
                <li className="py-4 text-sm" onClick={() => setNav(!nav)}>
                  CONTACT
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
