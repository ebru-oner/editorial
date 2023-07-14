import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#fff",
    },
    primary: {
      light: "#FBFEFB",
      main: "#FBFEFB",
      dark: "#5C374C",
      contrastText: "#474350",
    },
    text: {
      primary: "#5C374C",
      secondary: "#FBFEFB",
    },
    secondary: {
      light: "#F1F0CC",
      main: "#846C5B",
      dark: "#EBD494",
      contrastText: "#FBFEFB",
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        noWrap: {
          whiteSpace: "initial",
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: "2",
          WebkitBoxOrient: "vertical",
        },
      },
    },
  },
  typography: {
    h3: {
      fontFamily: ["Shadows Into Light", "cursive"].join(","),
    },
    subtitle1: {
      fontFamily: ["Shadows Into Light", "cursive"].join(","),
      fontStyle: "italic",
      fontSize: 24,
    },
    fontFamily: ["Shantell Sans", "cursive"].join(","),
  },
});

export default theme;
