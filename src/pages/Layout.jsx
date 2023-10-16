import React from 'react'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer';



export default function SharedLayOut() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);


  function handleToggle(){
    setIsMenuOpen( !isMenuOpen)
    console.log("clicked");
  }


  return (
   <div>
      <Header 
        isMenuOpen={isMenuOpen} //state
        handleToggle={handleToggle } //function
      />

      <main>
        <Outlet/>
      </main>

    <Footer/>
  </div>
)
}



