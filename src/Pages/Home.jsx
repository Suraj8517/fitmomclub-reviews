import React from 'react'
import Hero from '../Components/Home/Hero'
import VideoSection from '../Components/Home/VideoSection'
import TransformSection from '../Components/Home/TestimonialImages'
import StatsSection from '../Components/Home/StatSection'
export default function Home() {
  return (
    <div>
        <Hero/>
        <StatsSection/>
        <VideoSection/>
        <TransformSection/>
    </div>
  )
}
