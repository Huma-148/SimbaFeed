import { useState, useEffect } from "react";
import axios from "axios";
import Account from '../Account';
import './MyAccount.css';
import { Link ,useNavigate} from 'react-router-dom';
import {useCookies, Cookies} from "react-cookie";
import Logout from './Logout';
const MyAccount = (props) => {
    let id = props.user;
    const [user, setUser] = useState([]);

    const [cookies, setCookie] = useCookies(["tokken"]);
    const navigate = useNavigate();
    const cookieses = new Cookies();

    const fetchUserbyID = async () => {
        // const fetched = await axios
        //   .get(`http://localhost:8081/v1/admin/user/userbyID/${id}`)
        //   .then((res) => {
        //     console.log(res.data.user, "User by ID");
        //     setUser(res.data.user);
        //   });
      };
      const logout=() => {
        // fetchUserbyID();
        cookieses.remove('token')
        cookieses.remove('user')
        alert("logout");
    
      };
      
    return ( 
        <Account>
            <div className="order__history__container">
                <div className="order__history">
                    <div className="order__history__header">Order History</div>
                    <div className="order__history__detail">You have not place any orders yet</div>
                </div>
            </div>
            <div className="account__details__container">
                <div className="account__details__header">
                    <div className="details__header">Account Details</div>
                    {/* <a className="logout__action"  onClick={logout}>Logout</a> */}
                    <Logout />
                </div>
                <div className="account__details">
                    <div className="account__holder__name">Account holder name:  {user.firstname} {user.lastname}</div>
                    <div className="account__holder__email">Account holder email: {user.email}</div>
                    <div className="manage__account__action">
                        <Link to={`/user/account/manage/${user._id}`}>Manage account</Link>   
                    </div>
                </div>
            </div>
        </Account>
     );
}
 
export default MyAccount;