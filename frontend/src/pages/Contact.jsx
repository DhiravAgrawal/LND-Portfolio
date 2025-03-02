import { useState } from "react";
import { Container, Grid, Paper, Typography, Box, TextField, Button, Alert } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("");
    if (!validateForm()) return;

    setSuccessMessage("Your message has been sent successfully! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
    setErrors({});
  };

  return (
    <Container sx={{ py: 10, bgcolor: "#ffffff" }}>
      <Typography variant="h4" textAlign="center" gutterBottom sx={{ color: "#D4AF37", fontWeight: "bold" }}>
        Contact Us
      </Typography>

      <Grid container spacing={4}>
        {/* Contact Form */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 4,
              boxShadow: 3,
              border: "1px solid rgba(229, 193, 0, 0.3)",
              transition: "0.3s",
              "&:hover": { transform: "scale(1.02)", boxShadow: "5px 5px 15px rgba(212, 175, 55, 0.3)" },
            }}
          >
            <Typography variant="h5" gutterBottom sx={{ color: "#D4AF37", fontWeight: "bold" }}>
              Send Us a Message
            </Typography>

            {successMessage && <Alert severity="success" sx={{ mb: 2 }}>{successMessage}</Alert>}

            <form onSubmit={handleSubmit}>
              <TextField
                label="Full Name"
                name="name"
                fullWidth
                margin="normal"
                onChange={handleChange}
                value={formData.name}
                error={!!errors.name}
                helperText={errors.name}
              />
              <TextField
                label="Email Address"
                name="email"
                fullWidth
                margin="normal"
                onChange={handleChange}
                value={formData.email}
                error={!!errors.email}
                helperText={errors.email}
              />
              <TextField
                label="Phone Number"
                name="phone"
                fullWidth
                margin="normal"
                onChange={handleChange}
                value={formData.phone}
                error={!!errors.phone}
                helperText={errors.phone}
              />
              <TextField
                label="Message"
                name="message"
                multiline
                rows={4}
                fullWidth
                margin="normal"
                onChange={handleChange}
                value={formData.message}
                error={!!errors.message}
                helperText={errors.message}
              />
              <Button type="submit" variant="contained" sx={{ mt: 2, bgcolor: "#D4AF37", color: "white", "&:hover": { bgcolor: "#B89C33" } }} fullWidth>
                Send Message
              </Button>
            </form>
          </Paper>
        </Grid>

        {/* Contact Information */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 4,
              boxShadow: 3,
              border: "1px solid rgba(229, 193, 0, 0.3)",
              transition: "0.3s",
              "&:hover": { transform: "scale(1.02)", boxShadow: "5px 5px 15px rgba(212, 175, 55, 0.3)" },
            }}
          >
            <Typography variant="h5" gutterBottom sx={{ color: "#D4AF37", fontWeight: "bold" }}>
              Contact Information
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <LocationOnIcon sx={{ mr: 2, color: "#D4AF37" }} />
              <Typography sx={{ color: "#333" }}>123 Event Street, City, Country</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <PhoneIcon sx={{ mr: 2, color: "#D4AF37" }} />
              <Typography sx={{ color: "#333" }}>Call us at: +91 XXXXX XXXXX</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <EmailIcon sx={{ mr: 2, color: "#D4AF37" }} />
              <Typography sx={{ color: "#333" }}>Reach us at: contact@eventcompany.com</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <AccessTimeIcon sx={{ mr: 2, color: "#D4AF37" }} />
              <Typography sx={{ color: "#333" }}>Business Hours: Monday - Saturday | 9 AM - 7 PM</Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactUs;
