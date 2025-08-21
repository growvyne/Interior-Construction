import { 
  Box, 
  Grid, 
  Card, 
  CardContent, 
  Typography, 
  Button, 
  CardMedia, 
  Container 
} from "@mui/material";

const Service = () => {
  // Array for service cards
  const services = [
    {
      img: "https://thewebmax.org/hvillas/images/services/1.jpg",
      title: "Modern Interior Design",
      desc: "Transform your living space with stylish and elegant designs crafted by our expert team.",
    },
    {
      img: "https://thewebmax.org/hvillas/images/services/2.jpg",
      title: "Luxury Furnishings",
      desc: "Premium quality furniture that blends comfort with aesthetics for your dream home.",
    },
    {
      img: "https://thewebmax.org/hvillas/images/services/3.jpg",
      title: "Smart Home Setup",
      desc: "Upgrade to smart living with innovative solutions that bring comfort and security.",
    },
  ];

  return (
    <>
      {/* Section Heading */}
      <Box
        sx={{
           
          py: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          backgroundColor: "#f9f9f9",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 400,
            color: "#736F6A",
            mb: 2,
            fontFamily: "Marcellus, serif"
          }}
        >
          We Provide Service
        </Typography>

        <Typography
          variant="h3"
          sx={{
            fontFamily: "Marcellus, serif",
            textAlign: "center",
            color: "#443935",
          }}
        >
          Benefits You Get When <br />
          Using Our Services
        </Typography>
      </Box>

     <Container>
  {/* 3 Service Cards */}
  <Grid container spacing={5} justifyContent="center" sx={{ py: 6 }}>
    {services.map((service, index) => (
      <Grid item size={{ xs: 12, md: 4 }} key={index}>
       <Card
  sx={{
    position: "relative",
    overflow: "hidden",
    borderRadius: "16px",
    boxShadow: 3,
    transition: "transform 0.5s ease",
    "&:hover": {
      transform: "translateY(-10px)",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: 0, // start hidden
      backgroundColor: "#ff9800",
      transition: "height 0.5s ease",
      zIndex: 0,
    },
    "&:hover::after": {
      height: "100%", // expand to full card height on hover
      opacity: 0.2,  // subtle overlay
    },
  }}
>
  <CardMedia
    component="img"
    height="350"
    image={service.img}
    alt={service.title}
    sx={{
      padding: "15px",
      objectFit: "contain",
      position: "relative",
      zIndex: 1, // keep image above the overlay
      transition: "transform 0.5s ease",
      "&:hover": {
        transform: "scale(1.05)",
      },
    }}
  />
  <CardContent sx={{ position: "relative", zIndex: 1 }}>
    <Typography
      variant="h6"
      gutterBottom
      sx={{ fontFamily: "Marcellus, serif", color: "#333" }}
    >
      {service.title}
    </Typography>
    <Typography
      variant="body2"
      sx={{ mb: 2, fontFamily: "Marcellus, serif", color: "#555" }}
    >
      {service.desc}
    </Typography>
    <Button
      variant="outlined"
      sx={{
        borderRadius: "20px",
        fontFamily: "Marcellus, serif",
        transition: "all 0.3s ease",
        zIndex: 1,
        position: "relative",
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

      </Grid>
    ))}
  </Grid>

  {/* 4:8 Section */}
</Container>

    </>
  );
};

export default Service;
