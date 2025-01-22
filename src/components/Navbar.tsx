"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { IoBagHandle } from "react-icons/io5";

// Search data
const searchData = [
  { id: 1, title: "Burger", image: "/om2.jpeg" },
  { id: 2, title: "Pizza", image: "/blogpizza.jpeg" },
  { id: 3, title: "Fresh Lime", image: "/drinks.png" },
  { id: 4, title: "Chocolate Muffin", image: "/desert.png" },
  { id: 5, title: "Cheese Butter", image: "/om3.jpeg" },
];

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState(""); // State to hold search query

  // Filter data based on search query
  const filteredData = searchData.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <nav className="bg-black text-white p-4 w-full sticky top-0 z-50">
      <div className="flex flex-col items-center">
        <div className="text-2xl font-bold text-center">
          <span className="text-orange-500">Food</span>tuck
        </div>

        <div className="flex flex-wrap items-center justify-between w-full mt-4 px-4 md:px-[135px]">
          <nav>
            <ul className="flex flex-wrap items-center space-y-4 md:space-y-0 md:space-x-6 text-sm gap-4">
              {[{ name: "Home", href: "/" }, { name: "Menu", href: "/menu" }, { name: "Blog", href: "/blog" }, { name: "About", href: "/about" }, { name: "Shop", href: "/shop" }, { name: "Contact", href: "/contact" }].map((item) => (
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
                value={searchQuery} // Controlled input
                onChange={(e) => setSearchQuery(e.target.value)} // Update state
              />
              <span className="absolute top-2.5 right-3">
                <CiSearch />
              </span>
            </div>
            <Link href="/cart">
              <IoBagHandle />
            </Link>
          </div>
        </div>

        {/* Display the filtered results */}
        {searchQuery && (
          <div className="mt-4 bg-white text-black p-4 rounded shadow-md w-full max-w-md">
            <p className="text-sm font-medium">
              Showing results for: <span className="font-bold">{searchQuery}</span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              {filteredData.length > 0 ? (
                filteredData.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 p-2 border border-gray-300 rounded">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={64}  // Width of the image
                      height={64} // Height of the image
                      className="object-cover rounded"
                    />
                    <span className="text-sm font-medium">{item.title}</span>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-600">No results found.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
