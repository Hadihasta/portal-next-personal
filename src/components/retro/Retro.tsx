import React from 'react'
import FirstRetro from './FirstRetro'
import { Text } from '@radix-ui/themes'

const Retro = () => {
  return (
    <div className="m-4 flex-col gap-10 ">
      <div className="flex-col font-arial">
        <Text
          size="8"
          className=" md:text-4xl! font-bold "
        >
          Retro
        </Text>

        <Text
          size="2"
          weight="medium"
          className=" md:text-2xl! "
        >
          Reflecting on the past is a habit I value. Each year, I publish a brief update on where I stand in my career
          and personal life.
          {/* Here’s a look at the past three years. */}
        </Text>
      </div>
      <Text
        size="8"
        className="flex justify-center font-bold   bg-gradient-to-r from-white to-[#0033FF] 
        bg-clip-text text-transparent "
      >
        {' '}
        2025 Journey
      </Text>
      <FirstRetro></FirstRetro>
    </div>
  )
}

export default Retro
