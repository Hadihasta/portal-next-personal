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

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  useEffect(() => {
    gsap.from('.fade-in', {
      scrollTrigger: {
        trigger: '.fade-in',
      },
      opacity: 0,
      y: 50,
      duration: 1,
    })

    gsap.from('.wait-scroll-in', {
      scrollTrigger: {
        trigger: '.wait-scroll-in',
        start: 'top center',
      },
      opacity: 0,
      y: 100,
      duration: 3,
    })

    gsap.from('.wait-second-in', {
      scrollTrigger: {
        trigger: '.wait-second-in',
        start: 'top center',
      },
      opacity: 0,
      y: 50,
      duration: 3,
    })
  }, [])

  return (
    <>
      <div
        id="main-section"
        className="sm:flex-row! sm:my-[10%]  sm:gap-[10em] flex-col justify-center  items-center gap-2 fade-in mb-[200px]  "
      >
        <AboutMe />
        <PathDrawing />
      </div>

      <div
        id="idea-board"
        className=" my-[50px] wait-scroll-in "
      >
        <SimpleText />
      </div>

      <div
        id="body-section"
        className="mx-4 my-[100px] wait-scroll-in  "
      >
        <RecentlyPost />
      </div>

      <div
        id="secondary-section "
        className="  my-[200px] wait-second-in"
      >
        <Retro></Retro>
      </div>

      <div id="footer-section">
        <Footer />
      </div>
    </>
  )
}
