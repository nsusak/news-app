import React, { useState, useRef } from "react";
import ArticleList from "../components/HomePage/ArticleList";
import CategoryList from "../components/HomePage/CategoryList";
import SearchBar from "../components/HomePage/SearchBar";
import "./HomePage.sass";

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef(null);
  const handleCategorySelect = (category) => {
    console.log("Selected category:", category);
    setSearchQuery("");
    setSelectedCategory(category);
  };
  const handleSearch = (query) => {
    console.log(query, "are oyu here");
    setSearchQuery(query);
  };
  return (
    <div>
      <SearchBar innerRef={searchInputRef} onSearch={handleSearch} />

      <div className="home-page">
        <div className="category-list">
          <CategoryList onCategorySelect={handleCategorySelect} />
        </div>
        <div className="article-list">
          <ArticleList
            selectedCategory={selectedCategory}
            searchQuery={searchQuery}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
