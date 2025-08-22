import React, { useEffect } from "react";
import { Box, Typography, keyframes } from "@mui/material";

// Expanding circle ripple animation
const ripple = keyframes`
  0% {
    transform: scale(0.7);
    opacity: 1;
  }
  100% {
    transform: scale(1.7);
    opacity: 0;
  }
`;

// Logo slow continuous rotation
const rotateLogo = keyframes`
  0% { transform: rotate(0deg);}
  100% { transform: rotate(360deg);}
`;

// Text fade in and slide up
const fadeSlideUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(15px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Background shimmer
const shimmer = keyframes`
  0% {
    background-position: -150% 0;
  }
  100% {
    background-position: 150% 0;
  }
`;

const LoadingScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onFinish) onFinish();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0, left: 0,
        width: "100vw", height: "100vh",
        bgcolor: "#121212",
        background: `linear-gradient(
          135deg, 
          #1f4037 0%, 
          #99f2c8 100%
         )`,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1500,
        "&::before, &::after": {
          content: '""',
          position: "absolute",
          borderRadius: "50%",
          opacity: 0.3,
          pointerEvents: "none",
        },
        "&::before": {
          width: 300,
          height: 300,
          background: "radial-gradient(circle, #99f2c8, transparent 70%)",
          top: -100,
          left: -100,
          animation: `${ripple} 3.5s infinite ease-in-out`,
        },
        "&::after": {
          width: 200,
          height: 200,
          background: "radial-gradient(circle, #1f4037, transparent 60%)",
          bottom: -80,
          right: -80,
          animation: `${ripple} 3.5s 1.5s infinite ease-in-out`,
        },
      }}
    >
      {/* Logo with slow rotation */}
      <Box
        component="img"
        src="/glogonew.webp"
        alt="logo"
        sx={{
          width: 110,
          height: 110,
          borderRadius: "50%",
          boxShadow: "0 0 18px #99f2c8",
          animation: `${rotateLogo} 8s linear infinite`,
          zIndex: 10,
        }}
      />

      {/* Text fade in and slide up */}
      <Typography
        variant="h4"
        sx={{
          color: "#99f2c8",
          mt: 4,
          fontWeight: "bold",
          fontFamily: "Marcellus, serif",
          animation: `${fadeSlideUp} 1.8s ease forwards`,
          opacity: 0,
          zIndex: 10,
        }}
      >
        Guininfracon
      </Typography>
    </Box>
  );
};

export default LoadingScreen;
