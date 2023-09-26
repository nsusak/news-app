import LatestNews from "../components/HomePage/LatestNews";
import ArticleList from "../components/HomePage/ArticleList";
import CategoryList from "../components/HomePage/CategoryList";
import "./HomePage.sass";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="category-list">
        <CategoryList />
      </div>
      <div className="article-list">
        <ArticleList />
      </div>
      <div className="latest-news">
        <LatestNews />
      </div>
    </div>
  );
};

export default HomePage;
