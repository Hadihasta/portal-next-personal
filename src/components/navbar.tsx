// app/components/Navbar.tsx
'use client'
// <div className="text-xl font-bold text-blue-600 ">
//   <i className="tw-i-tabler-prisma text-xl"></i> MySite
//   <i className="i-tabler-brand-tailwind text-blue-600 text-3xl"></i>
// </div>

import Link from 'next/link'

export default function Navbar() {
  return (
    <>
      <div className="sm:flex justify-center sticky hidden ">
        <nav className=" w-fit mt-8 top-0 z-50 bg-gradient-to-r from-sky-400/30 to-sky-600/30 backdrop-blur-md border-b border-white/20 shadow-md px-3 py-3 flex justify-between items-center text-white rounded-md">
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/"
                className="hover:text-blue-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:text-blue-500"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-blue-500"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-blue-500"
              >
                CV
              </Link>
            </li>
            <div>|</div>
            <li>
              <Link
                href="/contact"
                className="hover:text-blue-500"
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
