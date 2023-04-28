/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import Select from "react-select";

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
  { value: "episode_id", label: "Episode" },
  { value: "release_date", label: "Release Year" },
  { value: "title", label: "Title" },
];

const SortAndSearch = () => {
  const [lightMode, setLightMode] = useState(false);

  return (
    <div css={sortAndSearchStyle}>
      <div css={selectStyle}>
        <Select
          options={options}
          placeholder="Sort by..."
          isSearchable={false}
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary50: "gray",
              primary25: "gray",
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
              borderRadius: "15px",
              margin: "3px 0",
              cursor: "pointer",
              fontSize: "13px",
              color: state.isSelected ? "white" : "black",
            }),
          }}
        />
      </div>
      <input
        id="search"
        type="text"
        css={searchStyle}
        placeholder="Type to search..."
      />
      <div css={switchStyle}>{lightMode ? "🌙" : "☀️"}</div>
    </div>
  );
};

export default SortAndSearch;
