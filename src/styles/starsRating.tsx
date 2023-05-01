/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import starIcon from "../assets/starIcon.svg";
import fillStarIcon from "../assets/fillStarIcon.svg";

const starsRatingStyle = css({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

const starsStyle = css({
  height: "15px",
  width: "15px",
  userSelect: "none",
});

const starsRating = (preText: string, averageRating: number) => (
  <div css={starsRatingStyle}>
    <strong>{preText}</strong>
    {Array.from({ length: averageRating }, (_, i) => (
      <img
        key={`filled-${i}`}
        src={fillStarIcon}
        alt="fillStarIcon"
        css={starsStyle}
      />
    ))}
    {Array.from({ length: 10 - averageRating }, (_, i) => (
      <img
        key={`empty-${i}`}
        src={starIcon}
        alt="starIcon"
        css={starsStyle}
      />
    ))}
  </div>
);

export default starsRating;
