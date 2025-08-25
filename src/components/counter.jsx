import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import CountUp from "react-countup";

const CounterSection = () => {
  const counters = [
    { number: 15, label: "Years Experience" },
    { number: 65, label: "Awards Gained" },
    { number: 236, label: "Projects Completed" },
    { number: 750, label: "Happy Clients" },
  ];

  return (
    <div style={{padding:"50px"}}>
<Box
      sx={{
        
        
        

        position: "relative",
        backgroundColor: "#2b2422",
        backgroundImage: "url('https://thewebmax.org/hvillas/images/background/count-bg.jpg')",
        "--r": "20px",
        "--s": "40px",
        "--a": "20deg",
        "--p": "50%",
        py: 10,
        px: 3,
        
        
        

        position: "relative",
        backgroundColor: "#2b2422",
        backgroundImage: "url('https://thewebmax.org/hvillas/images/background/count-bg.jpg')",
        "--r": "20px",
        "--s": "40px",
        "--a": "20deg",
        textAlign: "center",
      }}
    >
      {/* Cutting Portion (Semi-circle) */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 90,
          height: 45,
          backgroundColor: "#fff", // background cut color
          borderBottomLeftRadius: "80px",
          borderBottomRightRadius: "80px",
          boxShadow: "0px 2px 6px rgba(0,0,0,0.25)",
        }}
      />

      {/* Counter Grid */}
      <Grid
        container
        spacing={0}
        justifyContent="center"
        alignItems="center"
        maxWidth="lg"
        sx={{ mx: "auto" }}
      >
        {counters.map((item, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={index}
            sx={{
              borderRight:
                index !== counters.length - 1
                  ? "1px solid rgba(255,255,255,0.3)"
                  : "none",
              px: 5,
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "2.5rem", md: "3rem" },
                color: "transparent",
                WebkitTextStroke: "1px #fff",
                mb: 1,
              }}
            >
              <CountUp end={item.number} duration={7} />
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                fontFamily: "Marcellus, serif",
                fontSize: "1rem",
              }}
            >
              {item.label}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
    </div>
        
   
  );
};

export default CounterSection;
