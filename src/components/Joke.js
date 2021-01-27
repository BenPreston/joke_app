import { useState, useEffect } from "react";
import redux from "../redux";
import axios from "./Axios";
import Card from './Card';

import '../styles/checkbox.scss'
import '../styles/button.scss'

function Joke() {
  // Create a general state this is just used for cateogry 
  let state = redux.getState();

   // Jokes - we will be fetching jokes so set an initial one
   const [jokes, setJokes] = useState([
    {
      setup: "What's the best way to eat Welsh cheese?",
      delivery: "Caerphilly",
    },
    {
      setup: "Who is the Developer CodeBase8 should hire?",
      delivery: "Ben! ",
    },
  ]);

  // Example API URL: 
  // "https://v2.jokeapi.dev/joke/Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart&amount=10"; 

  const category = state.category;
  const [numOfJokePart, setNumOfJokeParts] = useState('twopart')
  const [numOfJokes, setNumOfJokes] = useState(10)
  const [jokeSearchTerm, setJokeSearchTerm] = useState('')  

  // Create a URL based on the API
  let fetchUrl = `https://v2.jokeapi.dev/joke/${category}?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=${numOfJokePart}&amount=${numOfJokes}&safe-mode`

  if(fetchUrl && jokeSearchTerm !== '') {
    fetchUrl = `${fetchUrl}&contains=${jokeSearchTerm}`
  }


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

  // Category Dropdown
  const [dropdownchoice, setdropdownchoice] = useState(category);

  const changeCategory = (e) => {
    const selectedDropDown = e.target.value;

    setdropdownchoice(selectedDropDown);

    if (selectedDropDown) {
      redux.dispatch({ type: "SET_CATEGORY", data: { selectedDropDown } });
    }
  };

  // Change Number of Jokes
  const changeNumberOfJokes = (e) => {
    const val = parseInt(e.target.value)
    let jokes;

    val > 1 && val <= 10 ? jokes = val : jokes = 10; 
    setNumOfJokes(jokes)
  }

  // Search for specific jokes
  const specificJokeSearch = (e) => {
    const val = e.target.value
    setJokeSearchTerm(val)
  }

  // Change Type of Joke
  const changeTypeOfJoke = (e) => {
    const val = e.target.checked ? 'single' : 'twopart'
    setNumOfJokeParts(val)
  }

  // Call new jokes
  const newJokes = async () => {

    let fetchUrl = `https://v2.jokeapi.dev/joke/${category}?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=${numOfJokePart}&amount=${numOfJokes}&safe-mode`

    if(fetchUrl && jokeSearchTerm !== '') {
      fetchUrl = `${fetchUrl}&contains=${jokeSearchTerm}`
    }

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
      <label for="numberOfJokes">Set the number of jokes, maximum 10</label>
      <input type="number" id='numberOfJokes' onChange={changeNumberOfJokes}/>
      <label for="specificJoke">Search for a specific joke</label>
      <input type="text" id='specificJoke' onChange={specificJokeSearch}/>
      <div class="page__toggle">
        <label class="toggle">
          <input class="toggle__input" type="checkbox"  onChange={changeTypeOfJoke} />
          <span class="toggle__label">
            <span class="toggle__text">Check for one line jokes!</span>
          </span>
        </label>
      </div> 
      <div className='jokesHolder'>
        {jokes ? jokes.map((joke) => {
          return (
            <Card
              setup={joke.setup ? joke.setup : joke.joke}
              delivery={joke.delivery ? joke.delivery : null}
              category={joke.category}
            />
          );
        }) : <div className='jokecontent'>
          <h4>Sorry there are no jokes to display. Please try a different search</h4>
        </div>
        }
        <a className="horizontal"><span onClick={newJokes} class="text">Reload</span></a>
      </div>
    </>
  );
}
export default Joke;
