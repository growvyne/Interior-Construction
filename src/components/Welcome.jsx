import React from "react";
import { Box, Grid, Typography, Button, Card, CardContent, Container,useMediaQuery } from "@mui/material";

export default function TwoSectionLayout() {
    const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Box sx={{ flexGrow: 1, py: 8, px: 4,background:'#F9F3EA' }}>
      <Container>
        <Grid container spacing={4} sx={{padding:"50px"}}>
        {/* Left Section */}
        <Grid item size={{ xs: 12, md: 6 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2,fontFamily: "Marcellus, serif" }}> 
            Welcome to Guininfracon
          </Typography>
          <Typography variant="h5" sx={{ color: "text.secondary", mb: 2,fontFamily: "Marcellus, serif" }}>
            We Provide You The Best Experience SINCE 2016
          </Typography>
          <Typography variant="body1" sx={{ mb: 3,fontFamily: "Marcellus, serif" }}>
            Our services are designed to bring efficiency and value. 
            With our experience and innovative approach, we make sure you 
            get the best benefits while working with us.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#000",
              color: "#fff",
              borderRadius: "25px",
              px: 4,
              py: 1,
              fontFamily: "Marcellus, serif",
              textTransform: "none",
              "&:hover": { backgroundColor: "#333" },
            }}
          >
            Read More
          </Button>
        </Grid>

        {/* Right Section */}
        <Grid item size={{ xs: 12, md: 6 }}>
          <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: 500,
        margin: "auto",
        "&:hover img": {
          boxShadow: "0px 8px 25px rgba(0,0,0,0.5)",
        },
        "&:hover .hoverCard": {
          opacity: 1,
          transform: "translate(-50%, -50%) scale(1)",
        },
      }}
    >
      {/* Main Image */}
      <Box
        component="img"
        src="https://thewebmax.org/hvillas/images/about2/l-pic.jpg"
        alt="Preview"
        sx={{
          width: "100%",
          height:isMobile? 350:550,
          objectFit: "cover",
          borderRadius: 2,
          transition: "all 0.9s ease",
        }}
      />

      {/* Floating Card (hidden until hover) */}
      <Card
        className="hoverCard"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) scale(0.9)",
          width: "75%",
          opacity: 0,
          transition: "all 0.4s ease",
          boxShadow: 6,
          borderRadius: 3,
          backgroundColor: "white",
        }}
      >
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="h6" sx={{ mb: 1, fontFamily: "Marcellus, serif" }}>
            Special Offer
          </Typography>
          <Typography
            variant="body2"
            sx={{ mb: 2, fontFamily: "Marcellus, serif" }}
          >
            Get exclusive access to our premium services and unlock more benefits.
          </Typography>
          <Button
            variant="outlined"
            sx={{
              borderRadius: "25px",
              px: 3,
              textTransform: "none",
              "&:hover": {
                background: "linear-gradient(90deg, #ff9800, #ff5722)",
                color: "white",
                borderColor: "transparent",
              },
            }}
          >
            Read More
          </Button>
        </CardContent>
      </Card>
    </Box>
        </Grid>
      </Grid>
      </Container>
    </Box>
  );
}
