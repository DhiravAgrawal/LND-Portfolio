import { Paper, Typography, Box } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const ContactInfo = () => {
  return (
    <Paper sx={{ p: 4, boxShadow: 3 }}>
      <Typography variant="h5" gutterBottom>Contact Information</Typography>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <LocationOnIcon sx={{ mr: 2, color: "primary.main" }} />
        <Typography>123 Event Street, City, Country</Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <PhoneIcon sx={{ mr: 2, color: "primary.main" }} />
        <Typography>Call us at: +91 XXXXX XXXXX</Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <EmailIcon sx={{ mr: 2, color: "primary.main" }} />
        <Typography>Reach us at: contact@eventcompany.com</Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <AccessTimeIcon sx={{ mr: 2, color: "primary.main" }} />
        <Typography>Business Hours: Monday - Saturday | 9 AM - 7 PM</Typography>
      </Box>
    </Paper>
  );
};

export default ContactInfo;
