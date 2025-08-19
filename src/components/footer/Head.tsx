import React from 'react'
import { Text } from '@radix-ui/themes'

const Head = () => {
  return (
    <div className='flex-col'>
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


    </div>
  )
}

export default Head
