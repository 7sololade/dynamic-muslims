import React from 'react'
import Hero from '../components/Hero'
import Partners from '../components/Partners'
import Testimony from '../components/Testimony'
import Offer from '../components/Offer'
import CountDown from '../components/CountDown'
import Pricing from '../components/Pricing'

// import Layout from '../pages/Layout'




export default function Homepage() {
  return (
    <>
      {/* <Layout/> */}
      <Hero/>
      <CountDown/>
      <Offer/>
      <Pricing/>
      <Partners/>
      <Testimony/>
    </>
  )
}


