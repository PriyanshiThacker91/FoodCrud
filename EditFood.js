import React, { useEffect, useState } from "react";
import ReactDom from 'react-dom/client';
import { useNavigate, useParams } from "react-router-dom";


function EditFood(){
    const {id}=useParams();
    const navigate=useNavigate();
    const apiUrl="http://localhost:8000/food/edit/";

    // const [loading, setLoading] = useState(true);
    const [data, setdata] = useState({
        name: '',
        id: '',
        category: '',
        price: '',
        description: ''
    });

    useEffect(()=>{
        fetch(apiUrl+id,{
            method:"GET"
        })
        .then((res)=>{
             if (!res.ok) {
                    throw new Error("Network response was not ok");
            }
            res.json();
        })
        .then((res)=>{
            setdata(res);
            // setLoading(false);
        })
        .catch((err) => {
            console.error("Fetch error: ", err);
            // setLoading(false);
        });
    },[id]);

   

  
    return(

        <>


            <h1>edit Data Here</h1>
            <form style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', backgroundColor: 'paleturquoise', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                    <input type="text" placeholder="Name" value={data.name} onChange={(e)=>{
                        setdata({...data,name:e.target.value})
                    }}
                    style={{ width: '100%', padding: '10px', margin: '10px 0', borderRadius: '5px', border: '1px solid black' }}/>
                    <input type="text" placeholder="ID" value={data.id} onChange={(e)=>{
                        setdata({...data,id:e.target.value})
                    }}
                    style={{ width: '100%', padding: '10px', margin: '10px 0', borderRadius: '5px', border: '1px solid black' }}
                    />
                    <input type="text" placeholder="Category" value={data.category} onChange={(e)=>{
                        setdata({...data,category:e.target.value})
                    }}
                    style={{ width: '100%', padding: '10px', margin: '10px 0', borderRadius: '5px', border: '1px solid black' }}
                    />
                    <input type="text" placeholder="Price"  value={data.price} onChange={(e)=>{
                        setdata({...data,price:e.target.value})
                    }}
                    style={{ width: '100%', padding: '10px', margin: '10px 0', borderRadius: '5px', border: '1px solid black' }}
                    />
                    <textarea  placeholder="Description" value={data.description} onChange={(e)=>{
                        setdata({...data,description:e.target.value})
                    }}
                    style={{ width: '100%', padding: '10px', margin: '10px 0', borderRadius: '5px', border: '1px solid black', resize: 'vertical' }}
                    />

           
           
            
            <button 
            type="submit" 
            style={{ padding: '10px 15px', backgroundColor: '#1976d2', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '10px', transition: 'background-color 0.3s', alignSelf:'center', alignContent:'center'}} 
            onMouseOver={(e) => e.target.style.backgroundColor = '#1565c0'} 
            onMouseOut={(e) => e.target.style.backgroundColor = '#1976d2'}
            onClick ={(e)=>{
                e.preventDefault();
                 fetch(apiUrl+id,{
                    method:'PUT',
                    body:JSON.stringify(data),
                    headers:{
                        "Content-Type":"application/json"
                    }
                })
                .then(()=>{navigate('/')})
                // .catch(err => console.error("Update error: ", err));
            }}>
                Submit
            </button>
        
            </form>
        </>
    )
}

export default EditFood;