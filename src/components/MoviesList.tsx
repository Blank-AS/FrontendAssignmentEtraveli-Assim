/** @jsxImportSource @emotion/react */
import React from "react";
import { useEffect } from "react";
import useTheme from "../hooks/useTheme";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../redux/store/store";
import { getMovies, selectMovie } from "../redux/actions/movieActions";
import { Movie } from "../types/movieType";
import toRoman from "../utils/toRoman";
import loadingCircle from "../styles/shared/loadingCircle";
import StarsRating from "../styles/shared/StarsRating";
import sortedAndFilteredMovies from "../utils/sortedAndFilteredMovies";
import {
  moviesListStyle,
  movieItemStyle,
  episodeNumberStyle,
  titleStyle,
  ratingStyle,
  dateStyle,
  activeItemStyle,
} from "../styles/components/MoviesList.styles";

interface MoviesListProps {
  testing?: boolean;
}

const MoviesList: React.FC<MoviesListProps> = (props: MoviesListProps) => {
  const theme = useTheme();
  const appDispatch = useDispatch<AppDispatch>();

  const movies: Movie[] = useSelector(
    (state: RootState) => state.movieReducer.movies
  );
  const sortType: string = useSelector(
    (state: RootState) => state.movieReducer.sortType
  );
  const searchQuery: string = useSelector(
    (state: RootState) => state.movieReducer.searchQuery
  );
  const loadingList: boolean = useSelector(
    (state: RootState) => state.movieReducer.loadingList
  );
  const selectedMovie: Movie | null = useSelector(
    (state: RootState) => state.movieReducer.selectedMovie
  );

  const handleSelectMovie = (movie: Movie) => {
    localStorage.setItem("selectedMovie", JSON.stringify(movie));
    appDispatch(selectMovie(movie));
  };

  useEffect(() => {
    if (props.testing) return;
    appDispatch(getMovies());
  }, [appDispatch]);

  return (
    <div css={moviesListStyle}>
      <h3 css={{ color: theme.oppositeTextColor }}> Movies List </h3>
      {loadingList ? (
        <div
          css={loadingCircle(theme.textColor, theme.oppositeTextColor)}
          data-testid="loading circle"
        ></div>
      ) : (
        sortedAndFilteredMovies(movies, sortType, searchQuery).map(
          (movie: Movie) => {
            return (
              <div
                data-testid="movie item"
                css={[
                  movieItemStyle(theme),
                  selectedMovie?.episode_id === movie.episode_id &&
                    activeItemStyle(theme),
                ]}
                key={movie.episode_id}
                onClick={() => handleSelectMovie(movie)}
              >
                <div css={episodeNumberStyle}> Episode {movie.episode_id} </div>
                <div css={titleStyle}>
                  Episode {toRoman(movie.episode_id)} - {movie.title}
                </div>
                <div css={ratingStyle}>
                  <StarsRating preText="" averageRating={movie.averageRating} />
                </div>
                <div css={dateStyle}> {movie.release_date} </div>
              </div>
            );
          }
        )
      )}
    </div>
  );
};

export default MoviesList;
