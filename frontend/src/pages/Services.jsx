import { Container, Typography, Box } from "@mui/material";

const About = () => {
  return (
    <Container sx={{ pt: 10 }}>
      <Typography variant="h3" color="primary" gutterBottom>
        About LND Group
      </Typography>
      <Typography variant="body1">
        LND GROUP is a professional service dedicated to organizing various events, including festivals, celebrations, and grand occasions.
      </Typography>
      <Box mt={4}>
        <Typography variant="h5" color="secondary">Why Choose Us?</Typography>
        <Typography variant="body1">✔️ Professional Event Management</Typography>
        <Typography variant="body1">✔️ High-Quality Services for all Occasions</Typography>
        <Typography variant="body1">✔️ Traditional & Modern Event Execution</Typography>
      </Box>
    </Container>
  );
};

export default About;
