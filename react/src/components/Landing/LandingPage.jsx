import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <>
      <div className="land1">
        <div className="landheader">
          <div className="landhead2">
            <h3 className="landing_header_discount">Best Pet Supplies</h3>
            <h1 className="landing_header_main">Checkout The Best Food Here</h1>
            <Link to="/shop">
              <button className="styling-button">Shop Now</button>
            </Link>
          </div>
        </div>
        <div className="landing_image_container">
          <img src="./images/simba.png" alt="" />
        </div>
      </div>
    </>
  );
};
export default LandingPage;
