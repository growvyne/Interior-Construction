import React, { useRef } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const GetInTouch = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ul763b7",   //  EmailJS Service ID
        "template_0868394",  // Template ID
        form.current,
        "_z1P1TH5ceQBbweWT"  // Public Key
      )
      .then(
        (result) => {
          console.log("✅ Success:", result.text);
          toast.success("Message Sent Successfully! 🎉");
          form.current.reset();
        },
        (error) => {
          console.log("❌ Error:", error.text);
          toast.error("Something went wrong. Try again!");
        }
      );
  };

  return (
    <Box
      sx={{
        py: 10,
        px: 4,
        background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
      }}
    >
      {/* 🔥 Add toaster once in your app (best in App.js, but works here too) */}
      <Toaster position="top-center" reverseOrder={false} />

      <Grid container spacing={4} alignItems="center">
        {/* Left Section */}
        <Grid item size={{ xs: 12, md: 6 }}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "#333",
              mb: 3,
              fontFamily: "Marcellus, serif",
            }}
          >
            Get in Touch
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#555",
              mb: 4,
              lineHeight: 1.8,
              fontFamily: "Marcellus, serif",
            }}
          >
            Have a question, project idea, or just want to say hello?  
            We’d love to hear from you. Drop us a message and our team will get
            back to you as soon as possible.
          </Typography>
        </Grid>

        {/* Right Section - Contact Form */}
        <Grid item size={{ xs: 12, md: 6 }}>
          <Paper
            elevation={6}
            sx={{
              p: 4,
              borderRadius: 4,
              background: "#fff",
              boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "600",
                mb: 3,
                textAlign: "center",
                color: "#333",
                fontFamily: "Marcellus, serif",
              }}
            >
              Send Us a Message
            </Typography>

            <form ref={form} onSubmit={sendEmail}>
              <Grid container spacing={2}>
                <Grid item size={{ xs: 12, md: 6 }}>
                  <TextField fullWidth label="First Name" name="firstName" required />
                </Grid>
                <Grid item size={{ xs: 12, md: 6 }}>
                  <TextField fullWidth label="Last Name" name="lastName" required />
                </Grid>
                <Grid item size={{ xs: 12, md: 6 }}>
                  <TextField fullWidth label="Mobile" name="mobile" required />
                </Grid>
                <Grid item size={{ xs: 12, md: 6 }}>
                  <TextField fullWidth label="Email" name="email" type="email" required />
                </Grid>
                <Grid size={{ xs: 12}}>
                  <TextField fullWidth label="Message" name="message" multiline rows={4} required />
                </Grid>

                <Grid item xs={12} md={4}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      background: "linear-gradient(90deg, #ff5e62, #ff9966)",
                      fontWeight: "bold",
                      color: "#fff",
                      py: 1.3,
                      borderRadius: 2,
                      fontSize: "1rem",
                      boxShadow: "0 4px 14px rgba(255, 94, 98, 0.4)",
                      fontFamily: "Marcellus, serif",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        background: "linear-gradient(90deg, #ff9966, #ff5e62)",
                        transform: "translateY(-2px)",
                        boxShadow: "0 6px 20px rgba(255, 94, 98, 0.5)",
                      },
                    }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GetInTouch;
