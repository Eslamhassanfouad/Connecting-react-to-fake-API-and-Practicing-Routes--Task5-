import axios from 'axios'
import React, { useEffect } from 'react'
import {Form,Button} from 'react-bootstrap'
import {useParams, useNavigate} from 'react-router-dom'
import {useState} from 'react'

export  function ProductsForm() {
    let [product,setProduct]=useState({})
    let navigate=useNavigate()
    let [form,setForm]=useState({
        productName:'',
        price:'',
        quantity:''
    })
    let {id} = useParams()
    let formValues=(e)=>{
        e.preventDefault()

        console.log(form);
        if(id==0){

        axios.post("http://localhost:3005/products", form).then((response)=>{
            navigate('/products')
        
        })}else{
            axios.put(`http://localhost:3005/products/${id}`, form).then((response)=>{
                navigate('/products')
            })
        }

    }
    let operationHandler=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    let editProduct= async ()=>{
        let response = await axios.get(`http://localhost:3005/products/${id}`)
        setProduct(response.data)
        setForm(response.data)
    }
    useEffect(()=>{
        if(id!=0){
        editProduct()
        }
    },[])
  return (
    <div className='container '>
          <Form onSubmit={formValues} className='m-5 p-5 alert alert-secondary'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Product Name</Form.Label>
        <Form.Control onChange={operationHandler} type="text" placeholder="Enter Product Name" name='productName' defaultValue={product.productName} />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Price</Form.Label>
        
        <Form.Control onChange={operationHandler} type="number" placeholder="Enter Product Price" name='price' defaultValue={product.price}/>
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Quantity</Form.Label>
        <Form.Control onChange={operationHandler} type="number" placeholder="Enter Product Quantity" name='quantity' defaultValue={product.quantity} />
      </Form.Group>
      <Button variant="primary" type="submit">
        {id==0?"Add Product":"Edit Product"}
      </Button>
    </Form>
    </div>
  )
}
