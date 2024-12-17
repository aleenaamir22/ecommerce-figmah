"use client";

import React from "react";
import Image from "next/image";

// Import images statically
import menuImage from "../../public/ourmenuimg.png";
import lettuceImage from "../../public/om1.jpeg";
import cheeseImage from "../../public/om2.jpeg";
import breakfastImage from "../../public/om3.jpeg";
import pizzaImage from "../../public/om4.jpeg";
import butterImage from "../../public/om5.jpeg";
import beefImage from "../../public/om6.jpeg";
import breadImage from "../../public/om7.jpeg";
import mushroomImage from "../../public/om8.jpeg";

const OursMenu = () => {
  return (
    <div className="bg-black text-white py-12 px-4 md:px-20">
      {/* Heading */}
      <div className="text-center mb-8">
        <p className="text-orange-500 italic text-lg">Choose & pick</p>
        <h2 className="text-4xl font-semibold mt-2">
          <span className="text-orange-500">Fr</span>om Our Menu
        </h2>
      </div>

      {/* Navigation */}
      <nav className="flex justify-center gap-8 mb-12 text-gray-300">
        {["Breakfast", "Lunch", "Dinner", "Dessert", "Drink", "Snack", "Soups"].map(
          (item, index) => (
            <span
              key={index}
              className={`cursor-pointer text-lg ${
                item === "Breakfast" ? "text-orange-500 font-semibold" : ""
              } hover:text-yellow-500`}
            >
              {item}
            </span>
          )
        )}
      </nav>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Left Image */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <Image
            src={menuImage}
            alt="Menu Image"
            width={500}
            height={500}
            className="rounded-full shadow-lg"
          />
        </div>

        {/* Menu Items */}
        <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-[#1E1E1E] p-4 rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={80}
                height={80}
                className="rounded-md"
              />
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-2">{item.description}</p>
                <p className="text-[#FF9F0D] font-bold">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Menu Items Data
const menuItems = [
  {
    title: "Lettuce Leaf",
    description: "Lacus nisi, et ac dapibus velit in consequat.",
    price: "12.5$",
    image: lettuceImage,
  },
  {
    title: "Glow Cheese",
    description: "Lacus nisi, et ac dapibus velit in consequat.",
    price: "12.5$",
    image: cheeseImage,
  },
  {
    title: "Fresh Breakfast",
    description: "Lacus nisi, et ac dapibus velit in consequat.",
    price: "14.5$",
    image: breakfastImage,
  },
  {
    title: "Italian Pizza",
    description: "Lacus nisi, et ac dapibus velit in consequat.",
    price: "14.5$",
    image: pizzaImage,
  },
  {
    title: "Mild Butter",
    description: "Lacus nisi, et ac dapibus velit in consequat.",
    price: "12.5$",
    image: butterImage,
  },
  {
    title: "Slice Beef",
    description: "Lacus nisi, et ac dapibus velit in consequat.",
    price: "12.5$",
    image: beefImage,
  },
  {
    title: "Fresh Bread",
    description: "Lacus nisi, et ac dapibus velit in consequat.",
    price: "12.5$",
    image: breadImage,
  },
  {
    title: "Mushroom Pizza",
    description: "Lacus nisi, et ac dapibus velit in consequat.",
    price: "12.5$",
    image: mushroomImage,
  },
];

export default OursMenu;
