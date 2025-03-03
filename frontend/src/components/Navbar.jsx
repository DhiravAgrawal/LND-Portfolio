import { AppBar, Toolbar, Box, Button, Drawer, List, ListItem, IconButton, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme(); // Access theme for global styles

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = ["Home", "About", "Services", "FAQs", "Contact"];

  return (
    <>
      <AppBar position="sticky" sx={{ bgcolor: "#6E0D14" }}> {/* Use theme color */}
        <Toolbar>
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
            }}
          >
            <img
              src="/logo.jpg"
              alt="LND Group Logo"
              style={{
                height: "64px",
                width: "auto",
                maxWidth: "180px",
                objectFit: "contain",
              }}
            />
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {menuItems.map((item, index) => (
              <Button
                key={index}
                component={Link}
                to={`/${item.toLowerCase()}`}
                sx={{
                  color: theme.palette.primary.main, // Uses primary theme color
                  fontWeight: "bold",
                  "&:hover": { color: theme.palette.accent.main }, // Accent color on hover
                }}
              >
                {item}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "block", md: "none" }, color: theme.palette.primary.main }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <List sx={{ width: 200 }}>
          {menuItems.map((item, index) => (
            <ListItem
              key={index}
              button
              component={Link}
              to={`/${item.toLowerCase()}`}
              onClick={handleDrawerToggle}
              sx={{
                color: theme.palette.primary.main, // Uses theme color
              }}
            >
              {item}
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
