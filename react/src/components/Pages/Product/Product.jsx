import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Product.css";
import { CartItemsContext } from "../../../Context/CartItemsContext";

const Product = () => {
  const [mynumState, setnumState] = useState(0);
  const [product, setProduct] = useState([]);
  const cartItemsContext = useContext(CartItemsContext);
  let ID = useParams().id;
  console.log(ID, "ID");
  const fetchProductsbyID = async () => {
    const fetched = await axios
      .get(`http://localhost:8081/v1/admin/products/listByID/${ID}`)
      .then((res) => {
        console.log(res.data.payload, "fetched by ID");
        setProduct(res.data.payload);
      });
  };

  const handleAddToCart = () => {
   
    cartItemsContext.addItem(product, 1);
  };

  useEffect(() => {
    fetchProductsbyID();
  }, []);

  return (
    <div className="container">
      <div className="product">
        <div className="product__desc">
          <h3>Description</h3>
          <p>{product.description}</p>
        </div>
        <div className="product__image">
          <img
            src={`http://localhost:8081\\images\\${
              product.image ? product.image : ""
            }`}
            alt=""
          />
        </div>
        <div className="product__details">
          <span>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </span>
          {/* <div className="center-div">
            <div className="state-value">
              <span>{mynumState}</span>
            </div>
            <div
              className="state-btn"
              onClick={() => setnumState(mynumState + 1)}
            >
              <span>+</span>
            </div>
            <div
              className="state-btn"
              onClick={() =>
                mynumState > 0 ? setnumState(mynumState - 1) : setnumState(0)
              }
            >
              <span>-</span>
            </div>
          </div> */}
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
