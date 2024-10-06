import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Games from '../pages/Games'

export default function Home() {
  return (
    <div>
        <Navbar/>
        <Games/>
        {/* <Home1/> */}
        <Footer/>

    </div>
  )
}
