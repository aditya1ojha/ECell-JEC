import React, { useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import {Link} from 'react-scroll';

import jecLogo from '../assets/jecLogo.jpg';
import ecellLogo from '../assets/ecellLogo.jpeg';

const NavBar = () => {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'home',
        },
        {
            id: 2,
            link: 'about',
        },
        {
            id: 3,
            link: 'team',
        },
        {
            id: 4,
            link: 'events',
        },
        {
            id: 5,
            link: 'startups',
        },
        {
            id: 6,
            link: 'incubators',
        },
        {
            id: 7,
            link: 'contact',
        },
    ];



  return (

    // main navbar
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed z-10'>

        <div>
            <img src= {jecLogo} alt='jecLogo' className='w-12'></img>
        </div>

        <ul className='hidden md:flex'>
            {links.map(({id, link}) => ( //we have destructured it; otherwise we'd have to write (link) here and then key={link.id} and {link.link} in the later part of the code
                <li key={id} className='text-left px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200'>
                    <Link 
                    to={link} 
                    smooth 
                    duration={500}
                    spy
                    activeStyle={{color:'#f2edf1'}}>
                        {link}
                    </Link>
                </li>
            ))}
        </ul>

        <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden" >
            {nav ? <FaTimes size={30} /> : <FaBars size={30}/>}
        </div>


        {nav && (
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-blue-900 text-gray-500 z-10'>
            {links.map(({id, link}) => ( 
                    <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                        <Link onClick={() => setNav(!nav)} 
                        to={link} 
                        smooth 
                        duration={500}
                        spy>
                            {link}
                        </Link>                
                    </li>
            ))}
            </ul>
        )}


         <div>
            <img src= {ecellLogo} alt='ecellLogo' className='w-12'></img>
        </div>


        
        
    </div>
  );
};

export default NavBar;