"use client"
import Image from "next/image";
import { IoPlayOutline } from "react-icons/io5";


export default function AboutUs() {
  return (
    <div>
      <section style={{ color: "black", backgroundColor: "white", width: "100%", padding: "40px 20px" }}>
  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
    
    {/* Left Images */}
    <div style={{ flex: "1", display: "flex", flexDirection: "column", alignItems: "center", marginRight: "2px" }}>
      <Image
        alt="hero"
        src="/aboutus.png"
        width={309}
        height={536}
        style={{
          objectFit: "cover",
          objectPosition: "center",
          width: "200px",
          height: "300px",
          borderRadius: "4px",
          marginLeft:"-200px",
          marginTop:"90px"
        }}
      />
      <div style={{ marginTop: "1px", display: "flex", flexDirection: "column", gap: "10px", marginLeft:"2px" }}>
        <Image
          alt="image2"
          src="/about4.png"
          width={309}
          height={271}
          style={{
            objectFit: "cover",
            objectPosition: "center",
            width: "200px",
            height: "200px",
            borderRadius: "4px",
            marginTop:"-260px",
            marginLeft:"240px"
          }}
        />
        <Image
          alt="image3"
          src="/aboutimg2.jpg"
          width={309}
          height={382}
          style={{
            objectFit: "cover",
            objectPosition: "center",
            width: "200px",
            height: "210px",
            borderRadius: "4px",
            marginTop:"10px",
            marginLeft:"240px"
          }}
        />
      </div>
    </div>

    {/* Right Text Content */}
    <div style={{ flex: "1", paddingLeft: "24px", display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left" }}>
      <h1 style={{ fontSize: "24px", marginBottom: "16px", fontWeight: "medium", color: "#FFA500", fontStyle: "italic" }}>
        About Us
      </h1>
      <p style={{ color: "black", fontSize: "24px", fontWeight: "bold" }}>
        Food is an important part of a balanced Diet
      </p>
      <p style={{ marginBottom: "32px", marginTop: "32px", color: "#333333" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.
        Urna, elit augue urna, vitae feugiat pretium donec id elementum.
      </p>
      <div style={{ display: "flex", gap: "16px" }}>
        <button
          style={{
            color: "white",
            backgroundColor: "#FF7F00",
            border: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Show More
        </button>
        <button
          style={{
            color: "black",
            backgroundColor: "white",
            border: "2px solid #FF7F00",
            padding: "10px 20px",
            borderRadius: "8px",
            fontSize: "18px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <IoPlayOutline />
          Watch Video
        </button>
      </div>
    </div>
  </div>
</section>

      {/* Second Section */}
      <section style={{ color: "black"}}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "24px 20px", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
          <h1 style={{ color: "#000", fontSize: "24px", fontWeight: "bold", marginTop: "16px" }}>Why Choose Us</h1>
          <p style={{ color: "#000", textAlign: "center", marginTop: "8px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.
          </p>
          <Image
            alt="hero"
            src="/aboutimg4.jpg"
            width={1320}
            height={386}
            style={{
              objectFit: "cover",
              objectPosition: "center",
              width: "full",
              height: "300px",
              marginTop: "10px",
            }}
          />
        </div>
      </section>

      {/* Third Section */}
      <section style={{ color: "white", backgroundColor: "white", width:"full" }}>
        <div style={{ padding: "20px 0", maxWidth: "full", margin: "0 auto" }}>
          <div style={{ display: "flex", margin: "16px" }}>
            <div style={{ padding: "16px", width: "33%" }}>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", border: "2px solid #000", borderRadius: "8px", overflow: "hidden",backgroundColor:"white" }}>
                <Image
                  src="/student.png"
                  width={80}
                  height={80}
                  alt="blog"
                  style={{ objectFit: "cover", borderRadius: "50%" }}
                />
                <div style={{ padding: "24px" }}>
                  <h1 style={{ fontSize: "18px", fontWeight: "bold", color: "black", marginBottom: "8px", textAlign: "center" }}>BEST CHEF</h1>
                  <p style={{ fontSize: "14px", color: "black", textAlign: "center" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat.
                  </p>
                </div>
              </div>
            </div>
            <div style={{ padding: "16px", width: "33%" }}>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", border: "2px solid #000", borderRadius: "8px", overflow: "hidden" ,backgroundColor:"white"}}>
                <Image
                  src="/coffeimg.jpg"
                  width={80}
                  height={80}
                  alt="blog"
                  style={{ objectFit: "cover", borderRadius: "50%" }}
                />
                <div style={{ padding: "24px" }}>
                  <h1 style={{ fontSize: "18px", fontWeight: "bold", color: "black", marginBottom: "8px", textAlign: "center" }}>120 Item food</h1>
                  <p style={{ fontSize: "14px", color: "black", textAlign: "center" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat.
                  </p>
                </div>
              </div>
            </div>
            <div style={{ padding: "16px", width: "33%" }}>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", border: "2px solid #000", borderRadius: "8px", overflow: "hidden",backgroundColor:"white" }}>
                <Image
                  src="/man.png"
                  width={80}
                  height={80}
                  alt="blog"
                  style={{ objectFit: "cover", borderRadius: "50%" }}
                />
                <div style={{ padding: "24px" }}>
                  <h1 style={{ fontSize: "18px", fontWeight: "bold", color: "black", marginBottom: "8px", textAlign: "center" }}>Clean Environment</h1>
                  <p style={{ fontSize: "14px", color: "black", textAlign: "center" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        <footer>
        <div style={{backgroundColor:"gray",color:"white",padding:"30px",width:"1400px"}}>
          <span >
            Copyright ©2024 by Aleena AMIR. All Rights Reserved.
          </span>
        </div>
        </footer>
    </div>
  );
}
