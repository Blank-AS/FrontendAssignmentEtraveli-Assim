import { combineReducers } from "@reduxjs/toolkit";
import movieReducer from "./movieReducer";

const rootReducer = combineReducers({
  movieReducer: movieReducer,
});

export default rootReducer;
