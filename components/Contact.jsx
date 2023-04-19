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

const Contact = () => {
  return (
    <div
      id="contact"
      className="relative bg-[url('../public/assets/contactbg.jpg')] bg-no-repeat bg-center bg-fixed bg-cover w-full h-auto lg:h-screen"
    >
      <div className="bg-[#daf8e3] bg-opacity-75 h-full flex items-center justify-center">
        <div className="max-w-[1248px] m-auto px-2 py-20 w-full">
          <h2 className="text-4xl tracking-widest text-center">Get in Touch</h2>
          <p className=" flex py-4"></p>
          <div className="lg:p-4 h-full">
            <div>
              <h2 className="py-2"> Dinesh Kumar</h2>
              <p>
                A Full Stack Developer, with main area of expertise in the
                Front-end of Websites and Web Applications trying to bring
                idea&apos;s and designs to life through frameworks.
              </p>
              <p className="py-4">
                I am currently exploring new career opportunities that challenge
                me to utilize my skills and expand my knowledge.If you have a
                position that fits my expertise, I would love to hear about it
                (or) Got a design to work I am available for freelance. Contact
                me and let&apos;s talk.
              </p>
            </div>
            <div>
              <p className="uppercase pt-8 flex items-center justify-center">
                I would <IoHeartSharp className="text-red-500 px-1" /> to hear
                from you!
              </p>
              <div className="flex items-center justify-evenly py-4 ">
                <a
                  href="https://www.linkedin.com/in/dineshkumar0597"
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
