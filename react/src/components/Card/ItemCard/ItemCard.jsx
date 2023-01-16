import "./ItemCard.css";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartItemsContext } from "../../../Context/CartItemsContext";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ItemCard = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const cartItemsContext = useContext(CartItemsContext);


  const handleAddToCart = () => {
    cartItemsContext.addItem(props.item, 1);
    console.log(cartItemsContext.addItem, "cart handlee");
  };

  return (
    <div className="product__card__card">
      <div className="product__card">
        <div
          className="product__image"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered ? (
            <img
              src={`http://localhost:8081\\images\\${
                props.item.image ? props.item.image : ""
              }`}
              alt="item"
              className="product__img"
            />
          ) : (
            <img
              src={`http://localhost:8081\\images\\${
                props.item.image ? props.item.image : ""
              }`}
              alt="item"
              className="product__img"
            />
          )}
        </div>
        <div className="product__card__detail">
          <div className="product__name">
            <Link
              to={`/item/${props.item.category.toLowerCase()}/${
                props.item._id
              }`}
            >
              {props.item.name}
            </Link>
          </div>
          {/* <div className="product__description">
            <span>{props.item.description}</span>
          </div> */}
          <div className="product__price">
            <span>${props.item.price}</span>
          </div>
          <div className="product__card__action">
            {/* <IconButton onClick={handleAddToWishList} sx={ {borderRadius: '20px', width: '40px', height: '40px'}  }>
                            <FavoriteBorderIcon sx={{width: '22px', height: '22px', color: 'black'}}/>
                        </IconButton> */}
            <IconButton
              onClick={handleAddToCart}
              sx={{
                borderRadius: "20px",
                width: "40px",
                height:
                  "40px" /*  borderWidth: '3px', borderStyle: 'solid', borderColor: '#C38D9E' */,
              }}
            >
              <AddShoppingCartIcon
                sx={{ width: "22px", height: "22px", color: "black" }}
              />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
