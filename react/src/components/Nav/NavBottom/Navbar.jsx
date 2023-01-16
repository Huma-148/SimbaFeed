import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Navbar.css";

const Navbar = () => {
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
    <>
      <nav className="topnav">
        <div className="bottomnav">
          <ul className="nav">
            <li className="nav-link">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-link">
              <Link to="/About">About</Link>
            </li>
            {category.map((cat) => {
              return (
                <li key={cat.name} className="nav-link">
                  <Link to={`/${cat.name.toLowerCase()}`}>{cat.name}</Link>
                </li>
              );
            })}
            <li className="nav-link">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="nav-link">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
