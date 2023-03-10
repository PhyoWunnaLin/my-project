import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {BsYoutube} from 'react-icons/bs'


const Search = () => {

    const {name} = useParams();
    const [item,setItem] = useState({});
    const [ingre,setIngre] = useState([]);
    const [measure,setMeasure] = useState([]);

    useEffect(() => {
        const Ingredients = [
          {id:1,name:item.strIngredient1},
          {id:2,name:item.strIngredient2},
          {id:3,name:item.strIngredient3},
          {id:4,name:item.strIngredient4},
          {id:5,name:item.strIngredient5},
          {id:6,name:item.strIngredient6},
          {id:7,name:item.strIngredient7}
        ];
        setIngre(Ingredients)
      },[ingre])

      useEffect(() => {
        const Measure = [
          {id:1,name:item.strMeasure1},
          {id:2,name:item.strMeasure2},
          {id:3,name:item.strMeasure3},
          {id:4,name:item.strMeasure4},
          {id:5,name:item.strMeasure5},
          {id:6,name:item.strMeasure6},
          {id:7,name:item.strMeasure7}
        ];
        setMeasure(Measure)
      },[measure])

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
        const {meals} = await api.json();
        setItem(meals[0]);
    }

  return (
    <div className=' flex flex-wrap justify-around items-center bg-slate-50 py-5'>
      <img src={item.strMealThumb} className='w-[450px] h-[450px] rounded shadow-xl' />
      <div className=' w-[50%]'>
        <h2 className=' text-3xl text-gray-600 font-semibold tracking-wide my-3'>{item.strMeal}</h2>
        <p className=' text-2xl text-gray-600 font-semibold tracking-wide mb-3'>{item.strArea}</p>
        <p className=' tracking-wide leading-7 text-sm text-gray-400'>{item.strInstructions}</p>
        <a href={item.strYoutube}>
            <BsYoutube className=' text-3xl text-red-600 my-3' />
        </a>
        <div className=' border-double border-4 border-sky-500 rounded p-3 w-[100%] md:w-[80%] lg:w-[60%]'>
            <h2 className=' text-3xl font-bold mb-5 underline underline-offset-4 w-auto block text-center'>Ingredients</h2>
            <div className=' flex justify-around'>
                <div>
                    {ingre.map(item => {
                        return (
                            <p className=' mb-1 text-sm font-semibold w-auto ' key={item.id}>{item.name}</p>
                        )
                    })}
                </div>
                <div>
                    {measure.map(me => {
                        return (
                            <p className=' mb-1 text-sm font-semibold w-auto ' key={me.id}>{me.name}</p>
                        )
                    })}
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Search
