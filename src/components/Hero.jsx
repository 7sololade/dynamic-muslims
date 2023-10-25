import React from 'react'
import '../styles/Hero.css'
import { Link } from 'react-router-dom'

import facialPaint from '../assets/images/facial paint.jpg'
import sipPaint from '../assets/images/sip and paint grp.jpg'
import grpPic from '../assets/images/AST_0806.jpg'
import sendPic from '../assets/captured moments/AST_0135.jpg'
import tent from '../assets/captured moments/moment5.jpg'
import guys from '../assets/captured moments/moment6.jpg'

export default function Hero() {
  return (
    <div>
        
        <section className='section'>
            <main>
                <div className="main-text">
                    <h1> Events that comes with <span>extra</span> fun and  everlasting memorable </h1>
                </div>


                <div className="subcontent">
                    <div className="para-btn">
                        <div className="text-div">
                            <p>Lorem ipsum dolor adipisicing elit. Voluptates in magnam mollitia eius, voluptate numquam inventore reiciendis suscipit.</p>
                            <Link to='login&signup'> Register</Link>
                            <Link to='get-ticket'className='get_ticket' >Get Ticket</Link>
                        </div>

                        <div className="img-div">
                            <img className="img facialPaint" src={facialPaint} alt=""/>
                            <img  className="sendPic" src={sendPic} alt=""/>
                        </div>
                    </div>

                    <div className="scnd-img">
                        <img className="get-img facialPaint" src={sipPaint} alt=""/>
                        <img  className="sendPic" src={tent} alt=""/>
                    </div>
                </div>
            </main>
            <aside className='aside'>
                <img  className="full-img " src={grpPic} alt=""/>
                <img  className="sendPic" src={guys} alt=""/>
            </aside>
        </section>

    </div>
    )
}
