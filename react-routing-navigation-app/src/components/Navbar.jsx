import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
      <>
        <nav
          style={{ lineHeight:'50px', backgroundColor: "#000", padding: "20px", display: "flex", justifyContent:'space-between' }}
        >
          <h2 style={{ color: "#ccc", fontSize: "24px", marginLeft:'100px'}}>E-commerce</h2>
          <div style={{marginRight:'100px', lineHeight:'50px'}}>
            <Link to="/" style={{ color: "#ccc", fontSize: "24px", marginRight:'50px', textDecoration:'none'}}>
              Home
            </Link>
            <Link to="/about" style={{ color: "#ccc", fontSize: "24px", marginRight:'50px', textDecoration:'none' }}>
              About
            </Link>
            <Link to="/contact" style={{ color: "#ccc", fontSize: "24px", marginRight:'50px', textDecoration:'none' }}>
              Contact
            </Link>
          </div>
        </nav>
        <h1>My Website</h1>
      </>
    );
}

export default Navbar