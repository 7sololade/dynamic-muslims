import React from 'react'
// import { Link } from 'react-router-dom'
import '../styles/BlogContent.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
// import blogData from '../blogFile'


export default function BlogContent(props) {

  const [newsOpen, setNewsOpen] = useState(false)

  function clickNews(){
    setNewsOpen(!newsOpen)
    console.log("clicked");
  }

  // const blogElement = blogData.map(blogDatum, index=>{
  //   return(
  //     <div>
        
  //     </div>
  //       // console.log(blogData);
  //   )
  // })


  return (

    <div className="blogDetails">

      <div className="blogDetails-wrapper">

        <div className="blog-img">
          <img src={props.img} alt="" />
        </div>
        <h1>
          {props.title}
        </h1>

        <p className={newsOpen? "show-news" : "hide-news"  }>
          {props.content}  
        </p>

        <div className='btn-link' onClick={clickNews} >

          {newsOpen? 
            <button >Collapse</button> : <button >Read more</button>}
          

        </div>
      </div>  
    </div>
  )
}