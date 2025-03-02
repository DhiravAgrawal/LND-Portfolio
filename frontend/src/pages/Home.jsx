import { Container, Grid, Typography, Button, Card, Box } from "@mui/material";
import { Star, Event, Campaign, Security, Restaurant, Lightbulb } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate(); // Navigation hook

  return (
    <Box sx={{ bgcolor: "#FFFFFF", color: "#6E0D14" }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: "center", p: 5, minHeight: "60vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Typography variant="h2" sx={{ color: "#FFCC00", fontWeight: "bold" }}>Unforgettable Events, Seamlessly Executed</Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>Expert planning for festivals, celebrations & grand occasions.</Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
  <Button
    variant="contained"
    sx={{
      mt: 3,
      bgcolor: "#6E0D14",
      color: "#FFFFFF",
      fontWeight: "bold",
      width: "fit-content", // Keeps the width small
      height: "50px", // Increases button height
      px: 4, // Adds horizontal padding for balance
      "&:hover": { bgcolor: "#540A10" }
    }}
    onClick={() => navigate("/services")}
  >
    Plan Your Event
  </Button>
</Box>

      </Box>

      {/* About Us Section */}
      <Container sx={{ py: 5 }}>
        <Typography variant="h4" sx={{ color: "#6E0D14", textAlign: "center", fontWeight: "bold" }}>About Us</Typography>
        <Typography sx={{ mt: 2, textAlign: "center", maxWidth: "80%", margin: "auto" }}>
          LND GROUP specializes in professional event organization, ensuring a seamless and memorable experience for every occasion.
        </Typography>
      </Container>

      {/* Why Choose Us */}
      <Container sx={{ py: 5, bgcolor: "#FFCC00", borderRadius: 3, color: "#6E0D14" }}>
        <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold" }}>Why Choose Us?</Typography>
        <Grid container spacing={3} mt={3}>
          {[
            { icon: <Star />, text: "Experienced & Reliable" },
            { icon: <Event />, text: "Seamless Event Planning" },
            { icon: <Campaign />, text: "Innovative Marketing Strategies" },
            { icon: <Security />, text: "Strong Security Arrangements" },
          ].map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ textAlign: "center", p: 2, bgcolor: "#6E0D14", color: "#FFCC00", border: "1px solid #FFCC00" }}>
                <Box>{item.icon}</Box>
                <Typography mt={1}>{item.text}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Our Services */}
      <Container sx={{ py: 5 }}>
        <Typography variant="h4" sx={{ color: "#6E0D14", textAlign: "center", fontWeight: "bold" }}>Our Services</Typography>
        <Grid container spacing={3} mt={3}>
          {[
            { icon: <Event />, title: "Event Management" },
            { icon: <Lightbulb />, title: "Lighting & Sound" },
            { icon: <Campaign />, title: "Marketing & Promotion" },
            { icon: <Restaurant />, title: "Catering & Hospitality" },
          ].map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ textAlign: "center", p: 2, bgcolor: "#FFFFFF", color: "#6E0D14", border: "1px solid #6E0D14" }}>
                <Box>{service.icon}</Box>
                <Typography mt={1}>{service.title}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box sx={{ textAlign: "center", p: 5, bgcolor: "#6E0D14", color: "#FFCC00" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>Plan Your Event With Us!</Typography>
        <Button
          variant="contained"
          sx={{ mt: 2, bgcolor: "#FFCC00", color: "#6E0D14", fontWeight: "bold", "&:hover": { bgcolor: "#E6B800" } }}
          onClick={() => navigate("/contact")} // Redirect to Contact page
        >
          Contact Us
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
