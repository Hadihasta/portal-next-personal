import React from 'react'
import Image from 'next/image'

const SimpleText = () => {
  return (
    <div className="flex-row items-center justify-center ">
    
      <div>
        <Image
          src="/typographi/simpleText.svg"
          alt="Quote"
          className='sm:w-[500]  sm:h-[500]'
          width={250}
          height={250}
        />
      </div>

        <div className="relative  right-3 bottom-6">
        <Image
          src="/icon/shineLamp.svg"
          alt="Quote"
          width={50}
          height={50}
        />
      </div>
    </div>
  )
}

export default SimpleText
