import "@testing-library/jest-dom/extend-expect";
import {
  render,
  fireEvent,
  screen,
  act,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import MovieDetails from "../../components/MovieDetails";
import { Movie } from "../../types/movieType";

const exampleMovie: Movie = {
  episode_id: 4,
  title: "A New Hope",
  release_date: "1977-05-25",
  opening_crawl:
    "It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. During the battle, Rebel spies managed to steal secret plans to the Empire's ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet. Pursued by the Empire's sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy....",
  director: "George Lucas",
  producer: "Gary Kurtz, Rick McCallum",
  extraDetails: {
    Genre: "Action, Adventure, Fantasy",
    Plot: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
    Actors: "Mark Hamill, Harrison Ford, Carrie Fisher",
    Awards: "Won 6 Oscars. 64 wins & 30 nominations total",
    BoxOffice: "$460,998,507",
    Runtime: "121 min",
    Poster: "https://example.com/poster.jpg",
  },
  imdbRating: 86,
  rottenTomatoesRating: 93,
  metacriticRating: 90,
  averageRating: 8,
};

describe("MovieDetails component", () => {
  test("renders 'Select a movie to view its details' statement when no movie is selected", () => {
    render(
      <Provider store={store}>
        <MovieDetails />
      </Provider>
    );
    expect(
      screen.getByText(/Select a movie to view its details/i)
    ).toBeInTheDocument();
  });

  test("renders MovieDetails with selected movie", async () => {
    // Dispatch an action to set the selectedMovie in the store
    await act(async () => {
      store.dispatch({ type: "SELECT_MOVIE", payload: exampleMovie });
    });

    render(
      <Provider store={store}>
        <MovieDetails />
      </Provider>
    );

    // Add assertions to check if the movie details are rendered correctly, e.g.: checking if the title is rendered or any other detail
    expect(
      screen.getByText(new RegExp(exampleMovie.title, "i"))
    ).toBeInTheDocument();
    expect(screen.getByAltText("movie poster")).toBeInTheDocument();
  });

  test("closes the details view when the close icon is clicked", async () => {
    await act(async () => {
      store.dispatch({ type: "SELECT_MOVIE", payload: exampleMovie });
    });

    render(
      <Provider store={store}>
        <MovieDetails />
      </Provider>
    );

    // Click the close icon
    fireEvent.click(screen.getByAltText("close icon"));

    await waitForElementToBeRemoved(() =>
      screen.getByText(new RegExp(exampleMovie.title, "i"))
    );
    expect(
      screen.queryByText(/Select a movie to view its details/i)
    ).toBeInTheDocument();
  });
});
