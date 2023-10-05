import React, { useState } from "react";
import "./SearchBar.sass";
import SearchIcon from "../../icons/Search.svg";

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState("");

  const handleSearch = () => {
    onSearch(term);
  };
  const handleChange = (event) => {
    setTerm(event.target.value);
  };
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
        <input
          type="text"
          placeholder="Search news"
          className="search-input"
          value={term}
          onChange={handleChange}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleSearch(event);
            }
          }}
        />
        <button className="search-button" onClick={handleSearch}>
          SEARCH
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
