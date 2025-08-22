import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  IconButton,
  Tabs,
  Tab,
  Container
} from "@mui/material";
import { Facebook, Twitter, LinkedIn, Instagram } from "@mui/icons-material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const team = [
  {
    name: "Ashley Sanchez",
    role: "Architect",
    img: "/images/archit.jpg",
  },
  {
    name: "Juliana Bryant",
    role: "Designer",
    img: "/images/archit02.jpg",
  },
  {
    name: "Shirley Gibson",
    role: "Engineer",
    img:"/images/eng2.jpg",
  },
  {
    name: "Michael Green",
    role: "Architect",
    img: "/images/archit1.jpg",
  },
  {
    name: "Sophia Turner",
    role: "Designer",
    img: "/images/eng-3.webp",
  },
  {
    name: "David Kim",
    role: "Engineer",
    img: "/images/eng3.webp",
  },
];

const filters = ["All", "Architect", "Designer", "Engineer"];

const TeamSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredTeam =
    activeFilter === "All"
      ? team
      : team.filter((member) => member.role === activeFilter);

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Box sx={{ py: 10, textAlign: "center", backgroundColor: "#fdf8f2" }}>
      {/* Heading */}
      <Typography
        variant="overline"
        sx={{ color: "gray", fontWeight: 500, letterSpacing: 2,fontFamily: "Marcellus, serif"}}
      >
        MEET OUR TEAM
      </Typography>
      <Typography
        variant="h3"
        sx={{ fontWeight: "bold", mb: 4, fontFamily: "Marcellus, serif" }}
      >
        Best Experts
      </Typography>

      {/* Tabs */}
      <Tabs
        value={activeFilter}
        onChange={(e, newValue) => setActiveFilter(newValue)}
        centered
        textColor="inherit"
        indicatorColor="primary"
        sx={{
          mb: 6,
          "& .MuiTab-root": {
            fontSize: "16px",
            fontWeight: 500,
            textTransform: "none",
            fontFamily: "Marcellus, serif",
            px: 3,
            transition: "color 0.3s ease",
          },
          "& .Mui-selected": {
            color: "#249867 !important",
          },
        }}
      >
        {filters.map((filter) => (
          <Tab key={filter} label={filter} value={filter} />
        ))}
      </Tabs>

      {/* Team Cards */}
      {activeFilter === "All" ? (
        <Slider {...sliderSettings}>
          {filteredTeam.map((member, index) => (
            <Box key={index} px={2}>
              <TeamCard member={member} />
            </Box>
          ))}
        </Slider>
      ) : (
        <Grid container spacing={4} justifyContent="center">
          {filteredTeam.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <TeamCard member={member} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

const TeamCard = ({ member }) => (
 <Container>
    <Card
    sx={{

      width: 300, // fixed width
      height: 400, // fixed height
      position: "relative",
      overflow: "hidden",
      borderRadius: "12px",
      border: "2px solid transparent",
      boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
      transition: "all 0.6s ease",
      margin: "0 auto", // centers inside slider/grid
      display: "flex",
      flexDirection: "column",
    
      "&:hover": {
        transform: "translateY(-10px)",
        border: "2px solid #249867",
        boxShadow: "0 15px 35px rgba(0,0,0,0.3)",
      },
    }}
  >
    {/* Image */}
    <CardMedia
      component="img"
      image={member.img}
      alt={member.name}
      sx={{
        height: "100%", // fill the card
        objectFit: "cover",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 0,
      }}
    />

    {/* Overlay */}
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background:
          "linear-gradient(to top, rgba(0,0,0,0.7) 30%, rgba(0,0,0,0) 70%)",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        opacity: 0,
        transition: "opacity 0.5s ease",
        "&:hover": { opacity: 1 },
        pb: 3,
        zIndex: 1,
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        {member.name}
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: "#FFD700", fontWeight: 500 }}
      >
        {member.role}
      </Typography>

      {/* Social Icons */}
      <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
        <IconButton sx={{ color: "#fff", "&:hover": { color: "#FFD700" } }}>
          <Facebook />
        </IconButton>
        <IconButton sx={{ color: "#fff", "&:hover": { color: "#FFD700" } }}>
          <Twitter />
        </IconButton>
        <IconButton sx={{ color: "#fff", "&:hover": { color: "#FFD700" } }}>
          <LinkedIn />
        </IconButton>
        <IconButton sx={{ color: "#fff", "&:hover": { color: "#FFD700" } }}>
          <Instagram />
        </IconButton>
      </Box>
    </Box>
  </Card>
 </Container>
);

export default TeamSection;
