// import { useState } from "react";
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  { question: "What services does your event management company offer?", answer: "We provide end-to-end event planning, including venue selection, décor, catering, entertainment, and logistics management." },
  { question: "How do I book an event with you?", answer: "You can contact us via our website, call our team, or visit our office for a consultation. We will guide you through the booking process." },
  { question: "Can you customize events according to our preferences?", answer: "Yes! We tailor every event to match your unique style, theme, and requirements, ensuring a memorable experience." },
  { question: "What is your cancellation and refund policy?", answer: "Our cancellation policy depends on how close to the event date the cancellation is made. Partial or full refunds may be available based on our terms." },
  { question: "Do you handle event logistics, such as venue selection and catering?", answer: "Yes, we take care of everything from finding the perfect venue to arranging catering, sound, lighting, and guest management." },
  { question: "What types of events do you specialize in?", answer: "We specialize in corporate events, weddings, private parties, product launches, and large-scale exhibitions." },
  { question: "Do you provide on-site event coordination?", answer: "Absolutely! Our professional team ensures smooth execution on the event day, managing every detail behind the scenes." },
  { question: "How much time in advance should I book an event?", answer: "For major events, we recommend booking at least 3-6 months in advance. However, we also accommodate last-minute requests based on availability." },
  { question: "What payment methods do you accept?", answer: "We accept bank transfers, credit/debit cards, and online payments for convenience." },
  { question: "How can I contact you for more information?", answer: "You can reach us via email at contact@eventcompany.com or call us at +91 XXXXX XXXXX for any inquiries." },
];

const FAQPage = () => {
  return (
    <Container sx={{ py: 10, bgcolor: "#ffffff" }}>
      <Typography variant="h4" textAlign="center" gutterBottom sx={{ color: "#D4AF37", fontWeight: "bold" }}>
        Frequently Asked Questions
      </Typography>
      <Box sx={{ maxWidth: 800, mx: "auto", mt: 4 }}>
        {faqs.map((faq, index) => (
          <Accordion key={index} sx={{ mb: 2, boxShadow: 2, border: "1px solid rgba(229, 193, 0, 0.3)" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#D4AF37" }} />} sx={{ bgcolor: "#F9F9F9" }}>
              <Typography sx={{ fontWeight: "bold", color: "#333" }}>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "#555" }}>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
};

export default FAQPage;
