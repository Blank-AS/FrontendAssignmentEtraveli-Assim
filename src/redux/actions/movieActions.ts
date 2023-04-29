import moviesListApi from "../../services/moviesListApi";
import { AppThunk } from "../store/store";

export const GET_MOVIES = "GET_MOVIES";

export const getMovies = (): AppThunk => async (dispatch) => {
  try {
    const response = await moviesListApi.get("/films/?format=json");
    dispatch({
      type: GET_MOVIES,
      payload: response.data.results,
    });
  } catch (error) {
    console.log(error);
  }
};
