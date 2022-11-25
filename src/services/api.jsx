import axios from "axios";

const BASE_URL = "https://tom-nook-cart-default-rtdb.firebaseio.com/";

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
