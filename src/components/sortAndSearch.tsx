/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useDispatch } from "react-redux";
import useTheme from "../hooks/useTheme";
import Select from "react-select";
import { SORT_MOVIES, SEARCH_MOVIES } from "../redux/actions/movieActions";
import { SET_THEME } from "../redux/actions/themeActions";
import darkModeIcon from "../assets/darkModeIcon.svg";
import lightModeIcon from "../assets/lightModeIcon.svg";
import searchIcon from "../assets/searchIcon.svg";

const SortAndSearch = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const sortAndSearchStyle = css({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "20px",
    paddingRight: "20px",
    height: "10vh",
  });

  const selectStyle = css({
    width: "20%",
  });

  const searchStyle = css({
    width: "95%",
    minHeight: "4.5vh",
    height: "4.5vh",
    backgroundColor: theme.backgroundColor,
    borderRadius: "20px",
    border: "none",
    borderColor: "transparent",
    boxShadow: theme.boxShadow,
    color: theme.textColor,
    fontFamily: "inherit",
    fontSize: "12px",
    paddingLeft: "30px",
    paddingRight: "10px",
    userSelect: "none",
    "&:focus": {
      outline: "none",
      borderColor: "transparent",
    },
  });

  const searchWrapperStyle = css({
    position: "relative",
    width: "75%",
  });

  const searchIconStyle = css({
    position: "absolute",
    marginLeft: "7px",
    transform: "translateY(50%)",
    width: "20px",
    height: "20px",
    userSelect: "none",
  });

  const switchStyle = css({
    display: "flex",
    width: "40px",
    height: "40px",
    backgroundColor: theme.backgroundColor,
    borderRadius: "50%",
    boxShadow: theme.boxShadow,
    justifyContent: "center",
    alignItems: "center",
    color: theme.textColor,
    cursor: "pointer",
    userSelect: "none",
  });

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
    // value from the first dropdown
    if (event && "value" in event) {
      dispatch({ type: SORT_MOVIES, payload: event.value });
    }
    // value from the second dropdown
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

  const selectStyles = {
    control: (baseStyles: any) => ({
      ...baseStyles,
      backgroundColor: theme.backgroundColor,
      border: "none",
      borderRadius: "20px",
      boxShadow: theme.boxShadow,
      cursor: "pointer",
      fontSize: "12px",
      width: "100%",
      minHeight: "4.5vh",
      height: "4.5vh",
      userSelect: "none",
    }),
    menu: (baseStyles: any) => ({
      ...baseStyles,
      backgroundColor: theme.backgroundColor,
      border: "none",
      borderRadius: "20px",
      boxShadow: theme.oppositeBoxShadow,
      padding: "7px",
      width: "100%",
      minHeight: "50%",
      
    }),
    menuList: (baseStyles: any) => ({
      ...baseStyles,
      minHeight: "50%",
      "::-webkit-scrollbar": {
        width: "0.6vw",
      },
      "::-webkit-scrollbar-track": {
        display: theme.backgroundColor,
      },
      "::-webkit-scrollbar-thumb": {
        borderRadius: "10px",
        backgroundColor: "#cccccc",
      },
      "&::-webkit-scrollbar-thumb:hover": {
        backgroundColor: "#555",
      },
    }),
    option: (baseStyles: any, state: any) => ({
      ...baseStyles,
      borderRadius: "10px",
      color: state.isSelected ? theme.oppositeTextColor : theme.textColor,
      cursor: "pointer",
      fontSize: "12px",
      margin: "4px 0",
    }),
    group: (baseStyles: any) => ({
      ...baseStyles,
      borderRadius: "15px",
      boxShadow: theme.oppositeBoxShadow,
      margin: "10px",
      padding: "5px",
    }),
    singleValue: (baseStyles: any) => ({
      ...baseStyles,
      color: theme.textColor,
    }),
  };

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
      <div css={selectStyle}>
        <Select
          onChange={handleSortChange}
          options={options}
          placeholder="Sort by..."
          isSearchable={false}
          theme={selectTheme}
          styles={selectStyles}
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
      <div css={switchStyle} onClick={handleThemeChange}>
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
