import React from 'react'
import { NavLink, Link} from 'react-router-dom'
import '../styles/Header.css'

export default function Header(props) {
  return (
    <header className='header'>
      <div className="banner">

        <div className="logo">
          <Link to="/">eidfair</Link>
        </div>
        <nav className='nav_links'>
          <NavLink className="active-link">explore</NavLink>
          <NavLink className="active-link">about us</NavLink>
          <NavLink className="active-link" to='ticket'>ticket</NavLink>
        </nav>
        <div className="toggle-btn" onClick={props.handleToggle} >
          {props.isMenuOpen? 
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z"/></svg> :
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M20.437 19.937a.5.5 0 0 1 0 1l-16.874.002a.5.5 0 0 1 0-1l16.874-.002Zm0-8.437a.5.5 0 0 1 0 1l-10 .001a.5.5 0 0 1 0-1l10-.001Zm0-8.438a.5.5 0 0 1 0 1l-16.874.001a.5.5 0 0 1 0-1l16.874-.001Z"/></svg>}
        </div>
      </div>
      <div   className ={props.isMenuOpen? " show-menu " : "hide-menu"} >
        <ul >


          
          <li><Link>explore</Link></li>

          
          <li><Link>about us</Link></li>

          
          <li><Link to='ticket'>ticket</Link></li>

          
          <li><Link to='login&signup'>login</Link></li>

          
          <li><Link>Refund policy</Link></li>

          
          <li><Link>terms of services</Link></li>
        </ul>
      </div>
    </header>
  )
}



