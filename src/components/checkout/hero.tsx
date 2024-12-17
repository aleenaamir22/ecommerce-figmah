import React from 'react'
import Link from 'next/link'

function CheckOutHero() {
  return (
    <section style={{
      width: '100%',
      backgroundImage: 'url("/heropic.png")',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      paddingTop: '3rem', // equivalent to py-12
      paddingBottom: '3rem', // equivalent to py-12
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        paddingLeft: '1rem',
        paddingRight: '1rem'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <h1 style={{
            fontSize: '1.875rem', // equivalent to text-3xl
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            marginBottom: '1rem', // equivalent to mb-4
            lineHeight: 'tight',
          }}>
            Checkout page
          </h1>
          <div style={{
            fontSize: '1rem', // equivalent to text-base
            display: 'flex',
            gap: '0.5rem',
            textAlign: 'center',
            justifyContent: 'center'
          }}>
            <Link href="/" style={{
              color: 'white',
              textDecoration: 'none',
              transition: 'color 0.3s',
            }}>
              Home
            </Link>
            <span style={{ color: 'white' }}>/</span>
            <Link href="/checkOut" style={{
              color: '#FF9F0D',
              textDecoration: 'none',
            }}>
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CheckOutHero
