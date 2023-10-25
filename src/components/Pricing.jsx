import React from 'react'
import '../styles/Pricing.css'
import { Link } from 'react-router-dom'

export default function Pricing() {
  return (
    <div className="our-pricing">

      <div className="pricing-content">
        <h1>Pricing that suits your taste</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, laboriosam ipsum quod veritatis eius perspiciatis?</p>
      </div>

      
      <div className="content-cards">


        <div className=" card card-one">
          <h1 className="title">Bronze Card</h1>
          <hr className='hr' />
          <div className="pricing-det">
            {/* <h3>#5000 </h3> */}
            <ul>
              <li>Cards games</li>
              <li>Trivia</li>
              <li>Lorem, ipsum.</li>
              <li>Henna</li>
              <li>Face painting</li>
              <li>Soft drinks</li>
            </ul>
            <Link>Choose plan</Link>
          </div>
        </div>



        <div className=" card card-two">
          <h1 className="title">Gold Card</h1>
          {/* <hr className='hr' /> */}
          <div className="pricing-det">
            {/* <h3>#20,000</h3> */}
            <ul>
              <li>Cards games</li>
              <li>Trivia</li>
              <li>Metaverse games</li>
              <li>Sip & paint</li>
              <li>Henna</li>
              <li>FIFA</li>
              <li>Yellow Wine</li>
              <li>Face painting</li>
            </ul>
            <Link>Choose plan</Link>
          </div>
        </div>
        <div className=" card card-three">
          <h1 className="title">Silver Card</h1>
          <hr className='hr' />
          <div className="pricing-det">
            {/* <h3>#12,000</h3> */}
            <ul>
              <li>Cards games</li>
              <li>Trivia</li>
              <li>Metaverse games</li>
              <li>Henna</li>
              <li>FIFA</li>
              <li>Face painting</li>
              <li>Cocktail</li>
            </ul>
            <Link>Choose plan</Link>
          </div>
        </div>

      </div>
        
    </div>
  )
}
