import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {BsYoutube} from 'react-icons/bs'

const Detail = () => {

    const {id} = useParams();
    const [detail,setDetail] = useState([]);
    const [ingre,setIngre] = useState([]);
    const [show,setShow] = useState(false);
    const [need,setNeed] = useState();

    useEffect(() => {
        const Ingredients = [
          {id:1,name:detail.strIngredient1,measure:detail.strMeasure1},
          {id:2,name:detail.strIngredient2,measure:detail.strMeasure2},
          {id:3,name:detail.strIngredient3,measure:detail.strMeasure3},
          {id:4,name:detail.strIngredient4,measure:detail.strMeasure4},
          {id:5,name:detail.strIngredient5,measure:detail.strMeasure5},
          {id:6,name:detail.strIngredient6,measure:detail.strMeasure6},
          {id:7,name:detail.strIngredient7,measure:detail.strMeasure7}
        ];
        setIngre(Ingredients)
      },[detail])

    useEffect(() => {
        fetchData()
    },[]);
    const fetchData = async () => {
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const {meals} = await api.json();
        setDetail(meals[0]);
    }

    const pd = need ? ingre : [] ;

  return (
    <div className=' flex flex-wrap justify-around items-center bg-slate-50 py-5'>
      <img src={detail.strMealThumb} className='w-[450px] h-[450px] rounded shadow-xl' />
      <div className=' w-[50%]'>
        <h2 className=' text-3xl text-gray-600 font-bold tracking-wide my-3'>{detail.strMeal}</h2>
        <p className=' text-2xl text-gray-600 font-semibold tracking-wide mb-3'>{detail.strArea}</p>
        <a href={detail.strYoutube}>
            <BsYoutube className=' text-3xl text-red-600 my-2' />
        </a>
        <button onClick={() => setShow(!show)} className=' mb-2 bg-yellow-300 p-3 rounded-lg font-bold' >Instructions</button>
        <p className=' tracking-wide leading-7 text-sm text-gray-400 mb-3'>{show ? `${detail.strInstructions}` : ``}</p>
        <button onClick={() => setNeed(!need)} className=' mb-3 bg-yellow-300 p-3 rounded-lg font-bold' >Ingredients</button>
        {/* <div className=' border-double border-4 border-sky-500 rounded p-3 w-[100%] md:w-[80%] lg:w-[60%]'> */}
            {/* <div>
            <h2 className=' text-3xl font-bold mb-5 underline underline-offset-4 block text-center'>Ingredients</h2>
            </div> */}
            <div>
                {pd.map((item) => {
                    return (
                      <div className='flex justify-start ' key={item.id}>
                        <div className=' border-double border-4 border-sky-500 rounded p-3 w-[100%] md:w-[40%] lg:w-[30%]'>
                          <p className=' font-bold'>{item.name}</p>
                        </div>
                        <div className=' border-double border-4 border-sky-500 rounded p-3 w-[100%] md:w-[40%] lg:w-[30%]'>
                          <p className=' font-bold'>{item.measure}</p>
                        </div>
                      </div>
                    )
                })}
            </div>
        {/* </div> */}
      </div>
    </div>
  )
}

export default Detail
