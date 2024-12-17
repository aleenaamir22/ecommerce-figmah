"use client";

import React from "react";
import { Coffee } from "lucide-react";
import { MainCoursItems } from "../constants/maincourse";
import Image from "next/image";
import mainCourseImage from "../../public/mainCourse.png";

export default function MainCourse() {
  return (
    <section className="w-full mx-auto mt-[120px] px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto py-16 flex flex-col lg:flex-row gap-12" style={{display:"flex",alignItems:"center",justifyContent:"flex-start",gap:"80px"}}>
        {/* Text Section */}
        <div className="w-full lg:w-1/2 lg:pl-8">
          <div className="flex flex-col mb-8">
            <Coffee style={{color:"orange"}} size={24} />
          
          </div>
          <div className="space-y-8">
            {MainCoursItems.map((item, index) => (
              <div
                key={index}
                className="border-b border-dashed border-gray-300 pb-6"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3
                    className={`text-xl sm:text-2xl font-bold ${
                      item.highlight ? "text-[#FF9F0D]" : "text-gray-800"
                    }`} style={{fontSize:"1.2em", fontWeight:"bold",color:item.highlight?'orange':'black'}}
                  >
                    {item.name}
                  </h3>
                    <span className="text-xl sm:text-2xl font-bold text-[#FF9F0D]" style={{color:"orange", fontSize:"1.1em", fontWeight:"bold"}} >
                    {item.price}$
                  </span>
                </div>
                <p className="text-gray-600 mb-2">{item.description}</p>
                <p className="text-sm sm:text-[16px] text-gray-500">
                  {item.calories} CAL
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-[448px] mb-8 lg:mb-0">
          <Image
            src={mainCourseImage} // Using the imported image
            alt="Main Course Dish"
            width={448}
            height={626}
            className="w-full h-auto max-w-full rounded-lg shadow-lg"
            style={{width:"600px",padding:"10px",height:"400"}}
          />
        </div>
      </div>
    </section>
  );
}
