'use client'
import React from 'react'
import { motion,Variants  } from 'motion/react'



export default function PathDrawing() {


const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = i * 0.5
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          delay,
          duration: 1.5,
          type: 'spring' as const, // ✅ fix: cast as const
          bounce: 0,
        },
        opacity: {
          delay,
          duration: 0.01,
        },
      },
    }
  },
}

  return (
    <motion.svg
      width="600"
      height="600"
      viewBox="0 0 600 600"
      initial="hidden"
      animate="visible"
      style={{ maxWidth: '80vw' }}
    >
      <motion.circle
        cx="100"
        cy="100"
        r="80"
        stroke="#FF0055"
        variants={ draw }
        custom={1}
        style={{
          strokeWidth: 10,
          strokeLinecap: 'round',
          fill: 'transparent',
        }}
      />
      <motion.line
        x1="220"
        y1="30"
        x2="360"
        y2="170"
        stroke="#7700FF"
        variants={ draw }
        custom={2}
        style={{
          strokeWidth: 10,
          strokeLinecap: 'round',
          fill: 'transparent',
        }}
      />
      {/* More shapes would go here */}
    </motion.svg>
  )
}
