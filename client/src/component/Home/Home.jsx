import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>YourHR</h1>
        <p>Find your ideal job with ease</p>
      </header>
      <main>
        <section className="home-content">
          <h2>Welcome to YourHR</h2>
          <p>YourHR is dedicated to helping you find the job that matches your skills and preferences. Get started today by signing up and uploading your resume.</p>
          <Link to='/signup' className="signup-button">
            Sign Up Now
          </Link>
        </section>
      </main>
    </div>
  )
}

export default Home
