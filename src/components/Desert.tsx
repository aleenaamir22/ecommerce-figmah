"use client";

import React from "react";
import { DessertItems } from "../constants/desert"; // Import the actual data array
import { Coffee } from "lucide-react";
import Image from "next/image";
import dessertImage from "../../public/desert.png"; // Import image directly

export default function Dessert() {
  return (
    <section className="w-full mx-auto mt-20 sm:mt-32 px-4">
      <div className="container mx-auto py-10 sm:py-16 flex flex-col md:flex-row gap-8 md:gap-28" style={{display:"flex",alignItems:"center",justifyContent:"flex-start",gap:"80px"}}>
        
        {/* Main image on the left */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <Image
            src={dessertImage} // Static path for imported image
            alt="Dessert dish"
            width={448}
            height={626}
            className="w-full h-auto rounded-lg shadow-lg"
            style={{width:"600px",padding:"10px",height:"400"}}
          />
        </div>

        {/* Text content on the right */}
        <div className="md:w-1/2 md:pl-8">
          <div className="flex items-center mb-6">
            <Coffee style={{ color: "orange" }} size={24} />
            <h1 style={{ fontSize: "1.6em", fontWeight: "bold", color: "black" }}>Dessert</h1>
          </div>

          <div className="space-y-8">
            {/* Use the array of dessert items */}
            {DessertItems.map((item, index) => (
              <div key={index} className="border-b border-dashed border-gray-300 pb-6">
                {/* Layout for each dessert item: name, price, calories side by side */}
                <div className="flex items-center gap-6 mb-2">
                  <h3
                    className="text-xl font-bold"
                    style={{
                      color: item.highlight ? "orange" : "black",
                    }}
                  >
                    {item.name}
                  </h3>
                  <span
                    className="text-xl font-bold"
                    style={{
                      color: "orange",
                      fontWeight:"bold"
                    }}
                  >
                    {item.price}$
                  </span>
                  <p
                    className="text-sm text-gray-500"
                    style={{
                      fontSize: "1em",
                    }}
                  >
                    {item.calories} CAL
                  </p>
                </div>
                <p className="text-gray-600 mb-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
