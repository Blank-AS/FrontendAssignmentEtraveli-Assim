import { SET_THEME } from '../actions/themeActions';

interface ThemeState {
  isLightMode: boolean;
}

const initialState: ThemeState = {
  isLightMode: JSON.parse(localStorage.getItem("isLightMode") || "false"),
};

const themeReducer = (state = initialState, action: { type: string; payload: any }) => {
  switch (action.type) {
    case SET_THEME:
      return { ...state, isLightMode: action.payload };
    default:
      return state;
  }
}

export default themeReducer;