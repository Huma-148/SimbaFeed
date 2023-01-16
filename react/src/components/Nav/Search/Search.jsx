import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import { useContext } from "react";
import { SearchContext } from "../../../Context/SearchContext";

const searchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const searchContext = useContext(SearchContext);
  const navigate = useNavigate();

  const handelChange = (e) => {
    setSearchInput(e.target.value);
  };
  const handelFormSubmit = (e) => {
    e.preventDefault();
    searchContext.setSearchQuery(searchInput);
    navigate("/search");
  };
  return (
    <div className="search__bar">
      <form className="search__form" onSubmit={handelFormSubmit}>
        <input
          type="text"
          placeholder="Search for products"
          className="search__form__input"
          value={searchInput}
          onChange={handelChange}
          required
        />
        <button className="search__form__button" type="submit">
          <SearchIcon fontSize="medium" />
        </button>
      </form>
    </div>
  );
};
export default searchBar;
