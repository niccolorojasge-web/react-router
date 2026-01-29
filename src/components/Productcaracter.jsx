import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
const endpoinbase = "https://fakestoreapi.com/products/"


function Productcaracter() {
    const { id } = useParams();
    

    const navigate = useNavigate()

    const [item, setItem]= useState(null);
    //utilizzo parametro per la chiamata
    useEffect(()=>{
        axios.get(endpoinbase + id)
        .then(resp=> {
            console.log(resp);
            setItem(resp.data) 
        })
        .catch(err=>{
            console.log("errore chiamata ")
            navigate('/product-list')
        })
    },[])


    return (
        <>
        <h1 className="detail">Product with id {id} </h1>

        {item !== null ? (
            <>
            <h2 className="title-item">{item.title}</h2>
            <img className="img-item" src={item.image} alt={item.title} /> 
            <p className="price-item">{item.price}</p> 
            <p className="item-description">{item.description}</p>
             <p className="category-item">{item.category}</p>
          </>
        ) : (
            <p>Loading...</p>
        )}
         
        </>
    )
}

export default Productcaracter