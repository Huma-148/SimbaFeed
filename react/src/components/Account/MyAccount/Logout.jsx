import {useCookies, Cookies} from "react-cookie";
import {Link, redirect, useNavigate} from "react-router-dom";
function LogoutButton() {

    const navigate = useNavigate();
    const cookieses = new Cookies();

  const handleLogout = () => {
 cookieses.remove('token')
 cookieses.remove('user')
 localStorage.setItem("loggedInUserID", null);
 localStorage.setItem("loggedInUserAuth", null );
                        navigate(window.location.replace
                        ("http://127.0.0.1:5173/"));
                      
  }

  return <button onClick={handleLogout}>Logout</button>
}
export default LogoutButton;