import React from 'react'
import FirstPost from './firstPost'


const RecentlyPost = () => {
  return (
    <div>
      {/* #977DFF */}
      <div
        className="font-bold text-4xl 
        bg-gradient-to-r from-white to-[#0033FF] 
        bg-clip-text text-transparent"
      >
        Recently
        <span className='text-[#6279e8]'> Posts</span>
      </div>

      <FirstPost />
    </div>
  )
}

export default RecentlyPost