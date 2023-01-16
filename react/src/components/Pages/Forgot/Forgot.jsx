import React from "react";
import './Forgot.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useParams } from "react-router-dom";
import {Link, redirect, useNavigate} from "react-router-dom";


const Forgot=()=>{
    const navigate = useNavigate(); 

    let token = useParams().id;
    const[password,setPassword]=useState()
    const [resetpassword,setResetPassword]=useState()
    const submipassword = async ()=>
    {
        if(!password || !resetpassword) {
            return toast.error("all fields required")
        }


   // await axios.post('http://localhost:2000/users/reset/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2I5YmM5Y2I4MDllYmY1ZWVmZDVhZWMiLCJpYXQiOjE2NzM0NDcwMDMsImV4cCI6MTY3MzQ0ODIwM30.j_6CWy9VwbkqEtLmSCT-7HqlPWqkLT1mWj_L_k6SzrY', {
   await axios.post('http://localhost:2000/users/reset/'+token, {
              password, resetpassword
           })
          .then(function (response) {
            console.log(response);
            const data = response.data;
            if(data.message=="exists" ) {

                toast.success(data.message)
                navigate(`/login`);
            }
            else {

                toast.error(data.message)
                navigate(`/forgot/email`);   
            }
          })
          .catch(function (error) {
            console.log(error);
          });
       
        
   }

    return(
        <div>
        <br>
        </br>
     <div className="App">
        <ToastContainer  position="top-center" limit={1}/>
        <header className="App-header">
            <form> 
                <h1>Forgot Password</h1>
                <div>
                    <label htmlFor="password">Password</label>
                     <input  type="password" onChange={(e)=>setPassword(e.target.value)} ></input>
                </div>
                <div>
                    <label htmlFor="resetpassword">Reset Password</label>
                     <input  type="resetpassword" id="resetpassword" onChange={(e)=>setResetPassword(e.target.value)}></input>
                </div>
               
                <div>
                    <label></label>
                    <button type="button" onClick={submipassword}>Submit</button>
                </div>
            </form> 
    
    
        </header>
    </div>
    
    </div> 

    )
}
export default Forgot;