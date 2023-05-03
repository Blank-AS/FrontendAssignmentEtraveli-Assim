/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useEffect } from "react";
import useTheme from "../hooks/useTheme";
import { useSelector, useDispatch } from "react-redux";
import { Movie } from "../types/movieType";
import { RootState } from "../redux/store/store";
import toRoman from "../utils/toRoman";
import StarsRating from "../styles/shared/StarsRating";
import closeIcon from "../assets/closeIcon.svg";
import {
  movieDetailsStyle,
  selectedMovieWrapperStyle,
  selectedMovieAnimation,
  selectedMovieDetailsStyle,
  titleStyle,
  posterAndOpenningStyle,
  posterStyle,
  averageRatingStyle,
  ratingsStyle,
  singleRatingStyle,
  closeIconStyle,
  dataStyle,
} from "../styles/components/MovieDetails.styles";

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

  const selectedMovieStyle = css(selectedMovieDetailsStyle(theme), {
    transition: "opacity 0.6s ease-in-out, transform 0.6s ease-in-out",
    opacity: isClosing ? 0 : 1,
    transform: isClosing ? "translateY(50px)" : "translateY(0)",
    animation: `${selectedMovieAnimation} 0.6s ease-in-out`,
    overflow: "hidden",
  });

  const renderDetails = (
    label: string,
    value: number | string,
    customStyles: any | null
  ) => (
    <div css={{ ...dataStyle, ...(customStyles || {}) }}>
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
              Episode {toRoman(selectedMovie.episode_id)} - {selectedMovie.title}
            </div>
            <div css={posterAndOpenningStyle}>
              <img
                src={selectedMovie.extraDetails.Poster}
                alt="movie poster"
                css={posterStyle(theme)}
              />
              {renderDetails(
                "Opening Crawl",
                selectedMovie.opening_crawl,
                null
              )}
            </div>
            {renderDetails("Plot", selectedMovie.extraDetails.Plot, null)}
            {renderDetails("Genre", selectedMovie.extraDetails.Genre, null)}
            {renderDetails("Producer", selectedMovie.producer, null)}
            {renderDetails("Director", selectedMovie.director, null)}
            {renderDetails(
              "Main Actors",
              selectedMovie.extraDetails.Actors,
              null
            )}
            {renderDetails(
              "Awards & Nominations",
              selectedMovie.extraDetails.Awards,
              null
            )}
            {renderDetails(
              "Box Office",
              selectedMovie.extraDetails.BoxOffice,
              null
            )}
            {renderDetails(
              "Duration",
              selectedMovie.extraDetails.Runtime,
              null
            )}
            <div css={averageRatingStyle}>
              <StarsRating
                preText="Average Rating:"
                averageRating={selectedMovie.averageRating}
              />
            </div>
            <div css={ratingsStyle}>
              {renderDetails(
                "IMDb",
                `${selectedMovie.imdbRating}%`,
                singleRatingStyle
              )}
              {renderDetails(
                "Rotten Tomatoes",
                `${selectedMovie.rottenTomatoesRating}%`,
                singleRatingStyle
              )}
              {renderDetails(
                "Metacritic",
                `${selectedMovie.metacriticRating}%`,
                singleRatingStyle
              )}
            </div>
          </div>
        </div>
      ) : (
        <div css={{ color: theme.oppositeTextColor }}>
          Select a movie to view its details
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
