import { createTheme } from "@mui/material/styles";

//SeaSalt: F8F8F8
//Columbia blue:B4D2E7
//Light blue: 94C5cc
//Cadet grey:A1A6B4
//Black:000100

//Vista blue:828CBC
//Lapis lazuli:376996
//Delft blue:1D3461
//polynesian blue:1F487E
const theme = createTheme({
  palette: {
    background: {
      default: "#FFF8F0",
    },
    primary: {
      light: "#B4D2E7",
      main: "#1D3461",
      dark: "#94C5cc",
      contrastText: "#FFFFF0",
    },
    text: {
      primary: "#000100",
      secondary: "#A1A6B4",
    },
    secondary: {
      light: "#828CBC",
      main: "#FFF8F0",
      dark: "#1D3461",
      contrastText: "#1F487E",
    },
  },
  typography: {
    fontFamily: ["Ubuntu", "sans-serif"].join(","),
  },
});

export default theme;
