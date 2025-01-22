import React from 'react';
import Link from 'next/link';

function ProductHero() {
  return (
    <section
      style={{
        width: "100%",
        backgroundImage: `url("/heropic.png")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        paddingTop: "3rem",
        paddingBottom: "3rem",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          paddingLeft: "1rem",
          paddingRight: "1rem",
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
              fontSize: "2rem",
              lineHeight: "1.2",
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "1rem",
            }}
          >
            Shop
          </h1>
          <div
            style={{
              fontSize: "1rem",
              display: "flex",
              gap: "0.5rem",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Link
              href="/"
              style={{
                color: "white",
                textDecoration: "none",
                transition: "color 0.3s",
              }}
            >
              Home
            </Link>
            <span style={{ color: "white" }}>/</span>
            <Link
              href="/shop"
              style={{ color: "#FF9F0D", textDecoration: "none" }}
            >
              Shop
            </Link>
          </div>
        </div >
      </div>
      </section>
      
  );
}

export default ProductHero;
