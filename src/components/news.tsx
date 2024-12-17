"use client"
import React from 'react'
import Image from 'next/image'
import foodImage from '../../public/food4.png'
import blogPizzaImage from '../../public/blogpizza.jpeg'
import aboutImage from '../../public/about4.png'

const News = () => {
  return (
    <div>
      <section className="body-font bg-black">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col py-6 mb-12 items-center text-white">
            <h2 className="text-orange-500 font-medium title-font text-2xl mb-4 sm:mb-0">
              Blog Post
            </h2>
            <h1 className="flex items-center justify-center text-4xl">
              <span className="text-orange-500">La</span>test News & Blogs
            </h1>
          </div>
          <div className="flex flex-wrap">
            <div className="p-4 md:w-1/3 mb-6 border border-2">
              <div className="rounded-lg h-64 overflow-hidden group">
                <Image
                  alt="food"
                  className="object-cover object-center h-full w-full transition-transform transform group-hover:scale-110"
                  src={foodImage}
                />
              </div>
              <h2 className="text-xl font-medium title-font text-orange-500 mt-5">
                10 February 2022
              </h2>
              <p className="text-base leading-relaxed mt-2 text-white">
                Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis
              </p>
              <a className="text-indigo-500 inline-flex items-center mt-3">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="p-4 md:w-1/3 mb-6 border border-2">
              <div className="rounded-lg h-64 overflow-hidden group">
                <Image
                  alt="blog pizza"
                  className="object-cover object-center h-full w-full transition-transform transform group-hover:scale-110"
                  src={blogPizzaImage}
                />
              </div>
              <h2 className="text-xl font-medium title-font text-orange-500 mt-5">
                10 February 2022
              </h2>
              <p className="text-base leading-relaxed mt-2 text-white">
                Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis
              </p>
              <a className="text-indigo-500 inline-flex items-center mt-3">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="p-4 md:w-1/3 mb-6 border border-2">
              <div className="rounded-lg h-64 overflow-hidden group">
                <Image
                  alt="about"
                  className="object-cover object-center h-full w-full transition-transform transform group-hover:scale-110"
                  src={aboutImage}
                />
              </div>
              <h2 className="text-xl font-medium title-font text-orange-500 mt-5">
                10 February 2022
              </h2>
              <p className="text-base leading-relaxed mt-2 text-white">
                Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis
              </p>
              <a className="text-indigo-500 inline-flex items-center mt-3">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default News
