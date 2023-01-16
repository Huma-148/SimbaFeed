import React from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import { useState } from "react";
import { useCookies, Cookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie] = useCookies(["tokken"]);
  const navigate = useNavigate();
  const cookieses = new Cookies();

  // import Cookies from 'universal-cookie';
  // const cookies = new Cookies();
  //  cookies.set('token', 'Pacman', { path: '/' });
  // console.log(cookies.get('myCat')); // Pacman

  const loginData = async () => {
    var token = null;
    var data = {
      email: email,
      password: password,
    };
    //http://localhost:2000/users/signup
    //  admin/user/signin
    axios
      .post("http://localhost:8081/v1/admin/user/signin", data)
      .then(function (response) {
        // console.log(response.data.token, "tokkksss");
        token = response.data.token;
        var user = response.data.user;

        if (token != null && token != undefined) {
          setCookie("token", token, { path: "/" });
          setCookie("user", user, { path: "/" });
          axios.defaults.headers.common = {
            Authorization: "Bearer " + cookieses.get("token"),
          };
          if (user.is_admin == 1) {
            navigate(
              window.location.replace("http://127.0.0.1:5173/admin/dashboard")
            );
          } else {
            navigate(`/user/dashboard/`);
            localStorage.setItem("loggedInUserID", JSON.stringify(user._id));
            localStorage.setItem("loggedInUserAuth", JSON.stringify(cookieses.get("token")));
          }
        }
        axios
          .get("http://localhost:8081/v1/admin/user")
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      })
      .catch(function (error) {
        toast.error("login fail!", {
          position: "top-center",
        });
        console.log(error);
      });
  };

  function showCookie() {
    console.log("saira Tokken : " + cookieses.get("token"));
  }

  return (
    <div>
      <br /> <br />
      <div className="login__card__container">
        <div className="login__card">
          <div className="login__header">
            <h1>Login</h1>
          </div>
          <div className="login__inputs">
            <div className="email__input__container input__container">
              <label className="email__label input__label">Email</label>
              <input
                type="text"
                className="email__input login__input"
                placeholder="example@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="password__input__container input__container">
              <label className="password__label input__label">Password</label>
              <input
                type="password"
                className="password__input login__input"
                placeholder="**********"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="login__button__container">
              <button className="login__button" onClick={loginData}>
                LOGIN
              </button>
              <ToastContainer />
            </div>
          </div>
          <div className="login__other__actions">
            <div className="login__forgot__password">
              <Link to="/forgot/email">Forgot password?</Link>
            </div>
            <div className="login__new__account">
              Don't have account? <Link to="/signup">Create account</Link>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
