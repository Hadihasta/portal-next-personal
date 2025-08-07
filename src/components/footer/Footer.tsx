import React from 'react'
import Head from './Head'
import Body from './Body'
import Foot from './Foot'

const Footer = () => {
  return (
    <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8"'>
      <hr className="border-t border-gray-700 my-4 drop-shadow-[0_0_4px_#00f]" />
      <Head />
      <Body />
      <Foot />
    </div>
  )
}

export default Footer
