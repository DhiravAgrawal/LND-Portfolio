// import React from "react";
import { Container, Grid, Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";

const services = [
  { title: "Event Management", image: "../../public/event.png", desc: "Smooth planning & coordination for all event aspects." },
  { title: "Map Drawing & Measurement", image: "../../public/map.png", desc: "Accurate measurements for optimal space utilization." },
  { title: "Ordering & Logistics", image: "../../public/logistics.png", desc: "Seamless ordering & timely delivery of event essentials." },
  { title: "Designing & Banners", image: "../../public/banner.png", desc: "Creative designs & professional banner printing." },
  { title: "Marketing & Promoation", image: "../../public/social.png", desc: "Digital & traditional marketing for event outreach." },
  { title: "Tent & Venue Setup", image: "../../public/tent.png", desc: "Comfortable and spacious tent arrangements." },
  { title: "Light & Sound Arrangements", image: "../../public/light.png", desc: "Professional lighting and sound systems." },
  { title: "Offset Printing", image: "../../public/brochure.png", desc: "High-quality printing for event materials." },
  { title: "Mandap & Gate Setup", image: "../../public/mandap.png", desc: "Elegant mandap & grand entry gates for events." },
  { title: "Catering Services", image: "../../public/catering.png", desc: "Delicious food with exceptional hospitality." },
  { title: "Security Arrangements", image: "../../public/security.png", desc: "Trained personnel ensuring a safe event." }
];

const PageContainer = styled(Container)({
  backgroundColor: "#FFFFFF",
  padding: "50px 0",
});

const Title = styled(Typography)({
  color: "#6E0D14",
  textAlign: "center",
  marginBottom: "30px",
  fontSize: "32px",
  fontWeight: "bold",
});

const ServiceCard = styled(Card)({
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  borderRadius: "12px",
  transition: "0.3s",
  '&:hover': {
    transform: "scale(1.05)",
    boxShadow: "0px 6px 15px rgba(110, 13, 20, 0.5)"
  }
});

const ServiceCardContent = styled(CardContent)({
  backgroundColor: "#FFCC00",
  color: "#6E0D14",
  textAlign: "center",
  fontWeight: "bold",
});

const ServiceImage = styled("img")({
  width: "100%",
  height: "180px",
  borderRadius: "12px 12px 0 0",
  objectFit: "cover",
});

const ServicesPage = () => {
  return (
    <PageContainer>
      <Title>Our Services</Title>
      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ServiceCard>
              <ServiceImage src={`/images/${service.image}`} alt={service.title} />
              <ServiceCardContent>
                <Typography variant="h6">{service.title}</Typography>
                <Typography variant="body2">{service.desc}</Typography>
              </ServiceCardContent>
            </ServiceCard>
          </Grid>
        ))}
      </Grid>
    </PageContainer>
  );
};

export default ServicesPage;