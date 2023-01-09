import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail } from "react-icons/hi"
import {BsFillPersonLinesFill } from "react-icons/bs"

const SocialLinks = () => {
    const links =[
        {
            id:1,
            child: (
                <>
                LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: "https://linkedin.com",
            style:'rounded-full'
        },
        {
            id:2,
            child: (
                <>
                Github < FaGithub size={30} />
                </>
            ),
            href: "https://github.com/NkubitoyimanziRuth8",
            style:'rounded-full'
        },
        {
            id:3,
            child: (
                <>
                Mail <HiOutlineMail size={30} />
                </>
            ),
            href: "https://linkedin.com",
            style:'rounded-full'
        },
        {
            id:1,
            child: (
                <>
                Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: "resume.pdf",
            style:'rounded-full',
            download: true,
        }
    ]
  return (
    <div className="hidden md:flex flex-row top-[35%] fixed">
        <ul>
            {links.map(({id,child,href,style,download})=>(
                  <li 
                  key={id} 
                  className={` justify-between items-center w-40 rounded-full
                   h-14  px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-full
                    duration-300 bg-gray-500 $ style`}>
                 
                   
                      <a
                       href={href}
                       className="flex justify-between items-center w-full text-white" 
                        download={download} 
                        target ='_blank'
                        rel="noreferrer"
                        > 
                  {child}
                      
                      </a>
                  </li>
            ))}
           
        </ul>
    </div>
  )
}

export default SocialLinks