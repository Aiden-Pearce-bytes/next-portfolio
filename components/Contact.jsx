import Image from "next/image";
import React from "react";
import ContactImage from "../public/assets/hero3.jpg";
import { FaLinkedinIn } from "react-icons/fa";
import {
  IoChevronUpCircleOutline,
  IoLogoGithub,
  IoLogoWhatsapp,
  IoMail,
} from "react-icons/io5";
import Link from "next/link";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen bg-[#daf8e3]">
      <div className="max-w-[1240px] m-auto px-2 py-24 w-full">
        <p className="text-xl tracking-widest uppercase">Contact</p>
        <h2 className="py-4">Get in Touch </h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* LEFT */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-[#fff] rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={ContactImage}
                />
              </div>
              <div>
                <h2 className="py-2">Name Here</h2>
                <p>Full-Stack Developer</p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam quisquam doloremque omnis animi at nobis assumenda
                  placeat vero. Suscipit iusto vitae nemo similique optio maxime
                  sint laudantium vero amet perferendis.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect with me</p>
                <div className="flex items-center justify-between py-4">
                  <div className="rounded-full shadow-lg shadow-[#06B2BB] z-[10] p-4 cursor-pointer hover:scale-110 ease-in duration-500">
                    <FaLinkedinIn />
                  </div>
                  <div className="rounded-full shadow-lg  shadow-[#06B2BB] z-[10] p-4 cursor-pointer hover:scale-110 ease-in duration-500">
                    <IoMail />
                  </div>
                  <div className="rounded-full shadow-lg shadow-[#06B2BB] z-[10] p-4 cursor-pointer hover:scale-110 ease-in duration-500">
                    <IoLogoGithub />
                  </div>
                  <div className="rounded-full shadow-lg shadow-[#06B2BB]  z-[10] p-4 cursor-pointer hover:scale-110 ease-in duration-500">
                    <IoLogoWhatsapp />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-span-3 w-full h-auto shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4 ">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full oy-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-white"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-white"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    type="email"
                    className="border-2 rounded-lg p-3 flex border-white"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    type="text"
                    className="border-2 rounded-lg p-3 flex border-white"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                  ></textarea>
                </div>
                <button className="w-full p-4 text-white mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12 ">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-white p-4 cursor-pointer hover-scale-110 ease-in duration-300">
              <IoChevronUpCircleOutline size={32} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
