import React, { useEffect, useState } from "react";
import "./ArticleList.sass";
import { fetchArticles } from "../../api";
import LatestNews from "./LatestNews";
import HeartFill from "../../icons/HeartFill.svg";
import Favorites from "../../icons/Favorites.svg";

const ArticleList = ({ selectedCategory, searchQuery }) => {
  const [articles, setArticles] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (article) => {
    const isFavorite = favorites.some((fav) => fav.url === article.url);

    if (isFavorite) {
      const updatedFavorites = favorites.filter(
        (fav) => fav.url !== article.url
      );
      setFavorites(updatedFavorites);
    } else {
      setFavorites([...favorites, article]);
    }
  };
  console.log(favorites, "are there any");

  useEffect(() => {
    const fetchArticlesData = async () => {
      try {
        let query = selectedCategory;

        if (searchQuery) {
          query = searchQuery;
        }

        if (selectedCategory !== "favorites") {
          const fetchedArticles = await fetchArticles(query);
          setArticles(fetchedArticles);
        }
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticlesData();

    if (selectedCategory === "favorites") {
      setArticles(favorites);
    }
  }, [selectedCategory, searchQuery, favorites]);

  const filteredArticles =
    selectedCategory === "favorites"
      ? articles.filter((article) =>
          favorites.some((fav) => fav.url === article.url)
        )
      : articles;

  return (
    <div className="article-list">
      <h2>
        {selectedCategory
          ? selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)
          : "News"}
      </h2>
      <div className="grid">
        <div className="latest-news-container">
          <LatestNews />
        </div>
        {filteredArticles.map((article) => (
          <div key={article.url} className="card">
            <img src={article.urlToImage} alt={article.title} />
            <div className="card-content">
              <span className="category">{article.category}</span>
              <h3>{article.title}</h3>
              <button
                className="favorite-button"
                onClick={() => toggleFavorite(article)}
              >
                <img
                  className={`heart-icon ${
                    favorites.some((fav) => fav.url === article.url)
                      ? "favorited"
                      : ""
                  }`}
                  src={
                    favorites.some((fav) => fav.url === article.url)
                      ? HeartFill
                      : Favorites
                  }
                  alt={
                    favorites.some((fav) => fav.url === article.url)
                      ? "Favorited"
                      : "Not Favorited"
                  }
                />
                {favorites.some((fav) => fav.url === article.url)
                  ? "Unmark favorite"
                  : "Mark as favorite"}
              </button>
              {/* <p>{article.content}</p> */}
              <p className="author">{article.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
