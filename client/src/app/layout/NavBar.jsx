import {
  AppBar,
  Toolbar,
  Typography,
  ListItem,
  List,
  IconButton,
  Badge,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { LinearProgress } from "@mui/material";
import { useSelector } from "react-redux";
const menuLinks = [
  { title: "Catalog", path: "/catalog" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
];

const loginLinks = [
  { title: "Login", path: "/login" },
  { title: "Register", path: "/register" },
];
const navStyles = {
  color: "inherit",
  typography: "h6",
  textDecoration: "none",
  "&:hover": { color: "grey.500" },
  "&.active": { color: "secondary.main" },
};
function NavBar() {
  const { isLoading } = useSelector((state) => state.ui);
  
  return (
    <AppBar position="fixed">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography component={NavLink} to={"/"} variant="h6" sx={navStyles}>
          SWANZ
        </Typography>
        <List sx={{ display: "flex" }}>
          {menuLinks.map(({ title, path }) => (
            <ListItem key={path} component={NavLink} to={path} sx={navStyles}>
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>

        <List sx={{ display: "flex" }}>
          <IconButton size="large" sx={{ color: "inherit" }}>
            <Badge badgeContent={4} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
          {loginLinks.map(({ title, path }) => (
            <ListItem key={path} component={NavLink} to={path} sx={navStyles}>
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>
      </Toolbar>
      {isLoading && (
        <LinearProgress
          color="secondary"
          sx={{ position: "absolute", bottom: 0, width: "100%" }}
        />
      )}  
    </AppBar>
  );
}

export default NavBar;
