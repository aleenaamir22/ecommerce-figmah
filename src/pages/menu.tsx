"use client";

import Dessert from "@/components/Desert";
import Drink from "@/components/Drink";
import MainCourse from "@/components/MainCourse";
import StarterMenu from "@/components/StartMenu";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import heroPic from "../../public/heropic.png";
import capImg from "../../public/cap.png";
import burgerImg from "../../public/burger.png";
import spoonImg from "../../public/spon.png";
import pizzaImg from "../../public/pizza.png";

const Menu = () => {
  return (
    <div style={{ fontFamily: "sans-serif", color: "gray" }}>
      {/* Header Section */}
      <section style={{ width: "100%", position: "relative", height: "300px" }}>
  {/* Hero Image */}
  <Image
    src={heroPic}
    alt="Hero Background"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover", // Ensures image covers the entire section
    }}
  />
  
  <div style={{
    position: "absolute", // Absolutely position the text on top of the image
    top: "50%", // Center vertically
    left: "50%", // Center horizontally
    transform: "translate(-50%, -50%)", // Adjust for exact center
    textAlign: "center",
    color: "white",
    zIndex: 10, // Ensure text appears above the image
  }}>
    <h1 style={{ fontSize: "2em", fontWeight: "bold", color: "orange", marginBottom: "0.5rem" }}>
      Our Menu
    </h1>
    <p style={{ fontSize: "1.2rem", color: "white" }}>
      <Link href="/" style={{ color: "orange", textDecoration: "none" }}>
        Home
      </Link>{" "}
      &gt;{" "}
      <span style={{ color: "white", textDecoration: "none" }}>Menu</span>
    </p>
  </div>
</section>

<br />

{/* Main Content */}
<section style={{ padding: "4rem 1rem", backgroundColor: "#f3f4f6" }}>
  <div style={{ margin: "0 auto", maxWidth: "1024px" }}>
    <StarterMenu />
  </div>
</section>


      {/* Main Course */}
      <section
        style={{
          padding: "4rem 1rem",
          backgroundColor: "#f3f4f6", 
        }}
      >
        <div style={{ margin: "0 auto", maxWidth: "1024px" }}>
          <MainCourse />
        </div>
      </section>
      <br />

      {/* Clients */}
      <section>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "300px",
            border: "2px solid #F97316",
            backgroundColor: "black",
            borderRadius: "0.375rem",
          }}
        >
          {/* Icons Section */}
          <div
            style={{
              position: "relative",
              zIndex: 10,
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              height: "100%",
              maxWidth: "1024px",
              margin: "0 auto",
              padding: "0 1rem",
            }}
          >
            {[
              { src: capImg, label: "Professional Chef", value: "420" },
              { src: burgerImg, label: "Items of Food", value: "320" },
              { src: spoonImg, label: "Years of Experience", value: "30+" },
              { src: pizzaImg, label: "Happy Customers", value: "220" },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  width={100}
                  height={100}
                  style={{ marginBottom: "0.5rem" }}
                />
                <p
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontSize: "0.875rem",
                  }}
                >
                  {item.label}
                </p>
                <p style={{ color: "white", fontSize: "0.875rem" }}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <br />

      {/* Dessert Section */}
      <section style={{ padding: "4rem 1rem", backgroundColor: "white" }}>
        <div style={{ margin: "0 auto", maxWidth: "1024px" }}>
          <Dessert />
        </div>
      </section>
      <br />

      {/* Drinks Section */}
      <section
        style={{
          padding: "4rem 1rem",
          backgroundColor: "#f3f4f6",
        }}
      >
        <div style={{ margin: "0 auto", maxWidth: "1024px" }}>
          <Drink />
        </div>
      </section>
    </div>
  );
};

export default Menu;
