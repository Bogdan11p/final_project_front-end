import checkResponse from "./CheckResponse";
import { baseUrl, APIkey } from "./Constants";

export const getArticle = (key) => {
  try {
    const article = localStorage.getItem(key);
    return article;
  } catch (error) {
    console.error("Error retrieving item from local storage:", error);
    return null;
  }
};

const cardApi = {
  getUser: (token) => {
    return (
      fetch(`${baseUrl}/users/me`),
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      }.then(checkResponse)
    );
  },

  addArticle: (
    { keyword, title, publishedAt, description, source, link, urlToImage },
    token
  ) => {
    return fetch(`${baseUrl}/articles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        keyword,
        title,
        publishedAt,
        description,
        source,
        link,
        urlToImage,
      }),
    });
  },

  getArticles: (token) => {
    return fetch(`${baseUrl}/articles`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });
  },

  deleteArticle: (articleId, token) => {
    return fetch(`${baseUrl}/articles/${articleId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });
  },
};

export default cardApi;
