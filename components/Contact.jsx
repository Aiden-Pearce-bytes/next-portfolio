import Image from "next/image";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import {
  IoChevronUpCircleOutline,
  IoHeartSharp,
  IoLogoGithub,
  IoLogoWhatsapp,
  IoMail,
} from "react-icons/io5";
import Link from "next/link";
import { RoughNotation } from "react-rough-notation";

const Contact = () => {
  return (
    <div id="contact" className="w-full h-auto lg:h-screen">
      <div className="h-full flex items-center justify-center">
        <div className="max-w-[1248px] m-auto px-2 py-20 w-full">
          <h2 className=" tracking-widest text-center pt-10">Get in Touch</h2>
          <p className=" flex py-4"></p>
          <div className="lg:p-4 h-full">
            <div>
              <p className="font-regular text-justify md:text-center font-3xl">
                I&apos;m currenly looking for a job role as Developer. Do you
                have a job opportunity ?
                <span className="inline-block px-2">
                  <RoughNotation type="circle" show color="#1ACBAA">
                    Hire Me
                  </RoughNotation>
                </span>
              </p>
              <br />
              <p className="font-regular text-justify md:text-center font-3xl py-4"> 
                Got an idea you&apos;d like to discuss, Feel free to reach me @
                <span className="px-2 ont-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-600">
                  dineshkumarr0597@gmail.com
                </span>
                <br />
              </p>
              <p className="font-regular text-justify md:text-center font-3xl py-4">
                You can also find me by clicking any of the buttons below and I
                would
                <IoHeartSharp className="text-red-500 px-1 inline-block" /> to
                hear from you!
              </p>
            </div>
            <div>
              <p className="uppercase pt-8 flex items-center justify-center"></p>
              <div className="flex items-center justify-center py-4 ">
                <a
                  className="px-4"
                  href="https://www.linkedin.com/in/dineshkumar0597"
                  target="_blank"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 z-[10] p-4 cursor-pointer hover:scale-110 ease-in duration-500">
                    <FaLinkedinIn size={24} />
                  </div>
                </a>
                <a className="px-4" href="mailto:dineshkumarr0597@gmail.com">
                  <div className="rounded-full shadow-lg  shadow-gray-400 z-[10] p-4 cursor-pointer hover:scale-110 ease-in duration-500">
                    <IoMail size={24} />
                  </div>
                </a>
                <a
                  className="px-4"
                  href="https://github.com/Aiden-Pearce-bytes"
                  target="_blank"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 z-[10] p-4 cursor-pointer hover:scale-110 ease-in duration-500">
                    <IoLogoGithub size={24} />
                  </div>
                </a>
                <a href="https://wa.me/7904902105" className="px-4">
                  <div className="rounded-full shadow-lg shadow-gray-400  z-[10] p-4 cursor-pointer hover:scale-110 ease-in duration-500">
                    <IoLogoWhatsapp size={24} />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center pt-40 ">
            <Link href="/">
              <div className="rounded-full shadow-lg shadow-white p-4 cursor-pointer hover-scale-110 ease-in duration-300">
                <IoChevronUpCircleOutline size={32} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
