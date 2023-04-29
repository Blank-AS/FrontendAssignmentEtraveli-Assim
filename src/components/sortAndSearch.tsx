/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import { SORT_MOVIES, SEARCH_MOVIES } from "../redux/actions/movieActions";

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
  width: "15%",
});

const searchStyle = css({
  width: "75%",
  height: "4vh",
  color: "black",
  backgroundColor: "white",
  border: "none",
  borderRadius: "20px",
  boxShadow: "0px 0px 10px 5px rgba(255, 255, 255, 0.3)",
  paddingLeft: "30px",
  paddingRight: "10px",
});

const switchStyle = css({
  display: "flex",
  width: "3%",
  height: "4vh",
  backgroundColor: "white",
  borderRadius: "20px",
  boxShadow: "0px 0px 10px 5px rgba(255, 255, 255, 0.3)",
  justifyContent: "center",
  alignItems: "center",
  color: "black",
});

const options = [
  {
    label: "Episode",
    options: [
      { value: "episode_id_asc", label: "Ascending" },
      { value: "episode_id_desc", label: "Descending" },
    ],
  },
  { label: "Title", value: "title" },
  {
    label: "Release Date",
    options: [
      { value: "release_date_asc", label: "Ascending" },
      { value: "release_date_desc", label: "Descending" },
    ],
  },
];

const SortAndSearch = () => {
  const dispatch = useDispatch();

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
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: SEARCH_MOVIES, payload: event.target.value });
  };

  const [lightMode, setLightMode] = useState(false);

  return (
    <div css={sortAndSearchStyle}>
      <div css={selectStyle}>
        <Select
          onChange={handleSortChange}
          options={options}
          placeholder="Sort by..."
          isSearchable={false}
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary50: "gray",
              primary25: "#cccccc",
              primary: "black",
            },
          })}
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              boxShadow: "0px 0px 10px 5px rgba(255, 255, 255, 0.3)",
              borderRadius: "20px",
              width: "100%",
              height: "4vh",
              border: "none",
              cursor: "pointer",
              fontSize: "13px",
            }),
            menu: (baseStyles) => ({
              ...baseStyles,
              boxShadow: "0px 0px 10px 5px rgba(255, 255, 255, 0.3)",
              borderRadius: "20px",
              width: "100%",
              border: "none",
              padding: "5px",
            }),
            option: (baseStyles, state) => ({
              ...baseStyles,
              borderRadius: "10px",
              margin: "3px 0",
              cursor: "pointer",
              fontSize: "13px",
              color: state.isSelected ? "white" : "black",
            }),
            group: (baseStyles) => ({
              ...baseStyles,
              padding: "5px",
              margin: "10px",
              borderRadius: "15px",
              boxShadow: "0px 0px 10px 5px rgba(0, 0, 0, 0.3)",
            }),
          }}
        />
      </div>
      <input
        id="search"
        type="text"
        css={searchStyle}
        placeholder="Type to search..."
        onChange={handleSearchChange}
      />
      <div css={switchStyle}>{lightMode ? "🌙" : "☀️"}</div>
    </div>
  );
};

export default SortAndSearch;
