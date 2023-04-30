/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import { useState, useEffect } from "react";
import useTheme from "../hooks/useTheme";
import { useSelector } from "react-redux";
import { MovieDetails } from "../types/movieType";
import { RootState } from "../redux/store/store";
import toRoman from "../shared/toRoman";
import { loadingCircleStyle } from "../styles/loadingCircleStyle";

const MovieDetails = () => {
  const theme = useTheme();

  const selectedMovie: MovieDetails | null = useSelector(
    (state: RootState) => state.movieReducer.selectedMovie
  );
  const loadingDetails: boolean = useSelector(
    (state: RootState) => state.movieReducer.loadingDetails
  );

  console.log("selectedMovie", selectedMovie);

  const movieDetailsStyle = css({
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "50%",
  });

  const selectedMovieTitleAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

  const selectedMovieTitleStyle = css({
    backgroundColor: theme.backgroundColor,
    borderRadius: "20px",
    boxShadow: theme.boxShadow,
    color: theme.textColor,
    display: "flex",
    flexDirection: "column",
    height: "auto",
    margin: "10px",
    padding: "0 20px",
    width: "80%",
    overflowY: "auto",
    animation: `${selectedMovieTitleAnimation} 0.6s ease-in-out`,
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

  const pairStyle = css({
    display: "flex",
    alignItems: "center",
  });

  const infoStyle = css({
    fontSize: "16px",
    opacity: "0.5",
    margin: "10px 0",
  });

  return (
    <div css={movieDetailsStyle}>
      <h3 css={{ color: theme.oppositeTextColor }}> Movie Details </h3>
      {selectedMovie ? (
        loadingDetails ? (
          <div
            css={loadingCircleStyle(theme.textColor, theme.oppositeTextColor)}
          ></div>
        ) : (
          <div css={selectedMovieTitleStyle} key={detailsKey}>
            <div css={titleStyle}>
              Episode {toRoman(selectedMovie.episode_id)} -{" "}
              {selectedMovie.title}
            </div>
            <div css={infoStyle}>{selectedMovie.opening_crawl}</div>
            <div css={pairStyle}>
              Producer(s): <div css={infoStyle}>{selectedMovie.producer}</div>
            </div>
            <div css={pairStyle}>
              Director: <div css={infoStyle}>{selectedMovie.director}</div>
            </div>
          </div>
        )
      ) : (
        <div css={{ color: theme.oppositeTextColor }}> No movie selected </div>
      )}
    </div>
  );
};

export default MovieDetails;
