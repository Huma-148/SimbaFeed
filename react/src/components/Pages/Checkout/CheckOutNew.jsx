import { useState, useEffect, useContext } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import { CartItemsContext } from "../../../Context/CartItemsContext";
import UserDetails from "./UserDetails";
import "./CheckOutNew.css";
const CheckOutNew = () => {
  const total = localStorage.getItem("localstoreTotal");
  const lists = localStorage.getItem("localdatastore");
  return (
    <>
      <br></br>
      <div className="checkout_wrapper">
        <div className="order_item_card">
          <br></br>
          {JSON.parse(lists).map((currElem, index) => {
            return (
              <>
                <div className="order_container">
                  <div className="image">
                    <img
                      src={`http://localhost:8081\\images\\${currElem.image}`}
                      alt="item"
                      className="product__img"
                    />
                  </div>
                  <div className="orderitems">
                    <h4>{currElem.name}</h4>
                    <p>Weight: {currElem.size}</p>
                  </div>
                </div>
              </>
            );
          })}

          <div className="order_container total">Total Amount: {total}</div>
        </div>
        <UserDetails />
      </div>
    </>
  );
};

export default CheckOutNew;
