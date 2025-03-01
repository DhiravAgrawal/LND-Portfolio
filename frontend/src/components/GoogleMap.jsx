import { Box, Typography } from "@mui/material";

const GoogleMap = () => {
  return (
    <Box sx={{ mt: 5, textAlign: "center" }}>
      <Typography variant="h5" gutterBottom>Find Us on Google Maps</Typography>
      <Box sx={{ overflow: "hidden", borderRadius: "10px" }}>
        <iframe
          title="Google Maps"
          width="100%"
          height="350"
          frameBorder="0"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=New+Delhi"
          allowFullScreen
        ></iframe>
      </Box>
    </Box>
  );
};

export default GoogleMap;
