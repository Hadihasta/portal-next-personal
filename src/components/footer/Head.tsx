import React from 'react'
import { Text } from '@radix-ui/themes'

const Head = () => {
  return (
    <div className='flex-col '>
      <Text
        size="4"
        weight="bold"
      >
        {'Hijri Ismail Hadi'}
      </Text>

        <Text
        size="1"
        weight="medium"
      >
        {'Front End Dev | React, Next.js'}
      </Text>

    <div>
        
        <i className="i-tabler-brand-github text-3xl"></i>
        <i className="i-tabler-brand-linkedin text-3xl"></i>
        <i className="i-tabler-brand-twitter-filled text-3xl"></i>
        <i className="i-tabler-mail text-3xl"></i>
        <i className="i-tabler-file-cv text-3xl"></i>
    </div>

    </div>
  )
}

export default Head
