import React from "react";
import "./SearchBar.sass";
import SearchIcon from "../../icons/Search.svg";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="logo">
        <span className="red-text">My</span>
        <span className="black-text">News</span>
      </div>
      <div className="search-container">
        <span className="search-icon">
          <img src={SearchIcon} alt={"search-icon"} />
        </span>
        <input type="text" placeholder="Search news" className="search-input" />
        <button className="search-button">SEARCH</button>
      </div>
    </div>
  );
};

export default SearchBar;
