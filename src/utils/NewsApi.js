import { APIkey, baseUrl } from "./Constants";

const currentDate = new Date();
const currentDateString = currentDate.toLocaleDateString("ro-RO");
const weekPriorDateString = new Date(
  currentDate.getTime() - 7 * 24 * 60 * 60 * 1000
).toLocaleDateString("ro-RO");

const newsApi = {
  request: async (url, type = {}) => {
    const res = await fetch(url, type);
    if (res.ok) {
      return await res.json();
    }
    const error = new Error(`Error ${res.status}: ${await res.text()}`);
    throw error;
  },

  search: async ({ input }) => {
    const url = `${baseUrl}/everything?q=${input}&from=${weekPriorDateString}&to=${currentDateString}&apiKey=${APIkey}&pageSize=100`;
    const type = {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        authorization: `${APIkey}`,
      },
    };
    return await newsApi.request(url, type);
  },
};

export default newsApi;
