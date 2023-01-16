import { useState, useEffect } from "react";
import axios from "axios";
import "./Category.css";
import CategoryCard from "../../Card/FeaturedCard/CategoryCard";

const Category = () => {
  const [category, setCategory] = useState([]);
  const fetchCategory = async () => {
    const fetched = await axios
      .get("http://localhost:8081/v1/admin/categories/categorylist")
      .then((res) => {
        setCategory(res.data.payload);
      });
  };
  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <div className="featured__categories__container">
      <div className="featured__categories">
        <div className="featured__categories__header">
          <h1 className="featured__header__big">Featured Categories </h1>
          <div className="featured__categories__header__line"></div>
        </div>
        <div className="featured__categories__card__container">
          {category.map((cat) => (
            <CategoryCard key={cat._id} data={cat} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
