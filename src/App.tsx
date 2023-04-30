/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import MoviesList from "./components/moviesList";
import MovieDetails from "./components/movieDetails";
import SortAndSearch from "./components/sortAndSearch";
import useTheme from "./hooks/useTheme";

const App = () => {
  const theme = useTheme();

  const appStyle = css({
    backgroundColor: theme.appBackgroundColor,
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    // overflow: "hidden",
  });

  const parentStyle = css({
    display: "flex",
    flex: 1,
  });

  return (
    <div css={appStyle}>
      <SortAndSearch />
      <div css={parentStyle}>
        <MoviesList />
        <MovieDetails />
      </div>
    </div>
  );
};

export default App;
