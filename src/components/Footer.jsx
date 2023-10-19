import React, { useState } from 'react'
import '../styles/Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {

  // const[getyear, setGetYear] = useState(0)

  const now = new Date();
  const getYear = now.getFullYear()

  return (
    <footer className="footer">

      <div className="footer-wrap">


        <div className="top-container">
          <div className="main-heading">
            <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit et soluta nostrum.</h3>
          </div>
          <div className="sub-heading">
            <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, unde!</h6>
            <Link className="a">Get ticket</Link>
          </div>
        </div>


        <div className="mid-container">

          <div className="contact-head">
            <h3>
              Contact
            </h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>

          <div className="footer-links">
            <div className="navigation">
              <h3>Navigation</h3>
              <ul>
                <li><Link className="aa" to="">Book a Call</Link></li>
                <li><Link className="aa" to="">Careers</Link></li>
                <li><Link className="aa" to="">Contact</Link></li>
                <li><Link className="aa" to="">Newsletter</Link></li>
              </ul>
            </div>
            <div className=" social-media">
              <h3>Follow Us</h3>
              <ul >
                <li><Link className="aa" to="">Facebook</Link></li>
                <li><Link className="aa" to="">Instagram</Link></li>
                <li><Link className="aa" to="">YouTube</Link></li>
                <li><Link className="aa" to="">X</Link></li>
              </ul>
            </div>
          </div>
      </div>
      <div className="bottom-level">
        <div className="terms">
          <Link>Terms</Link>  
          <Link>Policy</Link> 
        </div>
        <div className="incorporate">
          <p> 
            {getYear} 
            <span>&copy; Dynamics Muslims All rights reserved.</span>
          </p>
        </div>
      </div>
    </div>
  </footer>
  
  )
}