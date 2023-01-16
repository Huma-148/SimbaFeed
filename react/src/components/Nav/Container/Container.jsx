

import Control from '../Controls/Control'

// import Form from '../Search-Bar/Form';
import './Container.css'
import NavBrand from "../NavBrand/NavTop";

const Navtop = () => {
    return (
        <div className="nav__top__container">
            <div className="top__container">
            <NavBrand/>
                <div className="form__container">
                    <Search/>
                </div>
                <div className="control__bar">
                    <Control />
                </div>
                <div className="drawer">
                    <DrawerNav />
                </div>
            </div>
        </div>
    );
}

export default Navtop;