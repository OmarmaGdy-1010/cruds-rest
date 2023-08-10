import React, { useEffect, useState } from 'react';
import axios from "axios";

import { useParams } from 'react-router-dom';
import '../App.css';

function ProductDetlise() {
    const { productId } = useParams();
    const [ product, setproduct ] = useState({});
    const { title, category, image, price, description } = product;

    useEffect(() => {
        // fetch(`http://localhost:9000/products/${productId}`)
        //     .then(res => res.json())
        //     .then(product => setproduct(product));
        axios.get(`https://omarmagdy-1010.github.io/api/products.json/${productId}`)
            .then(product => setproduct(product.data));

        console.log(product);

    }, []);

    return (

        <>

            <div className='showProduct'>
                <div>
                    <h1>{ title }</h1>
                    <h3>Category: { category }</h3>
                </div>
                <div className='img'>
                    <img className=' img-fluid' src={ image } alt='...' />
                </div>
                <div className='figurs'>
                    <h1>{ price }</h1>
                    <h4>Description:</h4>
                    <p>{ description }</p>
                </div>

            </div>

        </>
    );
}

export default ProductDetlise;