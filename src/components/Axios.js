import axios from "axios";

const instance = axios.create({
  baseURL: "https://v2.jokeapi.dev/joke/",
});
export default instance;
