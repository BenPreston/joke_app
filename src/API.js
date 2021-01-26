import axios from "axios";

const BASEURL = "https://v2.jokeapi.dev/joke/";
const safeMode = "?safe-mode";

const API = async function (query, res) {
  res = await axios.get(BASEURL + query + safeMode);
  return res.then(console.log("requested on API page.")).catch((err) => {
    alert("Error of: " + err);
    throw err;
  });
};

export default API;


// const API = async (query, res) =>{
//   try {
//       const data = await axios.get(BASEURL + query + safeMode);
//       console.log(data); //200
//   }
//   catch (err) {
//       console.log(err);
//   }
// };

// export default API;