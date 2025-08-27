// src/pages/Projects.jsx
import React from "react";
import { Box, Typography, Grid, Card, CardMedia, CardContent, CardActionArea } from "@mui/material";

const projects = [
  {
    id: 1,
    title: "Skyline Tower",
    img: "/projects/skyline-tower.jpg",
    description: "A modern skyscraper featuring sustainable architecture and smart building technology.",
  },
  {
    id: 2,
    title: "Sunset Villas",
    img: "/projects/sunset-villas.jpg",
    description: "Luxury residential villas with eco-friendly designs and beautiful landscape integration.",
  },
  {
    id: 3,
    title: "Greenbridge Mall",
    img: "/projects/greenbridge-mall.jpg",
    description: "A large commercial retail space built with innovative green building materials.",
  },
  {
    id: 4,
    title: "Riverside Apartments",
    img: "/projects/riverside-apartments.jpg",
    description: "Affordable, high-quality apartment complex with river views and community facilities.",
  },
  // Add more projects as desired
];

export default function Projects() {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: "bold", mb: 4 }}>
        Our Projects
      </Typography>

      <Grid container spacing={4}>
        {projects.map(({ id, title, img, description }) => (
          <Grid item xs={12} sm={6} md={4} key={id}>
            <Card
              sx={{
                boxShadow: 4,
                borderRadius: 3,
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: 10,
                },
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={img}
                  alt={title}
                  sx={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
                />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
