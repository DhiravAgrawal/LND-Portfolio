import { Container, Typography, Grid, Card, CardContent } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business"; // Corporate Events
import FavoriteIcon from "@mui/icons-material/Favorite"; // Weddings & Celebrations
import MusicNoteIcon from "@mui/icons-material/MusicNote"; // Concerts & Festivals
import PeopleIcon from "@mui/icons-material/People"; // Private Parties
import EventAvailableIcon from "@mui/icons-material/EventAvailable"; // Custom Event Planning

const ServicesOverview = () => {
  const services = [
    { icon: <BusinessIcon fontSize="large" />, title: "Corporate Events", description: "Professional conferences, business summits, and networking events." },
    { icon: <FavoriteIcon fontSize="large" />, title: "Weddings & Celebrations", description: "Luxury weddings and personalized celebrations made memorable." },
    { icon: <MusicNoteIcon fontSize="large" />, title: "Concerts & Festivals", description: "Large-scale concerts, music festivals, and cultural events." },
    { icon: <PeopleIcon fontSize="large" />, title: "Private Parties", description: "Exclusive birthday parties, anniversaries, and private gatherings." },
    { icon: <EventAvailableIcon fontSize="large" />, title: "Custom Event Planning", description: "Bespoke event solutions tailored to your vision and needs." },
  ];

  return (
    <Container sx={{ py: 10, textAlign: "center" }}>
      <Typography variant="h3" color="primary" gutterBottom>
        Our Services
      </Typography>
      <Grid container spacing={4} mt={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ textAlign: "center", p: 3, bgcolor: "secondary.main", color: "white" }}>
              <CardContent>
                {service.icon}
                <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
                  {service.title}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      
    </Container>
  );
};

export default ServicesOverview;
