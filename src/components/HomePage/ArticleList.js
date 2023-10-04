import React, { useEffect, useState } from "react";

import "./ArticleList.sass";
import { fetchArticles } from "../../api";
import LatestNews from "./LatestNews";


const ArticleList = ({ selectedCategory }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticlesData = async () => {
      try {
        const fetchedArticles = await fetchArticles(selectedCategory);
        setArticles(fetchedArticles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticlesData();
  }, [selectedCategory]);

  return (
    <div className="article-list">
      <h2>{selectedCategory ? selectedCategory : "News"}</h2>
      <div className="grid">
      <div className="latest-news-container">
        <LatestNews />
      </div>
        {articles.map((article) => (
          <div key={article.url} className="card">
            <img src={article.urlToImage} alt={article.title} />
            <div className="card-content">
              <span className="category">{article.category}</span>
              <h3>{article.title}</h3>
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
