"use client"
import Link from "next/link";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoBagHandle } from "react-icons/io5";


export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4 w-full">
      
      <div className="flex flex-col items-center">
        <div className="text-2xl font-bold text-center">
          <span className="text-orange-500">Food</span>tuck
        </div>

       
        <div className="flex flex-wrap items-center justify-between w-full mt-4 px-4 md:px-[135px]">
          
        <nav>
  <ul className="flex flex-wrap items-center space-y-4 md:space-y-0 md:space-x-6 text-sm gap-4"> 
    {[

      
      { name: "Home", href: "/" },
      { name: "Menu", href: "/menu" },
      { name: "Blog", href: "/blog" },
      { name: "About", href: "/about" },
      { name: "Shop", href: "/shop" },
      { name: "Contact", href: "/contact" },
    ].map((item) => (
      <li key={item.name} className="hover:text-orange-800 cursor-pointer px-1 py-1">
        <Link href={item.href}>{item.name}</Link>
      </li>
    ))}
  </ul>
</nav>

         
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-black border border-[#FF9F0D] rounded-full px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-orange-500"
              />
              <span className="absolute top-2.5 right-3">
                <CiSearch/>
              </span>
            </div>
            <IoBagHandle/>
          </div>
        </div>
      </div>
    </nav>
  );
}
