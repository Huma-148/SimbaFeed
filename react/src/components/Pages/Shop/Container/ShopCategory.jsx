import { Link } from "react-router-dom";
import ItemCard from "../../../Card/ItemCard/ItemCard";
import "./ShopCategory.css";

const ShopCategory = (props) => {
  const itemsArray = [];
  let count = 0;
  props.items.filter((prod) => {
    
      if (prod.category === props.name) {
        if (count < 4) {
        itemsArray.push(prod);
        count+=1;
      }
      else{return 0;}
    }
  });
  return (
    <div className="shop__category__container">
      <div className="shop__category__header">
        <div className="shop__category__header__big">
          <div className="shop__category__head">
           <Link to={`/${props.name.toLowerCase()}`}><h2>{props.name} Food Items</h2></Link> 
          </div>
          <div className="shop__category__header__line"></div>
        </div>
      </div>
      <div className="shop__category__card__container">
        <div className="shop__category__product__card">
          {itemsArray.map((data) => (
            <ItemCard key={data._id} item={data} category={props.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;
