import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams,useNavigate} from 'react-router-dom'

export  function ProductDetails() {
    let navigate =useNavigate()
    let [product,setProduct]=useState({})
    let {id}= useParams()
    let getProduct=async()=>{
        let response= await axios.get(`http://localhost:3005/products/${id}`)
        setProduct(response.data)
    }
    useEffect(()=>{
        getProduct()

    },[])
    let goToProducts=()=>{
        navigate('/products')
    }
  return (
    <div className='container text-center'>
        <h2 className='mt-5'>ProductDetails: {id}</h2>
        
    <p>Product Name : {product.productName}</p>
    <p>Product Name : {product.price}</p>
    <p>Product Name : {product.quantity}</p>
    <button onClick={goToProducts} className='btn btn-primary' >Back to Products</button>
    </div>
  )
}
