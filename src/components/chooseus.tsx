"use client";

import React from "react";
import Image from "next/image";
import aboutUsImage from "../../public/aboutus.png";
import food4Image from "../../public/food4.png";
import recentPostImage from "../../public/recentPost.png";
import mainCourseImage from "../../public/mainCourse.png";
import chooseUsImage from "../../public/chooseus.png";
import chooseUs2Image from "../../public/chooseus2.jpeg";

const ChooseUs = () => {
  return (
    <div className="bg-black text-white p-8 md:p-12 lg:flex lg:gap-8">
      {/* Image Gallery Section */}
      <div className="grid grid-cols-2 grid-rows-[auto,auto] gap-4 lg:flex-1">
        {/* First Row */}
        <div className="rounded-lg overflow-hidden  w-[300px] h-[300px]">
          <Image
            src={aboutUsImage}
            alt="Tacos"
            width={600}
            height={400}
            layout="responsive"
          />
        </div>

        {/* Second Row */}
        <div className="rounded-lg overflow-hidden w-[300px] h-[270px]">
          <Image
            src={food4Image}
            alt="Burger"
            width={300}
            height={300}
            layout="responsive"
          />
        </div>
        <div className="rounded-lg overflow-hidden row-span-2 h-[300px]">
          <Image
            src={recentPostImage}
            alt="Chicken"
            width={600}
            height={600}
            layout="responsive"
          />
        </div>

        {/* Third Row */}
        <div className="rounded-lg overflow-hidden">
          <Image
            src={mainCourseImage}
            alt="Double Burger"
            width={300}
            height={200}
            layout="responsive"
          />
        </div>
        <div className="flex gap-4 mt-4">
          {/* First Image */}
          <div className="rounded-lg overflow-hidden row-span-2">
            <Image
              src={chooseUsImage}
              alt="Burger"
              width={600}
              height={400}
              layout="responsive"
              objectFit="cover"
            />
          </div>

          {/* Second Image */}
          <div className="rounded-lg overflow-hidden row-span-2">
            <Image
              src={chooseUs2Image}
              alt="Salad"
              width={600}
              height={400}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-8 lg:mt-0 lg:flex-1 lg:px-8 flex flex-col justify-center">
        <h3 className="text-orange-500 italic text-lg">Why Choose Us</h3>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-2">
          <span className="text-orange-500">Extra</span> ordinary taste <br /> And Experienced
        </h1>
        <p className="text-gray-400 mt-4 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat
          fringilla bibendum. Ultricies mattis sed vitae mus risus. Lacus nisl, et ac dapibus sit eu velit in consequat.
        </p>

        {/* Features Section */}
        <div className="flex gap-6 mt-6">
          <div className="text-center">
            <div className="text-3xl mb-2 bg-orange-500">🍔</div>
            <p className="text-gray-200 text-sm">Fast Food</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2 bg-orange-500">🍽️</div>
            <p className="text-gray-200 text-sm">Lunch</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2 bg-orange-500">🍷</div>
            <p className="text-gray-200 text-sm">Dinner</p>
          </div>
        </div>

        {/* Experience Section */}
        <div className="flex items-center gap-4 mt-8 bg-white px-4 py-1 w-[230px] rounded-lg">
          <div className="text-orange-400 font-bold text-3xl px-4 py-2 rounded-lg">30+</div>
          <p className="text-lg text-gray-300">
            Years of <span className="font-bold text-gray-500">Experienced</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
