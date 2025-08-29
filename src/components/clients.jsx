// ClientsSection.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientsSection = () => {
  const logos = [
    "https://yt3.googleusercontent.com/g4a0IbVJmpT8nG3Mwqw4qqgqFLq69zFek4UtEIcmKqFkTkxRveLu-sKXWhVVq2zZI5hQXtWFLw8=s900-c-k-c0x00ffffff-no-rj",
    "https://media.licdn.com/dms/image/v2/C4D0BAQEhGER71twt9g/company-logo_200_200/company-logo_200_200/0/1671598721329/dtc_group_logo?e=2147483647&v=beta&t=L8Nm8_xiwKaWZ2g3XDRot-5CQgXEimK4dJthUeiwv-M",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/300-300_Logo.png/800px-300-300_Logo.png",
    "https://images.seeklogo.com/logo-png/21/1/fortis-hospitals-logo-png_seeklogo-214982.png",
    "https://media.licdn.com/dms/image/v2/D4D0BAQFu6yL6RjuPvA/company-logo_200_200/company-logo_200_200/0/1725431660431/manipal_hospital_logo?e=2147483647&v=beta&t=4dnW7fsekffegGxCUeYIrBWyFl1EO_WxHEdJkRaGqag",
    "https://image.pitchbook.com/c0gNO05IzzMSKIEG15PRSYHQGgo1728924994742_200x200",
  ];

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3, slidesToScroll: 1 },
    },
    {
      breakpoint: 600,
      settings: { slidesToShow: 2, slidesToScroll: 1 },
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 1, slidesToScroll: 1 },
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
