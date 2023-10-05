import axios from "axios";
const apiKey = process.env.REACT_APP_API_KEY;

// const fetchAndCategorizeSources = async () => {
//   try {
//     const response = await axios.get(
//       "https://newsapi.org/v2/top-headlines/sources",
//       {
//         params: {
//           apiKey,
//         },
//       }
//     );
//     console.log(response, "iz sorsa");
//     const categorizedSources = response.data.sources.map((source) => ({
//       id: source.id,
//       category: source.category,
//     }));

//     return categorizedSources;
//   } catch (error) {
//     console.error("Error fetching and categorizing sources:", error.message);
//     throw error;
//   }
// };

const fetchLatestNews = async (page = 1) => {
  try {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines`, {
      params: {
        country: "us",
        apiKey,
        page,
      },
    });
    console.log(response);
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching latest news:", error.message);
    throw error;
  }
};

const fetchArticles = async (query) => {
  const params = {
    q: query || "news",
    apiKey,
  };

  try {
    const response = await axios.get("https://newsapi.org/v2/everything", {
      params,
    });

    const articles = response.data.articles.map((article) => {
      return {
        ...article,
        category: query,
      };
    });

    return articles;
  } catch (error) {
    console.error("Error fetching articles:", error.message);
    throw error;
  }
};

export { fetchLatestNews, fetchArticles };

// const fetchArticles = async (category) => {
//   console.log(category, "getting category in the api");

//   const sources = await fetchAndCategorizeSources();

//   const params = {
//     q: category || "news",
//     apiKey,
//   };
//   console.log(params, "params");
//   try {
//     const response = await axios.get("https://newsapi.org/v2/everything", {
//       params,
//     });
//     console.log(response, "response from fetch articles");

//     const articles = response.data.articles.map((article) => {
//       const source = sources.find((source) => source.id === article.source.id);

//       return {
//         ...article,
//         category: source ? source.category : "Unknown",
//       };
//     });

//     if (category) {
//       console.log("Filtered articles for category:", category);
//       return articles.filter(
//         (article) => article.category === category.toLowerCase()
//       );
//     } else {
//       return articles;
//     }
//   } catch (error) {
//     console.error("Error fetching articles:", error.message);
//     throw error;
//   }
// };

// export { fetchLatestNews, fetchArticles, fetchAndCategorizeSources };
