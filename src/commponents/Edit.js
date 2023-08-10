import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { RiDraftLine } from 'react-icons/ri';
import { useNavigate, useParams } from 'react-router-dom';
import '../App.css';

function Edit() {
    const { productId } = useParams();
    const [ title, settitle ] = useState("");
    const [ price, setprice ] = useState(0);
    const [ description, setdescription ] = useState("");
    const [ category, setcategory ] = useState("");
    const [ olddata, setolddata ] = useState("");
    const [ image, setimage ] = useState("");
    const navegate = useNavigate()



    const submitData = (e) => {
        e.preventDefault();

        axios.put(`https://omarmagdy-1010.github.io/api/products.json/${productId}`, {
            title,
            price,
            description,
            category,
            image
        }).then(data => console.log(data));
        navegate("/All")
    };
    useEffect(() => {

        axios.get(`https://omarmagdy-1010.github.io/api/products.json/${productId}`,).then(product => setolddata(product.data));
    }, []);



    return (
        <>
            <h1 className='mt-4'>{ <RiDraftLine /> } Edit</h1>
            <form onSubmit={ submitData }>
                <div className="mb-3">
                    <label htmlFor="proTitle" className="form-label">Title</label>
                    <p>Currently : { olddata.title }</p>
                    <input type="text" onChange={ (e) => settitle(e.target.value) } id="proTitle" className="form-control" placeholder="EX: Bag2" />
                </div>
                <div className="mb-3">
                    <label htmlFor="proTitle" className="form-label">Price</label>
                    <p>Currently : { olddata.price }</p>
                    <input type="number" onChange={ (e) => setprice(e.target.value) } id="proTitle" className="form-control" placeholder="EX: 3000" />
                </div>
                <div className="mb-3">
                    <label htmlFor="proCategory" className="form-label">Category</label>
                    <p>Currently : { olddata.category }</p>
                    <input type="text" onChange={ (e) => setcategory(e.target.value) } id="proCategory" className="form-control" placeholder="EX: Man T-shert" />
                </div>
                <div className="mb-3">
                    <label htmlFor="proImage" className="form-label">URL Image</label>
                    <p>Currently : { olddata.image }</p>
                    <input type="text" onChange={ (e) => setimage(e.target.value) } id="proImage" className="form-control" placeholder="EX: https://Image.com/img/130938.jpg" />
                </div>
                <div className="mb-3">
                    <label htmlFor="proDescription" className="form-label">Description</label>
                    <p>Currently : { olddata.description }</p>
                    <input type="text" onChange={ (e) => setdescription(e.target.value) } id="proDescription" className="form-control" placeholder="EX: cotton 100%, short sleve...etc" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    );
}

export default Edit;