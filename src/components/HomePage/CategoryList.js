import React, { useState } from "react";
import "./CategoryList.sass";
import HomeIcon from "../../icons/Icons.svg";
import GeneralIcon from "../../icons/Home.svg";
import BusinessIcon from "../../icons/Group.svg";
import HealthIcon from "../../icons/Health.svg";
import ScienceIcon from "../../icons/Science.svg";
import SportsIcon from "../../icons/Sport.svg";
import TechnologyIcon from "../../icons/Technology.svg";
import FavoritesIcon from "../../icons/Favorites.svg";

const categories = [
  { name: "news", icon: HomeIcon, label: "Home" },
  { name: "general", icon: GeneralIcon, label: "General" },
  { name: "business", icon: BusinessIcon, label: "Business" },
  { name: "health", icon: HealthIcon, label: "Health" },
  { name: "science", icon: ScienceIcon, label: "Science" },
  { name: "sport", icon: SportsIcon, label: "Sports" },
  { name: "tech", icon: TechnologyIcon, label: "Technology" },
  { name: "favorites", icon: FavoritesIcon, label: "Favorites" },
];

const CategoryList = ({ onCategorySelect }) => {
  const [selectedCategory, setSelectedCategory] = useState("news");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category.name);
    onCategorySelect(category.name);
  };

  return (
    <div>
      <div>
        {categories.map((category) => (
          <div
            className={`icon-container ${
              selectedCategory === category.name ? "selected" : ""
            }`}
            key={category.name}
            onClick={() => handleCategoryClick(category)}
          >
            <img
              className="category-icon"
              src={category.icon}
              alt={`${category.name} icon`}
            />
            <span className="category-name">{category.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
