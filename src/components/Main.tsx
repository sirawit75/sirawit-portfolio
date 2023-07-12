import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Main = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const text = [
      "NICE TO MEET YOU:D ",
      "HAVE A GOOD DAY! ",
      "WAKE UP!, WAKE UP!, WAKE UP! ",
      "WON'T YOU GIVE YOURSELF A TRY? ",
    ];
    const typingInterval = setInterval(() => {
      if (displayText.length === text[currentText].length) {
        setDisplayText("");
        setCurrentIndex(0);
        setCurrentText((currentText + 1) % text.length);
      } else {
        setDisplayText(
          (prevText) => prevText + text[currentText][currentIndex]
        );
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, 145);

    return () => clearInterval(typingInterval);
  }, [currentIndex, displayText.length, currentText]);

  return (
    <div id="main" className="w-full  text-center  h-screen mt-20">
      <div className="max-w-[1240px] w-full h-full flex justify-center gap-5 lg:gap-0 items-center lg:p-2 mx-auto flex-col lg:flex-row">
        <div className="md:w-4/6 w-4/5">
          <p className="uppercase text-sm tracking-widest text-[#5651e4] h-[20px]">
            {displayText}
          </p>
          <h1 className="py-4  text-gray-700">
            Hi There, I&apos;m
            <span className="text-[#5651e4]"> Boss</span>
          </h1>
          <h2 className="  text-gray-700">Software Developer</h2>
          <h3 className="py-4  text-gray-700">
            Welcome To <p>My Personal Portfolio</p>
          </h3>
          {/* <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I&apos;m a Software Developer
          </p> */}
          <div className="flex items-center justify-around max-w-[330px] m-auto py-4">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/sirawit-nakyam-348988274/"
              className="hover:scale-105 p-6 ease-in duration-300 rounded-full shadow-lg shadow-gray-400 cursor-pointer"
            >
              <FaLinkedin />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/sirawit75"
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
        </div>
        <div className="md:w-2/6 w-2/5">
          <Image
            src="/assets/me.jpg"
            width={200}
            height={200}
            alt="/"
            className=" object-cover w-full rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
