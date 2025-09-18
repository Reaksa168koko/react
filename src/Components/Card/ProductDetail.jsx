import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from './dATA.JS';

const ProductDetail = () => {
    const {id} = useParams();
    const item = products.find((e)=>e.id ===parseInt(id));
    console.log(item);
    
  return (
    <div>
      <h1>{item.title}</h1>
      <h1>{item.name}</h1>
      <h1>{item.id}</h1>
      
    </div>
  )
}

export default ProductDetail
