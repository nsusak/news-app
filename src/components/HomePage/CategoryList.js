import React from "react";
// import { Link } from "react-router-dom";
import "./CategoryList.sass";

import HomeIcon from "../../icons/Icons.svg";
import GeneralIcon from "../../icons/Home.svg";
import BusinessIcon from "../../icons/Group.svg";
import HealthIcon from "../../icons/Health.svg";
import ScienceIcon from "../../icons/Science.svg";
import SportsIcon from "../../icons/Sport.svg";
import TechnologyIcon from "../../icons/Technology.svg";

const categories = [
  { name: "Home", icon: HomeIcon },
  { name: "General", icon: GeneralIcon },
  { name: "Business", icon: BusinessIcon },
  { name: "Health", icon: HealthIcon },
  { name: "Science", icon: ScienceIcon },
  { name: "Sports", icon: SportsIcon },
  { name: "Technology", icon: TechnologyIcon },
];

const CategoryList = ({ onCategorySelect }) => {
  const handleCategoryClick = (category) => {
    onCategorySelect(category.name);
  };

  return (
    <div>
      <div>
        {categories.map((category) => (
          <div
            className="icon-container"
            key={category.name}
            onClick={() => handleCategoryClick(category)}
          >
            {/* <Link to={`/category/${category.name.toLowerCase()}`}> */}
            <img
              className="category-icon"
              src={category.icon}
              alt={`${category.name} icon`}
            />
            <span className="category-name">{category.name}</span>
            {/* </Link> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
