import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {FaFacebookMessenger} from 'react-icons/fa'
import {RiInstagramFill} from 'react-icons/ri'
import {BsYoutube} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {FaTelegram} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className=' bg-gray-400'>
      <div className='flex justify-center pt-7'>
        <h1 className=' rounded-lg text-black font-bold w-32 p-2 block text-center border-solid border-2 border-black'>SIGN IN</h1>
      </div>
      <div className=' pt-6 flex flex-wrap justify-center gap-8'>
        <div><BsFacebook className=' text-3xl' /></div>
        <div><FaFacebookMessenger className='text-3xl' /></div>
        <div><RiInstagramFill className='text-3xl' /></div>
        <div><BsYoutube className='text-3xl' /></div>
        <div><BsTwitter className='text-3xl' /></div>
        <div><FaTelegram className='text-3xl' /></div>
      </div>
      <div className=' pt-6 flex justify-center'>
        <p className=' text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing</p>
      </div>
      <div className=' pb-6 flex justify-center'>
        <p className=' text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis necessitatibus voluptate?</p>
      </div>
    </div>
  )
}

export default Footer
