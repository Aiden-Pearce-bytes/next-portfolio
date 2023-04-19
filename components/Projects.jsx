import Image from "next/image";
import React from "react";
import Project1 from "../public/assets/GeoTravel.png";
import Project2 from "../public/assets/Netflix.png";
import Link from "next/link";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div
      id="projects"
      className="relative bg-[url('../public/assets/projectsbg.jpg')] bg-no-repeat bg-center bg-fixed bg-cover w-full h-auto lg:h-screen"
    >
      <div className="bg-[#daf8e3] bg-opacity-75 h-full flex items-center justify-center">
        <div className="max-w-[90%] mx-auto px-2 py-24 text-center ">
          <p className="uppercase text-3xl tracking-widest">Projects</p>
          <h2 className="py-4">Few Projects I developed while learning</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectItem
              title="GeoTravel"
              backgroundImg={Project1}
              projectUrl="/GeoTravel"
              language="HTML - SASS - Javascript"
            />
            <ProjectItem
              title="Netflix Clone"
              backgroundImg={Project2}
              projectUrl="/NfClone"
              language="Next-Tailwind-MongoDB"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
