import React from "react";
import profilePic from "../public/assets/hero17.jpg";
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
          <div className="col-span-2 flex flex-col ">
            <p className="uppercase text-4xl tracking-widest text-left">
              Virtual Identity
            </p>
            <h2 className="py-4">My Travel Log</h2>
            <p className="py-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
              ut. Non illo asperiores id aliquam nobis quidem eaque quibusdam
              possimus provident ab totam sunt iure ea quasi, eos repudiandae
              exercitationem! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Fugit consectetur incidunt perferendis animi accusamus
              aspernatur, nulla odio dicta eveniet dolores vero aperiam officia
              laudantium expedita dolor? Voluptatum, praesentium quos. Soluta?
            </p>
            <p className="py-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate, dolor. Quidem mollitia repellendus laboriosam, nisi
              quos numquam, maxime eaque qui eum, officia incidunt ipsam sit et
              facilis amet reiciendis voluptatibus. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Soluta nihil expedita maxime ipsum
              impedit ducimus doloribus alias asperiores? Similique veniam,
              aperiam fugiat qui officiis eum enim possimus nemo iure autem.
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
              // width="350"
              // height="500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
