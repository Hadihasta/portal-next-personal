import { useEffect } from 'react'
import { Inset, Box, Card, Text, Strong } from '@radix-ui/themes'
import Views from '../global/Views'
import ReadTime from '@/components/global/useable/ReadTime'
import { animate, hover } from 'motion'
// <img
//                 src="/photo/alone.jpg"
//                 alt="Quote"
//                 className=""
//                 style={{ display: 'block', objectFit: 'cover', width: '100%', height: '140px' }}
//               />

const FirstPost = () => {
  useEffect(() => {
    hover('.box', (element) => {
      animate(element, { scale: 0.9 })

      return () => animate(element, { scale: 1 })
    })
  }, [])

  return (
    <div className="mt-4">
      <div className="box mx-auto overflow-hidden rounded-xl  bg-gradient-to-br from-[#2D3E50] via-[#37475E] to-[#1E293B]  shadow-md">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-36 w-full object-cover md:h-full md:w-48"
              src="/photo/alone.jpg"
              alt="Modern building architecture"
            />
          </div>
          <div className="p-6">
             <Text size="1">June 20, 2023 </Text>
            <a
              href="#"
              className="mt-1 block text-lg leading-tight font-medium text-white hover:underline"
            >
             Finding Path To My Favorite Stack
            </a>
          <Text
              as="p"
              size="2"
              className='mt-2'
            >
              After completing the bootcamp I attended, I have always placed the technology stack I first learned in a
              special place. Although I have worked with various stacks depending on the demands of my projects, I often
              find myself returning to my primary stack, which consists of the following technologies
            </Text>
            
            <i className="i-tabler-brand-tailwind text-blue-600 text-3xl"></i>
            <i className="i-tabler-brand-react text-blue-600 text-3xl"></i>
            <i className="i-tabler-brand-prisma text-blue-600 text-3xl"></i>

            <Views counter={'5.590'} />
            <ReadTime minute={'5'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FirstPost
