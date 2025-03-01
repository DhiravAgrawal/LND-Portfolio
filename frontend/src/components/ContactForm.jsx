import { useState } from "react";
import { TextField, Button, Paper, Typography } from "@mui/material";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Full Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone Number is required";
    if (!formData.message) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    console.log("Form submitted:", formData);
    alert("Message Sent Successfully!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <Paper sx={{ p: 4, boxShadow: 3 }}>
      <Typography variant="h5" gutterBottom>Send Us a Message</Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Full Name" name="name" fullWidth margin="normal" onChange={handleChange} value={formData.name} error={!!errors.name} helperText={errors.name} />
        <TextField label="Email Address" name="email" fullWidth margin="normal" onChange={handleChange} value={formData.email} error={!!errors.email} helperText={errors.email} />
        <TextField label="Phone Number" name="phone" fullWidth margin="normal" onChange={handleChange} value={formData.phone} error={!!errors.phone} helperText={errors.phone} />
        <TextField label="Message" name="message" multiline rows={4} fullWidth margin="normal" onChange={handleChange} value={formData.message} error={!!errors.message} helperText={errors.message} />
        <Button type="submit" variant="contained" sx={{ mt: 2, bgcolor: "#FAEBD7", color: "#4D0011", "&:hover": { bgcolor: "#f0dbc2" } }} fullWidth>
          Send Message
        </Button>
      </form>
    </Paper>
  );
};

export default ContactForm;
