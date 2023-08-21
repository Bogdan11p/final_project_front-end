import { baseUrl } from "./Constants";
import checkResponse from "./CheckResponse";
import newsApi from "./NewsApi";

const userApi = {
  request: async (url, type = {}) => {
    const res = await fetch(url, type);
    if (res.ok) {
      return await res.json();
    }
    const error = new Error(`Error ${res.status}: ${await res.text()}`);
    throw error;
  },

  signin: async ({ email, password }) => {
    const url = `${baseUrl}/signin`;
    const type = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    };
    return await newsApi.request(url, type);
  },

  signUp: async ({ email, password, name }) => {
    const url = `${baseUrl}/signup`;
    const type = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email, password, name }),
    };
    return await newsApi.request(url, type);
  },
};

export default userApi;
