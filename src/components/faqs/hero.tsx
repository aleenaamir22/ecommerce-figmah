import React from 'react';
import Link from 'next/link';

function FaqHero() {
  return (
    <section
      style={{
        width: "100%",
        backgroundImage: 'url("/heropic.png")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        paddingTop: "48px", // py-12
        paddingBottom: "48px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px", // container width
          margin: "0 auto",   // centers the container
          paddingLeft: "16px", // px-4
          paddingRight: "16px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              fontSize: "36px", // text-3xl
              lineHeight: "1.25",
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "16px", // mb-4
            }}
          >
            FAQ page
          </h1>
          <div
            style={{
              fontSize: "16px", // text-base
              display: "flex",
              gap: "8px", // gap-2
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Link
              href="/"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Home
            </Link>
            <span style={{ color: "white" }}>/</span>
            <Link
              href="/FAQ"
              style={{
                color: "#FF9F0D",
                textDecoration: "none",
              }}
            >
              FAQ page
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqHero;
