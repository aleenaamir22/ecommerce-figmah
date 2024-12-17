import React from 'react'
import Link from 'next/link'

function SignUpHero() {
  return (
    <section style={{
      width: '100%',
      backgroundImage: 'url("/heropic.png")',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      paddingTop: '3rem',
      paddingBottom: '3rem',
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        paddingLeft: '1rem',
        paddingRight: '1rem'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <h1 style={{
            fontSize: '1.875rem',
            textAlign: 'center',
            color: 'white',
            fontWeight: 'bold',
            marginBottom: '1rem',
            lineHeight: '1.2',
          }}>
            Sign up page
          </h1>
          <div style={{
            fontSize: '1rem',
            display: 'flex',
            gap: '0.5rem',
            textAlign: 'center',
            justifyContent: 'center',
          }}>
            <Link href="/" style={{
              color: 'white',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
            }}>
              Home
            </Link>
            <span style={{ color: 'white' }}>/</span>
            <Link href="/signup" style={{
              color: '#FF9F0D',
              textDecoration: 'none',
            }}>
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignUpHero
