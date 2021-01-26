import { useState } from "react";
import API from "../API";
import redux from "../redux";

function Joke() {
  let state = redux.getState();
  let category = state.category;

  // Dropdown
  const [dropdownchoice, setdropdownchoice] = useState(category);

  // Jokes
  const [jokes, setJokes] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);

  const newJokes = (category) => {
    API(category).then((res) => {
      const returnedJokes = res.data && res.data.jokes;
      setJokes(returnedJokes);
      if (!hasLoaded) setHasLoaded(true);
    });
  };

  const changeCategory = (e) => {
    const selectedDropDown = e.target.value;

    setdropdownchoice(selectedDropDown);

    if (selectedDropDown) {
      redux.dispatch({ type: "SET_CATEGORY", data: { selectedDropDown } });
    }

    newJokes(selectedDropDown);
  };

  const loadAtStart = () => {
    if (jokes.length === 0 && !hasLoaded) {
      newJokes("Any");
    }
  };

  loadAtStart();

  return (
    <>
      <div>
        <h1 className="jokeheader">Joke Generator</h1>
      </div>
      <form action="#" onChange={(e) => changeCategory(e)}>
        <div class="select-box">
          <label for="select-box1" class="label select-box1">
            <span class="label-desc">{dropdownchoice}</span>{" "}
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
      <center>
        {jokes.map((joke) => {
          return (
            <div className="jokecontent">
              <h4 className="theJoke"> {joke.setup}</h4>
              <h4 className="theJoke"> {joke.delivery}</h4>
            </div>
          );
        })}
        {/* <button onClick={alert("hi")}>Show me more!</button> */}
      </center>
    </>
  );
}
export default Joke;
