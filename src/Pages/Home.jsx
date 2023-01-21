import React from 'react'
import About from '../Components/About'
import Button from '../Components/Button'
import Footer from '../Components/Footer'
import Happy from '../Components/Happy'
import Hero from '../Components/Hero'
import Info from '../Components/Info'
import Insta from '../Components/Insta'
import Juices from '../Components/Juices'

import Locate from '../Components/Locate'
import Mission from '../Components/Mission'
import Nav from '../Components/Nav'
import Our from '../Components/Our'
import a from "../videoBg.mp4"
import  "./Home.css"
function Home() {
  return (
    <div>
        <Nav />
        <Hero/>
       <About/>
       <Mission/>
      <Info/>
      <Happy />
      <Juices/>
    <Our/>
    <Locate/>
    <Insta/>
    <Footer/>
    </div>
  )
}

export default Home