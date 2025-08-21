import { Box, Grid, Typography, Card, CardContent, Button, Container } from "@mui/material";

const ServiceCard = ({ icon, title, description }) => {
  return (
  <Card
  sx={{
    p: 3,
    borderRadius: 2,
    border: "1px solid #ddd",
    boxShadow: "none",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    transition: "all 0.4s ease", // smoother zoom effect
    "&:hover": {
      border: "2px solid #b87333", // 🔥 thicker border on hover
      boxShadow: "0px 12px 30px rgba(0,0,0,0.25)", // stronger outside shadow
      transform: "scale(1.05)", // zoom effect
    },
  }}
>
  <CardContent sx={{ flexGrow: 1 }}>
    {/* Icon */}
    <Box sx={{ fontSize: 40, color: "#b87333", mb: 2 }}>{icon}</Box>

    {/* Title */}
    <Typography
      variant="h6"
      sx={{ fontFamily: "Marcellus, serif", mb: 1 }}
    >
      {title}
    </Typography>

    {/* Description */}
    <Typography
      variant="body2"
      sx={{ mb: 2, fontFamily: "Marcellus, serif", color: "text.secondary" }}
    >
      {description}
    </Typography>
  </CardContent>

  {/* Read More Button at bottom */}
  <Button
    variant="text"
    sx={{
      color: "#b87333",
      fontWeight: "bold",
      textTransform: "none",
      alignSelf: "flex-start",
      fontFamily: "Marcellus, serif",
      transition: "all 0.3s ease",
      "&:hover": {
        color: "#8b4513", // darker copper on hover
        border: "1px solid grey",
        borderRadius: "5px",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        boxShadow: "0px 4px 15px rgba(0,0,0,0.15)",
        transform: "translateY(-2px)", // lift effect
        cursor: "pointer",
      },
    }}
  >
    ― READ MORE
  </Button>
</Card>


  );
};

const WhatWeDoSection = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: "#f9f6f1" }}>
     <Container>
         <Grid container spacing={8} alignItems="stretch">
        {/* First Row (3 parts → 4:4:4) */}
        <Grid item size={{ xs: 12, md: 4 }}>
          <Box
            sx={{
              position: "relative",
              borderRadius: 2,
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%", // 🔥 equal height
              minHeight: 200,
               "&:hover": {
          transform: "scale(1.05)", // zoom-in effect
          boxShadow: "0px 8px 25px rgba(0,0,0,0.5)", // outside shadow
        },
            }}
          >
       <Box
      component="img"
      src="https://thewebmax.org/hvillas/images/ab-bg.jpg"
      alt="What We Do"
      sx={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: 2,
        transition: "transform 0.4s ease, box-shadow 0.4s ease",
        cursor: "pointer",
        "&:hover": {
          transform: "scale(1.05)", // zoom-in effect
          boxShadow: "0px 8px 25px rgba(0,0,0,0.9)", // outside shadow
        },
      }}
    />
            {/* Overlay text */}
            <Box
              sx={{ 
                position: "absolute",
                bottom: 20,
                left: 20,
                backgroundColor: "rgba(255,255,255,0.9)",
                p: 3,
                borderRadius: 2,
              }}
            >
              <Typography
                variant="body2"
                sx={{ fontFamily: "Marcellus, serif", mb: 1 }}
              >
                WHAT YOU PREFER!
              </Typography>
              <Typography
                variant="h4"
                sx={{ fontFamily: "Marcellus, serif", fontWeight: "bold" }}
              >
                What We Do
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item size={{ xs: 12, md: 4 }}>
          <ServiceCard
            icon="🛋️"
            title="Interior"
            description="We provide custom-made furniture and artwork, rugs, plants and accessories for personality and charm."
          />
        </Grid>

        <Grid item size={{ xs: 12, md: 4 }}>
          <ServiceCard
            icon="🪟"
            title="Exterior"
            description="Landscaping and planning outdoor spaces: gardens, lawns, patios and seating areas."
          />
        </Grid>
        

        {/* Second Row (3 parts → 4:4:4) */}
        <Grid item size={{ xs: 12, md: 4 }}>
          <ServiceCard
            icon="🕯️"
            title="Decoration"
            description="We design spaces for festive occasions, weddings, or corporate events."
          />
        </Grid>

        <Grid item size={{ xs: 12, md: 4 }}>
          <ServiceCard
            icon="🪑"
            title="Furniture"
            description="Offering designs in modern, traditional, industrial, minimalist, or luxury styles."
          />
        </Grid>

        <Grid item size={{ xs: 12, md: 4 }}>
          <ServiceCard
            icon="🔑"
            title="Exclusively"
            description="Designing boutique spaces for luxury residences, elite offices, or high-end retail stores."
          />
        </Grid>
      </Grid>
     </Container>
    </Box>
  );
};

export default WhatWeDoSection;
