import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import Navbar from "./Nav/NavBottom/Navbar";
import NavBrand from "./Nav/NavBrand/NavTop";
import Search from "./Nav/Search/Search";
import Control from "./Nav/Controls/Control"

import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header__container">
        <div className="topHeader">
          <NavBrand /> <Search />                
                    <Control />
               
        </div>
        <Navbar />
      </div>
    </>
  );
};
export default Header;
