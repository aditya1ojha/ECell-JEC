import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-black via-blue-900 to-black text-white'>
        
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='md:pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>

            <p className='flex text-xl mt-20'>
                The Entrepreneurship Cell (E-Cell) of Jorhat Engineering College serves as a platform for students on campus who have startup aspirations. Its primary goal is to educate students on approaching investors and provide guidance and mentorship through connections with successful alumni who have startup experience. The E-Cell's mission is to foster and accelerate the startup ecosystem within the college by acting as a facilitator between ideas and execution. 
            </p>

            <br/>

            <p className='text-xl'>
                It aims at encouraging and supporting students in participating in business plan competitions and other startup-related events, providing them with necessary tools and resources. Additionally, the E-Cell focuses on networking with entrepreneurs and collaborating with other institutes' startups or entrepreneurship cells to assist students from their own college.
            </p>
        </div>
    </div>
    
  )
}

export default About