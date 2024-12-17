import React from 'react';
import Link from 'next/link';

function Errorhero() {
  return (
    <section
      style={{
        width: "100%",
        backgroundImage: 'url("/heropic.png")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        paddingTop: "48px", 
        paddingBottom: "48px", 
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
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
            404
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
                transition: "color 0.3s ease",
              }}
            >
              Home
            </Link>
            <span style={{ color: "white" }}>/</span>
            <Link
              href="/404Error"
              style={{
                color: "#FF9F0D",
                textDecoration: "none",
              }}
            >
              404
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Errorhero;
