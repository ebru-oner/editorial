import {
  AppBar,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const navItems = [
  { title: "Home", route: "/" },
  { title: "Discover", route: "discover" },
  { title: "Learn", route: "learn" },
  { title: "About", route: "about" },
  { title: "Contact", route: "contact" },
];

const NavigationBar = () => {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleMenuItemClick = (item, index) => {
    navigate(`${item}`);
    setSelectedIndex(index);
  };
  return (
    <AppBar position="fixed" style={{ boxShadow: "none" }}>
      <Toolbar>
        <Typography
          variant="h3"
          noWrap
          component="div"
          sx={{
            padding: "4px",
            borderRadius: "20px",
          }}
        >
          zebra
        </Typography>
        <List
          sx={{
            display: "flex",
            width: "60%",
            padding: "2%",
            "&& .Mui-selected, && .Mui-selected:hover": {
              borderBottom: "#332E3C 1px solid",
              "&, & .MuiListItemIcon-root": {
                color: "#332E3C",
              },
            },
            // hover states
            "& .MuiListItemButton-root:hover": {
              "&, & .MuiListItemIcon-root": {
                color: "#332E3C",
              },
            },
          }}
        >
          {navItems.map((item, index) => (
            <ListItem key={item.title} disablePadding sx={{ textAlign: "end" }}>
              <ListItemButton
                selected={selectedIndex === index}
                onClick={() => handleMenuItemClick(item.route, index)}
              >
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
