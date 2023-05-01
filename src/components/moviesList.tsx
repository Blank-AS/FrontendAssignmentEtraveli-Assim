/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect } from "react";
import useTheme from "../hooks/useTheme";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../redux/store/store";
import { getMovies, selectMovie } from "../redux/actions/movieActions";
import { Movie } from "../types/movieType";
import toRoman from "../shared/toRoman";
import loadingCircle from "../styles/loadingCircle";
import starsRating from "../styles/starsRating";

const MoviesList = () => {
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

  const moviesListStyle = css({
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    overflowY: "auto",
    width: "50%",
    maxHeight: "85vh",
  });

  const movieItemStyle = css({
    alignItems: "center",
    backgroundColor: theme.backgroundColor,
    borderRadius: "20px",
    boxShadow: theme.boxShadow,
    color: theme.textColor,
    display: "flex",
    flexDirection: "row",
    height: "7vh",
    justifyContent: "flex-start",
    margin: "10px",
    padding: "0 20px",
    width: "85%",
    cursor: "pointer",
    userSelect: "none",
  });

  const episodeNumberStyle = css({
    fontSize: "12px",
    opacity: "0.5",
    width: "15%",
  });

  const titleStyle = css({
    fontSize: "15px",
    fontWeight: "bold",
    margin: "0 5px",
    width: "40%",
  });

  const ratingStyle = css({
    marginLeft: "auto",
    marginRight: "10px",
    width: "30%",
  });

  const dateStyle = css({
    fontSize: "12px",
    width: "15%",
    marginLeft: "auto",
    opacity: "0.8",
  });

  const sortedAndFilteredMovies = (
    movies: Movie[],
    sortType: string,
    searchQuery: string
  ): Movie[] => {
    // I filter the movies according to the search query
    const filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // I sort the filtered/or-not movies according to the sort type
    const sortedMovies = filteredMovies.sort((a, b) => {
      switch (sortType) {
        case "episode_id_asc":
          return a.episode_id - b.episode_id;
        case "episode_id_desc":
          return b.episode_id - a.episode_id;
        case "title":
          return a.title.localeCompare(b.title);
        case "release_date_asc":
          return (
            new Date(a.release_date).getTime() -
            new Date(b.release_date).getTime()
          );
        case "release_date_desc":
          return (
            new Date(b.release_date).getTime() -
            new Date(a.release_date).getTime()
          );
        default:
          return 0;
      }
    });

    return sortedMovies;
  };

  const handleSelectMovie = (movie: Movie) => {
    appDispatch(selectMovie(movie));
  };

  useEffect(() => {
    appDispatch(getMovies());
  }, [appDispatch]);

  return (
    <div css={moviesListStyle}>
      <h3 css={{ color: theme.oppositeTextColor }}> Movies List </h3>
      {loadingList ? (
        <div css={loadingCircle(theme.textColor, theme.oppositeTextColor)}>
        </div>
      ) : (
        sortedAndFilteredMovies(movies, sortType, searchQuery).map(
          (movie: Movie) => {
            return (
              <div
                css={movieItemStyle}
                key={movie.episode_id}
                onClick={() => handleSelectMovie(movie)}
              >
                <div css={episodeNumberStyle}> Episode {movie.episode_id} </div>
                <div css={titleStyle}>
                  Episode {toRoman(movie.episode_id)} - {movie.title}
                </div>
                <div css={ratingStyle}> {starsRating("", movie.averageRating)}</div>
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
