import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import Slider from "react-slick";
import {
  Grid,
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Padding } from "@mui/icons-material";
const ImageTextSlider = () => {
  const images = [
    "https://thewebmax.org/hvillas/images/main-slider/slider1/pic3.png",
    "https://thewebmax.org/hvillas/images/main-slider/slider1/pic1.png",
    "https://thewebmax.org/hvillas/images/main-slider/slider1/pic2.png",
  ];

  const textSlides = [
    {
      heading: "Modern Living Room",
      subHeading:
        "Experience contemporary elegance with our living room designs.",
    },
    {
      heading: "Elegant Bedroom",
      subHeading:
        "Relax in a bedroom that blends comfort with modern aesthetics.",
    },
    {
      heading: "Luxury Kitchen",
      subHeading:
        "Cook in style with our innovative and premium kitchen setups.",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Refs for sliders
  const imageSliderRef = useRef(null);
  const textSliderRef = useRef(null);

  // Sync next/prev
  const handleNext = () => {
    imageSliderRef.current.slickNext();
    textSliderRef.current.slickNext();
  };

  const handlePrev = () => {
    imageSliderRef.current.slickPrev();
    textSliderRef.current.slickPrev();
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Grid
        container
        spacing={2}
        sx={{
          background: "#F9F3EA",
          height: { xs: "auto", md: "85vh" },
          minHeight: "50vh",
        }}
      >

          <Grid
          item
          size={{ xs: 12, md: 6 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          style={{ backgroundColor: "#F9F3EA",backgroundImage: "url('https://thewebmax.org/hvillas/images/main-slider/slider1/light-dott-pattern.png')", backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}
          sx={{ textAlign: "center", p: { xs: 2, md: 4 } }}
        >
     <Box
  sx={{
    width: { xs: "100%", md: "80%" },
    position: "relative",

    // Top-left corner
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "50px", // horizontal
      height: "5px", // thickness
      backgroundColor: "#ff9800",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "5px", // vertical
      height: "50px",
      backgroundColor: "#ff9800",
    },

    // Bottom-right corner (extra elements inside Box)
    "& .cornerX": {
      content: '""',
      position: "absolute",
      bottom: 0,
      right: 0,
      width: "50px", // horizontal
      height: "5px", // thickness
      backgroundColor: "#ff9800",
    },
    "& .cornerY": {
      content: '""',
      position: "absolute",
      bottom: 0,
      right: 0,
      width: "5px", // vertical
      height: "50px",
      backgroundColor: "#ff9800",
    },
  }}
>
  {/* extra spans for bottom-right */}
  <span className="cornerX"></span>
  <span className="cornerY"></span>

  <Slider ref={textSliderRef} {...settings}>
    {textSlides.map((item, i) => (
      <Box key={i} style={{ padding: isMobile ? "20px" : "40px" }}>
        <Typography
          style={{ fontFamily: "Marcellus, serif", padding: "30px" }}
          variant={isMobile ? "h5" : "h3"}
          fontWeight="bold"
          gutterBottom
        >
          {item.heading}
        </Typography>
        <Typography
          style={{ fontFamily: "Marcellus, serif" }}
          variant={isMobile ? "body1" : "h6"}
          color="text.secondary"
          gutterBottom
        >
          {item.subHeading}
        </Typography>
        <Button
          style={{ fontFamily: "Marcellus, serif" }}
          variant="outlined"
          size={isMobile ? "medium" : "large"}
          sx={{
            mt: 2,
            borderRadius: "20px",
            border: "2px solid #ff9800",
            color: "#ff9800",
            fontWeight: "bold",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "#ff9800",
              color: "#fff",
              borderColor: "#ff9800",
            },
          }}
        >
          Read More
        </Button>
      </Box>
    ))}
  </Slider>
</Box>


        </Grid>
        {/* Left Grid - Image Slider */}
        <Grid item size={{ xs: 12, md: 6 }} sx={{ backgroundColor: "#F1EBE3" }}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              p: { xs: 2, md: 4 },
            }}
          >
            <Slider ref={imageSliderRef} {...settings} style={{ width: "100%" }}>
              {images.map((src, i) => (
                <Box
                  key={i}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: { xs: "250px", md: "100%" },
                  }}
                >
                  <Box
                    component="img"
                    src={src}
                    alt={`slide-${i}`}
                    sx={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              ))}
            </Slider>
          </Box>
        </Grid>

        {/* Right Grid - Text Slider */}
      
      </Grid>

      {/* Prev & Next Buttons (center-bottom under both grids) */}
      {/* <Box
        sx={{
          position: "absolute",
          bottom: "-60px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 2,
        }}
      >
        <Button
          variant="contained"
          onClick={handlePrev}
          sx={{
          padding:'10px',
            backgroundColor: "#ff9800",
            "&:hover": { backgroundColor: "#e68900" },
          }}
        >
          <ArrowBackIosNewIcon/>
        </Button>
        <Button
          variant="contained"
          onClick={handleNext}
          sx={{
            padding:'10px',
            backgroundColor: "#ff9800",
            "&:hover": { backgroundColor: "#e68900" },
          }}
        >
          <ArrowForwardIosIcon/>
        </Button>
      </Box> */}
    </Box>
  );
};

export default ImageTextSlider;
