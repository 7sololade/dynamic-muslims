import React from 'react'
import errorJPG from '../assets/Scarecrow.png'
import { Link } from 'react-router-dom'
import '../styles/Error404.css'

export default function Error404() {
  return (
    <div className="error-wrap">

        <div className='error404'>
            
            <h1>Error  404</h1>
            <h3>page not found</h3>

            <div className="error-img">
                <img src={errorJPG} alt="" />
            </div>
            <Link to="/"> go home</Link>
        </div>
    </div>
  )
}
