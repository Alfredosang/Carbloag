import React from 'react'
import Blogpost from '../Blogpost'
import Hero from '../Hero'
import Services from '../Services'
import Youtube from '../Youtube'
import Parallax from '../Parallaxdemo'

const Homepage = () => {
  return (
    <div>
        <Hero />
        <Blogpost />
        <Youtube />
        <Services />
        <Parallax />
        <Blogpost />
    </div>
  )
}

export default Homepage