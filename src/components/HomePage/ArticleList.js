import "./ArticleList.sass";

const articles = [
  { id: 1, title: "Article 1", content: "Lorem ipsum...", imageUrl: "url1" },
  { id: 2, title: "Article 2", content: "Lorem ipsum...", imageUrl: "url2" },
  { id: 3, title: "Article 3", content: "Lorem ipsum...", imageUrl: "url3" },
  { id: 4, title: "Article 4", content: "Lorem ipsum...", imageUrl: "url4" },
  { id: 5, title: "Article 5", content: "Lorem ipsum...", imageUrl: "url5" },
  { id: 6, title: "Article 6", content: "Lorem ipsum...", imageUrl: "url6" },
];

const ArticleList = () => {
  return (
    <div className="article-list">
      <h2>News</h2>
      <div className="grid">
        {articles.map((article) => (
          <div key={article.id} className="card ">
            <img src={article.imageUrl} alt={article.title} />
            <h3>{article.title}</h3>
            <p>{article.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
