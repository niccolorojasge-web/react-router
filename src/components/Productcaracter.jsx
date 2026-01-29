import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
const endpoinbase = "https://fakestoreapi.com/products/:id"


function Productcaracter() {
    const { id } = useParams();
    const [productslist, setProductslist]=useState();
    //utilizzo parametro per la chiamata
    
    return (
        <>


        </>
    )
}

export default Productcaracter