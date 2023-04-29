import { GET_MOVIES, SORT_MOVIES, SEARCH_MOVIES } from "../actions/movieActions";
import { Movie } from "../../types/movieType";

interface MovieState {
  movies: Movie[];
  sortType: string;
  searchQuery: string;
}

const initialState: MovieState = {
  movies: [],
  sortType: "",
  searchQuery: "",
};

const movieReducer = (state = initialState, action: { type: string; payload: any }) => {
  switch (action.type) {
    case GET_MOVIES:
      return { ...state, movies: action.payload };
    case SORT_MOVIES:
      return { ...state, sortType: action.payload };
    case SEARCH_MOVIES:
      return { ...state, searchQuery: action.payload };
    default:
      return state;
  }
};

export default movieReducer;
