import { Movie } from "../../types/movieType";
import sortedAndFilteredMovies from "../../utils/sortedAndFilteredMovies";

describe("sortedAndFilteredMovies utility function", () => {
  const movies: Movie[] = [
    {
      episode_id: 1,
      title: "Movie A",
      release_date: "2023-01-01",
      opening_crawl: "",
      director: "",
      producer: "",
      extraDetails: {
        Genre: "",
        Plot: "",
        Actors: "",
        Awards: "",
        BoxOffice: "",
        Runtime: "",
        Poster: "",
      },
      imdbRating: 77,
      rottenTomatoesRating: 70,
      metacriticRating: 65,
      averageRating: 7,
    },
    {
      episode_id: 2,
      title: "Movie B",
      release_date: "2023-02-01",
      opening_crawl: "",
      director: "",
      producer: "",
      extraDetails: {
        Genre: "",
        Plot: "",
        Actors: "",
        Awards: "",
        BoxOffice: "",
        Runtime: "",
        Poster: "",
      },
      imdbRating: 88,
      rottenTomatoesRating: 80,
      metacriticRating: 75,
      averageRating: 8,
    },
    {
      episode_id: 3,
      title: "Movie C",
      release_date: "2023-03-01",
      opening_crawl: "",
      director: "",
      producer: "",
      extraDetails: {
        Genre: "",
        Plot: "",
        Actors: "",
        Awards: "",
        BoxOffice: "",
        Runtime: "",
        Poster: "",
      },
      imdbRating: 6,
      rottenTomatoesRating: 60,
      metacriticRating: 55,
      averageRating: 6,
    },
  ];

  test("correctly filters movies based on searchQuery", () => {
    const searchQuery = "Movie A";
    const filteredMovies = sortedAndFilteredMovies(
      movies,
      "rating_asc",
      searchQuery
    );
    expect(filteredMovies.length).toBe(1);
    expect(filteredMovies[0].title).toBe("Movie A");
  });

  test("correctly sorts movies based on sortType", () => {
    const sortedByAverageRating = sortedAndFilteredMovies(
      movies,
      "rating_desc",
      ""
    );
    expect(sortedByAverageRating[0].title).toBe("Movie B");
    expect(sortedByAverageRating[1].title).toBe("Movie A");
    expect(sortedByAverageRating[2].title).toBe("Movie C");

    const sortedByReleaseDate = sortedAndFilteredMovies(
      movies,
      "release_date_asc",
      ""
    );
    expect(sortedByReleaseDate[0].title).toBe("Movie A");
    expect(sortedByReleaseDate[1].title).toBe("Movie B");
    expect(sortedByReleaseDate[2].title).toBe("Movie C");
  });
});
