import React from 'react';
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import { Link } from 'react-scroll';

import ecellVector from '../assets/ecell_vector.png'


const Home = () => {
  return (
    <div name="home" className='h-screen w-full' style={{backgroundImage: `url(${ecellVector})`, backgroundSize:'cover'}}> {/*name attribute isn't rquired for react, but is necessary for react smooth scroll*/}

        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-start h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>ENTREPRENEURSHIP CELL</h2>
                <h2 className='text-3xl sm:text-4xl font-bold text-white py-3'>JORHAT ENGINEERING COLLEGE</h2>
                <p className='text-white py-4 max-w-md text-2xl'>
                    Innovate. Lead. Succeed.
                </p>


                <div>
                    <Link to='about'
                     smooth
                     duration={500}
                     className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-black via via-gray-800 to-blue-900 cursor-pointer'> Who are we?
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                        </span>
                    </Link>
                </div>

                {/* <div>
                    <img src={heroImage} alt='' className='mx-auto w-1/3 md:w-1/3 justify-end'></img>
                </div> */}
            </div>
        </div>

    </div>
  );
};

export default Home;