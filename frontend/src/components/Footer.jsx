import { Box, Container, Typography, Link, IconButton, useTheme } from "@mui/material";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  const theme = useTheme(); // Access theme for colors

  return (
    <Box
  component="footer"
  sx={{
    bgcolor: "#6E0D14", // Footer background color
    color: theme.palette.primary.main, // Footer text color
    py: 4,
    mt: "auto",
    textAlign: "center",
    position: "relative",
    boxShadow: "0px -4px 10px rgba(0, 0, 0, 0.2)", // Shadow on the top
  }}
>

      <Container>
        {/* Quick Links */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 3, mb: 2 }}>
          {["Home", "About Us", "Services", "FAQ", "Contact"].map((item, index) => (
            <Link
              key={index}
              href={`/${item.toLowerCase().replace(" ", "-")}`}
              sx={{
                color: theme.palette.primary.main, // Uses primary color
                fontWeight: "bold",
                "&:hover": { color: theme.palette.accent.main }, // Accent color on hover
              }}
              underline="hover"
            >
              {item}
            </Link>
          ))}
        </Box>

        {/* Social Media Icons */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 2 }}>
          <IconButton href="https://facebook.com" target="_blank" sx={{ color: theme.palette.primary.main }}>
            <Facebook />
          </IconButton>
          <IconButton href="https://instagram.com" target="_blank" sx={{ color: theme.palette.primary.main }}>
            <Instagram />
          </IconButton>
          <IconButton href="https://linkedin.com" target="_blank" sx={{ color: theme.palette.primary.main }}>
            <LinkedIn />
          </IconButton>
        </Box>

        {/* Copyright */}
        <Typography variant="body2">
          © {new Date().getFullYear()} Event Management. All rights reserved. |{" "}
          <Link href="/terms" sx={{ color: theme.palette.primary.main, fontWeight: "bold", "&:hover": { color: theme.palette.accent.main } }}>
            Terms of Service
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
