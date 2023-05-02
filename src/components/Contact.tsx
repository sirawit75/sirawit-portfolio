import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  return (
    <div id="contact" className="w-full ">
      <div className="flex items-center justify-center  border-t border-gray-200 shadow-lg gap-6 p-6">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/sirawit-nakyam-348988274/"
          className="hover:scale-105 p-6 ease-in duration-300 rounded-full shadow-lg shadow-gray-400 cursor-pointer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/sirawit75"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-105 p-6 ease-in duration-300 rounded-full shadow-lg shadow-gray-400 cursor-pointer"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:sirawitty75@gmail.com"
          className="hover:scale-105 p-6 ease-in duration-300 rounded-full shadow-lg shadow-gray-400 cursor-pointer"
        >
          <AiOutlineMail />
        </a>
        {/* <div className="hover:scale-105 p-6 ease-in duration-300 rounded-full shadow-lg shadow-gray-400 cursor-pointer">
          <BsFillPersonLinesFill />
        </div> */}
      </div>
      <div className="flex justify-center py-8">
        <Link href="/">
          {/* <a> */}
          <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
          </div>
          {/* </a> */}
        </Link>
      </div>
    </div>
  );
};

export default Contact;
