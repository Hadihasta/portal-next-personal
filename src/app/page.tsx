import PathDrawing from '@/components/global/pathDrawing'
import AboutMe from '@/components/home/AboutMe'
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
      <div id="main-section">
        <PathDrawing />
        <AboutMe />
      </div>
    </>
  )
}
