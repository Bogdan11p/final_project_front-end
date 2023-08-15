import { baseUrl } from "./Constants";
import checkResponse from "./CheckResponse";

const userApi = {
  signin: (email, password) => {
    return fetch(`${baseUrl}/signin`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => checkResponse(res))
      .then((res) => res);
  },

  signup: (email, password, username) => {
    return fetch(`${baseUrl}/signup`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email, password, username }),
    })
      .then((res) => checkResponse(res))
      .then((res) => res);
  },

  checkTokenValidity: (token) => {
    return fetch(`${baseUrl}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => checkResponse(res))
      .then((data) => {
        return data;
      });
  },
};

export default userApi;
