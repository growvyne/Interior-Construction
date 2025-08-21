import { useState } from "react";
import {
    Box, Grid, Typography, Button, Card, CardContent, Container, Modal,
    IconButton,
} from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

export default function TwoSectionLayout() {
    const [open, setOpen] = useState(false);
    return (
        <Box sx={{ flexGrow: 1, py: 8, px: 4, }}>

            <Grid container spacing={3} sx={{ padding: "40px" }}>
                {/* Left Section */}
                <Grid item size={{ xs: 12, md: 6 }}>
                    {/* Image with Play Icon */}
                    <Box
                        sx={{
                            position: "relative",
                            width: "100%",
                            maxWidth: 600,
                            margin: "auto",
                        }}
                    >
                        {/* Main Image */}
                        <Box
                            component="img"
                            src="/public/images/video-img.jpg"
                            alt="Preview"
                            sx={{
                                width: "100%",
                                height: 500,
                                objectFit: "cover",
                                borderRadius: 2,
                                boxShadow: 3,
                            }}
                        />

                        {/* Blinking Play Button */}
                        <IconButton
                            onClick={() => setOpen(true)}
                            sx={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                fontSize: "80px",
                                color: "white",
                                animation: "pulse 1.5s infinite",
                            }}
                        >
                            <PlayCircleIcon fontSize="inherit" />
                        </IconButton>

                        {/* Blinking animation keyframes */}
                        <style>
                            {`
            @keyframes pulse {
              0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
              50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.7; }
              100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
            }
          `}
                        </style>
                    </Box>

                    {/* Video Modal */}
                    <Modal
                        open={open}
                        onClose={() => setOpen(false)}
                        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                    >
                        <Box
                            sx={{
                                position: "relative",
                                width: "80%",
                                maxWidth: 900,
                                bgcolor: "black",
                                borderRadius: 2,
                                overflow: "hidden",
                            }}
                        >
                            <iframe
                                width="100%"
                                height="500"
                                src="/public/video/interior.mp4"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                            ></iframe>
                        </Box>
                    </Modal>
                </Grid>

                <Grid item size={{ xs: 12, md: 6 }} style={{padding: "20px"}}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, fontFamily: "Marcellus, serif" }}>
                        Our Info
                    </Typography>
                    <Typography variant="h5" sx={{ color: "text.secondary", mb: 2, fontFamily: "Marcellus, serif" }}>
                        Design That Makes You Feel   At Home.
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, fontFamily: "Marcellus, serif" }}>
                        Architecture and interior company has the power to shape beautiful and functional spaces. Whether designing buildings or curating interiors, your company likely balances creativity, technical expertise, and client needs to create stunning environments.
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#000",
                            color: "#fff",
                            borderRadius: "25px",
                            px: 4,
                            py: 1,
                            fontFamily: "Marcellus, serif",
                            textTransform: "none",
                            "&:hover": { backgroundColor: "#333" },
                        }}
                    >
                        Read More
                    </Button>
                </Grid>

                {/* Right Section */}

            </Grid>

        </Box>
    );
}
