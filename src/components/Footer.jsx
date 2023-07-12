import {
  Box,
  Container,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const Footer = () => {
  return (
    <Box
      id="footer"
      component="footer"
      sx={{
        backgroundColor: "primary.light",
        width: "100%",
      }}
    >
      <Container maxWidth="md">
        <ListItem>
          <ListItemButton>
            <ListItemText>Copyright</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemText>Contact</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemText>Social media icons</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemText>Call to action(email, login...)</ListItemText>
          </ListItemButton>
        </ListItem>
      </Container>
    </Box>
  );
};

export default Footer;
