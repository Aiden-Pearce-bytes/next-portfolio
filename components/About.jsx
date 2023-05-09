import React from "react";
import profilePic from "../public/assets/aboutpic.jpg";
import Image from "next/image";
import Link from "next/link";
import { RoughNotation } from "react-rough-notation";

const About = () => {
  return (
    <div id="#/" className="w-full h-auto lg:h-screen">
      <div className="h-full flex items-center justify-center py-8">
        <div className="max-w-[90%] m-auto md:grid grid-cols-3 gap-8">
          <div className="col-span-2 flex flex-col py-24">
            <h1 className="text-8xl tracking-widest text-left">Hello!</h1>
            <h2 className="py-4">
              I&apos;m Dinesh Kumar, a Full Stack developer
            </h2>
            <p className="py-2 text-4xl font-light antialiased first-letter:text-6xl text-justify">
              Well-versed in leveraging frameworks to create interactive designs
              that are both beautiful and functional. My passion for
              <span className="p-4">
                <RoughNotation type="highlight" color="#7CFFCB" show>
                  Frontend
                </RoughNotation>
              </span>
              development allows me to breathe life into design concepts with
              ease. Take a look at some of my work in the
              <span className="px-2">
                <RoughNotation type="highlight" color="#FA9E8C" show>
                  <Link
                    href="/#projects"
                    className="font-light antialiased text-[#1E293B]"
                  >
                    projects
                  </Link>
                </RoughNotation>
              </span>
              section. I am always trying to stay up-to-date with the latest
              technologies and eager to collaborate with like-minded individuals
              on exciting, challenging projects across the entire frontend
              spectrum.
            </p>
            <p className="py-2 text-4xl font-light antialiased first-letter:text-5xl text-justify">
              Currently exploring new career opportunities as
              <span className="px-2">
                <RoughNotation type="highlight" color="#FFAC81" show>
                  developer
                </RoughNotation>
              </span>
              that challenge me to utilize my
              <span className="px-2">
                <RoughNotation type="highlight" color="#BDFFF3" show>
                  <Link
                    href="/#skills"
                    className="font-light antialiased text-[#1E293B]"
                  >
                    skills
                  </Link>
                </RoughNotation>
              </span>
              and expand my knowledge.If you have an opportunity that fits my
              expertise (or) an idea you&apos;d like to discuss, I would love to
              hear about it.When I&apos;m not busy coding, I enjoy spending time
              outdoors or diving into my favorite video games.
            </p>

            <a href="/files/DineshKumar.pdf" target="_blank">
              <button className="px-8 py-2 mt-4 mr-8">Download CV</button>
            </a>
          </div>
          <div className="w-full h-auto m-auto flex justify-center items-center grayscale hover:grayscale-0 hover:scale-110 ease-in duration-300">
            <Image
              className="rounded-xl border-8 p-4 border-sky-600 shadow-xl shadow-gray-400"
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
