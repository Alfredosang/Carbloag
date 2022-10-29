import React from 'react'
import Blogpost from '../Blogpost'
import Hero from '../Hero'
import Gallery from '../Gallery'
import Youtube from '../Youtube'
import Parallax from '../Parallaxdemo'
import Team from '../Team'
import Contact from '../Contact'
import FilterSection from '../FilterSection'

const Homepage = ({post}) => {
  return (
    <div>
        <Hero />
        <FilterSection />
        {/* <Blogpost post={post} /> */}
        <Youtube />
        <Gallery />
        <Team />
        <Parallax />
        <Blogpost post={post} />
        <Contact />
    </div>
  )
}

export default Homepage