import axios from "axios";
import { useState, useEffect} from 'react'
const endpoint ="https://fakestoreapi.com/products"


function Productlist () {
const [products , setproducts]=useState([])
 
function fenchProduct(){
    axios.get (endpoint)
    .then((response)=>{
    setproducts(response.data)
    })
}
useEffect(fenchProduct, [])
  return (
    div
    <>
     
    </>
  )
}

export default Productlist