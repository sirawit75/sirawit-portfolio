import Image from "next/image";
import Link from "next/link";
import React from "react";

interface props {
  img: any;
  url: string;
  title: string;
}

const ProjectItem = ({ img, title, url }: props) => {
  return (
    <div className="relative flex justify-center items-center p-4 h-[350px] w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e4] to-[#709dff]">
      <Image
        alt="/"
        className="rounded-xl group-hover:opacity-10  w-full h-full object-cover"
        src={img}
      />
      <div className="hidden group-hover:block absolute  left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <br />
        <Link href={url}>
          <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
