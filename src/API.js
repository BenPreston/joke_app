import axios from "axios";

const BASEURL = "https://v2.jokeapi.dev/joke/";
const max10andSafe = "?amount=10&safe-mode";

const API = async function (query, res) {
  res = axios.get(BASEURL + query + max10andSafe);
  return res.then(console.log("requested on API page.")).catch((err) => {
    alert("Error of: " + err);
    throw err;
  });
};

export default API;
