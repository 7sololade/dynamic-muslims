import React from 'react'
import Hero from '../components/Hero'
import Partners from '../components/Partners'
import Testimony from '../components/Testimony'
import Offer from '../components/Offer'
import CountDown from '../components/CountDown'
import Pricing from '../components/Pricing'
import Newsletter from '../components/Newsletter'
import BlogContent from '../components/BlogContent'
import blogData from '../blogFile'
import '../styles/HomePage.css'





export default function Homepage() {

  const blogElement = blogData.map((blogDatum, index)=>{
    return(
      <BlogContent
        key={index}
        img= {blogDatum.Image}
        title={blogDatum.title}
        content={blogDatum.content}
      
      />
    )
  })





  return (
    <>
      {/* <Layout/> */}
      <Hero/>
      <CountDown/>
      <Offer/>
      <Pricing/>
      <Testimony/>
      <div  className='blog-content'>
        {blogElement}
      </div>
      <Newsletter/>
      <Partners/>
    </>
  )
}