import React from 'react'
import Head from './Head'
import Body from './Body'
import Foot from './Foot'

const Footer = () => {
  return (
    <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8"'>
      <hr className="border-t border-greySurface my-4 drop-shadow-greyMute" />
      <Head />
      <Body />
      <hr className="border-t border-greySurface my-4 drop-shadow-greyMute" />
      <Foot />
    </div>
  )
}

export default Footer
