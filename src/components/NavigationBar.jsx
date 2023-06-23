import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const navigate = useNavigate();

  const handleGoToHomePage = () => {
    navigate("/");
  };
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="secondary"
            aria-label="go to home page"
            onClick={handleGoToHomePage}
            edge="start"
            size="large"
          >
            <HomeIcon />
          </IconButton>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ alignSelf: "center" }}
          >
            Essential starters for React development
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavigationBar;
