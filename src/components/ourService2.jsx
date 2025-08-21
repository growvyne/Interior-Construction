import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CountUp from "react-countup";

const services = [
  {
    id: 1,
    title: "Residential Interior Design",
    description: "Create warm, inviting spaces tailored to your lifestyle.",
    img: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/service-6-1024x739.jpg",
  },
  {
    id: 2,
    title: "Outdoor & Landscape Design",
    description: "Transform gardens and outdoor areas into relaxing havens.",
    img: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/service-4-1024x739.jpg",
  },
  {
    id: 3,
    title: "Interior Design Consultation",
    description: "Get expert guidance to bring your vision to life.",
    img: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/service-3-1024x739.jpg",
  },
  {
    id: 4,
    title: "Commercial Interior Design",
    description: "Design spaces that inspire productivity and reflect your brand.",
    img: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/service-5-1024x739.jpg",
  },
  {
    id: 5,
    title: "Renovation and Remodeling",
    description: "Modernize and refresh while keeping the charm intact.",
    img: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/service-2-1024x739.jpg",
  },
];

export default function ServiceSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, sm: 4, md: 8 },
        marginTop: { xs: 0, md: "-60px" },
        backgroundImage: `url("https://thewebmax.org/hvillas/images/background/count-bg.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Left Side - Image with overlay text */}
        <Grid item size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: { xs: "300px", sm: "400px", md: "500px" },
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
            }}
          >
            <Box
              component="img"
              src={services[activeIndex].img}
              alt="Service Preview"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "opacity 0.5s ease",
              }}
            />

            {/* Overlay Text */}
            <Box
              sx={{
                position: "absolute",
                bottom: 20,
                left: 20,
                backgroundColor: "rgba(0,0,0,0.5)",
                padding: { xs: "8px 12px", sm: "12px 18px" },
                borderRadius: "8px",
                color: "#fff",
                maxWidth: "85%",
              }}
            >
              <Typography
                variant="h6"
                fontWeight="500"
                sx={{ fontSize: { xs: "16px", sm: "18px", md: "20px", fontFamily: "Marcellus, serif", } }}
              >
                {services[activeIndex].title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px", fontFamily: "Marcellus, serif",} }}
              >
                {services[activeIndex].description}
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Right Side - Services List */}
        <Grid item size={{ xs: 12, md: 6 }}>
          <List disablePadding>
            {services.map((service, index) => (
              <ListItemButton
                key={service.id}
                onMouseEnter={() => setActiveIndex(index)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  transition: "all 0.3s ease",
                  "&:hover .serviceText": {
                    color: "#FFD700", // gold
                    transform: "scale(1.05)",
                    textShadow: "0px 0px 10px rgba(255, 215, 0, 0.7)",
                  },
                  "&:hover .arrowIcon": {
                    transform: "translateX(6px) scale(1.1)",
                    color: "#FFD700",
                  },
                }}
              >
                <ListItemText
                  primaryTypographyProps={{
                   fontSize:'30px',
                    fontWeight: "400",
                    fontFamily: "Marcellus, serif",
                    color: "#fff",
                    transition: "all 0.3s ease",
                  }}
                  className="serviceText"
                  primary={`${service.id}. ${service.title}`}
                />
                <ArrowForwardIosIcon
                  className="arrowIcon"
                  sx={{
                    fontSize: { xs: "1rem", md: "1.2rem" },
                    transition: "all 0.3s ease",
                    color: "#fff",
                  }}
                />
              </ListItemButton>
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}
