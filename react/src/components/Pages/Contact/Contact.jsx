import React from "react";
import  './Contact.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Contact=()=>{
    const[email,setEmail]=useState()
    const [subject,setSubject]=useState()
    const [message,setMessage]=useState()
   
  const submitHandler = async ()=>

    {
        if(!email || !subject || !message){
            return toast.error("all fields required")
        }
   await axios.post('http://localhost:2000/users/contact', {
            email, subject, message
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

 <div className="App">
    <ToastContainer  position="top-center" limit={1}/>
    <header className="App-header">
        <form> 
            <h1>Contact Form</h1>
            <div>
                <label htmlFor="email">Email</label>
                 <input  type="email" onChange={(e)=>setEmail(e.target.value)} ></input>
            </div>
            <div>
                <label htmlFor="subject">Subject</label>
                 <input  type="text" id="subject" onChange={(e)=> setSubject(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor="message">Message</label>
                 <input  type="text" id="message" onChange={(e)=> setMessage(e.target.value)}></input>
            </div>
            <div>
                <label></label>
                <button type="button" onClick={submitHandler}>Submit</button>
            </div>
        </form> 


    </header>
</div>

    
   
   


    )
}
export default Contact;