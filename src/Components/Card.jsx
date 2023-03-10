import React from 'react'
import {MdOutlineManageSearch} from 'react-icons/md'
import { Link } from 'react-router-dom'
import './Card.css'

const Card = ({meal}) => {
  return (
    <div className='parent relative '>
      <img src={meal.strMealThumb} className='w-[350px] h-[350px] rounded image shadow-lg shadow-black' />
      <div className='icon'>
        <Link to={`/detail/${meal.idMeal}`}>
          <p className=' bg-emerald-500 p-2 rounded-[100%] justify-center items-center absolute top-[44%] right-[44%]'>
              <MdOutlineManageSearch className=' text-2xl'/>
          </p>
        </Link>
      </div>
    </div>
  )
}

export default Card
