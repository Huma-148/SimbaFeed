import ItemCard from "../../Card/ItemCard/ItemCard";
import "./CategoryPage.css";

const CategoryPage = (props) => {
    const itemsArray = [];
    props.items.filter((prod) => {
      if (prod.category === props.name) {
          itemsArray.push(prod);       
      }
    });
    return (
      <div className="shop__category__container">
        <div className="shop__category__header">
          <div className="shop__category__header__big">
            <div className="shop__category__head">
              <h2>{props.name} Food Items</h2>
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
}

export default CategoryPage