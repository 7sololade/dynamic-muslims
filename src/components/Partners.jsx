import React from 'react'
import nike from '../assets/partners/nike.png'
import coca from '../assets/partners/cocacola.png'
import indomie from '../assets/partners/Indomie.jpg'
import milo from '../assets/partners/milo b&W.png'
import checkers from '../assets/partners/checkers custard.jpg'
import '../styles/Partners.css'

export default function Partners() {
  return (
    <div className='partner-sec'>
        <h3>With the precious support of our partners</h3>
        <div className="partners-img">
            <div className="img-sec"><img src={nike} alt="" /></div>
            <div className="img-sec"><img src={coca} alt="" /></div>
            <div className="img-sec"><img src={indomie} alt="" /></div>
            <div className="img-sec"><img src={milo} alt="" /></div>
            <div className="img-sec"><img src={checkers} alt="" /></div>
        </div>
    </div>
  )
}