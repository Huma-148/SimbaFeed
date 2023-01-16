import './NavTop.css'
import { Link } from 'react-router-dom';

const NavBrand = () => {
    return (
        <div href="#home" className='navbrand_container'>
            <h1 className='navbrand'>
                <Link to="/"><img src='./images/logof.png'/></Link>
            </h1>
        </div>

    );
}

export default NavBrand;