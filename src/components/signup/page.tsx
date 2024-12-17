import Link from "next/link";
import React from "react";
import Image from "next/image";

// Import images
import googleImage from "../../../public/google.png";
import appleImage from "../../../public/apple2.jpeg";

export default function SignUpPage() {
  return (
    <>
      <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
        {/* Signup Form */}
        <section style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
          <div style={{
            margin: '0 auto',
            maxWidth: '28rem',
            backgroundColor: 'white',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            borderRadius: '0.375rem',
            padding: '2rem'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              textAlign: 'center'
            }}>Sign Up</h3>
            <form>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500'
                }}>Name</label>
                <input
                  type="text"
                  style={{
                    width: '100%',
                    border: '1px solid #ddd',
                    borderRadius: '0.375rem',
                    padding: '0.5rem 1rem',
                    outline: 'none'
                  }}
                  placeholder="Enter your name"
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500'
                }}>Email</label>
                <input
                  type="email"
                  style={{
                    width: '100%',
                    border: '1px solid #ddd',
                    borderRadius: '0.375rem',
                    padding: '0.5rem 1rem',
                    outline: 'none'
                  }}
                  placeholder="Enter your email"
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500'
                }}>Password</label>
                <input
                  type="password"
                  style={{
                    width: '100%',
                    border: '1px solid #ddd',
                    borderRadius: '0.375rem',
                    padding: '0.5rem 1rem',
                    outline: 'none'
                  }}
                  placeholder="Enter your password"
                />
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'start',
                gap: '0.5rem',
                alignItems: 'center',
                marginBottom: '1rem'
              }}>
                <input
                  type="checkbox"
                  style={{
                    border: '1px solid #ddd',
                    borderRadius: '0.375rem',
                    padding: '0.5rem 1rem',
                  }}
                />
                <span style={{ whiteSpace: 'nowrap' }}>Remember me?</span>
              </div>
              <button
                type="submit"
                style={{
                  width: '100%',
                  backgroundColor: '#fbbf24',
                  color: 'white',
                  fontWeight: 'bold',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.375rem',
                  transition: 'background-color 0.3s',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Sign Up
              </button>
              <p style={{ textAlign: 'center', marginTop: '1rem' }}>
                <Link href="#" style={{
                  color: '#fbbf24',
                  textDecoration: 'none'
                }}>Forgot password?</Link> or
                <Link href="/login" style={{
                  color: '#fbbf24',
                  textDecoration: 'none'
                }}> Sign In</Link>
              </p>
            </form>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <p>or</p>
              <button style={{
                width: '100%',
                backgroundColor: '#f3f4f6',
                border: '1px solid #ddd',
                color: 'black',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.375rem',
                marginTop: '0.5rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer'
              }}>
                <Image src={googleImage} 
                alt="Google" style={{
                  width: '20px',
                  height: '20px',
                  marginRight: '0.5rem'
                }} />
                Sign up with Google
              </button>
              <button style={{
                width: '100%',
                backgroundColor: '#f3f4f6',
                border: '1px solid #ddd',
                color: 'black',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.375rem',
                marginTop: '0.5rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer'
              }}>
                <Image src={appleImage} alt="Apple" style={{
                  width: '24px',
                  height: '24px',
                  marginRight: '0.5rem'
                }} />
                Sign up with Apple
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
