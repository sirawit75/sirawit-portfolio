import Image from "next/image";
import React from "react";
import memoriesPng from "../public/assets/projects/memories/1.png";
import a from "../public/assets/projects/memories/1.png";
import c from "../public/assets/projects/memories/1.1.png";
import d from "../public/assets/projects/memories/2.2.png";
import e from "../public/assets/projects/memories/2.png";
import f from "../public/assets/projects/memories/3.png";
import { RiRadioButtonFill } from "react-icons/ri";
import { HiOutlineExternalLink } from "react-icons/hi";
import Link from "next/link";

const memories = () => {
  return (
    <div className="w-full relative mb-8">
      {/* <div className="w-screen h-[50vh] relative bg-black">
        <div className=" top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image className="absolute z-1" src={memoriesPng} alt="/" />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[60%]  translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Property Finders</h2>
          <h3>React JS / Tailwind / Firebase</h3>
        </div>
      </div> */}
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1 object-cover"
          fill
          src={memoriesPng}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Memories</h2>
          <h3>Next / Tailwind / Nodejs</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-5 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <h2>Overview</h2>
          <br />
          <p>
            Good day, everyone. I am pleased to introduce my first full-stack
            project, which I have named &apos;Memories&apos;. For the
            client-side, I used &apos;Next&apos;. For the server-side, I used
            &apos;Nodejs&apos;. Additionally, I implemented &apos;Graphql&apos;
            as the API for this project, and &apos;Mongo&apos; to store data,
            along with &apos;Firebase&apos; as the image store. The project it
            is called &apos;Memories&apos; because it serves as a blog for
            sharing memorable experiences that the admin has encountered. The
            admin has full control over the site, including the ability to
            create and delete posts and comments. On the other hand, users can
            read, like and comment on the posts as well as delete their own
            comments.
            <br />
            <br />
            This project has not been deployed, but you can view the source on
            Github. While it may not be a perfect project, I believe it is a
            great starting point.
            <br />
            <br />
            Thank you to everyone who has taken the time to review my project,
            and I promise to continue improving my skills and knowledge in the
            field of software development. Have a pleasant day, everyone! :D
          </p>
          <p className="text-sm font-semibold text-gray-400">(Dec 13, 2022)</p>
          <br />
          <br />
          <h2>Screenshots</h2>
          <br />
          <div className="w-full  grid grid-cols-5 gap-8">
            <Image
              className="rounded-md shadow-xl col-span-4 h-[120px]  lg:h-[350px]"
              src={a}
              alt="/"
            />
            <Image
              className="rounded-md shadow-xl h-[120px] lg:h-[350px] object-cover col-span-1"
              src={c}
              alt="/"
            />
            <Image
              className="rounded-md shadow-xl  lg:h-[250px] h-[70px] lg:object-cover col-span-2"
              src={e}
              alt="/"
            />
            <Image
              className="rounded-md shadow-xl  lg:h-[250px] h-[70px]  col-span-2 lg:object-cover"
              src={f}
              alt="/"
            />
            <Image
              className="rounded-md shadow-lg lg:h-[350px] h-[120px] object-cover col-span-1"
              src={d}
              alt="/"
            />
          </div>
          <br />
          <a
            href="https://github.com/sirawit75/memories"
            target="_blank"
            rel="noreferrer"
            className="hover:underline text-white"
          >
            <button className="px-8 py-2 mt-4 mr-8 flex items-center gap-2 ">
              Code
              <HiOutlineExternalLink size={18} className="mb-[0.5px]" />
            </button>
          </a>
          {/* <a
            href="https://memories-finder-development.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a> */}
        </div>
        <div className="md:h-[320px] col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Nodejs
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Graphql
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Mongo
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Firebase
              </p>
            </div>
          </div>
        </div>
      </div>
      <Link className="text-gray-600 py-2 flex items-center" href="/#projects">
        <RiRadioButtonFill className="pr-1 ml-10  " />{" "}
        <span className="underline">Back</span>
      </Link>
    </div>
  );
};

export default memories;
