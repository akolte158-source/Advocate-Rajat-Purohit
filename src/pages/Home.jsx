import React from 'react'
import Hero from '../components/Hero'
import Testimonials from '../components/Testimonials'
import PracticeAreas from '../components/PracticeAreas'
import AdvocateAppointment from '../components/AdvocateAppointment'

const Home = () => {
  return (
    <div>
        <Hero />
        <PracticeAreas />
        <AdvocateAppointment />
        <Testimonials />
    </div>
  )
}

export default Home