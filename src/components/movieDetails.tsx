/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import { useState, useEffect } from "react";
import useTheme from "../hooks/useTheme";
import { useSelector } from "react-redux";
import { Movie } from "../types/movieType";
import { RootState } from "../redux/store/store";
import toRoman from "../shared/toRoman";
import starsRating from "../styles/starsRating";

const MovieDetails = () => {
  const theme = useTheme();

  const selectedMovie: Movie | null = useSelector(
    (state: RootState) => state.movieReducer.selectedMovie
  );

  const movieDetailsStyle = css({
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    width: "50%",
    maxHeight: "85vh",
  });

  const selectedMovieAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

  const selectedMovieStyle = css({
    backgroundColor: theme.backgroundColor,
    borderRadius: "20px",
    boxShadow: theme.boxShadow,
    color: theme.textColor,
    display: "flex",
    flexDirection: "column",
    height: "auto",
    margin: "10px",
    padding: "0 20px",
    width: "90%",
    overflowY: "auto",
    animation: `${selectedMovieAnimation} 0.6s ease-in-out`,
    // "::-webkit-scrollbar": {
    //   width: "0.6vw",
    // },
    // "::-webkit-scrollbar-track": {
    //   display: theme.backgroundColor,
    // },
    // "::-webkit-scrollbar-thumb": {
    //   borderRadius: "10px",
    //   backgroundColor: "#cccccc",
    // },
  });

  const posterStyle = css({
    alignSelf: "center",
    width: "50%",
    borderRadius: "20px",
    margin: "10px 0",
  });

  const [detailsKey, setDetailsKey] = useState<number>(0);

  useEffect(() => {
    setDetailsKey(detailsKey + 1);
  }, [selectedMovie]);

  const titleStyle = css({
    fontSize: "20px",
    fontWeight: "bold",
    margin: "10px 0",
    alignSelf: "center",
  });

  const renderDetails = (label: string, value: number | string) => (
    <div>
      <strong>{label}:</strong> {value}
      <br />
    </div>
  );

  return (
    <div css={movieDetailsStyle}>
      <h3 css={{ color: theme.oppositeTextColor }}> Movie Details </h3>
      {selectedMovie ? (
        <div css={selectedMovieStyle} key={detailsKey}>
          <div css={titleStyle}>
            Episode {toRoman(selectedMovie.episode_id)} - {selectedMovie.title}
          </div>
          <img
            src={selectedMovie.extraDetails.Poster}
            alt="movie poster"
            css={posterStyle}
          />
          {renderDetails("Opening Crawl", selectedMovie.opening_crawl)}
          {renderDetails("Plot", selectedMovie.extraDetails.Plot)}
          {renderDetails("Genre", selectedMovie.extraDetails.Genre)}
          {renderDetails("Producer", selectedMovie.producer)}
          {renderDetails("Director", selectedMovie.director)}
          {renderDetails("Main Actors", selectedMovie.extraDetails.Actors)}
          {renderDetails(
            "Awards & Nominations",
            selectedMovie.extraDetails.Awards
          )}
          {renderDetails("Box Office", selectedMovie.extraDetails.BoxOffice)}
          {renderDetails("Duration", selectedMovie.extraDetails.Runtime)}
          {starsRating("Average Rating:", selectedMovie.averageRating)}
          {renderDetails("IMDb", `${selectedMovie.imdbRating}%`)}
          {renderDetails(
            "Rotten Tomatoes",
            `${selectedMovie.rottenTomatoesRating}%`
          )}
          {renderDetails("Metacritic", `${selectedMovie.metacriticRating}%`)}
        </div>
      ) : (
        <div css={{ color: theme.oppositeTextColor }}> No movie selected </div>
      )}
    </div>
  );
};

export default MovieDetails;
