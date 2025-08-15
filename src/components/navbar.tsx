'use client'

import { gsap } from 'gsap'
import Link from 'next/link'
import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Navbar() {
  useEffect(() => {
    gsap.from('.fade-for_nav', {
      scrollTrigger: {
        trigger: '.fade-for_nav',
      },
      opacity: 0,
      y: -100,
      duration: 1,
    })
  }, [])
  return (
    <>
      <div className="sm:flex justify-center sticky hidden  fade-for_nav">
        <nav className=" w-fit mt-8 top-0 z-50 bg-gradient-to-r  backdrop-blur-md border-b border-white/20 shadow-md px-3 py-3 flex justify-between items-center text-white rounded-md">
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/"
                className="hover:text-blue-500 font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:text-blue-500 font-medium"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-blue-500 font-medium"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-blue-500 font-medium"
              >
                CV
              </Link>
            </li>
            <div>|</div>
            <li>
              <Link
                href="/contact"
                className="hover:text-blue-500 font-medium"
              >
                More
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
