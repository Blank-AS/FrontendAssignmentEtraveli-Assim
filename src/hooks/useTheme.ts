import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";

const useTheme = () => {
  const isLightMode = useSelector(
    (state: RootState) => state.themeReducer.isLightMode
  );

  const lightTheme = {
    isLightMode: true,
    backgroundColor: "black",
    textColor: "white",
    oppositeTextColor: "black",
    boxShadow: "0px 0px 10px 5px rgba(0, 0, 0, 0.3)",
    oppositeBoxShadow: "0px 0px 10px 5px rgba(255, 255, 255, 0.3)",
  };

  const darkTheme = {
    isLightMode: false,
    backgroundColor: "white",
    textColor: "black",
    oppositeTextColor: "white",
    boxShadow: "0px 0px 10px 5px rgba(255, 255, 255, 0.3)",
    oppositeBoxShadow: "0px 0px 10px 5px rgba(0, 0, 0, 0.3)",
  };

  return isLightMode ? lightTheme : darkTheme;
};

export default useTheme;
