
import React from 'react'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import HeroImage from '../assets/portfolio/heroImage.png'
import {Link} from 'react-scroll'

function Home() {
  return (
    <div name='home' className='h-screen bg-gradient-to-b from-black via-black to-gray-800 w-full'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full '>
                <h2 className='text-4xl sm:text-7xl font-bold text-white' >I'm a Frontend Developer</h2>
                <p className='text-gray-500 py-4 max-w-md'>Proficient in HTML, CSS, JavaScript, and various frontend frameworks such as React, Angular, and Vue.js. Strong understanding of UI/UX principles and passion for staying up-to-date with the latest web development trends and technologies.</p>
                    <div>
                        <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300'><MdOutlineKeyboardArrowRight size={25} className='ml-1'/></span>
                        </Link>
                    </div>
            </div>
            <div>
                <img src={HeroImage} alt="Profile" className='rounded-xl mx-auto w-2/3 md:w-3/4'/>
            </div>
        </div>
      
    </div>
  )
}

export default Home
