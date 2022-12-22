import axios from "axios";

const BASE_URL = "https://identitytoolkit.googleapis.com/v1/";
export const key = "AIzaSyAd6YymswqiBwTN7R7eNakDkB6R0SZBxO8";

const UserApi = axios.create({
  baseURL: BASE_URL,
});

export default UserApi;
