import React from 'react'
import FirstPost from './firstPost'


const RecentlyPost = () => {
  return (
    <div>
      <div
        className="font-bold text-4xl 
        bg-gradient-to-r from-[#e3f5fe] to-[#6279e8] 
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