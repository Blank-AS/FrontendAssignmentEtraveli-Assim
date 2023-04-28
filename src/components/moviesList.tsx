/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

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
  fontSize: "13px",
  opacity: "0.5",
});

const titleStyle = css({
  fontSize: "17px",
  fontWeight: "bold",
  marginLeft: "15px",
});

const dateStyle = css({
  fontSize: "15px",
  opacity: "0.8",
  marginLeft: "auto",
});

const MoviesList = () => {
  return (
    <div css={moviesListStyle}>
      <div css={movieItemStyle}>
        <div css={episodeNumberStyle}> Episode X </div>
        <div css={titleStyle}> Title </div>
        <div css={dateStyle}> Data </div>
      </div>
    </div>
  );
};

export default MoviesList;
