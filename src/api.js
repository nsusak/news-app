import axios from "axios";
const apiKey = process.env.REACT_APP_API_KEY;

const fetchAndCategorizeSources = async () => {
  try {
    const response = await axios.get(
      "https://newsapi.org/v2/top-headlines/sources",
      {
        params: {
          apiKey,
        },
      }
    );

    const categorizedSources = [];
    response.data.sources.forEach((source) => {
      categorizedSources.push({ id: source.id, category: source.category });
    });

    return categorizedSources;
  } catch (error) {
    console.error("Error fetching and categorizing sources:", error);
    throw error;
  }
};

const fetchLatestNews = async (page = 1) => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`,
      {
        params: {
          page: page,
        },
      }
    );
    console.log(response);
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching latest news:", error);
    throw error;
  }
};

const fetchArticles = async (category) => {
  console.log(category, "getting category in the api");

  const sources = await fetchAndCategorizeSources();

  const params = {
    q: "today",
    apiKey: apiKey,
  };

  try {
    const response = await axios.get("https://newsapi.org/v2/everything", {
      params,
    });
    console.log(response, "res iz fetch articles");

    const articles = response.data.articles.map((article) => {
      if (article.source.id !== null) {
        const source = sources.find(
          (source) => source.id === article.source.id
        );
        if (source.id === article.source.id) {
          return {
            ...article,
            category: source.category,
          };
        }
      }
      return { ...article, category: "general" };
    });
    if (category) {
      console.log(category, articles);
      return articles.filter((article) => {
        console.log(article.category, category);
        return article.category === category.toLowerCase();
      });
    } else {
      return articles;
    }
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};

export { fetchLatestNews, fetchArticles };
