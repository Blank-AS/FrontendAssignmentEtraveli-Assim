/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";

export const movieDetailsStyle = css({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  width: "50%",
  maxHeight: "85vh",
  "@media (max-width: 1167px)": {
    width: "auto",
  },
});

export const selectedMovieAnimation = keyframes`
0% {
  opacity: 0;
  transform: translateY(50px);
}
100% {
  opacity: 1;
  transform: translateY(0);
}
`;

export const selectedMovieDetailsStyle = (theme: any) =>
  css({
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
  });

export const selectedMovieWrapperStyle = css({
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

export const posterAndOpenningStyle = css({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
  "@media (max-width: 768px)": {
    flexDirection: "column",
  },
});

export const posterStyle = (theme: any) =>
  css({
    alignSelf: "center",
    width: "30%",
    borderRadius: "20px",
    boxShadow: theme.oppositeBoxShadow,
    aspectRatio: "2/3",
    userSelect: "none",
    "@media (max-width: 1167px)": {
      width: "70%",
    },
  });

export const closeIconStyle = css({
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

export const averageRatingStyle = css({
  padding: "5px",
  margin: "5px",
});

export const ratingsStyle = css({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
});

export const titleStyle = css({
  fontSize: "20px",
  fontWeight: "bold",
  margin: "10px 0",
  alignSelf: "center",
});

export const dataStyle = css({
  padding: "5px",
  margin: "5px",
  fontSize: "14px",
});

export const singleRatingStyle = css({
  border: "1px solid #808080",
  borderRadius: "15px",
  color: "#808080",
  padding: "5px",
  margin: "5px",
  fontSize: "12px",
});
