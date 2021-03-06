import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

let defaultState = {
  category: "Any",
};

const reducer = (state = defaultState, action) => {
  if (action.type === "SET_CATEGORY") {
    return {
      category: action.data.selectedDropDown,
    };
  }
  return state;
};

let store = createStore(reducer, composeWithDevTools());
store.subscribe(function () {
  console.log("state", store.getState());
});
export default store;
