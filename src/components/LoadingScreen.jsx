import React, { useEffect } from "react";
import { Box, Typography, keyframes } from "@mui/material";

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); color: #249867; }
  50% { transform: scale(1.1); color: #50b57e; }
`;

const LoadingScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onFinish) onFinish();
    }, 3500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0, left: 0,
        width: "100vw", height: "100vh",
        bgcolor: "rgba(0, 0, 0, 0.85)",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        zIndex: 1500,
      }}
    >
      {/* Spinner with bright glowing shadow */}
      <Box
        sx={{
          position: "relative",
          width: 120,
          height: 120,
          borderRadius: "50%",
          border: "12px solid transparent",
          borderTopColor: "#3eea8f",
          borderRightColor: "#62f6b3",
          borderBottomColor: "#3eea8f",
          borderLeftColor: "#62f6b3",
          animation: `${rotate} 1.5s linear infinite`,

          // Bright glowing shadow outside spinner
          boxShadow: "0 0 15px 5px rgba(62, 234, 143, 0.7), 0 0 30px 10px rgba(98, 246, 179, 0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "visible",
        }}
      >
        {/* Centered logo inside spinner */}
        <Box
          component="img"
          src="/glogonew.webp"
          alt="logo"
          sx={{
            width: 90,
            height: 90,
            borderRadius: "50%",
            boxShadow: "0 0 15px 3px rgba(62, 234, 143, 0.9)",
          }}
        />
      </Box>

      {/* Animated pulsating text */}
      <Typography
        variant="h4"
        sx={{
          mt: 4,
          fontWeight: "bold",
          fontFamily: "Marcellus, serif",
          animation: `${pulse} 2.5s ease-in-out infinite`,
          color: "#3eea8f",
        }}
      >
        Guininfracon
      </Typography>
    </Box>
  );
};

export default LoadingScreen;
