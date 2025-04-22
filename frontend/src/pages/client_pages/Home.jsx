import React from 'react'
import Hero from '../../components/client_components/Hero'
import FeaturesHero from '../../components/client_components/FeaturesHero'
import SliderHeroLeft from '../../components/client_components/SliderHeroLeft'
import SliderHeroRight from '../../components/client_components/SliderHeroRight'
import About from './About'

const Home = () => {
  return (
    <>
      <Hero />
      <div className='mt-5'>
        <SliderHeroRight />
      </div>
      <div className='mt-5'>
        <SliderHeroLeft />
      </div>
      <div className='mt-5'>
        <FeaturesHero />
      </div>

    </>
  )
}

export default Home