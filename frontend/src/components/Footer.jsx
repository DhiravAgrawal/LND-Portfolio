import { Box, Container, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "primary.main",
        color: "white",
        py: 4,
        mt: "auto",
        textAlign: "center",
      }}
    >
      <Container>
        {/* Quick Links */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 3, mb: 2 }}>
          {["Home", "About Us", "Services", "FAQ", "Contact"].map((item, index) => (
            <Link key={index} href={`#${item.toLowerCase().replace(" ", "-")}`} color="inherit" underline="hover">
              {item}
            </Link>
          ))}
        </Box>

        {/* Social Media Icons */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 2 }}>
          <IconButton href="https://facebook.com" target="_blank" color="inherit">
            <Facebook />
          </IconButton>
          <IconButton href="https://instagram.com" target="_blank" color="inherit">
            <Instagram />
          </IconButton>
          <IconButton href="https://linkedin.com" target="_blank" color="inherit">
            <LinkedIn />
          </IconButton>
        </Box>

        {/* Copyright */}
        <Typography variant="body2">
          © {new Date().getFullYear()} Event Management. All rights reserved. |{" "}
          <Link href="/terms" color="inherit">Terms of Service</Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
