import React from "react";
import { FaLinkedin, FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub, IoLogoWhatsapp, IoMail } from "react-icons/io5";

const Main = () => {
  return (
    <div
      id="home"
      className="relative bg-[url('../public/assets/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover w-full h-screen text-center"
    >
      <div className="w-full h-full bg-[#daf8e3] bg-opacity-75">
        <div className="max-w-[90%] w-full h-full mx-auto p-2 flex justify-center items-center">
          <div>
            <p className="uppercase text-xl tracking-widest text-[#005582] pt-8">
              Crafting innovative code & exploring virtual worlds
            </p>
            <h1 className="py-4 text-[#005582]">
              Hi, I&apos;m <span className="text-[#1ACBAA]">Dinesh Kumar</span>
            </h1>
            {/* <h1 className="py-2 text-white">Full Stack Developer</h1> */}
            <p className="py-4 text-[#005582] max-w-[70%] m-auto">
              Versatile full-stack developer equipped with both technical skills
              and creative flair, focusing on creating seamless user
              experiences.Passionate about coding - always looking for new ways
              to level up my skills and take on bigger challenges.
            </p>
            {/* HEADER CONTACT ICONS */}
            <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
              <a
                href="https://www.linkedin.com/in/dineshkumar059"
                target="_blank"
              >
                <div className="rounded-full shadow-lg shadow-[#06B2BB] z-[10] p-4 cursor-pointer hover:scale-110 ease-in duration-500">
                  <FaLinkedinIn size={24} />
                </div>
              </a>
              <a href="mailto:dineshkumarr0597@gmail.com">
                <div className="rounded-full shadow-lg  shadow-[#06B2BB] z-[10] p-4 cursor-pointer hover:scale-110 ease-in duration-500">
                  <IoMail size={24} />
                </div>
              </a>
              <a href="https://github.com/Aiden-Pearce-bytes" target="_blank">
                <div className="rounded-full shadow-lg shadow-[#06B2BB] z-[10] p-4 cursor-pointer hover:scale-110 ease-in duration-500">
                  <IoLogoGithub size={24} />
                </div>
              </a>
              <a href="https://wa.me/7904902105">
                <div className="rounded-full shadow-lg shadow-[#06B2BB]  z-[10] p-4 cursor-pointer hover:scale-110 ease-in duration-500">
                  <IoLogoWhatsapp size={24} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
