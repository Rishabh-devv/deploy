
import React from 'react'

function About() {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-400'>About</p>
            </div>
        
            <p className='text-xl mt-20'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum aliquid quod odit, alias molestias explicabo? Laudantium velit dicta sapiente odit, dolorum id, ratione, ipsa minima mollitia facere ullam neque modi.</p>
            <br />
            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, dolore veniam maxime doloremque alias repellendus natus voluptatum, aliquam dolorem mollitia illum! Explicabo fuga assumenda voluptatibus sunt maiores veritatis voluptate labore.</p>
        </div>
      
    </div>
  )
}

export default About
