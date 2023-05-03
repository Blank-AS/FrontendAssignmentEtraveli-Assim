import "@testing-library/jest-dom/extend-expect";
import {
  fireEvent,
  render,
  screen,
  waitFor,
  act,
} from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import MoviesList from "../../components/MoviesList";
import MovieDetails from "../../components/MovieDetails";
import { Movie } from "../../types/movieType";

const exampleMovies: Movie[] = [
  {
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
  },
  {
    episode_id: 5,
    title: "The Empire Strikes Back",
    release_date: "1980-05-17",
    opening_crawl:
      "It is a dark time for the Rebellion. Although the Death Star has been destroyed, Imperial troops have driven the Rebel forces from their hidden base and pursued them across the galaxy. Evading the dreaded Imperial Starfleet, a group of freedom fighters led by Luke Skywalker has established a new secret base on the remote ice world of Hoth. The evil lord Darth Vader, obsessed with finding young Skywalker, has dispatched thousands of remote probes into the far reaches of space....",
    director: "Irvin Kershner",
    producer: "Gary Kurtz, Rick McCallum",
    extraDetails: {
      Genre: "Action, Adventure, Fantasy",
      Plot: "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader and a bounty hunter named Boba Fett all over the galaxy.",
      Actors: "Mark Hamill, Harrison Ford, Carrie Fisher",
      Awards: "Won 1 Oscar. 26 wins & 20 nominations total",
      BoxOffice: "$292,753,960",
      Runtime: "124 min",
      Poster: "https://example.com/poster.jpg",
    },
    imdbRating: 87,
    rottenTomatoesRating: 94,
    metacriticRating: 82,
    averageRating: 8,
  },
];

describe("MoviesList component", () => {
  test("renders loading text while movies are being fetched", () => {
    render(
      <Provider store={store}>
        <MoviesList testing={true} />
        <MovieDetails />
      </Provider>
    );

    expect(screen.getByTestId("loading circle")).toBeInTheDocument();
  });

  test("renders a list of movies after fetching is complete", async () => {
    render(
      <Provider store={store}>
        <MoviesList testing={true} />
        <MovieDetails />
      </Provider>
    );

    await act(async () => {
      store.dispatch({ type: "GET_MOVIES", payload: exampleMovies });
    });

    // Wait for the movie items to appear on the screen
    const movieItems = await waitFor(() => screen.getAllByTestId("movie item"));

    // Check if at least one movie item is rendered
    await expect(movieItems.length).toBeGreaterThan(0);
  });

  test("shows movie details (using MovieDetails component) when a movie is clicked, might fail because the api is slow", async () => {
    render(
      <Provider store={store}>
        <MoviesList testing={true} />
        <MovieDetails />
      </Provider>
    );

    await act(async () => {
      store.dispatch({ type: "GET_MOVIES", payload: exampleMovies });
    });

    const movieItems = await waitFor(() => screen.getAllByTestId("movie item"));

    // Click the first movie item
    fireEvent.click(movieItems[0]);

    // Check if the movie poster is displayed
    await expect(screen.getByAltText("movie poster")).toBeInTheDocument();
  });
});
