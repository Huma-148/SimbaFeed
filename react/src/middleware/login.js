import {useCookies, Cookies} from "react-cookie";
import axios from "axios";


const middlewarelogin = store => next => action => {
    const cookieses = new Cookies();

    // cookieses.get('token')


};

export default middlewarelogin;