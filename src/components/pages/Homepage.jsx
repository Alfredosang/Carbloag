import React from 'react'
import Blogpost from '../Blogpost'
import Hero from '../Hero'
import Gallery from '../Gallery'
import Youtube from '../Youtube'
import Parallax from '../Parallaxdemo'
import Team from '../Team'
import Contact from '../Contact'

const Homepage = () => {
  return (
    <div>
        <Hero />
        <Blogpost />
        <Youtube />
        <Gallery />
        <Team />
        <Parallax />
        <Blogpost />
        <Contact />
    </div>
  )
}

export default Homepage