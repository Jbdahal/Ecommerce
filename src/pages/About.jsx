import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
  <div>

    <div className='text-2xl text-center pt-9 border-t border-gray-300'>
      <Title text1={'ABOUT'} text2={'US'}/>
    </div>

    <div className='my-10 flex flex-col md:flex-row gap-16'>
      <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>This is a clothing website made to sell/buy cloath</p>
        <p>We have made our choice to make this website a platform to provide only fashionable and great products that enhance one's beauty standards.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Our mission is great not something that is created for entertainment</p>
      </div>
    </div>

    <div className='text-xl py-4'>
      <Title text1={'WHY'} text2={'CHOOSE US'}/>
    </div>

    <div className='flex flex-col md:flex-row text-sm mb-20'>
      <div className='border border-gray-200  px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Quality Assurance:</b>
        <p className='text-gray-600'>We are always focus on making the product genuine </p>
      </div>
      <div className='border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Convenience:</b>
        <p className='text-gray-600'>We are always focus on making the product genuine </p>
      </div>
      <div className='border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Exceptional Customer Service:</b>
        <p className='text-gray-600'>We are always focus on making the product genuine </p>
      </div>
    </div>

    <NewsletterBox/>

  </div>
    
  )
}

export default About