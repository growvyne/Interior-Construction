// ClientsSection.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientsSection = () => {
  const logos = [
    "/public/clientsImg/1.png",
    "/public/clientsImg/2.png",
    "/public/clientsImg/3.png",
    "/public/clientsImg/4.png",
    "/public/clientsImg/5.png",
    "/public/clientsImg/6.png",
  ];

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        mt: 5,
        py: 8,
        // backgroundColor: "#f9f9f9",
      }}
    >
      {/* Heading */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          fontFamily: "Marcellus, serif",
          mb: 1,
        }}
      >
       Meet Our Clients
      </Typography>

      {/* Subheading */}
      <Typography
        variant="body1"
        sx={{
          color: "gray",
          fontSize: "18px",
          mb: 5,
          fontFamily: "Marcellus, serif",
        }}
      >
        Trusted by leading companies worldwide
      </Typography>

      {/* Logo Slider */}
      <Box sx={{ width: "50%", mx: "auto",backgroundColor:'#DDDDDD', borderRadius: "10px", }}>
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <Box
              key={index}
              sx={{
                px: 2,
                padding: "20px",
               
              }}
            >
              <Box
                component="img"
                src={logo}
                alt={`client-${index}`}
                sx={{
                  width: "100px",
                  height: "auto",
                  mx: "auto",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                //   "&:hover": {
                //     transform: "scale(1.1)",
                //     boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                //   },
                }}
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default ClientsSection;
