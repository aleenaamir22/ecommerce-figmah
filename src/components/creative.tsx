"use client"
import React from 'react';
import Image from 'next/image';
import creativeImage from "../../public/creative.jpeg";
const Creative= () => {
  return (
    <section className="relative w-full h-[700px] flex items-center bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={creativeImage} 
          alt="Food Dish"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-80"
        />
      </div>

      {/* Content Section */}
<div className="relative z-10 flex flex-col justify-center items-end w-full px-12 text-right">
  <h3 className="text-orange-500 font-cursive italic text-lg mb-4">
    Restaurant Active Process
  </h3>
  <h1 className="text-white text-4xl lg:text-5xl font-bold leading-tight mb-4">
    <span className="text-yellow-400">We</span> Document Every Food <br />
    Bean Process until it is saved
  </h1>
  <p className="text-gray-300 text-lg mb-8">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam<br></br>
    pellentesque bibendum non dui volutpat fringilla bibendum.
  </p>

  {/* Buttons */}
  <div className="flex gap-6 justify-end">
    <button className="bg-transparent text-white font-semibold py-2 px-6 border-2 border-yellow-500 hover:bg-yellow-500 transition-all">
      Read More
    </button>
    <button className="flex items-center gap-2 text-yellow-500 font-semibold py-2 px-6 border-2 border-yellow-500 hover:bg-yellow-500 hover:text-white transition-all">
      <span className="bg-yellow-500 text-black rounded-full w-8 h-8 flex items-center justify-center">
        ▶
      </span>
      Play Video
    </button>
  </div>
</div>

    </section>
  );
};

export default Creative;
