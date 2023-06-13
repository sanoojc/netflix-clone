import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='Navbar'>
      <div className="left">
        <img className='Netflix-Logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix" />
        <h6>Home</h6>
        <h6>TV Shows</h6>
        <h6>Movies</h6>
        <h6>Recently Added</h6>
        <h6>My List</h6>
      </div>
      <div className="right">
      <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
        <h6>KIDS</h6>
        <h6>DVD</h6>
        <i class="fa-solid fa-bell"></i>
        <i class="fa-solid fa-user"></i>
      </div>

     </div>
  )
}

export default Navbar