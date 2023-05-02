/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import MoviesList from "./components/MoviesList";
import MovieDetails from "./components/MovieDetails";
import SortAndSearch from "./components/SortAndSearch";
import useTheme from "./hooks/useTheme";
import { appStyle, parentStyle, separatorStyle } from "./styles/App.styles";

const App = () => {
  const theme = useTheme();

  return (
    <div css={appStyle(theme)}>
      <SortAndSearch />
      <hr css={separatorStyle} />
      <div css={parentStyle}>
        <MoviesList />
        <MovieDetails />
      </div>
    </div>
  );
};

export default App;
