import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#FFF8F0",
    },
    primary: {
      light: "#FBFEFB",
      main: "#474350",
      dark: "#FCFFEB",
      contrastText: "#FFFFF0",
    },
    text: {
      primary: "#FCFFEB",
      secondary: "#FBFEFB",
    },
    secondary: {
      light: "#F1F0CC",
      main: "#FBFEFB",
      dark: "#EBD494",
      contrastText: "#FBFEFB",
    },
  },
  typography: {
    fontFamily: ["Ubuntu", "sans-serif"].join(","),
  },
});

export default theme;
