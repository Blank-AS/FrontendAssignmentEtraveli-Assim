import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import SortAndSearch from "../../components/SortAndSearch";

describe("SortAndSearch component", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <SortAndSearch />
      </Provider>
    );
  });

  test("renders search input", () => {
    expect(
      screen.getByPlaceholderText(/Search for movie title.../i)
    ).toBeInTheDocument();
  });

  test("renders sort select", () => {
    expect(screen.getByText(/Sort by.../i)).toBeInTheDocument();
  });

  test("renders theme switch button", () => {
    expect(screen.getByAltText(/Switch to light mode/i)).toBeInTheDocument();
  });

  test("search input changes the value when typing", () => {
    const searchInput = screen.getByPlaceholderText(
      /Search for movie title.../i
    ) as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: "A New Hope" } });
    expect(searchInput.value).toBe("A New Hope");
  });

  test("sort select changes the value when selecting", async () => {
    const sortSelect = screen.getByText(/Sort by.../i);
    userEvent.click(sortSelect);
    const option = await screen.findByTestId("episode_id_asc");
    userEvent.click(option);
    expect(screen.getByTestId("episode_id_asc")).toBeInTheDocument();
  });

  test("theme switch button changes the alt text when clicked", () => {
    const themeSwitchButton = screen.getByAltText(/Switch to light mode/i);
    fireEvent.click(themeSwitchButton);
    expect(screen.getByAltText(/Switch to dark mode/i)).toBeInTheDocument();
  });
});
