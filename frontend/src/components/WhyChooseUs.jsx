import { Container, Typography, Grid, Card, CardContent } from "@mui/material";
import StarIcon from "@mui/icons-material/Star"; // Expertise
import TrendingUpIcon from "@mui/icons-material/TrendingUp"; // Successful Events
import BusinessIcon from "@mui/icons-material/Business"; // Vendors & Venues
import PeopleIcon from "@mui/icons-material/People"; // Stress-Free Planning

const WhyChooseUs = () => {
  const benefits = [
    { icon: <StarIcon fontSize="large" />, text: "10+ Years of Event Planning Expertise" },
    { icon: <TrendingUpIcon fontSize="large" />, text: "500+ Successful Events Managed" },
    { icon: <BusinessIcon fontSize="large" />, text: "Top-Tier Vendors & Venues" },
    { icon: <PeopleIcon fontSize="large" />, text: "Personalized & Stress-Free Planning" },
  ];

  return (
    <Container sx={{ py: 10, textAlign: "center" }}>
      <Typography variant="h3" color="primary" gutterBottom>
        Why Choose Us?
      </Typography>
      <Grid container spacing={4} mt={4}>
        {benefits.map((benefit, index) => (
          <Grid item xs={12} md={3} key={index}>
            <Card sx={{ textAlign: "center", p: 3, bgcolor: "secondary.main", color: "white" }}>
              <CardContent>
                {benefit.icon}
                <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
                  {benefit.text}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default WhyChooseUs;
