import React from 'react'
import "../css/navbar.css"
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <div class='navbar'>
        <Link to="/"><p>Home</p></Link>
        <Link to="/score"><p>Score</p></Link>
        <Link to="/team"><p>team</p></Link>
        
        
    </div>
  )
}

export default navbar