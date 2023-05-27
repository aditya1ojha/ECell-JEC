import React from 'react'

const Startups = () => {
  return (
    <div name="startups" className='w-full h-screen bg-gradient-to-b from-black to-blue-900 text-white'>
        
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='md:pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Startups</p>
            </div>

            <p className='flex text-xl mt-20'>
                We aim to provide a platform for budding entrepreneurs to see their ideas getting the wings to fly and become full fledged startups. As a testament to this goal of ours, we are initiating various programmes, like workshops by resource persons from CSIR-NEIST and Assam Startup and even a Mentor Connect programme in collaboration with Assam Startup. Refer to this database for current teams from JEC.
            </p>

            <br/>

            <p className='text-xl'>
                The details of the startups which are currently under us can be found through the following link:
            </p>
            <a className='text-xl text-yellow-300 underline' href='https://docs.google.com/spreadsheets/d/1WDiioqlo1fwYBxlhcgx4wfjmc6zk032zbecnItDxHU0/edit?usp=sharing'>
                Startups: E-Cell JEC
            </a>
        </div>
    </div>
    
  )
}

export default Startups