import React, { useEffect, useState } from 'react';
import { DiAptana } from "react-icons/di";
import { FiXCircle } from "react-icons/fi";
import { RiDraftLine } from "react-icons/ri";
import { CgAdd } from "react-icons/cg";
import { GrOverview } from "react-icons/gr";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../App.css';
import axios from 'axios';

function All() {
  const URL_Products = "https://omarmagdy-1010.github.io/api/products.json";
  const [ data, setData ] = useState([]);
  useEffect(() => {
    fetch_API()
  }, []);

  const fetch_API = () => {
    fetch(URL_Products)
      .then(response => response.json())

      .then(data => setData(data.products));
  }

  const handelDelete = (Product) => {

    Swal.fire({
      title: `Are You Sour To Delet " ${Product.title} " ?`,
      icon: 'question',
      iconHtml: '؟',
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
      showCancelButton: true,
      showCloseButton: true
    }).then((result) => {
      if (result.isConfirmed) {
        const URL_Delete = `https://omarmagdy-1010.github.io/api/products.json/${Product.id}`;
        fetch(URL_Delete, {
          method: "DELETE"
        })
          .then(response => response.json());

        Swal.fire({
          icon: 'success',
          
        });
        fetch_API()
      }
    });
    
  };

  console.log(data[0]);


  return (
    <>
      <h1>Products Page</h1>
      <Link className='btn btn-outline-primary mt-5' to='/All/Add'>{ <CgAdd /> } Add New Product</Link>
      <table className="table mt-4">
        <thead>
          <tr className='row'>
            <th className='col-1'>id</th>
            <th className='col-3'>Name</th>
            <th className='col-3'>Price</th>
            <th className='col-1'>Operations</th>
          </tr>
        </thead>
        <tbody>
          { data.map((Product) => {
            return (
              <tr className='row' key={ Product.id }>
                <th className='col-1'>{ Product.id }</th>
                <td className='col-3' title={ Product.title }>{ Product.title?.slice(0, 20) }...</td>
                <td className='col-3'>{ Product.price } LE</td>
                <td className='col-1'>
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <DiAptana />
                    </button>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to={ `/All/${Product.id}` }>{ <GrOverview /> } View</Link></li>
                      <li><Link className="dropdown-item" to={`/Edit/${Product.id}` }>{ <RiDraftLine /> } Edit</Link></li>
                      <li><button className="dropdown-item" onClick={ () => handelDelete(Product) }>{ <FiXCircle /> } Delete</button></li>
                    </ul>
                  </div>
                </td>
              </tr>
            );
          }) }
        </tbody>
      </table>
    </>
  );
}

export default All;
