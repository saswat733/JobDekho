import React from 'react'
import Hero from '../components/Home/Hero'
import HomeStats from '../components/Home/HomeStats'
import LogoSlider from '../components/Home/LogoSlider'
import JobSeekers from '../components/Home/JobSeekers'
import HomeRecruiters from '../components/Home/HomeRecruiters'
import Footer from '../components/Home/Footer'

const Home = () => {
  return (
    <div>
        <Hero/>
        <HomeStats/>
        <LogoSlider/>
        <JobSeekers/>
        <HomeRecruiters/>
        <Footer/>
    </div>
  )
}

export default Home