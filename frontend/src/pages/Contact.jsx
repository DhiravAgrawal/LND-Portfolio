import { Container, Grid } from "@mui/material";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/contactInfo";
import GoogleMap from "../components/GoogleMap";


const ContactUs = () => {
  return (
    <>
      <Container sx={{ py: 10 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <ContactForm />
          </Grid>
          <Grid item xs={12} md={6}>
            <ContactInfo />
          </Grid>
        </Grid>
        <GoogleMap />
      </Container>
    </>
  );
};

export default ContactUs;
