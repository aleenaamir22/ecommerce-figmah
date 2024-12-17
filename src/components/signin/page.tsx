import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { ImAppleinc } from "react-icons/im";

export default function SigninPage() {
  return (
    <>
      <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
        {/* Signin Form */}
        <section style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
          <div style={{ margin: '0 auto', maxWidth: '28rem', backgroundColor: 'white', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '0.375rem', padding: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', textAlign: 'center' }}>Sign In</h3>
            <form>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Name</label>
                <input
                  type="text"
                  style={{ width: '100%', border: '1px solid #ddd', borderRadius: '0.375rem', padding: '0.5rem 1rem', outline: 'none' }}
                  placeholder="Enter your name"
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email</label>
                <input
                  type="email"
                  style={{ width: '100%', border: '1px solid #ddd', borderRadius: '0.375rem', padding: '0.5rem 1rem', outline: 'none' }}
                  placeholder="Enter your email"
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Password</label>
                <input
                  type="password"
                  style={{ width: '100%', border: '1px solid #ddd', borderRadius: '0.375rem', padding: '0.5rem 1rem', outline: 'none' }}
                  placeholder="Enter your password"
                />
              </div>
              <div style={{ display: 'flex', justifyContent: 'start', gap: '0.5rem', alignItems: 'center', marginBottom: '1rem' }}>
                <input type="checkbox" style={{}} />
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
                Sign In
              </button>
              <p style={{ textAlign: 'center', marginTop: '1rem' }}>
                <Link href="#" style={{ color: '#fbbf24', textDecoration: 'none' }}>Forgot password?</Link> or <Link href="/signup" style={{ color: '#fbbf24', textDecoration: 'none' }}>Sign Up</Link>
              </p>
            </form>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <p>or</p>
              <button
                style={{
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
                }}
              >
                <FcGoogle style={{ height: '1.5rem', marginRight: '0.5rem' }} />
                Sign in with Google
              </button>
              <button
                style={{
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
                }}
              >
                <ImAppleinc style={{ height: '1.5rem', marginRight: '0.5rem' }} />
                Sign in with Apple
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
