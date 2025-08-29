import React from "react";
import { Grid, Box, Typography, LinearProgress, Button } from "@mui/material";

export default function AboutSection() {
  return (
    <Box
      sx={{
        backgroundColor: "#fdf6ef",
        py: 8,
        px: 4,
      }}
    >
      <Grid container spacing={6} alignItems="center">
        {/* Left Section (Image + Frame) */}
        <Grid item size={{ xs: 12, md: 6 }}>
          <Box sx={{ position: "relative", width: "100%", maxWidth: 500, mx: "auto" }}>
            {/* Background Frame */}
            <Box
              sx={{
                position: "absolute",
                top: 30,
                left: 30,
                width: "100%",
                height: "100%",
                bgcolor: "#f4ece5",
                zIndex: 1,
              }}
            />
            {/* Foreground Image */}
            <Box
              component="img"
              src="https://thewebmax.org/hvillas/images/about2/l-pic.jpg"
              alt="About Us"
              sx={{
                width: "100%",
                height: 500,
                objectFit: "cover",
                position: "relative",
                zIndex: 2,
                borderRadius: 1,
                boxShadow: "0px 8px 25px rgba(0,0,0,0.2)",
              }}
            />
          </Box>
        </Grid>

        {/* Right Section (Text + Skills) */}
        <Grid item size={{ xs: 12, md: 6 }}>
          <Typography
            variant="overline"
            sx={{ letterSpacing: 2, fontWeight: "bold", color: "text.secondary" }}
          >
            WELCOME HVILLAS
          </Typography>

          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", mt: 1, mb: 3, lineHeight: 1.4 }}
          >
            We are a group of architects who help you build your dreams.
          </Typography>

          <Typography variant="body1" sx={{ mb: 4, color: "text.secondary" }}>
            Architecture and interior company must be doing some incredible
            work—shaping spaces that are both functional and visually stunning!
            Whether you’re designing structures or crafting interiors, your
            expertise likely combines creativity.
          </Typography>

          {/* Skills Section */}
          <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: "bold" }}>
            Our Skills
          </Typography>

          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>Architecture</Typography>
              <Typography>85%</Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={85}
              sx={{
                height: 3,
                borderRadius: 2,
                backgroundColor: "#ddd",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#ff6a00",
                },
              }}
            />
          </Box>

          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>Interior</Typography>
              <Typography>85%</Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={85}
              sx={{
                height: 3,
                borderRadius: 2,
                backgroundColor: "#ddd",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#ff6a00",
                },
              }}
            />
          </Box>

          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>Construction</Typography>
              <Typography>80%</Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={80}
              sx={{
                height: 3,
                borderRadius: 2,
                backgroundColor: "#ddd",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#ff6a00",
                },
              }}
            />
          </Box>

          {/* Read More Button */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#e55b00",
              borderRadius: 0,
              px: 4,
              py: 1.5,
              mt: 2,
              textTransform: "uppercase",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#cc4c00" },
            }}
          >
            Read More
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
