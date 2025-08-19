import { useEffect } from 'react'
import Profile from './profile'
import { Typewriter } from 'react-simple-typewriter'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const AboutMe = () => {
  useEffect(() => {
       gsap.from('.fade-icon', {
      scrollTrigger: {
        trigger: '.fade-icon',
      },
      opacity: 0,
      y: 50,
      duration: 2,
    })
  })


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
      <div className="text-lg sm:text-xl font-medium max-w-md whitespace-pre-wrap">{`I’m a front-end developer crafting modern web applications using React cycle, with a strong focus on clean code and intuitive UI/UX.`}</div>
      <div className="mt-3">
        <div>
        <Profile />
        </div>
        <div
          className=" flex text-xl md:text-3xl mt-4 gap-2 fade-icon cursor-pointer "
        >
          <i className="i-tabler-brand-github "></i>
          <i className="i-tabler-brand-linkedin "></i>
          <i className="i-tabler-brand-twitter-filled "></i>
          <i className="i-tabler-mail "></i>
          <i className="i-tabler-file-cv "></i>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
