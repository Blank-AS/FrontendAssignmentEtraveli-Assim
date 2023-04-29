import { combineReducers,  } from "@reduxjs/toolkit";
import movieReducer from "./movieReducer";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
  movieReducer,
  themeReducer,
});

export default rootReducer;
