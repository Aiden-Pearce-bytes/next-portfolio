import React from "react";
import profilePic from "../public/assets/aboutpic.jpg";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div
      id="about"
      className="relative bg-[url('../public/assets/hero18.jpg')] bg-no-repeat bg-center bg-fixed bg-cover w-full h-auto lg:h-screen"
    >
      <div className="bg-[#daf8e3] bg-opacity-75 h-full flex items-center justify-center">
        <div className="max-w-[90%] m-auto md:grid grid-cols-3 gap-8">
          <div className="col-span-2 flex flex-col py-24">
            <p className="uppercase text-4xl tracking-widest text-left">
              Virtual Identity
            </p>
            <h2 className="py-4">My Short Story</h2>
            <p className="py-2">
              I'm a Full Stack Developer, with main area of expertise in the
              Front-end of Websites and Web Applications trying to bring idea's
              and designs to life through frameworks. Check out some of my work
              in the Projects section. I'm Problem solver, well-organised,
              person with high attention to detail.Interested in the entire
              frontend spectrum and working on ambitious projects with
              interesting people.
            </p>
            <p className="py-2">
              I'm open to Job opportunities where I can contribute, learn and
              grow. If you have a good opportunity that matches my skills and
              experience then don't hesitate to contact me. Fan of outdoor
              activities, video games, and coding of course.
            </p>
            <Link href="/">
              <p className="py-2 underline cursor-pointer">Download CV</p>
            </Link>
          </div>
          <div className="w-full h-auto m-auto justify-center items-center grayscale hover:grayscale-0 hover:scale-110 ease-in duration-300">
            <Image
              className="rounded-xl  shadow-xl shadow-[#06B2BB]"
              src={profilePic}
              alt="/"
              width="350"
              // height="500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
