"use client";

import React from "react";
import { Coffee } from "lucide-react";
import Image from "next/image";
import { DrinksItem } from "../constants/drink"; 

export default function Drink() {
  return (
    <section className="w-full mx-auto mt-[80px] sm:mt-[120px] px-4">
      <div className="container mx-auto py-10 sm:py-16 flex flex-col md:flex-row gap-8 md:gap-[112px]" style={{display:"flex",alignItems:"center",justifyContent:"flex-start",gap:"80px"}}>
        <div className="md:w-1/2 md:pl-8">
          <div className="flex items-center mb-6">
            <Coffee style={{color:"orange"}} size={24} />
            <h1 style={{fontSize:"1.6em",fontWeight:"bold",color:"black"}}>Drink</h1>
          </div>

          <div className="space-y-8">
            {DrinksItem.map((item, index) => (
              <div
                key={index}
                className="border-b border-dashed border-gray-300 pb-6"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3
                    className={`text-lg sm:text-2xl font-bold ${
                      item.highlight ? "text-[#FF9F0D]" : "text-gray-800"
                    }`} style={{fontSize:"1.2em", fontWeight:"bold",color:item.highlight?'orange':'black'}}
                  >
                    {item.name}
                  </h3>
                  <span className="text-lg sm:text-2xl font-bold text-[#FF9F0D]" style={{color:"orange",fontSize:"1.1em",fontWeight:"bold"}}>
                    {item.price}$
                  </span>
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-2">
                  {item.description}
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                  {item.calories} CAL
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-[448px] mb-6 md:mb-0">
          <Image
            src="/drinks.png" 
            alt="Drinks image"
            width={448}
            height={626}
            className="w-full h-auto rounded-lg shadow-lg"
            style={{width:"600px",padding:"10px",height:"400"}}
          />
        </div>
      </div>
    </section>
  );
}
