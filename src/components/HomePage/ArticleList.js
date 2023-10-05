import React, { useEffect, useState } from "react";
import "./ArticleList.sass";
import { fetchArticles } from "../../api";
import LatestNews from "./LatestNews";

const ArticleList = ({ selectedCategory, searchQuery }) => {
  const [articles, setArticles] = useState([]);
  console.log(searchQuery, "search qwuery in article list");

  useEffect(() => {
    const fetchArticlesData = async () => {
      try {
        let query = selectedCategory; // Use selected category as the query by default

        // If a search query is available, use that instead
        if (searchQuery) {
          query = searchQuery;
        }

        const fetchedArticles = await fetchArticles(query);
        setArticles(fetchedArticles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticlesData();
  }, [selectedCategory, searchQuery]);

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
