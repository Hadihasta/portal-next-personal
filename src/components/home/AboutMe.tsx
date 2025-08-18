import React from 'react'
import Profile from './profile'
import { Typewriter } from 'react-simple-typewriter'

const AboutMe = () => {
  
  return (
    <div className="font-arial p-3 mt-3 sm:grid gap-[2em] ">
      <div className=" font-bold text-4xl ">
        <Typewriter
          words={["I'm Hadi"]}
          loop={1}
          cursor
          cursorStyle="."
          typeSpeed={100}
        />
      </div>
      <div className='text-lg sm:text-xl font-medium max-w-md whitespace-pre-wrap'>{`I’m a front-end developer crafting modern web applications using React cycle, with a strong focus on clean code and intuitive UI/UX.`}</div>
      <div className='mt-3'>
        <Profile />
      </div>
    </div>
  )
}

export default AboutMe
