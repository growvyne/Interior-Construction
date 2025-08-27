// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Stack,
  Button,
  Box,
  Fade,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Collapse,
  useMediaQuery,
  TextField,
  Dialog,
  DialogContent,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { navbarNavigations } from "../components/data/navbarNavigations";
import styles from "../components/navbar/navbar.module.css";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState({}); // track dropdowns

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = (index) => {
    setOpenMenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const buttonClass =
    location.pathname === "/" ? styles.nav_button : styles.nav_button1;

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: "#fff", color: "#000" }}>
        <Toolbar
          sx={{
            px: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {isMobile ? (
            <>
              {/* --- Mobile Left Side: Drawer Icon --- */}
              <IconButton onClick={() => setDrawerOpen(true)}>
                <MenuIcon sx={{ color: "#000" }} />
              </IconButton>

              {/* --- Mobile Center: Logo --- */}
              <Link to="/">
                <img
                  src="/images/GUIN LOGO.png"
                  alt="logo"
                  style={{
                    height: "70px",
                    width: "70px",
                    objectFit: "contain",
                    cursor: "pointer",
                  }}
                />
              </Link>

              {/* --- Mobile Right Side: Search Icon --- */}
              <IconButton sx={{ color: "#000" }} onClick={() => setSearchOpen(true)}>
                <SearchIcon />
              </IconButton>

              {/* --- Drawer Content --- */}
              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
              >
                <Box sx={{ width: 260, p: 2 }}>
                  <Stack spacing={2}>
                    {/* Contact Info */}
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <PhoneIcon sx={{ color: "#FF9800" }} />
                      <Typography
                        variant="body2"
                        sx={{ fontFamily: "Marcellus, serif" }}
                      >
                        + 033 4814 8430
                      </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <EmailIcon sx={{ color: "#FF9800" }} />
                      <Typography
                        variant="body2"
                        sx={{ fontFamily: "Marcellus, serif" }}
                      >
                        info@guininfracon.com
                      </Typography>
                    </Stack>

                    <Divider />

                    {/* Navigation Links with Dropdowns */}
                    <List>
                      {navbarNavigations.map((menu, index) => (
                        <React.Fragment key={index}>
                          <ListItem
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              color:
                                location.pathname === menu.path ? "#FF9800" : "#000",
                            }}
                          >
                            {/* Clicking the label navigates */}
                            <ListItemText
                              primary={menu.label}
                              primaryTypographyProps={{
                                fontFamily: "Marcellus, serif",
                                sx: { cursor: "pointer" },
                              }}
                              onClick={() => {
                                navigate(menu.path);
                                setDrawerOpen(false);
                              }}
                            />

                            {/* Arrow only toggles submenu */}
                            {menu.submenu &&
                              (openMenus[index] ? (
                                <KeyboardArrowUpIcon
                                  onClick={() => toggleMenu(index)}
                                  sx={{ cursor: "pointer" }}
                                />
                              ) : (
                                <KeyboardArrowDownIcon
                                  onClick={() => toggleMenu(index)}
                                  sx={{ cursor: "pointer" }}
                                />
                              ))}
                          </ListItem>

                          {/* Submenu Collapse */}
                          {menu.submenu && (
                            <Collapse in={openMenus[index]} timeout="auto" unmountOnExit>
                              <List component="div" disablePadding>
                                {menu.submenu.map((child, childIndex) => (
                                  <ListItem
                                    button
                                    key={childIndex}
                                    sx={{ pl: 4 }}
                                    onClick={() => {
                                      navigate(child.path);
                                      setDrawerOpen(false);
                                    }}
                                  >
                                    <ListItemText
                                      primary={child.label}
                                      primaryTypographyProps={{
                                        fontFamily: "Marcellus, serif",
                                        fontSize: "14px",
                                      }}
                                    />
                                  </ListItem>
                                ))}
                              </List>
                            </Collapse>
                          )}
                        </React.Fragment>
                      ))}
                    </List>

                    {/* Brochure Button */}
                    <Button
  variant="contained"
 
  href="/documents/GUIN-INFRA-BROCHURE.pdf"  
  target="_blank"
  rel="noopener noreferrer"
  sx={{
     backgroundColor:"black",
    borderRadius: 20,
    fontSize:"14px",
    textTransform: "none",
    fontFamily: "Marcellus, serif",
    "&:hover": { backgroundColor: "orange" }
  }}
>
  Brochure
</Button>

                  </Stack>
                </Box>
              </Drawer>
            </>
          ) : (
            <>
              {/* --- Desktop Navbar --- */}
              <Stack direction="row" alignItems="center" spacing={3}>
                <Link to="/">
                  <img
                    src="/images/GUIN LOGO.png"
                    alt="logo"
                    style={{
                      height: "110px",
                      width: "110px",
                      objectFit: "contain",
                      cursor: "pointer",
                    }}
                  />
                </Link>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <PhoneIcon fontSize="small" sx={{ color: "#FF9800" }} />
                    <Typography
                      variant="body2"
                      sx={{ fontFamily: "Marcellus, serif", color: "#000" }}
                    >
                      + 033 4814 8430
                    </Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <EmailIcon fontSize="small" sx={{ color: "#FF9800" }} />
                    <Typography
                      variant="body2"
                      sx={{ fontFamily: "Marcellus, serif", color: "#000" }}
                    >
                      info@guininfracon.com
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>

              <Box display="flex" alignItems="center" gap={3}>
                {navbarNavigations.map((menu, index) => (
                  <Box key={index} sx={{ position: "relative" }}>
                    <Button
                      variant="text"
                      className={buttonClass}
                      onClick={() => navigate(menu.path)}
                      sx={{
                        cursor: "pointer",
                        color:
                          location.pathname === menu.path
                            ? "#FF9800"
                            : hoverIndex === index
                            ? "#FF9800"
                            : "#000",
                        textTransform: "none",
                        fontSize: "16px",
                        fontFamily: "Marcellus, serif",
                      }}
                      onMouseEnter={() => setHoverIndex(index)}
                      onMouseLeave={() => setHoverIndex(null)}
                    >
                      {menu.label}
                      {menu.submenu && (
                        <KeyboardArrowDownIcon
                          sx={{
                            transform:
                              hoverIndex === index ? "rotate(180deg)" : "rotate(0)",
                            transition: "0.3s",
                          }}
                        />
                      )}
                    </Button>

                    {/* Dropdown */}
                    {menu.submenu && (
                      <Fade in={hoverIndex === index} timeout={250}>
                        <Box
                          onMouseEnter={() => setHoverIndex(index)}
                          onMouseLeave={() => setHoverIndex(null)}
                          className={styles.chiled_menu}
                        >
                          {menu.submenu.map((child, childIndex) => (
                            <Link
                              to={child.path}
                              key={childIndex}
                              className={`${styles.link_button} ${
                                location.pathname === child.path
                                  ? styles.active_link
                                  : ""
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </Box>
                      </Fade>
                    )}
                  </Box>
                ))}

               <Button
  variant="contained"
 
  href="/documents/GUIN-INFRA-BROCHURE.pdf"  
  target="_blank"
  rel="noopener noreferrer"
  sx={{
     backgroundColor:"black",
    borderRadius: 20,
    fontSize:"14px",
    textTransform: "none",
    fontFamily: "Marcellus, serif",
    "&:hover": { backgroundColor: "orange" }
  }}
>
  Brochure
</Button>


                <Stack direction="row" spacing={2} alignItems="center">
                  <IconButton sx={{ color: "#000" }} onClick={() => setSearchOpen(true)}>
                    <SearchIcon />
                  </IconButton>
                </Stack>
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>

      {/* --- Search Modal --- */}
      <Dialog
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogContent sx={{ textAlign: "center", position: "relative" }}>
          {/* Close button */}
          <IconButton
            onClick={() => setSearchOpen(false)}
            sx={{ position: "absolute", top: 10, right: 10 }}
          >
            <CloseIcon />
          </IconButton>

          {/* Search Input */}
          <TextField
            autoFocus
            placeholder="Search..."
            fullWidth
            sx={{
              mt: 4,
              "& .MuiInputBase-root": {
                borderRadius: "30px",
                background: "#f5f5f5",
                px: 2,
              },
            }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Navbar;
