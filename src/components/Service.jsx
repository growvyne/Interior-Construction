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
      title: "Architecture Design",
      desc: "Buildings need to be safe and durable, considering materials, engineering, and environmental factors.",
      desImg: "https://thewebmax.org/hvillas/images/icons/skyline.png",
    },
    {
      img: "https://thewebmax.org/hvillas/images/services/2.jpg",
      title: "Interior Design",
      desc: "Interior design is all about crafting spaces that feel comfortable, functional.",
      desImg: "https://thewebmax.org/hvillas/images/icons/furniture-1.png",
    },
    {
      img: "https://thewebmax.org/hvillas/images/services/3.jpg",
      title: "Construction Design",
      desc: "Compliance with local building codes, safety standards, and environmental regulations.",
      desImg: "https://thewebmax.org/hvillas/images/icons/brickwall.png",
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
        <Grid item  size={{ xs: 12, md: 4 }} key={index}>
          <Card
            sx={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "16px",
              boxShadow: 3,
              transition: "transform 0.5s ease",
              "&:hover": { transform: "translateY(-10px)" },
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: 0,
                backgroundColor: "#ff9800",
                transition: "height 0.5s ease",
                zIndex: 0,
              },
              "&:hover::after": {
                height: "100%",
                opacity: 0.2,
              },
            }}
          >
            {/* Top Image */}
            <CardMedia
              component="img"
              height="350"
              image={service.img}
              alt={service.title}
              sx={{
                objectFit: "contain",
                position: "relative",
                zIndex: 1,
                padding:'10px'
              }}
            />

            {/* Content */}
            <CardContent sx={{ position: "relative", zIndex: 1 }}>
              {/* 1st Line: desc */}
              <Typography
                variant="body2"
                sx={{ mb: 2, fontFamily: "Marcellus, serif", color: "#555" }}
              >
                {service.desc}
              </Typography>

              {/* 2nd Line: Read More button */}
              <br />
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "20px",
                  fontFamily: "Marcellus, serif",
                  transition: "all 0.3s ease",
                  mb: 3,
                  "&:hover": {
                    background: "linear-gradient(90deg, #ff9800, #ff5722)",
                    color: "white",
                    borderColor: "transparent",
                  },
                }}
              >
                Read More
              </Button>

              {/* 3rd Line: desImg + title side by side */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                <Box
                  component="img"
                  src={service.desImg}
                  alt={service.title}
                  sx={{
                    width: 45,
                    height: 40,
                  
                    objectFit: "contain",
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{ fontFamily: "Marcellus, serif", color: "#333" }}
                >
                  {service.title}
                </Typography>
              </Box>
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
