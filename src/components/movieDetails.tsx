/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const movieDetailsStyle = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "50%",
    height: "100%",
    overflowY: "auto",
});

const MovieDetails = () => {
    return (
        <div css={movieDetailsStyle}>
            <div> Movie Details </div>
        </div>
    );
};

export default MovieDetails;