# Specification for the project

This project is live at [Joke Generator](https://reduxjokeapp.web.app/).

The prodject was produced on request of a client. The goal was to produce a highly selectable joke app. The following parameters as part of this task:

**INITIAL LOAD**

**Requirement**: The application should load 10 jokes from the any category
**Status**: Complete! Loads with 10 on from Any category

**Requirement**:  Joke category, type, and joke are visible to end use
**Status**: These are both visible and changeable. The UI changes from two divs to one to reflect this.

**Requirement**: Display total jokes available
**Status**: The API is selectable for any number of jokes up to 10. As no more than this is permitted it defaults to 10 if a number out of the range 1-10 is selected.

**CATEGORY FILTERING**

**Requirement**: The user should be able to filter through all of the categories. When selected it should call this category
**Status**: This has been implemented with Dark removed due to a later requirement for safe jokes. As requested no multi category selection has been implemented.

**JOKE SEARCH**
**Requirement**: The user should be able to search for jokes on a search term
**Status**: Implemented and if no jokes are found the user is alerted to this. As all properties are selectable the search is dynamic to reflect this.

**OPTIONAL EXTRAS**
**Requirement**: Add a new joke, 
**Status**: Not yet implemented

**Requirement**: Styling not requested but this App needs finishing before production 
**Status**: The main known bug is the card flipping doesn't work on mobile. Also there is an issue with overflow for long text and the flip functionality possibly makes little sense for a one liner.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


### `npm start`

To run this project locally download all node modules and run npm start.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
