import React from 'react'

const About = () => {
  return (
    <div className=' flex flex-wrap justify-around items-center bg-slate-50'>
      <div className=' w-[80%] md:w-[50%] lg:w-[30%]'>
        <h1 className=' text-5xl font-extrabold text-blue-700 mb-4'>ABOUT US</h1>
        <p className=' mb-20 text-gray-500 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis vitae provident nesciunt aliquid alias eius nobis fugit quam. Quae facilis pariatur voluptate ipsum unde voluptas mollitia suscipit nam fugit soluta!</p>
      <button className=' bg-yellow-500 p-3 text-white font-bold'>SEND THE MAIL</button>
      </div>
      <div>
        <img src="https://i.pinimg.com/564x/42/d1/89/42d1892471cff279f341b28fe7a42014.jpg" className=' p-10 rounded-[100%]' />
      </div>
    </div>
  )
}

export default About
