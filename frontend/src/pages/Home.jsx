import { Container, Grid, Typography, Button, Card, Box } from "@mui/material";
import { Star, Event, Campaign, Security, Restaurant, Lightbulb } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
// import { styled } from "@mui/system";
import bgImage from "../assets/bg-image.jpg";




// const ServiceImage = styled("img")({
//   width: "100%",
//   height: "180px",
//   borderRadius: "12px 12px 0 0",
//   objectFit: "cover",
// });

const Home = () => {
  const navigate = useNavigate(); // Navigation hook

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        bgcolor: "#FFFFFF",
        color: "#b99123",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          
backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.2, // Adjust for better readability
          zIndex: -1,
        },
      }}
    >
      {/* <ServiceImage src={`../../public/bg-image.jpg`} /> */}
      {/* Hero Section */}
      <Box sx={{ textAlign: "center", p: 5, minHeight: "60vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Typography variant="h2" sx={{ fontWeight: "bold" }}>
          Unforgettable Events, Seamlessly Executed
        </Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>
          Expert planning for festivals, celebrations & grand occasions.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            sx={{
              mt: 3,
              bgcolor: "#6E0D14",
              color: "#FFFFFF",
              fontWeight: "bold",
              height: "50px",
              px: 4,
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
        <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold" }}>
          About Us
        </Typography>
        <Typography sx={{ mt: 2, textAlign: "center", maxWidth: "80%", margin: "auto" }}>
          LND GROUP specializes in professional event organization, ensuring a seamless and memorable experience for every occasion.
        </Typography>
      </Container>

      {/* Why Choose Us */}
      <Container sx={{ py: 5, bgcolor: "#FFFFFF", borderRadius: 3, color: "#b99123" }}> {/* Ensure text is #b99123 */}
        <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold" }}>
          Why Choose Us?
        </Typography>
        <Grid container spacing={3} mt={3}>
          {[
            { icon: <Star />, text: "Experienced & Reliable" },
            { icon: <Event />, text: "Seamless Event Planning" },
            { icon: <Campaign />, text: "Innovative Marketing Strategies" },
            { icon: <Security />, text: "Strong Security Arrangements" },
          ].map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ textAlign: "center", p: 2, bgcolor: "#6E0D14", color: "#b99123", border: "1px solid #b99123" }}>
                <Box>{item.icon}</Box>
                <Typography mt={1}>{item.text}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Our Services */}
      <Container sx={{ py: 5 }}>
        <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold" }}>
          Our Services
        </Typography>
        <Grid container spacing={3} mt={3}>
          {[
            { icon: <Event />, title: "Event Management" },
            { icon: <Lightbulb />, title: "Lighting & Sound" },
            { icon: <Campaign />, title: "Marketing & Promotion" },
            { icon: <Restaurant />, title: "Catering & Hospitality" },
          ].map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ textAlign: "center", p: 2, bgcolor: "#FFFFFF", color: "#b99123", border: "1px solid #b99123" }}>
                <Box>{service.icon}</Box>
                <Typography mt={1}>{service.title}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box sx={{ textAlign: "center", p: 5, bgcolor: "#6E0D14", color: "#b99123" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Plan Your Event With Us!
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: 2, bgcolor: "#FFCC00", color: "#6E0D14", fontWeight: "bold", "&:hover": { bgcolor: "#E6B800" } }}
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </Button>
      </Box>

    </Box>
  );
};

export default Home;
