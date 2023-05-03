import movieRatingsApi from "./../../services/movieRatingsApi";

describe("movieRatingsApi", () => {
  test("should create an axios instance with the correct baseURL", () => {
    expect(movieRatingsApi.defaults.baseURL).toBe("https://www.omdbapi.com/");
  });

  test("should set the Content-Type header to application/json", () => {
    expect(movieRatingsApi.defaults.headers["Content-type"]).toBe("application/json");
  });

  test("should have the correct API key in the params", () => {
    expect(movieRatingsApi.defaults.params.apikey).toBe("b9a5e69d");
  });
});
