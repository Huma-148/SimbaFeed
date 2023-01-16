import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Signup.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {

    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function showConsole()
    {
        console.log("Firstname : "+ fname +"\nLastname : "+ lname + "\nEmail : "+ email + "\nPassword : "+ password );
    }

    const registerData = async ()=>
    {
        toast.success("user created successfully!",{
            position:"top-center"
        });


        var token=null;
        var data={
            "firstname": fname,
            "lastname":lname,
            "email": email,
            "password": password,
        }

        axios.post("http://localhost:8081/v1/admin/user/signup",  data)
            .then(function (response) {
                console.log(response.data.token);
                token=response.data.token;

                var data1={
                    "authorization": "bearer "+ token
                };
                axios.get("http://localhost:8081/v1/admin/user",  data1)
                    .then(function (response) {
                        console.log(response);

                            navigate("/login");
                       
                    })
                    .catch(function (error) {

                        console.log(error);
                    });

            })
            .catch(function (error) {
                toast.error("user already exist!",{
                    position:"top-center"
                });
                console.log(error);
            });
    }


    return (
        <div>
            <br /> <br/>
        <div className="register__card__container">
            <div className="register__card">
                <div className="register__header">
                    <h1>Create Account</h1>
                </div>
                <div className="register__inputs">
                    <div className="fname__input__container reg__input__container">
                        <label className="fname__label input__label">First name</label>
                        <input type="text" id='' name="test_fname_reg" className="fname__input register__input"  onChange={(e)=>setFName(e.target.value)} />
                    </div>
                    <div className="lname__input__container reg__input__container">
                        <label className="lname__label input__label">Last name</label>
                        <input type="text" name="test_lname_reg" className="lname__input register__input" onChange={(e)=>setLName(e.target.value)}/>
                    </div>
                    <div className="email__input__container reg__input__container">
                        <label className="email__label input__label">Email</label>
                        <input type="email" name="test_email_reg" className="email__input register__input" placeholder='example@gmail.com' onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="password__input__container reg__input__container">
                        <label className="password__label input__label">Password</label>
                        <input type="password" name="test_password_reg" className="password__input register__input" onChange={(e)=>setPassword(e.target.value)} />
                    </div>
                    <div className="register__button__container">
                        <button className="register__button" onClick={registerData} >Create Account</button>
                        <ToastContainer />
                    </div>
                </div>
                <div className="register__other__actions">
                    <div className="register__login__account">Already have account? <Link to="/login">Login</Link></div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Signup;