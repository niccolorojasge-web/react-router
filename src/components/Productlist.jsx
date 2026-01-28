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
    <>
     <div className="container-card">
        {products.map((product)=>(
        <div className="card" key={product.id}>
            <p className="title">{product.title}</p>
            <figure>
                <img className="img" src={product.image} alt="" />
            </figure>
            <p className="price">{product.price}</p>
            <p className="category">{product.category}</p>
        </div>   
        ))}
     </div>
    </>
  )
}

export default Productlist