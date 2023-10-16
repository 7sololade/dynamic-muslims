import React from 'react'
import '../styles/Offer.css'

export default function Offer() {
  return (
    <div className='our-offer'>
        <article>
            <h1><span className='span-one'>More than a outdoor event,</span><span className='span-two' >a unique experience!</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero cupiditate porro iste? Architecto mollitia maiores laudantium nemo autem aut quos culpa voluptatibus fugiat dolorem quidem quaerat quod blanditiis, repudiandae sint.</p>
        </article>

        
        <div className="what-we-offer">
            <div className="services offer obg1">
                <h3>Sip & Paint</h3>
            </div>
            <div className="services offer obg2">
                <h3>FIFA </h3>
            </div>
            <div className="services offer obg3">
                <h3>Face paint</h3>
            </div>
            <div className="services offer obg4">
                <h3>Henna</h3>
            </div>
            <div className="services offer obg5">
                <h3>Quran Competition</h3>
            </div>
            <div className="services offer obg6">
                <h3>Group Games</h3>
            </div>
        </div>
    </div>
)
}
