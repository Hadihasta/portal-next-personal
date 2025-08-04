import React from 'react'
import Profile from './profile'
import Image from 'next/image'

const AboutMe = () => {
  return (
    <div className="font-arial">
      <div>{`I'm Hadi`}</div>
      <div>{`I Work with React Cycle,`}</div>
       <Image
        src="/icon/lamp.svg"
        alt="Quote"
        width={100}
        height={100}
      />
      <Image
        src="/typographi/simpleText.svg"
        alt="Quote"
        width={500}
        height={500}
      />
      <Profile />
    </div>
  )
}

export default AboutMe
