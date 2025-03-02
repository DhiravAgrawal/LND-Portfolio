import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ bgcolor: "#6E0D14" }}> {/* Dark Red Background */}
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: "#FFCC00", fontWeight: "bold" }}>
          LND Group
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          {["Home", "About", "Services", "FAQs", "Contact"].map((item, index) => (
            <Button
              key={index}
              component={Link}
              to={`/${item.toLowerCase()}`}
              sx={{
                color: "#FFFFFF", // White Text
                fontWeight: "bold",
                "&:hover": { color: "#FFCC00" }, // Gold on Hover
              }}
            >
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
