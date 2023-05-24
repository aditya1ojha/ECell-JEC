import React, {useState} from 'react'
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { HiDocumentArrowDown } from "react-icons/hi2";



const SocialLinks = () => {

    const [socLink, setSoclink] = useState(false);

    const links = [
        {
            id:1,
            child:(
                <>
                    LinkedIn <FaLinkedin size={30}/>
                </>
            ),
            href: 'https://linkedin.com',
            style: 'rounded-tr-md'  
            //specific custom CSS just for the top link
        },
        {
            id:2,
            child:(
                <>
                    Instagram <FaInstagram size={30}/>
                </>
            ),
            href: 'https://instagram.com',
        },
        {
            id:3,
            child:(
                <>
                    Mail <HiOutlineMail size={30}/>
                </>
            ),
            href: 'mailto:theadityaojha@gmail.com',
        },
        {
            id:4,
            child:(
                <>
                    Brochure <HiDocumentArrowDown size={30}/>
                </>
            ),
            href: 'resume.pdf',
            style: 'rounded-br-md', 
            download:true,
        },
    ]

  return (
    <div className='lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {links.map(({id, child, href, style, download}) =>(
                <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 py-3 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ' + style}>

                <a href={href} className='flex justify-between items-center w-full text-white' download={download} target='_blank' rel="noreferrer"> 
                {/* the target property allows us to open a new tab */}

                    {child}
                </a>
            </li>


            ))}
            
        </ul>

        <div onClick={() => setSoclink(!socLink)}>
        </div>

        {/* {socLink && (
            <ul>
            {links.map(({id, child, href, style, download}) =>(
                <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 py-3 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ' + style}>

                    <a href={href} className='flex justify-between items-center w-full text-white' download={download} target='_blank' rel="noreferrer">  */}
                {/* the target property allows us to open a new tab */}

                        {/* {child}
                    </a>
                </li>
            ))} 
            </ul>
        )} */}
        
    </div>
  )
}

export default SocialLinks