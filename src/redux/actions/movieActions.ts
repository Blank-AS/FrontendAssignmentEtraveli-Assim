import moviesListApi from "../../services/moviesListApi";
import { AppThunk } from "../store/store";

export const GET_MOVIES = "GET_MOVIES";
export const SORT_MOVIES = "SORT_MOVIES";
export const SEARCH_MOVIES = "SEARCH_MOVIES";
export const SELECT_MOVIE = "SELECT_MOVIE";

export const getMovies = (): AppThunk => async (dispatch) => {
  try {
    const response = await moviesListApi.get("/films");
    dispatch({
      type: GET_MOVIES,
      payload: response.data.results,
    });
  } catch (error) {
    console.log(error);
  }
};

export const sortMovies = (sortType: string) => ({
  type: SORT_MOVIES,
  payload: sortType,
});

export const searchMovies = (searchQuery: string) => ({
  type: SEARCH_MOVIES,
  payload: searchQuery,
});

export const selectMovie = (movieUrl: string): AppThunk => async (dispatch) => {
  try {
    const response = await moviesListApi.get(movieUrl);
    dispatch({
      type: SELECT_MOVIE,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};