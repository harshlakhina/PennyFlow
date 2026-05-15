import { useAppSelector } from "./reduxHooks";

import { darkTheme, lightTheme } from "../theme";

export const useTheme = () => {
  const mode = useAppSelector((state) => state.theme.mode);

  return mode === "dark" ? darkTheme : lightTheme;
};
