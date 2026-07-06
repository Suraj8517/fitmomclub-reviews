import React from 'react'
import Hero from '../Components/Home/Hero'
import VideoSection from '../Components/Home/VideoSection'
import TransformSection from '../Components/Home/TestimonialImages'
import StatsSection from '../Components/Home/StatSection'
import TestimonialSection from '../Components/Home/TestimonialSection'
import ProgramRatings from '../Components/Home/ProgramReview'
import CTASection from '../Components/Home/CTASection'
import FaqSection from '../Components/Home/FAQSection'
export default function Home() {
  return (
    <div>
        <Hero/>
        <StatsSection/>
        <VideoSection/>
        <TransformSection/>
        <TestimonialSection/>
        <ProgramRatings/>
        <CTASection/>
        <FaqSection/>
    </div>
  )
}
