import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  IoApps,
  IoClose,
  IoCodeSlash,
  IoBulb,
  IoGameControllerOutline,
  IoMail,
  IoLogoGithub,
  IoLogoWhatsapp,
  IoRocketOutline,
} from "react-icons/io5";
import { BsLightbulb } from "react-icons/bs";
import { GrDeploy } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import Logo from "../public/assets/navLogo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 py-2">
        <Link href="/">
          <Image src={Logo} alt="/" width="50" height="50" />
        </Link>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-xl uppercase hover:border-b py-2">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-xl uppercase hover:border-b py-2">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-xl uppercase hover:border-b py-2">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-xl uppercase hover:border-b py-2">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-xl uppercase hover:border-b py-2">
                Contact
              </li>
            </Link>
            {/* <Link> */}
            <a href="/files/DineshKumar.pdf" target="_blank">
              <li className="ml-10 text-xl uppercase border py-2 px-2 border-[#fff]">
                Resume
              </li>
            </a>
            {/* </Link> */}
          </ul>
          <div onClick={handleNav} className="md:hidden cursor-pointer">
            <IoApps size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          !nav ? "" : "md:hidden fixed letf-0 top-0 w-full h-screen bg-black/70"
        }
      >
        <div
          className={
            !nav
              ? "fixed left-[-150%] top-0 p-10 ease-in duration-500"
              : "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ECF0F3] p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image src={Logo} width="40" height="20" alt="/" />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <IoClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4 text-2xl flex justify-center">
              <p className="w-[85%] md:w-[90%] py-4">
                Writing Codes() & conquering virtual worlds
              </p>
            </div>
            <div className="flex items-center justify-evenly my-4 w-full sm-w[80%]">
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                <BsLightbulb />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                <IoCodeSlash />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                <IoRocketOutline />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                <IoGameControllerOutline />
              </div>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-md">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-md">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-lg">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-md">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-md">
                  contact
                </li>
              </Link>
            </ul>
            <div className="pt-10">
              <p className="uppercase tracking-widest text-[#5651E5] text-3xl">
                Let&apos;s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm-w[80%]">
                <a href="https://www.linkedin.com/in/dineshkumar0597">
                  <div className="rounded-full shadow-lg shadow-[#06B2BB] z-[10] p-4 cursor-pointer hover:scale-110 ease-in duration-500">
                    <FaLinkedinIn size={16} />
                  </div>
                </a>
                <a href="mailto:dineshkumarr0597@gmail.com">
                  <div className="rounded-full shadow-lg  shadow-[#06B2BB] z-[10] p-4 cursor-pointer hover:scale-110 ease-in duration-500">
                    <IoMail size={16} />
                  </div>
                </a>
                <a href="https://github.com/Aiden-Pearce-bytes">
                  <div className="rounded-full shadow-lg shadow-[#06B2BB] z-[10] p-4 cursor-pointer hover:scale-110 ease-in duration-500">
                    <IoLogoGithub size={16} />
                  </div>
                </a>
                <a href="https://wa.me/7904902105">
                  <div className="rounded-full shadow-lg shadow-[#06B2BB]  z-[10] p-4 cursor-pointer hover:scale-110 ease-in duration-500">
                    <IoLogoWhatsapp size={16} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
