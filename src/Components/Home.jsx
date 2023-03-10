import React, { useEffect, useState } from 'react'
import {MdOutlineManageSearch} from 'react-icons/md'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import './Home.css';

const Home = () => {

  const [show,setShow] = useState({});
  const [item,setItem] = useState([]);

  useEffect(() => {
    fetchData()
  },[]);

  useEffect(() => {
    fetchItem()
  },[])

  const fetchData = async () => {
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    const {meals} = await api.json();
    setShow(meals[0]);
  }

  const fetchItem = async () => {
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`);
    const {meals} = await api.json();
    setItem(meals);
  }

  const splice = item.splice(0,3);

  return (
    <div className=' bg-slate-50 pt-20'>
      <div className=' flex flex-wrap justify-center gap-10'>
          {splice.map(pd => {
            return (
              <div className=' pb-20 relative parent' key={pd.idMeal}>
                <img className=' image w-[250px] h-[250px] rounded shadow-lg shadow-black' src={pd.strMealThumb} alt="" />
                <div className='icon'>
                  <Link to={`/detail/${pd.idMeal}`}>
                    <p className=' bg-emerald-500 rounded-[100%] p-1 justify-center items-center absolute top-[34%] right-[42%]'>
                      <MdOutlineManageSearch className=' text-2xl'/>
                    </p>
                  </Link>
                </div>
              </div>
            )
          })}
      </div>
      <Link to={'/product'}>
        <div className=' flex justify-center items-center mt-0'>
          <button className=' bg-teal-500 p-3 w-40 rounded-xl mb-20 shadow-lg shadow-black font-semibold'>See More</button>
        </div>
      </Link>
    </div>
  )
}

export default Home
