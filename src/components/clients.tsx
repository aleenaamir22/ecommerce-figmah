"use client";
import React from "react";
import Image from "next/image";

// Import images at the top
import capImage from "../../public/cap.png";
import burgerImage from "../../public/burger.png";
import sponImage from "../../public/spon.png";
import pizzaImage from "../../public/pizza.png";

const Clients = () => {
  return (
    <div className="relative w-full h-[300px] border border-2px border-orange-500 bg-black rounded-md">
      {/* Icons Section */}
      <div className="relative z-10 flex justify-around items-center h-full max-w-screen-lg mx-auto px-4">
        <div className="flex flex-col items-center">
          <Image
            src={capImage}
            alt="Professional Chef"
            width={100}
            height={100}
            className="mb-2"
          />
          <p className="text-white text-center text-sm">Professional Chef</p>
          <p className="text-white text-sm">420</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={burgerImage}
            alt="Items of Food"
            width={100}
            height={100}
            className="mb-2"
          />
          <p className="text-white text-center text-sm">Items of Food</p>
          <p className="text-white text-sm">320</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={sponImage}
            alt="Years of Experience"
            width={100}
            height={100}
            className="mb-2"
          />
          <p className="text-white text-center text-sm">Years of Experience</p>
          <p className="text-white text-sm">30+</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={pizzaImage}
            alt="Happy Customers"
            width={100}
            height={100}
            className="mb-2"
          />
          <p className="text-white text-center text-sm">Happy Customers</p>
          <p className="text-white text-sm">220</p>
        </div>
      </div>
    </div>
  );
};

export default Clients;
