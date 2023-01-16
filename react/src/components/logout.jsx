import { useNavigate } from "react-router-dom";
import { useCookies, Cookies } from "react-cookie";
import "react-toastify/dist/ReactToastify.css";

const logout = () => {
  const [cookies, setCookie] = useCookies(["tokken"]);
  const navigate = useNavigate();
  const cookieses = new Cookies();
  cookieses.remove("token");
  cookieses.remove("user");
 
  navigate(window.location.replace("http://127.0.0.1:5173/"));
};
export default logout;
