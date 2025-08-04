'use client'

import AboutMe from '@/components/home/AboutMe'
import PathDrawing from '@/components/global/pathDrawing'
import SimpleText from '@/components/global/typhographi/simpleText'

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

export default function Home() {
  return (
    <>
      <div
        id="main-section"
        className="flex-row justify-center  items-center gap-2"
      >
        <AboutMe />
        <PathDrawing />
      </div>

      <div id='idea-board'> 
          <SimpleText/>
      </div>

    </>
  )
}
