/** @jsxImportSource @emotion/react */
import { useDispatch } from "react-redux";
import useTheme from "../hooks/useTheme";
import Select from "react-select";
import { SORT_MOVIES, SEARCH_MOVIES } from "../redux/actions/movieActions";
import { SET_THEME } from "../redux/actions/themeActions";
import darkModeIcon from "../assets/darkModeIcon.svg";
import lightModeIcon from "../assets/lightModeIcon.svg";
import searchIcon from "../assets/searchIcon.svg";
import {
  sortAndSearchStyle,
  selectWrapperStyle,
  searchStyle,
  searchWrapperStyle,
  searchIconStyle,
  switchStyle,
  selectStyles,
} from "../styles/SortAndSearch.styles";

const SortAndSearch = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const options = [
    {
      label: "Episode",
      options: [
        { value: "episode_id_asc", label: "Ascending" },
        { value: "episode_id_desc", label: "Descending" },
      ],
    },
    {
      label: "Title",
      options: [
        { value: "title_asc", label: "Ascending" },
        { value: "title_desc", label: "Descending" },
      ],
    },
    {
      label: "Release Date",
      options: [
        { value: "release_date_asc", label: "Ascending" },
        { value: "release_date_desc", label: "Descending" },
      ],
    },
    {
      label: "Rating",
      options: [
        { value: "rating_asc", label: "Ascending" },
        { value: "rating_desc", label: "Descending" },
      ],
    },
  ];

  type Option = { value: string; label: string };
  type OptionList = { label: string; options: Option[] };

  const handleSortChange = (event: Option | OptionList | null) => {
    // value from the first dropdown if available
    if (event && "value" in event) {
      dispatch({ type: SORT_MOVIES, payload: event.value });
    }
    // value from the second dropdown if available
    else if (event && "options" in event) {
      dispatch({ type: SORT_MOVIES, payload: event.options[0].value });
    } else if (event === null) {
      dispatch({ type: SORT_MOVIES, payload: "" });
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: SEARCH_MOVIES, payload: event.target.value });
  };

  const handleThemeChange = () => {
    localStorage.setItem("isLightMode", JSON.stringify(!theme.isLightMode));
    dispatch({ type: SET_THEME, payload: !theme.isLightMode });
  };

  const selectTheme = (mtheme: any) => ({
    ...mtheme,
    colors: {
      ...mtheme.colors,
      primary50: "gray",
      primary25: "#cccccc",
      primary: theme.textColor,
    },
  });

  const formatOptionLabel = (data: any, { context }: any) => {
    if (context === "menu") {
      return data.label;
    }
    return `${
      data.value.split("_")[0].charAt(0).toUpperCase() +
      data.value.split("_")[0].slice(1)
    } ${data.label}`;
  };

  return (
    <div css={sortAndSearchStyle}>
      <div css={selectWrapperStyle}>
        <Select
          onChange={handleSortChange}
          options={options}
          placeholder="Sort by..."
          isSearchable={false}
          theme={selectTheme}
          styles={selectStyles(theme)}
          isClearable={true}
          formatOptionLabel={formatOptionLabel}
        />
      </div>
      <div css={searchWrapperStyle}>
        <img src={searchIcon} alt="Search" css={searchIconStyle} />
        <input
          id="search"
          css={searchStyle}
          placeholder="Search for movie title..."
          onChange={handleSearchChange}
        />
      </div>
      <div css={switchStyle(theme)} onClick={handleThemeChange}>
        <img
          src={theme.isLightMode ? darkModeIcon : lightModeIcon}
          alt={
            theme.isLightMode ? "Switch to dark mode" : "Switch to light mode"
          }
          width="20"
          height="20"
        />
      </div>
    </div>
  );
};

export default SortAndSearch;
