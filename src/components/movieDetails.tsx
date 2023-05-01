/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import { useState, useEffect } from "react";
import useTheme from "../hooks/useTheme";
import { useSelector, useDispatch } from "react-redux";
import { Movie } from "../types/movieType";
import { RootState } from "../redux/store/store";
import toRoman from "../shared/toRoman";
import starsRating from "../styles/starsRating";
import closeIcon from "../assets/closeIcon.svg";

const MovieDetails = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [detailsKey, setDetailsKey] = useState<number>(0);

  const selectedMovie: Movie | null = useSelector(
    (state: RootState) => state.movieReducer.selectedMovie
  );

  useEffect(() => {
    setDetailsKey(detailsKey + 1);
  }, [selectedMovie]);

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
    padding: "10px",
    height: "auto",
    margin: "10px",
    width: "90%",
    transition: "opacity 0.6s ease-in-out, transform 0.6s ease-in-out",
    opacity: isClosing ? 0 : 1,
    transform: isClosing ? "translateY(50px)" : "translateY(0)",
    animation: `${selectedMovieAnimation} 0.6s ease-in-out`,
    overflow: "hidden",
  });

  const selectedMovieWrapperStyle = css({
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    "&::-webkit-scrollbar": {
      width: "0.6vw",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#CCCCCC",
      borderRadius: "4px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      backgroundColor: "#555",
    },

    scrollbarColor: "#888 #CCCCCC",
  });

  const posterAndOpenningStyle = css({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  });

  const posterStyle = css({
    alignSelf: "center",
    width: "30%",
    borderRadius: "20px",
    boxShadow: theme.oppositeBoxShadow,
    aspectRatio: "2/3",
    userSelect: "none",
  });

  const closeIconStyle = css({
    position: "absolute",
    alignSelf: "flex-start",
    top: "5px",
    left: "5px",
    cursor: "pointer",
    width: "25px",
    height: "25px",
    margin: "5px 0",
    userSelect: "none",
  });

  const averageRatingStyle = css({
    padding: "5px",
    margin: "5px",
  });

  const ratingsStyle = css({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  });

  const titleStyle = css({
    fontSize: "20px",
    fontWeight: "bold",
    margin: "10px 0",
    alignSelf: "center",
  });

  const dataStyle = css({
    padding: "5px",
    margin: "5px",
    fontSize: "14px",
  });

  const renderDetails = (label: string, value: number | string) => (
    <div css={dataStyle}>
      <strong>{label}:</strong> {value}
      <br />
    </div>
  );

  const handleCloseDetails = () => {
    setIsClosing(true);
    setTimeout(() => {
      dispatch({ type: "SELECT_MOVIE", payload: null });
      setIsClosing(false);
    }, 600);
  };

  return (
    <div css={movieDetailsStyle}>
      <h3 css={{ color: theme.oppositeTextColor }}> Movie Details </h3>
      {selectedMovie ? (
        <div css={selectedMovieStyle} key={detailsKey}>
          <img
            src={closeIcon}
            alt="close icon"
            css={closeIconStyle}
            onClick={handleCloseDetails}
          />
          <div css={selectedMovieWrapperStyle}>
            <div css={titleStyle}>
              Episode {toRoman(selectedMovie.episode_id)} -{" "}
              {selectedMovie.title}
            </div>
            <div css={posterAndOpenningStyle}>
              <img
                src={selectedMovie.extraDetails.Poster}
                alt="movie poster"
                css={posterStyle}
              />
              {renderDetails("Opening Crawl", selectedMovie.opening_crawl)}
            </div>
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
            <div css={averageRatingStyle}>
              {starsRating("Average Rating:", selectedMovie.averageRating)}
            </div>
            <div css={ratingsStyle}>
              {renderDetails("IMDb", `${selectedMovie.imdbRating}%`)}
              {renderDetails(
                "Rotten Tomatoes",
                `${selectedMovie.rottenTomatoesRating}%`
              )}
              {renderDetails(
                "Metacritic",
                `${selectedMovie.metacriticRating}%`
              )}
            </div>
          </div>
        </div>
      ) : (
        <div css={{ color: theme.oppositeTextColor }}> No movie selected </div>
      )}
    </div>
  );
};

export default MovieDetails;
