import React from "react";

import { projects } from "../constant";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full p-4">
      {/* FaLinkedin */}
      <div className=" mx-auto py-16  p-8">
        <p className="text-xl traking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="mb-4 text-2xl py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((item) => (
            <ProjectItem
              key={item.text}
              img={item.src}
              title={item.text}
              url={item.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
