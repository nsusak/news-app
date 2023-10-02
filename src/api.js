import axios from "axios";
const apiKey = process.env.REACT_APP_API_KEY;

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

export { fetchLatestNews };
