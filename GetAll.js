import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState,useEffect } from 'react';
import getall from './GetAll.css'
import { Link, useParams } from 'react-router-dom';
import InsertFood from './InsertFood';
function GetAll(){

    var [data,setData]=useState([]);
  
    const URL="http://localhost:8000/food/";
    useEffect(() => {
        fetch(URL)
            .then((res) => {
                // if (!res.ok) {
                //     throw new Error("Network response was not ok");
                // }
                return res.json();
            })
            .then((data) => {
                setData(data);
            })
            // .catch((error) => {
            //     console.error("Fetch error:", error);
            // });
    });
    return(

        <>
        
        
            <table className="table table-transparant text-dark striped">
                <thead>
                    <tr classname="row">
                        <th>Name</th>
                        <th>ID</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((e) => (
                        <tr key={data.id}>
                            <td>{e.name}</td>
                            <td>{e.id}</td>
                            <td>{e.category}</td>
                            <td>{e.price}</td>
                            <td>{e.description}</td>
                            <td><Link to={'/food/'+e.id} className='btn btn-lg btn-primary'>read more</Link></td>
                            <td><Link to={'/food/edit/'+e.id} className='btn btn-lg btn-warning'>Edit</Link></td>
                            {/* <td><button className='btn btn-danger'>delete</button></td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
                    <Link className='btn btn-secondary' to={'/food/add'}>Add Item</Link>

           

        </>
    )
}

export default GetAll;
