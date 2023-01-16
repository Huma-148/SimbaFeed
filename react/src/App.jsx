import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import CategoryPage from "./components/Pages/Category/CategoryPage";
import Product from "./components/Pages/Product/Product";
import Shop from "./components/Pages/Shop/Shop";
import Contact from "./components/Pages/Contact/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Pages/Login/Login";
import Forgot from "./components/Pages/Forgot/Forgot";
import Signup from "./components/Pages/Signup/Signup";
import Dashboard from "./components/Pages/Admin/Dashboard";
import Profile from "./components/Pages/Profile/Profile";
import ManageAccount from "./components/Account/ManageAccount/ManageAccount";
import SearchView from "./components/Pages/Search/Search";
import EmailForgot from "./components/Pages/Forgot/Emailforget";
import CheckOutNew from "./components/Pages/Checkout/CheckOutNew";

function App() {
  const [itemslist, setItemslist] = useState([]);
  const [category, setCategory] = useState([]);
  const fetchProductss = async () => {
    const fetched = await axios
      .get("http://localhost:8081/v1/admin/products/list")
      .then((res) => {
        setItemslist(res.data.payload);
      });
  };
  const fetchCategory = async () => {
    const fetched = await axios
      .get("http://localhost:8081/v1/admin/categories/categorylist")
      .then((res) => {
        setCategory(res.data.payload);
      });
  };
  useEffect(() => {
    fetchProductss();
    fetchCategory();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {category.map((cat) => {
            return (
              <>
                <Route
                  path={`/${cat.name.toLowerCase()}`}
                  element={
                    <CategoryPage
                      key={cat._id}
                      name={cat.name}
                      items={itemslist}
                    />
                  }
                />

                <Route
                  path={`/item/${cat.name.toLowerCase()}/:id`}
                  element={<Product />}
                />
              </>
            );
          })}
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user/forgot/:id" element={<Forgot />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot/email" element={<EmailForgot />} />

          <Route path="/user/dashboard/" element={<Profile />} />
          <Route path="/user/account/manage/:id" element={<ManageAccount />} />
          <Route path="/search/*" element={<SearchView />} />
          <Route path="/checkout" element={<CheckOutNew />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
