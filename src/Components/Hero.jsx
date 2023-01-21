import React from 'react'
import a from "../videoBg.mp4"
function Hero() {
  return (
    <div>
       <video className='los' src={a} controls/>
    </div>
  )
}

export default Hero