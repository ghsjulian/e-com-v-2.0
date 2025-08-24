import React from 'react'
import { NavLink} from 'react-router-dom'
const HeroSection = () => {
  return (
    <div className="hero-section">
    <br/><br/>
        <NavLink to="/admin/login">Go To Admin Panel</NavLink>
    </div>
  )
}

export default HeroSection