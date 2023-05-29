import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Table} from 'react-bootstrap'
import {NavLink,useParams} from 'react-router-dom'

export  function Products() {
  
    let [products,setProducts]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:3005/products').then((response)=>{
           setProducts(response.data)
        })
    },[])
    let del=(id)=>{
      axios.delete(`http://localhost:3005/products/${id}`).then((response)=>{
        
      axios.get('http://localhost:3005/products').then((response)=>{
        setProducts(response.data)
     })
        
      }
      
    )}
    
  return (
    <div className='container p-5 text-center'>
        <h2 className='mt-2 '>Products</h2>
        <NavLink to='/products/0/edit'>
        <button className='btn btn bg-secondary text-light mt-5 '>Add New Product</button>
        </NavLink>
         <Table className=' bg-dark text-light w-75 m-auto mt-2 ' >
      <thead>
        <tr>
          <th>ID</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((products)=>{
            return(
                <tr key={products.id}>
          <td>{products.id}</td>
          <td>{products.productName}</td>
          <td>{products.price}</td>
          <td>{products.quantity}</td>
          <td>
          <NavLink to= {`/products/${products.id}/edit`} >
          <i className="fs-4 mx-2  text-warning bi bi-pencil-square"></i>
          </NavLink>
          <NavLink onClick={()=>{del(products.id)}} to='/products'>
          <i className="fs-4 mx-2  text-danger bi bi-trash3"></i>
          </NavLink>
          <NavLink  to={`/products/${products.id}`}>
          <i className="fs-4 mx-2 text-primary bi bi-eye-fill"></i>
          </NavLink>
          </td>
        </tr>
            )
        })}
      </tbody>
    </Table>
    </div>
  )
}
