import { baseUrl } from "./Constants";
import newsApi from "./NewsApi";

const cardApi = {
  request: async (url, type = {}) => {
    const res = await fetch(url, type);
    if (res.ok) {
      return await res.json();
    }
    const error = new Error(`Error ${res.status}: ${await res.text()}`);
    throw error;
  },

  deleteArticle: async (articleId, token) => {
    const url = `${baseUrl}/articles/${articleId}`;
    const type = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };
    return await newsApi.request(url, type);
  },

  checkTokenValidity: async (token) => {
    const url = `${baseUrl}/users/me`;
    const type = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };
    return await newsApi.request(url, type);
  },

  getArticles: async (token) => {
    const url = `${baseUrl}/articles`;
    const type = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };
    return await newsApi.request(url, type);
  },

  getUser: async (token) => {
    const url = `${baseUrl}/users/me`;
    const type = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };
    return await newsApi.request(url, type);
  },

  saveArticle: async ({ keyword, title, text, date, source, link, image }) => {
    const url = `${baseUrl}/saved-news`;
    const type = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ keyword, title, text, date, source, link, image }),
    };
    return await newsApi.request(url, type);
  },
};

export default cardApi;
