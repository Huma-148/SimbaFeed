import { useEffect, useState } from "react";
import axios from "axios";
import ShopCategory from "./Container/ShopCategory";
import "./Shop.css";

const Shop = () => {
  const [itemslist, setItemslist] = useState([]);
  const [categories, setCategories] = useState([]);
  useState([]);

  const fetchProductss = async () => {
    const fetched = await axios
      .get("http://localhost:8081/v1/admin/products/list")
      .then((res) => {
        setItemslist(res.data.payload);
      });
  };
  const fetchCategory = async () => {
    const categoriesFetch = await axios
      .get("http://localhost:8081/v1/admin/categories/categorylist")
      .then((res) => {
        setCategories(res.data.payload);
      });
  };
  useEffect(() => {
    fetchProductss();
    fetchCategory();
  }, []);
  console.log(itemslist, "item list");
  return (
    <div className="shop__contianer">
      {categories.map((cat) => {
        return (
          cat && (
            <ShopCategory
              name={cat.name}
              key={cat.name}
              items={itemslist}
              categories={categories}
            />
          )
        );
      })}
    </div>
  );
};

export default Shop;
