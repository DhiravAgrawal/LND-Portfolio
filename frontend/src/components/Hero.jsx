import { Box, Typography, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Box
      sx={{
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundImage: "url('/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        px: 2,
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay for text visibility
        },
      }}
    >
      <Container sx={{ position: "relative", zIndex: 2 }}>
        <Typography variant="h3" fontWeight="bold">
          Crafting Unforgettable Events with Elegance & Precision
        </Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>
          Turning Your Vision into Reality
        </Typography>
        <Button component={Link} to="/contact" variant="contained" color="secondary" size="large" sx={{ mt: 4 }}>
          Plan Your Event Now
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;
