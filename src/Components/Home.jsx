import React from 'react'
import HeroImage from "../assets/portfolio/heroImage.jpg"
import {MdKeyboardArrowRight} from 'react-icons/md'
import {Link} from 'react-scroll'
const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl sm:text-7xl font-bold text-white">
                    Full Stack Developer
                </h2>
                <p className="text-gray-500 py-4 max-w-md">
                    Looking to expand my knowledge and build amazing software for others.
                    Currently working on web applications using Javascript, React, NodeJS, MongoDB, and SQL.
                </p>
                <div className="flex flex-row">
                    <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                        Portfolio
                        <span className="group-hover:rotate-90 duration-300">
                            <MdKeyboardArrowRight size={20} className="ml-1"/>
                        </span>
                    </Link>
                    <div>
                    <a className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer ml-2" href="tel:+1310-880-6164">Call Now</a>
                    </div>
                </div>
               
            </div>
            <div>
                <img src={HeroImage} alt="my-personal-pic" className="rounded-2xl mx-auto w-1/2 md:w-2/3"/>
            </div>
        </div>
    </div>
  )
}

export default Home