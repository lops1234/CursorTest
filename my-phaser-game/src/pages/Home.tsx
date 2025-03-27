import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Welcome to My Phaser Game Demo</h1>
      <p>This is a simple demo showing React with Phaser integration</p>
      <Link 
        to="/game" 
        style={{
          display: 'inline-block',
          padding: '1rem 2rem',
          backgroundColor: '#4CAF50',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '5px',
          marginTop: '1rem'
        }}
      >
        Play Game
      </Link>
    </div>
  )
}

export default Home 