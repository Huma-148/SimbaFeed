import { useParams } from "react-router-dom";
import MyAccount from "../../Account/MyAccount/MyAccount";
import ManageAccount from "../../Account/ManageAccount/ManageAccount";

import React from "react";
import {useCookies, Cookies} from "react-cookie";

const Profile = () => {
    const [cookies, setCookie] = useCookies(["tokken"]);
  const cookieses = new Cookies();
  var user= cookieses.get('user')



  return <MyAccount user={user.id}/>;

};
  
// const AccountManager = () => {
//   let userID = useParams().id;
//   return <ManageAccount user={userID}/>;
// };

export default Profile;
