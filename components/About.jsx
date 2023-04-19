import React from "react";
import profilePic from "../public/assets/aboutpic.jpg";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div
      id="about"
      className="relative bg-[url('../public/assets/aboutbg.jpg')] bg-no-repeat bg-center bg-fixed bg-cover w-full h-auto lg:h-screen"
    >
      <div className="bg-[#daf8e3] bg-opacity-75 h-full flex items-center justify-center">
        <div className="max-w-[90%] m-auto md:grid grid-cols-3 gap-8">
          <div className="col-span-2 flex flex-col py-24">
            <p className="uppercase text-4xl tracking-widest text-left">
              Virtual Identity
            </p>
            <h2 className="py-4">My Journey So far</h2>
            <p className="py-2 text-4xl">
              My passion for Front-end development allows me to breathe life
              into design concepts with ease. As a Full Stack Developer, I am
              well-versed in leveraging frameworks to create interactive designs
              that are both beautiful and functional. Take a look at some of my
              work in the
              <mark className="bg-sky-400">
                <Link
                  href="/#projects"
                  className="underline font-semibold text-[#1E293B]"
                >
                  Projects
                </Link>
              </mark>
              section. I'm a detail-oriented problem solver with excellent
              organizational skills. I am always staying up-to-date with the
              latest technologies and eager to collaborate with like-minded
              individuals on exciting, challenging projects across the entire
              frontend spectrum.
            </p>
            <p className="py-2 text-4xl">
              I am currently exploring new career opportunities that challenge
              me to utilize
              <mark className="bg-sky-400">
                <Link
                  href="/#skills"
                  className="underline font-semibold text-[#1E293B]"
                >
                  My Skills
                </Link>
              </mark>
              and expand my knowledge.I thrive in a dynamic environment where I
              can learn and grow.If you have a position that fits my expertise,
              I would love to hear about it.When I'm not busy coding, I enjoy
              spending time outdoors or diving into my favorite video games.
            </p>
            <Link href="/files/Dinesh_Kumar.pdf" target="_blank">
              <button className="px-8 py-2 mt-4 mr-8">Download CV</button>
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
