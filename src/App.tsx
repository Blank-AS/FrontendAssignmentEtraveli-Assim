/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import MoviesList from "./components/moviesList";
import MovieDetails from "./components/movieDetails";
import SortAndSearch from "./components/sortAndSearch";

const parentStyle = css({
  display: "flex",
  width: "100vw",
  height: "100vh",
});

const App = () => {
  return (
    <>
      <SortAndSearch />
      <div css={parentStyle}>
        <MoviesList />
        <MovieDetails />
      </div>
    </>
  );
};

export default App;
