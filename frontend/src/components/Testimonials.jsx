import { useEffect, useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import axios from "axios";

const defaultTestimonials = [
  {
    feedback: "They made our wedding an absolute dream! Perfect execution.",
    name: "Sarah & James",
    eventType: "Wedding",
  },
  {
    feedback: "Our corporate event was seamless and stress-free. Highly recommended!",
    name: "Michael D.",
    eventType: "Corporate Event",
  },
];

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/pages/testimonials")
      .then(res => setTestimonials(res.data))
      .catch(err => {
        console.error("API request failed, using default testimonials.", err);
        setTestimonials(defaultTestimonials); // Use local data as fallback
      });
  }, []);

  return (
    <Box sx={{ bgcolor: "secondary.main", color: "white", py: 10, textAlign: "center" }}>
      <Container>
        <Typography variant="h3" color="primary" gutterBottom>
          What Our Clients Say
        </Typography>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
          loop={true}
          style={{ paddingBottom: "20px" }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Box sx={{ maxWidth: "600px", mx: "auto", p: 3, bgcolor: "primary.main", borderRadius: "10px" }}>
                <Typography variant="body1">{testimonial.feedback}</Typography>
                <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
                  - {testimonial.name} ({testimonial.eventType})
                </Typography>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default Testimonials;
