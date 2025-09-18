import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import ProductCart from './ProductCart'
import ProductDetail from './ProductDetail'

const Rout = () => {
  return (
   <Router>
      <Routes>
         <Route path='/' element={<ProductCart/>}/> 
         <Route path='/product/:id' element={<ProductDetail/>}/>
      </Routes>
   </Router>
  )
}

export default Rout
