import React, { useState } from "react";
import ReactDOM from 'react-dom/client'
import { Link, useNavigate, useParams } from "react-router-dom";
import FormCss from './FormCss.css';
function InsertFood(){

    const [data,setdata]=useState({});
    const navigate=useNavigate();

    return(

        <>
           
           <h1>Add Data Here</h1>
            {/* <form className="bg bg-transparant border border-3 border-dark p-3 shadow-lg p-3 mb-5 bg-body rounded " >
            <div className="form-group row">
                <label for="text" className="col-4 col-form-label text-dark p-3 ">Food Item Name</label> 
                <div className="col-8">
                <div className="input-group">
                    
                    <input  type="text" className="form-control shadow-sm p-3 mb-3 bg-body rounded" onChange={(e)=>{
                        setdata({...data,name:e.target.value})
                    }}></input>
                </div>
                </div>
            </div>
            <div className="form-group row">
                <label className="col-4 text-dark p-3">Id</label> 
                <div className="col-8">
                <input type="text" className="form-control shadow-sm p-3 mb-3 bg-body rounded" onChange={(e)=>{
                    setdata({...data,id:e.target.value})
                }}></input>
                </div>
            </div>
            <div className="form-group row">
                <label for="text2" className="col-4 col-form-label text-dark p-3">Category</label> 
                <div className="col-8">
                <input  type="text" className="form-control shadow-sm p-3 mb-3 bg-body rounded" onChange={(e)=>{
                    setdata({...data,category:e.target.value})
                }}></input>
                </div>
            </div>
            <div className="form-group row">
                <label for="text3" className="col-4 col-form-label text-dark p-3">Price</label> 
                <div className="col-8">
                <input  type="text" className="form-control shadow-sm p-3 mb-3 bg-body rounded" onChange={(e)=>{
                    setdata({...data,price:e.target.value})
                }}></input>
                </div>
            </div>
            <div className="form-group row">
                <label for="textarea" className="col-4 col-form-label text-dark p-3">Description</label> 
                <div className="col-8">
                <textarea  cols="40" rows="5" className="form-control shadow-sm p-3 mb-3 bg-body rounded" onChange={(e)=>{
                    setdata({...data,description:e.target.value})
                }}></textarea>
                </div>
            </div> 
            <div className="form-group row">
                <div className="offset-4 col-8">
                <button  className="btn btn-info" onClick={()=>{
                    fetch('http://localhost:8000/food/',{
                        method:'POST',
                        body:JSON.stringify(data),
                        headers:{
                            "Content-Type":"application/json"
                        }
                    })
                    .then(()=>{navigate('/')})
                }}>Submit</button>
                </div>
            </div>
            </form>
             */}
             <form style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', backgroundColor: 'paleturquoise', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                    <input type="text" placeholder="Name" onChange={(e)=>{
                        setdata({...data,name:e.target.value})
                    }}
                    style={{ width: '100%', padding: '10px', margin: '10px 0', borderRadius: '5px', border: '1px solid black' }}/>
                    <input type="text" placeholder="ID" onChange={(e)=>{
                        setdata({...data,id:e.target.value})
                    }}
                    style={{ width: '100%', padding: '10px', margin: '10px 0', borderRadius: '5px', border: '1px solid black' }}
                    />
                    <input type="text" placeholder="Category" onChange={(e)=>{
                        setdata({...data,category:e.target.value})
                    }}
                    style={{ width: '100%', padding: '10px', margin: '10px 0', borderRadius: '5px', border: '1px solid black' }}
                    />
                    <input type="text" placeholder="Price" onChange={(e)=>{
                        setdata({...data,price:e.target.value})
                    }}
                    style={{ width: '100%', padding: '10px', margin: '10px 0', borderRadius: '5px', border: '1px solid black' }}
                    />
                    <input type="textarea"  placeholder="Description" onChange={(e)=>{
                        setdata({...data,description:e.target.value})
                    }}
                    style={{ width: '100%', padding: '10px', margin: '10px 0', borderRadius: '5px', border: '1px solid black', resize: 'vertical' }}
                    />

             </form>
           
            
            <button 
            type="submit"  style={{ padding: '10px 15px', backgroundColor: '#1976d2', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '10px', transition: 'background-color 0.3s', alignSelf:'center', alignContent:'center'}} 
            onMouseOver={(e) => e.target.style.backgroundColor = '#1565c0'} 
            onMouseOut={(e) => e.target.style.backgroundColor = '#1976d2'}
            onClick={()=>{
                 fetch('http://localhost:8000/food/add',{
                    method:'POST',
                    body:JSON.stringify(data),
                    headers:{
                        "Content-Type":"application/json"
                    }
                })
                .then(()=>{navigate('/')})

            }}>
                Submit
            </button>
        
        </>

    )

}
export default InsertFood;