import React from "react";
import Geo from "../public/assets/GeoTravel.png";
import Image from "next/image";
import { IoMdRadioButtonOn } from "react-icons/io";
import Link from "next/link";

const GeoTravel = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={Geo}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Geo Travel</h2>
          <h3>HTML/SCSS</h3>
        </div>
      </div>

      <div className="max-w-[90%] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>OverView</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
            velit molestias, odio, fugiat suscipit voluptatibus in incidunt
            dolorem ad hic reprehenderit aliquid nostrum corporis aut, a unde?
            Cum, perferendis nulla.
          </p>
          <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          <button className="px-8 py-2 mt-4 mr-8">Code</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-[#06B2BB] rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="py-2 flex items-center">
                <IoMdRadioButtonOn className="pr-1" /> HTML
              </p>
              <p className="py-2 flex items-center">
                <IoMdRadioButtonOn className="pr-1" /> SASS
              </p>
              <p className="py-2 flex items-center">
                <IoMdRadioButtonOn className="pr-1" /> Javascript
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default GeoTravel;
