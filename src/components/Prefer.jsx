import React, { useState } from "react";
import { Box, Typography, Button, Grid,Container } from "@mui/material";

const data = [
  {
    image: "https://thewebmax.org/hvillas/images/whatwe/pic1.jpg",
    title: "Planing",
    description:
      "It's all about strategically organizing spaces for functionality, comfort, and aesthetics.",
  },
  {
    image: "https://thewebmax.org/hvillas/images/whatwe/pic2.jpg",
    title: "Interior",
    description:
      "Creative interior design ideas to transform your living and workspaces beautifully.",
  },
  {
    image: "https://thewebmax.org/hvillas/images/whatwe/pic3.jpg",
    title: "Exterior",
    description:
      "Landscaping and Planning Outdoor Spaces Gardens, Lawns, Patios and Outdoor Seating Areas.",
  },
  {
    image: "https://thewebmax.org/hvillas/images/whatwe/pic4.jpg",
    title: "Decoration",
    description:
      "Stylish decoration that enhances the beauty and vibe of your spaces with unique artistic elements.",
  },
  {
    image: "https://thewebmax.org/hvillas/images/whatwe/pic5.jpg",
    title: "Furniture",
    description:
      "Custom furniture designed for comfort and elegance, making every room both functional and beautiful.",
  },
  {
    image: "https://thewebmax.org/hvillas/images/whatwe/pic6.jpg",
    title: "Exclusively",
    description:
      "Exclusive designs and services tailored to your unique taste and lifestyle needs.",
  },
];
const WhatWeDoCard = ({ image, title, description }) => {
  const [hover, setHover] = useState(false);

  return (
   <Box
      sx={{
        width: 320,
        bgcolor: "#fff",
        borderRadius: 2,
        overflow: "hidden",
        cursor: "pointer",
        position: "relative",
        userSelect: "none",
        height: 450,
        boxShadow: hover ? "0 12px 20px rgba(0,0,0,0.6)" : "0 3px 6px rgba(0,0,0,0.1)",
        transition: "box-shadow 0.4s ease",
        "&:hover .image": {
          height: "100%",
          transform: "scale(1.05)",
          transition: "height 0.4s ease, transform 0.4s ease",
        },
        "&:hover .content": {
          opacity: 0,
          transition: "opacity 0.4s ease",
          pointerEvents: "none",
        },
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Image */}
      <Box
        component="img"
        src={image}
        alt={title}
        className="image"
        sx={{
          width: "100%",
          height: hover ? "100%" : "60%",
          objectFit: "cover",
          transition: "height 0.4s ease, transform 0.4s ease",
        }}
      />

      {/* Text Content Overlay */}
      <Box
        className="content"
        sx={{
          p: 3,
          color: "#333",
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          background:
            "linear-gradient(to top, rgba(255,255,255,0.95) 60%, rgba(255,255,255,0) 100%)",
          pointerEvents: "auto",
          opacity: 1,
          transition: "opacity 0.4s ease",
        }}
      >
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{ fontWeight: "600", fontFamily: "Marcellus, serif" ,textAlign:"justify"}}
          component="div"
        >
          {title}
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: 300, fontSize: "0.9rem" ,marginBottom:"40px",textAlign:"justify",fontFamily: "Marcellus, serif"}}>
          {description}
        </Typography>
      </Box>

      {/* Read More button always visible */}
      <Button
        variant="text"
        sx={{
          
          position: "absolute",
          bottom: "-1px",
          left: "-1px",
          color: "#d2691e",
          fontWeight: "bold",
          textTransform: "none",
          texxttransform:"none",
         
          fontFamily: "Marcellus, serif",
          zIndex: 20,
          bgcolor: "rgba(255,255,255,0.9)",
          "&:hover": {
            bgcolor: "#d2691e",
            color: "#fff",
          },
        }}
      >
        READ MORE
      </Button>
    </Box>
  );
};

const WhatWeDoSection = () => {
  return (
    <Box
      sx={{
        py: 10,
        px: 2,
        textAlign: "center",
        backgroundColor: "none",
        fontFamily: "Georgia, serif",
      }}
    >
      <Typography
        variant="overline"
        sx={{ color: "#8e7b6b", mb: 1, fontWeight: 500, letterSpacing: 2,fontFamily: "Marcellus, serif", }}
      >
        WHAT YOU PREFER!
      </Typography>
      <Typography
        variant="h4"
        sx={{ mb: 6, fontWeight: "bold", color: "#3e3628",fontFamily: "Marcellus, serif", }}
      >
        What We Do
      </Typography>

     <Container>
         <Grid container spacing={4} justifyContent="center" >
  {data.map((item, index) => (
    <Grid item  size={{xs:12,md:4,sm:8}} key={index} >
      <WhatWeDoCard {...item} />
    </Grid>
  ))}
</Grid>
     </Container>

    </Box>
  );
};

export default WhatWeDoSection;
