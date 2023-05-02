import Image from "next/image";
import React from "react";

import { skills } from "../constant";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-4 mb-12">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full p-8">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Technologies
        </p>
        <h2 className="py-4 text-2xl">
          These are the technologies I&apos;ve worked with
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4">
          {skills.map((item, index) => (
            <div
              key={index}
              className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto h-[90px] w-[90px]">
                  <Image
                    alt="/"
                    src={item.src}
                    width={80}
                    height={80}
                    className="ojbect-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>{item.text}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
