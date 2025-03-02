import { Container, Typography, Grid, Card, CardMedia, Avatar, Box } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const aboutSections = [
  {
    title: "About Us",
    description: `LND GROUP is a professional service dedicated to organizing various events for festivals, celebrations, and grand occasions. 
    They specialize in event planning and execution, ensuring a seamless and memorable experience for every occasion. 

    Their services include management, map drawing and measurement, ordering, offset printing, designing and banner creation, and marketing. 
    They also provide mandap and gate setup, lighting, tents, sound arrangements, catering (rasoi), and security to make events successful. 

    With a strong commitment to excellence, LND GROUP handles every detail with precision. Their expertise in cultural and traditional festivities 
    ensures well-organized and unforgettable celebrations.`,
    image: "../../public/aboutus.png",
  },
  {
    title: "Why Us?",
    description: `Choosing LND GROUP means opting for a team that excels in organizing well-planned and flawlessly executed events. 
    With expertise in managing festivals, celebrations, and grand occasions, they ensure every detail is handled professionally, making your event stress-free and memorable. 

    Their comprehensive range of services, from event management and marketing to mandap setup, catering, and security, ensures a seamless experience. 
    With a commitment to excellence and a deep understanding of cultural and traditional festivities, LND GROUP transforms your vision into a perfectly executed event.`,
    image: "../../public/whyus.png",
  },
];

const testimonials = [
  { name: "Rajesh Patel", feedback: "Amazing event planning! Everything was handled perfectly, and the execution was flawless.", image: "/images/user1.jpg" },
  { name: "Priya Sharma", feedback: "The team was professional and ensured a stress-free experience. Highly recommended!", image: "/images/user2.jpg" },
  { name: "Ankit Verma", feedback: "From planning to execution, LND GROUP did a fantastic job. Will book again!", image: "/images/user3.jpg" },
  { name: "Sonal Mehta", feedback: "Best event organizers in town! My wedding was a dream come true, thanks to them.", image: "/images/user4.jpg" },
  { name: "Vikas Dubey", feedback: "Their attention to detail and commitment to quality is unmatched!", image: "/images/user5.jpg" },
  { name: "Neha Joshi", feedback: "Professional, reliable, and efficient. They made my event a grand success!", image: "/images/user6.jpg" },
];

const AboutUs = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Container sx={{ py: 10, bgcolor: "white" }}>
      {aboutSections.map((section, index) => (
        <Grid container spacing={4} key={index} alignItems="center" sx={{ mb: 6 }}>
          <Grid item xs={12} md={6} order={{ xs: 2, md: index % 2 === 0 ? 1 : 2 }}>
            <Typography variant="h4" fontWeight="bold" color="#E5C100" gutterBottom>
              {section.title}
            </Typography>
            <Typography variant="body1" sx={{ whiteSpace: "pre-line", color: "#333" }}>
              {section.description}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} order={{ xs: 1, md: index % 2 === 0 ? 2 : 1 }}>
            <CardMedia component="img" image={section.image} alt={section.title} sx={{ width: "100%", borderRadius: "12px" }} />
          </Grid>
        </Grid>
      ))}

      {/* Testimonial Section */}
      <Typography variant="h4" fontWeight="bold" textAlign="center" color="#E5C100" sx={{ mb: 4 }}>
        Testimonials
      </Typography>

      <Box sx={{ maxWidth: "90%", mx: "auto" }}>
        <Slider {...sliderSettings}>
          {testimonials.map((testimonial, index) => (
            <Box key={index} px={2}>
              <Card
                sx={{
                  boxShadow: 3,
                  borderRadius: 2,
                  p: 3,
                  textAlign: "center",
                  border: "2px solid rgba(229, 193, 0, 0.3)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0px 10px 30px rgba(229, 193, 0, 0.4)",
                  },
                }}
              >
                <Avatar src={testimonial.image} sx={{ width: 80, height: 80, mx: "auto", mb: 2 }} />
                <Typography variant="h6" fontWeight="bold" color="#6E0D14">
                  {testimonial.name}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, color: "#333", fontStyle: "italic" }}>
                  {testimonial.feedback}
                </Typography>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  );
};

export default AboutUs;
