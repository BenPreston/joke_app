// import axios from "axios";
import { useState, useEffect } from "react";
import API from "../API";
import redux from "../redux";
import axios from "./Axios";

function Joke() {
  // Create a general state
  let state = redux.getState();

   // Jokes - we will be fetching jokes so set an initial one
   const [jokes, setJokes] = useState([
    {
      setup: "What's the best way to eat Welsh cheese?",
      delivery: "Caerphilly",
    },
  ]);

  // Example API URL: 
  // "https://v2.jokeapi.dev/joke/Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart&amount=10"; 

  const category = state.category;
  const [numOfJokePart, setNumOfJokeParts] = useState('twopart')
  const [numOfJokes, setNumOfJokes] = useState(10)  

  // Create a URL based on the API
  const fetchUrl = `https://v2.jokeapi.dev/joke/${category}?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=${numOfJokePart}&amount=${numOfJokes}`

  // Set initial 10 jokes with useEffet
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setJokes(request.data.jokes);
      return request;
    }
    fetchData();
  }, [fetchUrl]);


  // JOKE CUSTOMISATION
  // Dropdown
  const [dropdownchoice, setdropdownchoice] = useState(category);

  const changeCategory = (e) => {
    const selectedDropDown = e.target.value;

    setdropdownchoice(selectedDropDown);

    if (selectedDropDown) {
      redux.dispatch({ type: "SET_CATEGORY", data: { selectedDropDown } });
    }

    newJokes(selectedDropDown);
  };

  const changeNumberOfJokes = (e) => {
    const val = parseInt(e.target.value)
    let jokes;

    val > 1 && val <= 10 ? jokes = val : jokes = 10; 
    setNumOfJokes(jokes)
  }

  // Call new jokes
  const newJokes = async (category) => {
    const request = await axios.get(fetchUrl);
    setJokes(request.data.jokes);
    return request;
  };

  return (
    <>
      <div>
        <h1 className="jokeheader">Joke Generator</h1>
      </div>
      <form action="#" onChange={(e) => changeCategory(e)}>
        <div class="select-box">
          <label for="select-box1" class="label select-box1">
            <span class="label-desc">Choose your joke type</span>{" "}
          </label>
          <select id="select-box1" class="select">
            <option value="Any">Any</option>
            <option value="Misc">Misc</option>
            <option value="Programming">Programming</option>
            <option value="Pun">Pun</option>
            <option value="Spooky">Spooky</option>
            <option value="Christmas">Christmas</option>
          </select>
        </div>
      </form>
      <p>Set the number of jokes, maximum 10</p>
      <input type="number" name='numberOfJokes' onChange={changeNumberOfJokes}/>
      <center>
        {jokes.map((joke) => {
          return (
            <div className="jokecontent">
              <h4 className="theJoke"> {joke.setup}</h4>
              <h4 className="theJoke"> {joke.delivery}</h4>
            </div>
          );
        })}
        <button onClick={newJokes}>Show me more!</button>
      </center>
    </>
  );
}
export default Joke;
