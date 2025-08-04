import React from 'react'
import Profile from './profile'
import { Typewriter } from 'react-simple-typewriter'

const AboutMe = () => {
  return (
    <div className="font-arial  ">
      <div className="font-[GeistMono] font-bold text-4xl ">
        <Typewriter
          words={["I'm Hadi"]}
          loop={false}
          cursor
          cursorStyle="_"
          typeSpeed={100}
          deleteSpeed={100}
          delaySpeed={2000}
        />
      </div>
      <div>{`I Work with React Cycle,`}</div>
      <div>
        <Profile />
      </div>
    </div>
  )
}

export default AboutMe
