import moviesListApi from "../../services/moviesListApi";
import movieRatingsApi from "../../services/movieRatingsApi";
import { AppThunk } from "../store/store";
import { Movie } from "../../types/movieType";

export const GET_MOVIES = "GET_MOVIES";
export const SORT_MOVIES = "SORT_MOVIES";
export const SEARCH_MOVIES = "SEARCH_MOVIES";
export const SELECT_MOVIE = "SELECT_MOVIE";

export const getMovies = (): AppThunk => async (dispatch) => {
  try {
    const response = await moviesListApi.get("/films");

    const movieDetailsPromises = response.data.results.map(async (movie: Movie) => {
      const movieExtraDetails = await movieRatingsApi.get("", {
        params: {
          t: movie.title,
          y: movie.release_date.slice(0, 4),
        },
      });

      const imdbRating: number = parseFloat(movieExtraDetails.data.Ratings.find(
        (rating: { Source: string }) =>
          rating.Source === "Internet Movie Database"
      ).Value.slice(0, 3)) * 10;

      const rottenTomatoesRating: number = parseFloat(movieExtraDetails.data.Ratings.find(
        (rating: { Source: string }) => rating.Source === "Rotten Tomatoes"
      ).Value.slice(0, 2));

      const metacriticRating: number = parseFloat(movieExtraDetails.data.Ratings.find(
        (rating: { Source: string }) => rating.Source === "Metacritic"
      ).Value.slice(0, 2));

      const averageRating: number = Math.floor((imdbRating + rottenTomatoesRating + metacriticRating) / 30);

      return {
        ...movie,
        extraDetails: movieExtraDetails.data,
        imdbRating: imdbRating,
        rottenTomatoesRating: rottenTomatoesRating,
        metacriticRating: metacriticRating,
        averageRating: averageRating,
      };
    });

    const movieDetails = await Promise.all(movieDetailsPromises);

    dispatch({
      type: GET_MOVIES,
      payload: movieDetails,
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

export const selectMovie = (movie: Movie) => ({
  type: SELECT_MOVIE,
  payload: movie,
});
