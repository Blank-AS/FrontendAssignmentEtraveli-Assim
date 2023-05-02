/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";

export const moviesListStyle = css({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  overflowY: "auto",
  width: "50%",
  maxHeight: "85vh",
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

export const movieItemStyle = (theme: any) => css({
  alignItems: "center",
  backgroundColor: theme.backgroundColor,
  borderRadius: "20px",
  boxShadow: theme.boxShadow,
  color: theme.textColor,
  display: "flex",
  flexDirection: "row",
  minHeight: "7vh",
  height: "7vh",
  justifyContent: "flex-start",
  margin: "10px 0",
  padding: "5px 20px",
  width: "85%",
  cursor: "pointer",
  userSelect: "none",
  transition: "transform 0.3s ease-in-out",
  animation: `${selectedMovieAnimation} 0.6s ease-in-out`,
  "&:hover": {
    transform: "scale(0.85)",
  },
});

export const episodeNumberStyle = css({
  fontSize: "12px",
  opacity: "0.5",
  width: "14%",
  "@media (max-width: 1167px, min-width: 768px)": {
    width: "15%",
  },
  "@media (max-width: 767px)": {
    fontSize: "10px",
    width: "20%",
  },
});

export const titleStyle = css({
  letterSpacing: "-0.5px",
  fontSize: "12px",
  fontWeight: "bold",
  margin: "0 5px",
  width: "45%",
  "@media (max-width: 1167px, min-width: 768px)": {
    width: "45%",
  },
  "@media (max-width: 767px)": {
    fontSize: "10px",
    width: "30%",
  },
});

export const ratingStyle = css({
  marginLeft: "auto",
  marginRight: "10px",
  width: "30%",
  "@media (max-width: 1167px)": {
    width: "40%",
  },
});

export const dateStyle = css({
  fontSize: "12px",
  width: "15%",
  marginLeft: "auto",
  opacity: "0.8",
  "@media (max-width: 1167px, min-width: 768px)": {
    width: "20%",
  },
  "@media (max-width: 767px)": {
    fontSize: "10px",
    width: "10%",
  },
});

export const activeItemStyle = (theme: any) => css({
  backgroundColor: theme.appBackgroundColor,
  color: theme.oppositeTextColor,
  transform: "scale(0.95)",
  "&:hover": {
    transform: "scale(0.95)",
  },
});