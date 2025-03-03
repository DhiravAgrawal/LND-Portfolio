import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline, Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Services from "./pages/Services";
import FAQs from "./pages/FAQs";
import Contact from "./pages/Contact";

const theme = createTheme({
  palette: {
    primary: { main: "#b99123" }, // Updated primary color
    secondary: { main: "#1C1C1C" },
    accent: { main: "#FAEBD7" },
    text: {
      primary: "#b99123", // Ensures text color applies globally
    },
  },
  typography: {
    allVariants: {
      color: "#b99123",
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#b99123",
          "&:hover": {
            color: "#FAEBD7",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#b99123",
          fontWeight: "bold",
          "&:hover": {
            color: "#FAEBD7",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#b99123",
          "&:hover": {
            color: "#FAEBD7",
          },
        },
      },
    },
  },
});


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Navbar />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;
