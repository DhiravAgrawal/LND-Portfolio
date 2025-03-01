import { useEffect, useState } from "react";
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";

const FAQs = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/pages/faqs")
      .then(res => setFaqs(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Container sx={{ pt: 10 }}>
      <Typography variant="h3" color="primary" gutterBottom>
        Frequently Asked Questions
      </Typography>
      {faqs.map((faq, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};

export default FAQs;
