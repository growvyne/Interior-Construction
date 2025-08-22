import React from "react";
import { Box, Grid, Typography, IconButton ,useMediaQuery} from "@mui/material";
import { Facebook, Twitter, LinkedIn } from "@mui/icons-material";

const teamMembers = [
  {
    name: "Jerry Bloom",
    role: "Contractor",
    img: "https://thewebmax.org/hvillas/images/team/pic1.jpg",
  },
  {
    name: "Ashley Sanchez",
    role: "Architect",
    img: "https://thewebmax.org/hvillas/images/team/pic2.jpg",
  },
  {
    name: "Juliana Bryant",
    role: "Project Manager",
    img: "https://thewebmax.org/hvillas/images/team/pic3.jpg",
  },
  {
    name: "Shirley Gibson",
    role: "CEO",
    img: "https://thewebmax.org/hvillas/images/team/pic4.jpg",
  },
];

const TeamSection = () => {
      const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Box sx={{ py: 8, textAlign: "center", backgroundColor: "#f8f3eb" }}>
      {/* Section Heading */}
      <Typography
        sx={{
          fontSize: "14px",
          letterSpacing: "2px",
          color: "#5c524d",
          textTransform: "uppercase",
          mb: 1,
        }}
      >
        Meet Our Team
      </Typography>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          fontFamily: "Marcellus, serif",
          color: "#2b2422",
          mb: 6,
        }}
      >
        Best Experts
      </Typography>

      {/* Team Grid */}
      <Grid
        container
        spacing={4}
        justifyContent="center"
        maxWidth="lg"
        sx={{ mx: "auto" }}
      >
        {teamMembers.map((member, index) => (
          <Grid item size={{ xs: 12, md: 3,sm:6 }} sx={{padding:isMobile?"10px":"0px"}} key={index}>
            <Box
              sx={{
                  
                padding: 2,
                position: "relative",
                overflow: "hidden",
                border: "1px solid #ddd",
                borderRadius: "4px",
                transition: "all 0.3s ease",
                "&:hover": {
                  border: "2px solid #f57c00",
                },
                "&:hover .overlay": {
                  opacity: 1,
                  transform: "translateY(0)",
                },
              }}
            >
              {/* Image */}
              <Box
                component="img"
                src={member.img}
                alt={member.name}
                sx={{
                    padding: '10px',
                  width: "100%",
                  height: "auto",
                  display: "block",
                  transition: "0.4s ease",
                }}
              />

              {/* Overlay with Social Icons */}
            <Box
  className="overlay"
  sx={{
    // display:'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // width: isMobile? "60%":"50%",
    position: "absolute",
    top:isMobile? "74%":"60%",
    left:isMobile? "35%":"25%",
    transform: "translate(-50%, -50%) scale(0.9)",
    display: "flex",
    gap: 1,
    backgroundColor: "#fff",
    p: 1.5,
    borderRadius: "8px",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
    opacity: 0,
    transition: "all 0.4s ease",
  }}
>
  <IconButton size="small" sx={{ color: "#f57c00" }}>
    <Facebook />
  </IconButton>
  <IconButton size="small" sx={{ color: "#f57c00" }}>
    <Twitter />
  </IconButton>
  <IconButton size="small" sx={{ color: "#f57c00" }}>
    <LinkedIn />
  </IconButton>
</Box>

                <Box sx={{ mt: 2 }}>
              <Typography
                sx={{
                  fontSize: "1.1rem",
                  fontWeight: "500",
                  color: "#2b2422",
                }}
              >
                {member.name}
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.95rem",
                  color: "#f57c00",
                  fontFamily: "Marcellus, serif",
                }}
              >
                {member.role}
              </Typography>
            </Box>
            </Box>

            {/* Info */}
          
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TeamSection;
