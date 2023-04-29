export const SET_THEME = "SET_THEME";

export const setTheme = (isLightMode: boolean) => ({
  type: SET_THEME,
  payload: isLightMode,
});
