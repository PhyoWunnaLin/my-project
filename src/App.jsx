import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './Components/About'
import Detail from './Components/Detail'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Product from './Components/Product'
import Search from './Components/Search'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/detail/:id' element={<Detail/>} />
        <Route path='/search/:name' element={<Search/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
