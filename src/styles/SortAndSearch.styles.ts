/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const sortAndSearchStyle = css({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingLeft: "20px",
  paddingRight: "20px",
  height: "10vh",
  position: "relative",
  "@media (max-width: 1167px)": {
    flexDirection: "column",
    height: "auto",
    padding: "10px",
  },
});

export const selectWrapperStyle = css({
  width: "20%",
  "@media (max-width: 1167px)": {
    width: "80%",
    padding: "10px 0px",
  },
});

export const searchStyle = (theme: any) =>
  css({
    width: "calc(100% - 45px)",
    minHeight: "86%",
    height: "86%",
    backgroundColor: theme.backgroundColor,
    borderRadius: "20px",
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
    "@media (max-width: 1167px)": {
      width: "calc(100% - 45px)",
    },
  });

export const searchWrapperStyle = css({
  position: "relative",
  width: "75%",
  minHeight: "40px",
  height: "40px",
  "@media (max-width: 1167px)": {
    width: "80%",
  },
});

export const searchIconStyle = css({
  position: "absolute",
  marginLeft: "7px",
  transform: "translateY(50%)",
  width: "20px",
  height: "20px",
  userSelect: "none",
});

export const switchStyle = (theme: any) =>
  css({
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
    "@media (max-width: 1167px)": {
      position: "absolute",
      top: "5px",
      right: "5px",
    },
  });

export const selectStyles = (theme: any) => ({
  control: (baseStyles: any) => ({
    ...baseStyles,
    backgroundColor: theme.backgroundColor,
    border: "none",
    borderRadius: "20px",
    boxShadow: theme.boxShadow,
    cursor: "pointer",
    fontSize: "12px",
    width: "100%",
    minHeight: "40px",
    height: "40px",
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
});
