import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../redux/store/store";
import App from "../App";

describe("App component", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <App testing/>
      </Provider>
    );
  });

  test("renders SortAndSearch component", () => {
    expect(screen.getByPlaceholderText(/Search for movie title.../i)).toBeInTheDocument();
  });

  test("renders MoviesList component", () => {
    expect(screen.getByText(/Movies List/i)).toBeInTheDocument();
  });

  test("renders MovieDetails component", () => {
    expect(screen.getByText(/Select a movie to view its details/i)).toBeInTheDocument();
  });
});
