import moviesListApi from "../../services/moviesListApi";

describe("moviesListApi", () => {
  test("should create an axios instance with the correct baseURL", () => {
    expect(moviesListApi.defaults.baseURL).toBe("https://swapi.dev/api/");
  });

  test("should set the Content-Type header to application/json", () => {
    expect(moviesListApi.defaults.headers["Content-type"]).toBe("application/json");
  });
});
