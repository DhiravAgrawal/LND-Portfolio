import { Box, Container, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#6E0D14", // Dark Red Background
        color: "#FFFFFF", // White Text
        py: 4,
        mt: "auto",
        textAlign: "center",
      }}
    >
      <Container>
        {/* Quick Links */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 3, mb: 2 }}>
          {["Home", "About Us", "Services", "FAQ", "Contact"].map((item, index) => (
            <Link
              key={index}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              sx={{
                color: "#FFCC00", // Gold Links
                fontWeight: "bold",
                "&:hover": { color: "#FFFFFF" }, // White on Hover
              }}
              underline="hover"
            >
              {item}
            </Link>
          ))}
        </Box>

        {/* Social Media Icons */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 2 }}>
          <IconButton href="https://facebook.com" target="_blank" sx={{ color: "#FFCC00" }}>
            <Facebook />
          </IconButton>
          <IconButton href="https://instagram.com" target="_blank" sx={{ color: "#FFCC00" }}>
            <Instagram />
          </IconButton>
          <IconButton href="https://linkedin.com" target="_blank" sx={{ color: "#FFCC00" }}>
            <LinkedIn />
          </IconButton>
        </Box>

        {/* Copyright */}
        <Typography variant="body2" sx={{ color: "#FFFFFF" }}>
          © {new Date().getFullYear()} Event Management. All rights reserved. |{" "}
          <Link href="/terms" sx={{ color: "#FFCC00", fontWeight: "bold", "&:hover": { color: "#FFFFFF" } }}>
            Terms of Service
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
