import axios from "axios";

const instance = axios.create({
  baseURL: "http://api.orion-article.local/api/"
});

export default instance;