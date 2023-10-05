import React, { useEffect, useState } from "react";
import "./LatestNews.sass";
import LatestIcon from "../../icons/Latest.svg";

import { fetchLatestNews } from "../../api";

const LatestNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const loadMoreNews = async () => {
    try {
      const newArticles = await fetchLatestNews(page + 1);
      setNews((prevNews) => [...prevNews, ...newArticles]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error loading more news:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const articles = await fetchLatestNews();
        setNews(articles);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching latest news:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.target;

    if (scrollHeight - scrollTop === clientHeight) {
      loadMoreNews();
    }
  };

  return (
    <div className="latest-news-container" onScroll={handleScroll}>
      <div className="container">
        <div className="latest-news-heading">
          <img src={LatestIcon} alt={"latest-icon"} />
          <span>Latest News</span>
        </div>
        <div>
          {news.map((item) => {
            const publishedTime = new Date(item.publishedAt);
            const formattedTime = `${publishedTime.getHours()}:${publishedTime.getMinutes()}`;

            return (
              <div key={item.url} className="latest-news-item">
                <p className="time">{formattedTime}</p>
                <h3 className="title">{item.title}</h3>
              </div>
            );
          })}
        </div>

        {loading && <div>Loading more news...</div>}
      </div>
    </div>
  );
};

export default LatestNews;
