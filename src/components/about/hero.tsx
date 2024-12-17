import React from 'react'
import Link from 'next/link'

function AboutHero() {
  return (
    <section
      style={{
        width: "100%",
        backgroundImage: 'url("/heropic.png")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        paddingTop: "3rem", // 12 (py-12)
        paddingBottom: "3rem", // 12 (py-12)
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          paddingLeft: "1rem", // px-4
          paddingRight: "1rem", // px-4
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h1
            style={{
              fontSize: "2rem", // text-3xl
              lineHeight: "tight", // leading-tight
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "1rem", // mb-4
            }}
          >
            Our About
          </h1>
          <div
            style={{
              fontSize: "1rem", // text-base
              display: "flex",
              gap: "0.5rem", // gap-2
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <Link href="/" style={{ color: "white", textDecoration: "none", transition: "color 0.3s", cursor: "pointer" }}>
              Home
            </Link>
            <span style={{ color: "white" }}>/</span>
            <Link href="/about" style={{ color: "#FF9F0D", textDecoration: "none" }}>
              About
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero
