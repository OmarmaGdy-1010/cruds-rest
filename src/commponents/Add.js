
import axios from 'axios';
import React, {  useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Add() {
    const [ title, settitle ] = useState("");
    const [ price, setprice ] = useState(0);
    const [ description, setdescription ] = useState("");
    const [ category, setcategory ] = useState("");
    const [ image, setimage ] = useState("");
    let navegat = useNavigate()


    const submitData =async (e) => {
        e.preventDefault()

           await fetch('https://omarmagdy-1010.github.io/api/products.json/products', {
                method: "POST",
                mode: "cors", 
                cache: "no-cache", 
                credentials: "same-origin", 
                headers: {
                    "Content-Type": "application/json",
                },
                redirect: "follow", 
                referrerPolicy: "no-referrer", 
                body: JSON.stringify({title,price,description,category,image,}),
            });
            
        
        // navegat("/All")
    }
    
    

    return (
        <>
            <div className="container">
                <h1>Add Product</h1>

            <form onSubmit={submitData}>
                <div className="mb-3">
                    <label htmlFor="proTitle" className="form-label">Title</label>
                    <input type="text" onChange={ (e) => settitle(e.target.value) } id="proTitle" className="form-control" placeholder="EX: Bag2" />
                </div>
                <div className="mb-3">
                    <label htmlFor="proTitle" className="form-label">Price</label>
                    <input type="number" onChange={ (e) => setprice(e.target.value) } id="proTitle" className="form-control" placeholder="EX: 3000" />
                </div>
                <div className="mb-3">
                    <label htmlFor="proCategory" className="form-label">Category</label>
                    <input type="text" onChange={ (e) => setcategory(e.target.value) } id="proCategory" className="form-control" placeholder="EX: Man T-shert" />
                </div>
                <div className="mb-3">
                    <label htmlFor="proImage" className="form-label">URL Image</label>
                    <input type="text" onChange={ (e) => setimage(e.target.value) } id="proImage" className="form-control" placeholder="EX: https://Image.com/img/130938.jpg" />
                </div>
                <div className="mb-3">
                    <label htmlFor="proDescription" className="form-label">Description</label>
                    <input type="text" onChange={ (e) => setdescription(e.target.value) } id="proDescription" className="form-control" placeholder="EX: cotton 100%, short sleve...etc" />
                </div>

                <button type="submit"  className="btn btn-primary">Submit</button>
            </form>
            </div>
        </>
    );
}

export default Add;