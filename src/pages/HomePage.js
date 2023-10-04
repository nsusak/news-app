import React, { useState } from "react";
import ArticleList from "../components/HomePage/ArticleList";
import CategoryList from "../components/HomePage/CategoryList";
import "./HomePage.sass";

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleCategorySelect = (category) => {
    console.log("Selected category:", category);
    setSelectedCategory(category);
  };
  return (
    <div className="home-page">
      <div className="category-list">
        <CategoryList onCategorySelect={handleCategorySelect} />
      </div>
      <div className="article-list">
        <ArticleList selectedCategory={selectedCategory} />
      </div>
    </div>
  );
};

export default HomePage;
