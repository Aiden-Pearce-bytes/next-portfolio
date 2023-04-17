import React from "react";
import {
  IoLogoCss3,
  IoLogoGithub,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoReact,
  IoLogoSass,
  IoStar,
  IoStarHalf,
  IoStarOutline,
} from "react-icons/io5";
import { SiNextdotjs, SiRedux, SiTailwindcss } from "react-icons/si";

const Skills = () => {
  return (
    <div
      id="skills"
      className="relative bg-[url('../public/assets/skillsbg.jpg')] bg-no-repeat bg-center bg-fixed bg-cover w-full h-auto lg:h-screen"
    >
      <div className="bg-[#daf8e3] bg-opacity-75 h-full flex items-center justify-center">
        <div className="max-w-[90%] mx-auto flex flex-col justify-center items-center h-full">
          <p className="text-5xl uppercase tracking-widest">Skill TREE</p>
          <h2 className="py-4 uppercase">My Stats in Programming</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* HTML */}
            <div className="p-6 shadow-xl shadow-[#06B2BB] rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <IoLogoHtml5 size={64} className="hover:text-[#E34C26]" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="uppercase tracking-widest">
                    HTML{" "}
                    <span className="flex text-[#ffd700] animate-pulse">
                      {" "}
                      <IoStar />
                      <IoStar />
                      <IoStar />
                      <IoStar />
                      <IoStarHalf />{" "}
                    </span>
                  </h3>
                </div>
              </div>
            </div>
            {/* CSS */}
            <div className="p-6 shadow-xl shadow-[#06B2BB] rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <IoLogoCss3 size={64} className="hover:text-[#263DE4]" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="uppercase tracking-widest">
                    CSS
                    <span className="flex text-[#ffd700] animate-pulse">
                      {" "}
                      <IoStar />
                      <IoStar />
                      <IoStar />
                      <IoStar />
                      <IoStarHalf />{" "}
                    </span>
                  </h3>
                </div>
              </div>
            </div>

            {/* JAVASCRIPT */}
            <div className="p-6 shadow-xl shadow-[#06B2BB] rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <IoLogoJavascript
                    size={64}
                    className="hover:text-[#F0DB4F]"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="uppercase tracking-widest">
                    Javascript{" "}
                    <span className="flex text-[#ffd700] animate-pulse">
                      {" "}
                      <IoStar />
                      <IoStar />
                      <IoStar />
                      <IoStar />
                    </span>
                  </h3>
                </div>
              </div>
            </div>

            <div className="p-6 shadow-xl shadow-[#06B2BB] rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <IoLogoReact size={64} className="hover:text-[#61DBFB]" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="uppercase tracking-widest">
                    React
                    <span className="flex text-[#ffd700] animate-pulse">
                      {" "}
                      <IoStar />
                      <IoStar />
                      <IoStar />
                      <IoStarHalf />{" "}
                    </span>
                  </h3>
                </div>
              </div>
            </div>

            <div className="p-6 shadow-xl shadow-[#06B2BB] rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <SiTailwindcss size={64} className="hover:text-sky-500" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="uppercase tracking-widest">
                    Tailwind{" "}
                    <span className="flex text-[#ffd700] animate-pulse">
                      {" "}
                      <IoStar />
                      <IoStar />
                      <IoStar />
                      <IoStarHalf />
                    </span>
                  </h3>
                </div>
              </div>
            </div>

            <div className="p-6 shadow-xl shadow-[#06B2BB] rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <IoLogoGithub size={64} className="hover:text-[#333]" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="uppercase tracking-widest">
                    Github{" "}
                    <span className="flex text-[#ffd700] animate-pulse">
                      {" "}
                      <IoStar />
                      <IoStar />
                      <IoStar />
                      <IoStar />
                    </span>
                  </h3>
                </div>
              </div>
            </div>

            <div className="p-6 shadow-xl shadow-[#06B2BB] rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <IoLogoSass size={64} className="hover:text-[#CD6799]" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="uppercase tracking-widest">
                    SASS{" "}
                    <span className="flex text-[#ffd700] animate-pulse">
                      {" "}
                      <IoStar />
                      <IoStar />
                      <IoStar />
                      <IoStar />
                    </span>
                  </h3>
                </div>
              </div>
            </div>

            <div className="p-6 shadow-xl shadow-[#06B2BB] rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <SiRedux size={64} className="hover:text-[#00a7E5]" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="uppercase tracking-widest">
                    Redux{" "}
                    <span className="flex text-[#ffd700] animate-pulse">
                      {" "}
                      <IoStar />
                      <IoStar />
                      <IoStar />
                    </span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl shadow-[#06B2BB] rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <SiNextdotjs size={64} className="hover:text-black" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="uppercase tracking-widest">
                    Next 13
                    <span className="flex text-[#ffd700] animate-pulse">
                      {" "}
                      <IoStar />
                      <IoStar />
                      <IoStar />
                    </span>
                  </h3>
                </div>

                
              </div>
            </div>

            <div className="p-6 shadow-xl shadow-[#06B2BB] rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <IoLogoReact size={64} className="hover:text-[#61DBFB]" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="uppercase tracking-widest">
                    React Native
                    <span className="flex text-[#ffd700] animate-pulse">
                      {" "}
                      <IoStar />
                      <IoStar />
                      <IoStar />
                      <IoStarHalf />
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
