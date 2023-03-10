import React, { useEffect, useState } from 'react'
import Card from './Card';

const Product = () => {

    const [meal,setMeal] = useState([]);
    useEffect(() => {
        fetchData();
    },[]);
    const fetchData = async () => {
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`);
        const {meals} = await api.json();
        setMeal(meals)
    }

  return (
    <div className=' bg-slate-50 flex flex-wrap justify-center gap-10 py-20'>
      {meal.map(item => {
        return(
            <Card key={item.idMeal} meal={item}/>
        )
      })}
    </div>
  )
}

export default Product
