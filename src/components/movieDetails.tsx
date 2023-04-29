/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const movieDetailsStyle = css({
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    overflowY: "auto",
    width: "50%",
  });

const MovieDetails = () => {
    return (
        <div css={movieDetailsStyle}>
            <h3> Movie Details </h3>
        </div>
    );
};

export default MovieDetails;