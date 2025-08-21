// src/pages/NotFound.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="#f5f5f5"
      textAlign="center"
    >
      <Typography variant="h1" fontWeight="bold" color="error">
        404
      </Typography>
      <Typography variant="h4" fontWeight="600" mt={2} color="text.primary">
        Page Not Found
      </Typography>
      <Typography variant="body1" mt={1} mb={4} color="text.secondary">
        Oops! The page you’re looking for doesn’t exist.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={() => navigate("/")}
      >
        Go Back Home
      </Button>
    </Box>
  );
};

export default NotFound;
