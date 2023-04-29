/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect } from "react";
import useTheme from "../hooks/useTheme";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../redux/store/store";
import { getMovies } from "../redux/actions/movieActions";
import { Movie } from "../types/movieType";

const toRoman = (num: number): string => {
  if (num < 1 || num > 3999) {
    throw new Error(
      "The number must be between 1 and 3999, since the Romans didn't have a symbol for 0 or a combination of symbols for numbers greater than 3999."
    );
  }

  const romanSymbols: [number, string][] = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];

  let roman: string = "";

  for (const [value, symbol] of romanSymbols) {
    while (num >= value) {
      roman += symbol;
      num -= value;
    }
  }

  return roman;
};

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

  const combineEpisodeAndTitle = (movie: Movie): string => {
    return `Episode ${toRoman(movie.episode_id)} - ${movie.title}`;
  };

  const moviesListStyle = css({
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    overflowY: "auto",
    width: "50%",
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
    width: "80%",
  });

  const episodeNumberStyle = css({
    fontSize: "12px",
    opacity: "0.5",
  });

  const titleStyle = css({
    fontSize: "15px",
    fontWeight: "bold",
    marginLeft: "15px",
  });

  const dateStyle = css({
    fontSize: "12px",
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

  useEffect(() => {
    appDispatch(getMovies());
  }, [appDispatch]);

  return (
    <div css={moviesListStyle}>
      <h3 css={{ color: theme.oppositeTextColor }}> Movies List </h3>
      {sortedAndFilteredMovies(movies, sortType, searchQuery).map(
        (movie: Movie, index: number) => {
          return (
            <div css={movieItemStyle} key={index}>
              <div css={episodeNumberStyle}> Episode {movie.episode_id} </div>
              <div css={titleStyle}>{combineEpisodeAndTitle(movie)}</div>
              <div css={dateStyle}> {movie.release_date} </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default MoviesList;
