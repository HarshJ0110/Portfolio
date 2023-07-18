import React from 'react'
import Navbar from '../Components/Navbar'
import HeroImg2 from "../Components/HeroImg2"
import Footer from '../Components/Footer'
import Work from '../Components/Work'

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECT" text="Some of my most recent works"/>
      <Work />
      <Footer />
    </div>
  )
}

export default Project
