import React from "react";
import { Box, Typography, Button } from "@mui/material";

const VideoSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "60vh", // Full screen section
        overflow: "hidden",
        backgroundColor: "rgba(0,0,0,0.6)", 
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      >
        <source src="/video/architecture-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay content */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "#fff",
          px: 2,
          
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontWeight: "300",
            fontSize: { xs: "20px",fontFamily: "Marcellus, serif"  },
           
          }}
        >
      We Achieve
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mb: 4,
            fontSize: { xs: "40px",fontFamily: "Marcellus, serif",fontWeight:'700' },
          }}
        >
          Discover amazing experiences with us
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#f39c12",
            color: "#000",
            fontWeight: "bold",
            fontFamily: "Marcellus, serif",
            px: 4,
            py: 1.5,
            borderRadius: "30px",
            "&:hover": {
              backgroundColor: "#d68910",
              color: "#fff",
            },
          }}
        >
          Read More
        </Button>
      </Box>
    </Box>
  );
};

export default VideoSection;
