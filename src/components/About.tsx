import React from "react";
import Image from "next/image";
import { BsArrowRightCircle } from "react-icons/bs";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-8 flex items-center py-16 ">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 p-3">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-gray-600">
            My name is Sirawit Nakyam. I graduated from the Faculty of
            Engineering at Kasetsart University. I have been passionate about
            computer programming ever since I first learned about it in my first
            year of college and I am excited to bring my expertise and skills to
            make a significant contribution to the company. In the future I
            would like to work in the field of web development, and I will
            continue to improve myself to open up even more opportunities for my
            career in the future.
          </p>
          <br />
          {/* <Link
            href="/resume"
            className="py-2 text-white text-sm hover:underline cursor-pointer flex items-center gap-2 bg-[#5651e5] w-fit rounded-2xl p-2"
          >
            <p>My Resume </p>
            <BsArrowRightCircle size={18} />
          </Link> */}
        </div>
        <br className="md:hidden" />
        <div className="w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex  hover:scale-105 duration-300 p-5">
          <Image
            src="/assets/about.jpg"
            width={500}
            height={500}
            alt="/"
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
