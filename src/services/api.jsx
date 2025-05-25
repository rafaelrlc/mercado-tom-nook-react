import axios from "axios";

const api_key = "26213f39-409c-49ec-83f1-5554c14c7880"
const BASE_URL = "https://api.nookipedia.com/nh";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "X-API-KEY": api_key,
    "Content-Type": "application/json",
  },
});

const getItems = async (type) => {
  const response = await api.get(`/${type}`);
  console.log(response.data);
  return response;
};

export { getItems };
