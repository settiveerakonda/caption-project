import React from 'react'
import axios from 'axios'
import '../compound/Table.css'
import { useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
export default function Table() 
    {
        const [product,setproduct] = useState([])
        useEffect(()=>{
          axios.get('http://localhost:4000/getallproduts')
          .then(product => setproduct(product.data))
          .catch(err => console.log(err))
        })
        const [search,setsearch] =useState('');
        return(
            <>
            <div class="container" style={{marginTop:"10px"}}>
    <form class="d-flex">
      <input class="form-control " type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>setsearch(e.target.value)}/>
      <button class="btn btn-outline-success" type="submit"onChange={(e)=>setsearch(e.target.value)}>Search</button>
    </form>
  </div>
            <div className='w-100 vh-100 d-flex justify-contect-center align-item-center'>
            <div className='w-100'>
            <nav class="navbar navbar-light bg-light">
  
</nav>
               <table className="table table-dark table-striped" >
                <thead>
                    <tr>
                        <th> S.NO </th>
                        <th>Customer_Name</th>
                        <th> Age</th>
                        <th>Phone</th>
                        <th>Location</th>
                        <th>Data</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.filter(product => product.customer_name.includes(search)||
                        product.data.includes(search)||
                        product.time.includes(search)).map(product =>{
                          return  <tr >
                                <td >{product.sno}</td>
                                <td>{product.customer_name}</td>
                                <td>{product.age}</td>
                                <td>{product.phone}</td>
                                <td>{product.location}</td>
                                <td>{product.data}</td>
                                <td>{product.time}</td>
                            </tr>
                        })
                    }
                </tbody>
               </table>
               </div>
                </div>
            </>
        )
    }
