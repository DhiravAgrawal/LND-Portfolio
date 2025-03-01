import { Box, Container, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";

const teamMembers = [
  {
    name: "Alice Johnson",
    role: "Event Coordinator",
    bio: "Alice has over 10 years of experience in planning luxury weddings and corporate events.",
    image: "/images/alice.jpg",
  },
  {
    name: "David Smith",
    role: "Creative Director",
    bio: "David specializes in innovative event design and ensures every event is visually stunning.",
    image: "/images/david.jpg",
  },
  {
    name: "Sophia Lee",
    role: "Logistics Manager",
    bio: "Sophia ensures smooth operations, managing vendor coordination and on-site logistics.",
    image: "/images/sophia.jpg",
  },
];

const TeamSection = () => {
  return (
    <Box sx={{ py: 10, bgcolor: "background.default", textAlign: "center" }}>
      <Container>
        <Typography variant="h3" color="primary" gutterBottom>
          Meet Our Team
        </Typography>
        <Typography variant="body1" sx={{ mb: 5 }}>
          Our dedicated professionals bring creativity, passion, and precision to every event.
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {teamMembers.map((member, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 300, mx: "auto", textAlign: "center" }}>
                <CardMedia component="img" height="250" image={member.image} alt={member.name} />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">{member.name}</Typography>
                  <Typography variant="subtitle1" color="textSecondary">{member.role}</Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>{member.bio}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TeamSection;
