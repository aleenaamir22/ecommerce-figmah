"use client"
import React from 'react'
import Image from 'next/image'
import foodImage from '../../../public/food4.png'
import blogPizzaImage from '../../../public/blogpizza.jpeg'
import aboutImage from '../../../public/about4.png'

const OurNews = () => {
  return (
    <div>
      <section style={{ fontFamily: 'sans-serif', backgroundColor: 'black' }}>
        <div style={{ padding: '24px 20px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', padding: '24px 0', marginBottom: '48px', alignItems: 'center', color: 'white' }}>
            <h2 style={{ color: '#FF9F0D', fontWeight: '500', fontSize: '24px', marginBottom: '16px' }}>
              Blog Post
            </h2>
            <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px' }}>
              <span style={{ color: '#FF9F0D' }}>La</span>test News & Blogs
            </h1>
          </div>
          {/* Use flexbox to display the items in a single line */}
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px' }}>
            <div style={{ padding: '16px', width: '100%', maxWidth: '33%', marginBottom: '24px', border: '2px solid #e2e8f0' }}>
              <div style={{ borderRadius: '8px', height: '256px', overflow: 'hidden', transition: 'transform 0.3s', }}>
                <Image
                  alt="food"
                  style={{ objectFit: 'cover', objectPosition: 'center', height: '100%', width: '100%' }}
                  src={foodImage}
                />
              </div>
              <h2 style={{ fontSize: '20px', fontWeight: '500', color: '#FF9F0D', marginTop: '20px' }}>
                10 February 2022
              </h2>
              <p style={{ fontSize: '16px', lineHeight: '1.5', marginTop: '8px', color: 'white' }}>
                Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis
              </p>
              <a style={{ color: '#4F46E5', display: 'inline-flex', alignItems: 'center', marginTop: '12px' }}>
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  style={{ width: '16px', height: '16px', marginLeft: '8px' }}
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div style={{ padding: '16px', width: '100%', maxWidth: '33%', marginBottom: '24px', border: '2px solid #e2e8f0' }}>
              <div style={{ borderRadius: '8px', height: '256px', overflow: 'hidden', transition: 'transform 0.3s',  }}>
                <Image
                  alt="blog pizza"
                  style={{ objectFit: 'cover', objectPosition: 'center', height: '100%', width: '100%' }}
                  src={blogPizzaImage}
                />
              </div>
              <h2 style={{ fontSize: '20px', fontWeight: '500', color: '#FF9F0D', marginTop: '20px' }}>
                10 February 2022
              </h2>
              <p style={{ fontSize: '16px', lineHeight: '1.5', marginTop: '8px', color: 'white' }}>
                Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis
              </p>
              <a style={{ color: '#4F46E5', display: 'inline-flex', alignItems: 'center', marginTop: '12px' }}>
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  style={{ width: '16px', height: '16px', marginLeft: '8px' }}
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div style={{ padding: '16px', width: '100%', maxWidth: '33%', marginBottom: '24px', border: '2px solid #e2e8f0' }}>
              <div style={{ borderRadius: '8px', height: '256px', overflow: 'hidden', transition: 'transform 0.3s' }}>
                <Image
                  alt="about"
                  style={{ objectFit: 'cover', objectPosition: 'center', height: '100%', width: '100%' }}
                  src={aboutImage}
                />
              </div>
              <h2 style={{ fontSize: '20px', fontWeight: '500', color: '#FF9F0D', marginTop: '20px' }}>
                10 February 2022
              </h2>
              <p style={{ fontSize: '16px', lineHeight: '1.5', marginTop: '8px', color: 'white' }}>
                Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis
              </p>
              <a style={{ color: '#4F46E5', display: 'inline-flex', alignItems: 'center', marginTop: '12px' }}>
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  style={{ width: '16px', height: '16px', marginLeft: '8px' }}
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
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
  )
}

export default OurNews
