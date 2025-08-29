import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Avatar,
  Divider,
  Button,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Section1 from "../src/components/about/section1"
import BuildIcon from "@mui/icons-material/Build";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Footer from '../src/components/Footer'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Custom theme with Marcellus font
const theme = createTheme({
  typography: {
    fontFamily: "'Marcellus', serif",
    h3: { fontWeight: 700, fontSize: "2.8rem", letterSpacing: 1.2 },
    h4: { fontWeight: 600, fontSize: "2rem" },
    h6: { fontWeight: 500, fontSize: "1.3rem" },
    body1: { fontSize: "1rem", lineHeight: 1.7 },
    body2: { fontSize: "0.95rem", lineHeight: 1.6 },
    subtitle1: { fontSize: "1.15rem", fontWeight: 400 },
  },
  palette: {
    primary: { main: "#1A3C34" }, // Deep forest green
    secondary: { main: "#F4A261" }, // Warm coral
    background: { default: "#E9ECEF" },
    text: { primary: "#2D2D2D", secondary: "#5A5A5A" },
  },
});

// Motion components
const MotionBox = motion(Box);
const MotionCard = motion(Card);
const MotionTypography = motion(Typography);



const counts = [
  { label: "Projects Completed", value: 185 },
  { label: "Happy Clients", value: 150 },
  { label: "Awards Won", value: 12 },
  { label: "Years Experience", value: 10 },
];

const processSteps = [
  {
    title: "Consultation",
    description: "We discuss your vision, needs, and budget to create a tailored plan.",
    icon: <DesignServicesIcon sx={{ fontSize: 40, color: "secondary.main" }} />,
  },
  {
    title: "Design & Planning",
    description: "Our team crafts detailed designs and project timelines.",
    icon: <BuildIcon sx={{ fontSize: 40, color: "secondary.main" }} />,
  },
  {
    title: "Execution",
    description: "We bring your vision to life with precision and quality craftsmanship.",
    icon: <CheckCircleIcon sx={{ fontSize: 40, color: "secondary.main" }} />,
  },
];

const slideshowImages = [
  "/images/about.jpg",
  "/images/about2.jpg",
  "//images/about3.jpg",
];

// Animated counter component
const CountNumber = ({ value }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = Math.ceil(value / (duration / 30));
    const interval = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [value]);

  return (
    <Typography variant="h4" sx={{ color: "primary.main", fontWeight: 700 }}>
      {count}
    </Typography>
  );
};

// Animation variants
const animationVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: (custom || 1) * 0.25,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const AboutUs = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth={false}
        sx={{
          py: 12,
          bgcolor: "background.default",
          backgroundImage: "url(https://www.transparenttextures.com/patterns/subtle-white-feathers.png)",
          minHeight: "100vh",
        }}
      >
        {/* Title and Intro */}
        <MotionBox
          initial="hidden"
          animate="visible"
          variants={animationVariants}
          sx={{ textAlign: "center", mb: 10 }}
        >
          <MotionTypography
            variant="h3"
            sx={{
              color: "primary.main",
              position: "relative",
              display: "inline-block",
              "&:after": {
                content: '""',
                position: "absolute",
                bottom: -10,
                left: "50%",
                transform: "translateX(-50%)",
                width: "60px",
                height: "4px",
                bgcolor: "secondary.main",
                borderRadius: 2,
              },
            }}
          >
            About Us
          </MotionTypography>
          <Typography
            variant="body1"
            sx={{ mt: 3, maxWidth: 800, mx: "auto", color: "text.secondary" }}
          >
            Elegance Interiors & Construction blends innovative design with expert craftsmanship to create spaces that inspire and endure.
          </Typography>
        </MotionBox>

    

    <Section1/>
      
      

     

     

        {/* Decorative Divider */}
        <Divider
          sx={{
            my: 8,
            borderColor: "secondary.main",
            borderWidth: 2,
            width: "200px",
            mx: "auto",
            borderRadius: 2,
          }}
        />
      </Container>
    
    <Footer />
    </ThemeProvider>
  );
};

export default AboutUs;