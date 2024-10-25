import React, { useEffect, useState} from "react";
import ReactDOM from 'react-dom/client'
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function GetById(){


    const [data,setData]=useState({});
    const {id}=useParams();
    const navigate=useNavigate()
    useEffect(()=>{
        fetch('http://localhost:8000/food/'+id)
        .then(res=>{
            if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                return res.json();
        })
        .then((data)=>{setData(data)})
        .catch(error => console.error("Error fetching or parsing JSON:", error));
    },[id])

    function deleteOne(){
       
        fetch('http://localhost:8000/food/'+id,
            {
                method:'DELETE'
            }
        ).then(res=>{
            if(!res.ok){
                throw new Error("failed to fateche");
                
            }
            navigate('/');
        })
        .catch(error=>console.error("error........"));
        
    }
    return(
        <>
            <div className="bg-transparent" id='maindiv'>
            
            <table className="table table-info">
                <thead>
                    <tr classname="row">
                        <th>Name</th>
                        <th>ID</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <br></br>
                
                <tbody>
                    
                        <tr key={data.id}>
                            <td>{data.name}</td>
                            <td>{data.id}</td>
                            <td>{data.category}</td>
                            <td>{data.price}</td>
                            <td>{data.description}</td>
                        </tr>
                </tbody>
            </table>
            <Link to={'/'}  className="btn btn-lg btn-warning ms-4 mb-2 mt-0">Back</Link>
            <button onClick={deleteOne} className="btn btn-lg btn-danger ms-4 mb-2 mt-0">DELETE</button>
        </div>


        </>
    )
}
export default GetById;
