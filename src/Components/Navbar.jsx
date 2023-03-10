import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {GiCloudyFork} from 'react-icons/gi'
import './Nav.css'

const Navbar = () => {

  const [search,setSearch] = useState('');
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    navigate('/search/' + search)
  }

  return (
    <div className=' text-black flex flex-wrap justify-around items-center bg-slate-50 p-4 border-b-4 border-double  border-gray-300 shadow-xl'>
      {/* <GiCloudyFork className=' text-2xl text-red-700 ml-3'/> */}
      <div className=' flex py-3'>
      <NavLink to={'/'} className='mr-3'>
        <button className=' font-bold'>Home</button>
      </NavLink>
      <NavLink to={'/product'} className='mr-3'>
        <button className=' font-bold'>Product</button>
      </NavLink>
      <NavLink to={'/about'}>
        <button className=' font-bold'>About us</button>
      </NavLink>
      </div>
      <div className=' flex items-center'>
        <h1 className=' mr-3 font-bold'>Search</h1>
        <form onSubmit={onSubmit}>
          <input onChange={(e) => setSearch(e.target.value)} type="text" className=' p-1 text-black font-medium bg-yellow-200 border-2 border-solid border-black rounded-lg' />
        </form>
      </div>
      {/* <GiCloudyFork className=' text-2xl text-red-700 mr-3'/> */}
    </div>
  )
}

export default Navbar
