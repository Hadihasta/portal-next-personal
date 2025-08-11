'use client'

import { useEffect } from 'react'
import AboutMe from '@/components/home/AboutMe'
import PathDrawing from '@/components/global/pathDrawing'
import SimpleText from '@/components/global/typhographi/simpleText'
import RecentlyPost from '@/components/body/RecentlyPost'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Retro from '@/components/retro/Retro'
import Footer from '@/components/footer/Footer'

// import Image from "next/image";
//      <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//  <i className="i-tabler-transition-right-filled"></i>
gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  useEffect(() => {
    gsap.from('.fade-in', {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: '.fade-in',
        toggleActions: 'play none none reverse',
      },
    })
  }, [])

  return (
    <>
      <div
        id="main-section"
        className="flex-col justify-center  items-center gap-2 fade-in mb-[300px]"
      >
        <AboutMe />
        <PathDrawing />
      </div>

      <div
        id="idea-board"
        className="fade-in my-[50px] "
      >
        <SimpleText />
      </div>

      <div
        id="body-section"
        className="fade-in mx-4"
      >
        <RecentlyPost />
      </div>

      <div id="secondary-section">
        <Retro></Retro>
      </div>

      <div id="footer-section">
        <Footer />
      </div>
    </>
  )
}
