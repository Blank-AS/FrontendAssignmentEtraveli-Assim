import { GET_MOVIES } from "../actions/movieActions";

const initialState = {
  movies: [],
};

const movieReducer = (state = initialState, action: { type: string; payload: any }) => {
  switch (action.type) {
    case GET_MOVIES:
      return { ...state, movies: action.payload };
    default:
      return state;
  }
};

export default movieReducer;
