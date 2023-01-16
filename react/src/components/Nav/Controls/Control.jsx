import './Control.css'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Badge from '@mui/material/Badge';
import { Link,useNavigate } from 'react-router-dom';
import Cart from '../../Card/Cart/Cart';
import {useCookies, Cookies} from "react-cookie"; 
import { useContext } from 'react';
// import { WishItemsContext } from '../../../Context/WishItemsContext';

const Control = () => {
    const navigate = useNavigate();
    // const wishItems = useContext(WishItemsContext)
      const [cookies, setCookie] = useCookies(["tokken"]);
    const cookieses = new Cookies();
    var user= cookieses.get('user')
var url="/login";
if(user!=null){
url="/user/dashboard/";

}
// to={`/fish-info/${fishInfo.fishPath}`}

    return ( 
        <div className="control__bar__container">
            <div className="controls__container">
                <div className="control">
                  
                <Link to={`${url}`}>
                        <PersonOutlineIcon color="black" size="large" sx={{ width: '35px'}}/>
                    </Link>
                </div>
                {/* <div className="control">
                    <Link to="/wishlist">
                        <Badge badgeContent={wishItems.items.length} color="error">
                            <FavoriteBorderIcon color="black" sx={{ width: '35px'}}/>
                        </Badge>
                    </Link>
                </div> */}
                <div className="control">
                    <Cart />
                </div>
                
            </div>
        </div>
     );
}
 
export default Control;