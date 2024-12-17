"use client";

import { useState } from "react";
import Image from "next/image";

const blogImages = [
  {
    id: 1,
    image: "/blog1.jpg",
    title: "10 Reasons To Do A Digital Detox Challenge",
  },
  {
    id: 2,
    image: "/blog2.jpg",
    title: "Exploring Digital Wellness Strategies",
  },
  {
    id: 3,
    image: "/blog3.jpg",
    title: "The Impact of Technology on Mental Health",
  },
  {
    id: 4,
    image: "/blog4.jpg",
    title: "Balancing Screen Time and Real Life",
  },
];

export default function Blogpage() {
  const [images] = useState({ blogImages });

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "1.5rem 1rem" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {/* Main Blog Content */}
        <div style={{ width: "100%", maxWidth: "75%", marginRight: "1rem" }}>
          {images.blogImages.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundColor: "white",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                borderRadius: "0.5rem",
                overflow: "hidden",
                transition: "box-shadow 0.3s",
              }}
            >
              <div style={{ position: "relative", width: "100%", aspectRatio: "16/9" }}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 75vw"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div style={{ padding: "1rem" }}>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "start", textAlign: "center", marginBottom: "1rem" }}>
                  <div style={{ display: "flex", alignItems: "center", marginRight: "1rem" }}>
                    <span style={{ marginRight: "0.5rem" }}>📅</span>
                    <span>Feb 14, 2022</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", marginRight: "1rem" }}>
                    <span style={{ marginRight: "0.5rem" }}>💬</span>
                    <span>3 Comments</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <span style={{ marginRight: "0.5rem" }}>👤</span>
                    <span>Admin</span>
                  </div>
                </div>

                <h2 style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#2D3748", marginBottom: "1rem" }}>
                  {item.title}
                </h2>

                <p style={{ fontSize: "0.875rem", color: "#718096", marginBottom: "1.5rem" }}>
                  At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>

                {/* New Button */}
                <button
                  style={{
                    width: "100%",
                    padding: "0.5rem 1.5rem",
                    backgroundColor: "#FF9F0D",
                    color: "white",
                    fontSize: "0.875rem",
                    fontWeight: "bold",
                    borderRadius: "0.375rem",
                    transition: "background-color 0.3s",
                  }}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer>
        <div style={{ backgroundColor: "gray", color: "white", padding: "30px", width: "1400px" }}>
          <span>
            Copyright ©2024 by Aleena AMIR. All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}
