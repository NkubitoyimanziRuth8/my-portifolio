import React from 'react'
import {IoIosArrowForward} from 'react-icons/io'
import img1 from "../images/nana.jpg"
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black to-gray-800">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className=" flex flex-col justify-center h-full">
                <h2 className="text-4xl sm:text-7xl font-bold text-white"> I'm a Full stack Developer</h2>
                <p className="text-gray-500 py-4 max-w-md">Currently i'm a student in RCA
                    and i like to build web app using
                    react and tailwind
                </p>
                <div>
                    <Link to="portifolio" smooth duration={500} className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                        portifolio
                        <span className="group-hover:rotate-90 duration-300">
                            <IoIosArrowForward  size ={24}clasName=""/>
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={img1} alt=" my profile" className="rounded-2xl mx-auto w-2/3 md:w-full"/>
            </div>
        </div>
    </div>
  )
}

export default Home

