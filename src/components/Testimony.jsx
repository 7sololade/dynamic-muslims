import React from 'react'
import '../styles/Testimony.css'
import parents from '../assets/testimonial/parents.jpg'
import frindz from '../assets/testimonial/AST_0402.jpg'
import vendors from '../assets/testimonial/356785506_1439385483463256_8881786781320396867_n.jpg'
import twinnie from '../assets/testimonial/356785506_1439385483463256_8881786781320396867_n.jpg'

export default function Testimony() {
  return (
      <article className="testimony">

        <div className="testimony-title">
          <h2>Our testimonials</h2>
          <p>Our team  and event managetement is well trained and highly qualified experts in which objectives of the event is met and every participant have a positive feedback for the crew.</p>
        </div>


        <div className="testimonial">


          <div className='comment-wrapper'>
            <div className="comment-img">
              <img className='img-tes' src={parents} alt="" srcset="" />
            </div>
            <div className="testi-details">
              <h3>Lorem, ipsum.</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ex eveniet minima ipsam dolorum itaque!</p>
            </div>
          </div>

          
          <div className='comment-wrapper'>
            <div className="comment-img">
              <img className='img-tes' src={frindz} alt="" srcset="" />
            </div>
            <div className="testi-details">
              <h3>Lorem, ipsum.</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ex eveniet minima ipsam dolorum itaque!</p>
            </div>
          </div>
          <div className='comment-wrapper'>
            <div className="comment-img">
              <img className='img-tes' src={vendors} alt="" srcset="" />
            </div>
            <div className="testi-details">
              <h3>Lorem, ipsum.</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ex eveniet minima ipsam dolorum itaque!</p>
            </div>
          </div>
          <div className='comment-wrapper'>
            <div className="comment-img">
              <img className='img-tes' src={twinnie} alt="" srcset="" />
            </div>
            <div className="testi-details">
              <h3>Lorem, ipsum.</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ex eveniet minima ipsam dolorum itaque!</p>
            </div>
          </div>
        </div>
      </article>
  )
}
