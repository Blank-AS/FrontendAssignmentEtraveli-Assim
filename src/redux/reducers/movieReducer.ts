import { GET_MOVIES, SORT_MOVIES, SEARCH_MOVIES, SELECT_MOVIE } from "../actions/movieActions";
import { Movie, MovieDetails } from "../../types/movieType";

interface MovieState {
  movies: Movie[];
  sortType: string;
  searchQuery: string;
  loadingList: boolean;
  loadingDetails: boolean;
  selectedMovie: MovieDetails | null;
}

const initialState: MovieState = {
  movies: [],
  sortType: "",
  searchQuery: "",
  loadingList: true,
  loadingDetails: true,
  selectedMovie: null,
};

const movieReducer = (state = initialState, action: { type: string; payload: any }) => {
  switch (action.type) {
    case GET_MOVIES:
      return { ...state, movies: action.payload, loadingList: false };
    case SORT_MOVIES:
      return { ...state, sortType: action.payload };
    case SEARCH_MOVIES:
      return { ...state, searchQuery: action.payload };
    case SELECT_MOVIE:
      return { ...state, selectedMovie: action.payload, loadingDetails: false };
    default:
      return state;
  }
};

export default movieReducer;
