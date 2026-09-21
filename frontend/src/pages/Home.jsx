import React from 'react'
import Hero from '../components/home/Hero'
import Services from '../components/home/Services'
import Process from '../components/home/Process'
import WhyChooseArivra from '../components/home/WhyChooseUs'
import Testimonials from '../components/home/Testimonials'
import FAQ from '../components/home/FAQ'

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Process />
      <WhyChooseArivra />
      <Testimonials />
      <FAQ />
    </div>
  )
}

export default Home
