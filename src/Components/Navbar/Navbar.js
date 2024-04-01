import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navBar'>
      <Link to="/">
      <button>Home</button>
      </Link>
      <Link to="/about">
      <button>About Us</button>
      </Link>
    </div>
  )
}

export default Navbar