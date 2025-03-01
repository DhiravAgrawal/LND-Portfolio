import { Box, Container, Typography } from "@mui/material";

const AboutHero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: 'url("/images/hero-bg.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "400px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay for contrast
        },
      }}
    >
      <Container sx={{ position: "relative", zIndex: 1 }}>
        <Typography variant="h2" fontWeight="bold">
          Creating Moments That Last a Lifetime
        </Typography>
        <Typography variant="h5" sx={{ mt: 2 }}>
          Our passion is turning your dreams into unforgettable events.
        </Typography>
      </Container>
    </Box>
  );
};

export default AboutHero;
