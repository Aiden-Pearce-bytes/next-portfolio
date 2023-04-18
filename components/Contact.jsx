import Image from "next/image";
import React from "react";
import ContactImage from "../public/assets/hero4.jpg";
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
          <p className=" flex py-4">
            I would <IoHeartSharp className="text-red-500 px-1" /> to hear from
            you!{" "}
          </p>
          <div className="lg:p-4 h-full">
            <div>
              <h2 className="py-2"> Dinesh Kumar</h2>
              <p>
                Full Stack Developer, with main area of expertise in the
                Front-end of Websites and Web Applications trying to bring
                idea's and designs to life through frameworks
              </p>
              <p className="py-4">
                Got a design to work I am available for freelance(or)Full-time
                position. Contact me and let's talk
              </p>
            </div>
            <div>
              <p className="uppercase pt-8 text-center">Connect with me</p>
              <div className="flex items-center justify-evenly py-4 ">
                <div className="rounded-full shadow-lg shadow-[#06B2BB] z-[10] p-4 cursor-pointer hover:scale-110 ease-in duration-500">
                  <FaLinkedinIn size={16} />
                </div>
                <div className="rounded-full shadow-lg  shadow-[#06B2BB] z-[10] p-4 cursor-pointer hover:scale-110 ease-in duration-500">
                  <IoMail size={16} />
                </div>
                <div className="rounded-full shadow-lg shadow-[#06B2BB] z-[10] p-4 cursor-pointer hover:scale-110 ease-in duration-500">
                  <IoLogoGithub size={16} />
                </div>
                <div className="rounded-full shadow-lg shadow-[#06B2BB]  z-[10] p-4 cursor-pointer hover:scale-110 ease-in duration-500">
                  <IoLogoWhatsapp size={16} />
                </div>
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
