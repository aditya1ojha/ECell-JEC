import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import teamMember from '../assets/teamMember.jpg'

import { FaLinkedin } from "react-icons/fa";

import React from 'react'

const Team = () => {

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    const members = [
        {
            id: 1,
            imgSrc: teamMember,
            memberName: 'Himraj Gogoi',
            memberTitle: 'Head',
            linkedin: "https://linkedin.com",
        },
        {
            id: 2,
            imgSrc: teamMember,
            memberName: 'Tamzid Ahmend',
            memberTitle: 'Head',
            linkedin: "https://linkedin.com",
        },
        {
            id: 3,
            imgSrc: teamMember,
            memberName: 'Meghna Goswami',
            memberTitle: 'Head',
            linkedin: "https://linkedin.com",
        },
        {
            id: 4,
            imgSrc: teamMember,
            memberName: 'Anupam Bharati',
            memberTitle: 'Board Member',
            linkedin: "https://linkedin.com",
        },
        {
            id: 5,
            imgSrc: teamMember,
            memberName: 'Vishal Mallick',
            memberTitle: 'Board Member',
            linkedin: "https://linkedin.com",
        },
        {
            id: 6,
            imgSrc: teamMember,
            memberName: 'Abhinash Barman',
            memberTitle: 'Board Member',
            linkedin: "https://linkedin.com",
        },
        {
            id: 7,
            imgSrc: teamMember,
            memberName: 'Aditya Ojha',
            memberTitle: 'Senior Executive',
            linkedin: "https://linkedin.com",
        },
        {
            id: 8,
            imgSrc: teamMember,
            memberName: 'Rahul Das',
            memberTitle: 'Senior Executive',
            linkedin: "https://linkedin.com",
        },
        {
            id:9,
            imgSrc: teamMember,
            memberName: 'Snigdhadip Sarmah',
            memberTitle: 'Senior Executive',
            linkedin: "https://linkedin.com",
        },

    ]



  return (
        
    <div name="team" className='w-full h-screen bg-gradient-to-b from-black to-fuchsia-950 text-white'>
        
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='md:pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Team</p>
            </div>


            
            <Carousel responsive={responsive}>
                {members.map(({id, imgSrc, linkedin, memberName, memberTitle}) =>
                    <div key={id} className="flex-col">
                        <img src={imgSrc} alt='team member' className="px-5 py-5"/>
                        <div className="text-center text-2xl text-yellow-200">
                            <h2>{memberName}</h2>
                        </div>
                        <div className="text-center text-lg text-gray-200 py-3">
                            <p>{memberTitle}</p>
                        </div>

                        <div className="text-center text-gray-500">
                        <a href={linkedin}>
                            <button><FaLinkedin size={25}/></button>
                        </a>
                        </div>
                    </div>  
                )}
                
            </Carousel> 


        </div>
    </div>
    
    
    
    

  )
}

export default Team