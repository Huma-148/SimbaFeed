import React from "react";
import './Forgot.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const EmailForgot=()=>{
    const[email,setPassword]=useState()
  
    const submipassword = async ()=>

    {
        if(!email  ) {
            return toast.error("all fields required")
        }
   await axios.post('http://localhost:2000/users/password-reset', {
              email
           })
          .then(function (response) {
            console.log(response);
            const data = response.data;
            if(data.status) {
                toast.success(data.message)
            }
            else {
                toast.error(data.message)
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
                    <label htmlFor="password">Email</label>
                     <input  type="email" onChange={(e)=>setPassword(e.target.value)} ></input>
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
export default EmailForgot;

