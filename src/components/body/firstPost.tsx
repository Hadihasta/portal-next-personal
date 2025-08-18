import { useEffect, useState } from 'react'
import { Inset, Box, Card, Text, Strong } from '@radix-ui/themes'
import Views from '../global/useable/Views'
import ReadTime from '@/components/global/useable/ReadTime'
import { animate, hover } from 'motion'
import { motion } from 'framer-motion'

const FirstPost = () => {
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    hover('.box', (element) => {
      animate(element, { scale: 0.9 })

      return () => animate(element, { scale: 1 })
    })
  }, [])

  return (
    <div className="mt-4">
      <div
        onMouseEnter={(e) => setIsHovered(true)}
        onMouseLeave={(e) => setIsHovered(false)}
        className=" mx-auto overflow-hidden rounded-xl  bg-gradient-to-br from-[#2D3E50] via-[#37475E] to-[#1E293B]  shadow-md cursor-pointer"
      >
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-36 w-full object-cover md:h-full md:w-48"
              src="/photo/alone.jpg"
              alt="Modern building architecture"
            />
          </div>
          <div className="p-6 flex flex-col">
            <div >
              <Text size="1">June 20, 2025 </Text>
              <a
                href="#"
                className="mt-1 block text-lg leading-tight font-medium text-white"
              >
                Finding Path To My Favorite Stack
              </a>
            </div>
            <div 
            className='grow'
            // className={` grow ${isHovered ? 'block' : 'absolute'}`}
            >
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="mt-2 text-sm text-white  "
              >
                After completing the bootcamp I attended, I have always placed the technology stack I first learned in a
                special place. Although I have worked with various stacks depending on the demands of my projects, I
                often find myself returning to my primary stack, which consists of the following technologies
              </motion.p>
              <motion.div
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                className="text-blue-600 text-3xl"
              >
                <i className="i-tabler-brand-tailwind  "></i>
                <i className="i-tabler-brand-react  "></i>
                <i className="i-tabler-brand-prisma  "></i>
              </motion.div>
            </div>
            <div >
              <Views counter={'3.590'} />
              <ReadTime minute={'1'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FirstPost
