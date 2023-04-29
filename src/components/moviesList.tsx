/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../redux/store/store";
import { getMovies } from "../redux/actions/movieActions";

const moviesListStyle = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "50%",
  height: "100%",
  overflowY: "auto",
});

const movieItemStyle = css({
  margin: "10px",
  backgroundColor: "white",
  color: "black",
  width: "80%",
  height: "7vh",
  borderRadius: "20px",
  boxShadow: "0px 0px 10px 5px rgba(255, 255, 255, 0.3)",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: "0 20px",
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
  opacity: "0.8",
  marginLeft: "auto",
});

interface Movie {
  episode_id: number;
  title: string;
  release_date: string;
}

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
      Movies List
      {sortedAndFilteredMovies(movies, sortType, searchQuery).map(
        (movie: Movie, index: number) => {
          return (
            <div css={movieItemStyle} key={index}>
              <div css={episodeNumberStyle}> Episode {movie.episode_id} </div>
              <div css={titleStyle}>
                Episode {toRoman(movie.episode_id)} - {movie.title}
              </div>
              <div css={dateStyle}> {movie.release_date} </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default MoviesList;
