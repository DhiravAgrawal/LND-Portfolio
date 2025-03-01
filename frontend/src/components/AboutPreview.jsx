import { Container, Typography, Button, Box, Grid, Card, CardContent } from "@mui/material";
import { Link } from "react-router-dom";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents"; // Excellence
import LightbulbIcon from "@mui/icons-material/Lightbulb"; // Creativity
import EngineeringIcon from "@mui/icons-material/Engineering"; // Execution

const AboutPreview = () => {
  return (
    <Container sx={{ py: 10, textAlign: "center" }}>
      <Typography variant="h3" color="primary" gutterBottom>
        About LND Group
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: "700px", margin: "auto" }}>
        LND GROUP specializes in planning and executing premium events, from corporate gatherings to luxury weddings. 
        With a deep focus on **excellence, creativity, and flawless execution**, we ensure that your events become extraordinary memories.
      </Typography>

      {/* Core Values */}
      <Grid container spacing={4} mt={4} justifyContent="center">
        {[
          { icon: <EmojiEventsIcon fontSize="large" />, text: "Excellence" },
          { icon: <LightbulbIcon fontSize="large" />, text: "Creativity" },
          { icon: <EngineeringIcon fontSize="large" />, text: "Execution" },
        ].map((value, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ textAlign: "center", p: 3, bgcolor: "secondary.main", color: "white" }}>
              <CardContent>
                {value.icon}
                <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
                  {value.text}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Learn More Button */}
      <Box mt={4}>
        <Button component={Link} to="/about" variant="contained" color="primary">
          Learn More
        </Button>
      </Box>
    </Container>
  );
};

export default AboutPreview;
