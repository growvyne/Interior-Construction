// src/components/Navbar.jsx
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Stack,
  Button,
  Box,
  TextField,
  Fade,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import SearchIcon from "@mui/icons-material/Search";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  {
    label: "Services",
    path: "/pages",
    submenu: [
      { label: "Real Estate Solutions", path: "/" },
      { label: "Construction Materials", path: "/pages/" },
      { label: "Interior & Exterior Design", path: "/pages/" },
       { label: "Civil Engineering & Construction", path: "/pages/" },
        { label: "Project Management", path: "/pages/" },
         { label: "Building Development Service", path: "/pages/" },
          { label: "Renovation and Remodeling", path: "/pages/" },
    ],
  },
   {
    label: "Projects",
    path: "/pages",
    submenu: [
       { label: "Past Projects", path: "/pages/" },
      { label: "OnGoing Projects", path: "/" },
      { label: "Upcoming Projects", path: "/pages/" },
  
    ],
  },
  { label: "Project", path: "/project"
    
   },
  // {
  //   label: "Services",
  //   path: "/services",
  //   submenu: [
  //     { label: "Interior", path: "/services/interior" },
  //     { label: "Exterior", path: "/services/exterior" },
  //   ],
  // },
  // { label: "Our Team", path: "/news" },
  { label: "Blog", path: "/shop" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [submenuItems, setSubmenuItems] = useState([]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();

  // open dropdown on hover
  const handleMenuOpen = (event, submenu) => {
    setAnchorEl(event.currentTarget);
    setSubmenuItems(submenu);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSubmenuItems([]);
  };

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: "#fff", color: "#000" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* LEFT SIDE - Logo + Contact */}
          <Stack direction="row" alignItems="center" spacing={3}>
             <a href="/">
              <img src="/images/GUIN LOGO.png" alt="logo" style={{height:'120px',width:'120px',objectFit:"obtain"}} />
             </a>
          
            {!isMobile && (
              <>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <PhoneIcon fontSize="small" color="primary" />
                  <Typography variant="body2" style={{  fontFamily: "Marcellus, serif",}}>+ 033 4814 8430</Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <EmailIcon fontSize="small" color="primary" />
                  <Typography variant="body2" style={{  fontFamily: "Marcellus, serif",}}>info@guininfracon.com</Typography>
                </Stack>
              </>
            )}
          </Stack>

          {/* RIGHT SIDE - Menu */}
          {!isMobile ? (
            <Stack direction="row" alignItems="center" spacing={3}>
              {navItems.map((item) =>
                item.submenu ? (
                  <Button
                  style={{  fontFamily: "Marcellus, serif",}}
                    key={item.label}
                    color="inherit"
                    endIcon={<ArrowDropDownIcon />}
                    onMouseEnter={(e) => handleMenuOpen(e, item.submenu)}
                    sx={{
                      
                      color:
                        location.pathname === item.path
                          ? theme.palette.primary.main
                          : "inherit",
                      backgroundColor:
                        location.pathname === item.path ? "#f0f0f0" : "transparent",
                      "&:hover": {
                        color: theme.palette.primary.main,
                        backgroundColor: "#f9f9f9",
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ) : (
                  <Button
                  style={{fontSize:"14px"}}
                    key={item.label}
                    color="inherit"
                    component={Link}
                    to={item.path}
                    sx={{
                      fontFamily: "Marcellus, serif",
                      color:
                        location.pathname === item.path
                          ? theme.palette.primary.main
                          : "inherit",
                      backgroundColor:
                        location.pathname === item.path ? "#f0f0f0" : "transparent",
                      "&:hover": {
                        color: theme.palette.primary.main,
                        backgroundColor: "#f9f9f9",
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                )
              )}

              {/* Dropdown Menu */}
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                MenuListProps={{
                  onMouseEnter: () => {}, // keep open inside
                  onMouseLeave: handleMenuClose, // close on leaving
                }}
                PaperProps={{
                  sx: {
                    width: 260, // 👈 bigger dropdown container
                    padding: 2,
                    gap: 1,
                  },
                }}
              >
                {submenuItems.map((sub) => (
                  <MenuItem
                  style={{fontSize:"14px"}}
                    key={sub.label}
                    component={Link}
                    to={sub.path}
                    onClick={handleMenuClose}
                    sx={{
                      fontFamily: "Marcellus, serif",
                      color:
                        location.pathname === sub.path
                          ? theme.palette.primary.main
                          : "inherit",
                      backgroundColor:
                        location.pathname === sub.path ? "#f0f0f0" : "transparent",
                      "&:hover": {
                        color: theme.palette.primary.main,
                        backgroundColor: "#f9f9f9",
                      },
                    }}
                  >
                    {sub.label}
                  </MenuItem>
                ))}
              </Menu>
              <Button
  variant="contained"
  color="primary"
  href="/documents/GUIN-INFRA-BROCHURE.pdf"  
  target="_blank"
  rel="noopener noreferrer"
  sx={{
    borderRadius: 20,
    textTransform: "none",
    fontFamily: "Marcellus, serif",
    "&:hover": { backgroundColor: "#CD9727" }
  }}
>
  Brochure
</Button>


              {/* Divider + Icons */}
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{ borderLeft: "1px solid #ccc", pl: 2 }}
              >
                <IconButton color="primary" onClick={() => setShowSearch(true)}>
                  <SearchIcon />
                </IconButton>
                {/* <IconButton color="primary">
                  <ShoppingCartIcon />
                </IconButton> */}
              </Stack>
            </Stack>
          ) : (
            <IconButton onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 230 }} role="presentation">
          
          <List>
            {navItems.map((item) => (
              <React.Fragment key={item.label}>
                <ListItem
                  button
                  component={Link}
                  to={item.path}
                  onClick={() => setDrawerOpen(false)}
                  sx={{
                    color:
                      location.pathname === item.path
                        ? theme.palette.primary.main
                        : "inherit",
                    backgroundColor:
                      location.pathname === item.path ? "#f0f0f0" : "transparent",
                    "&:hover": {
                      color: theme.palette.primary.main,
                      backgroundColor: "#f9f9f9",
                    },
                  }}
                >
                  <ListItemText primary={item.label} />
                  
                </ListItem>
                {item.submenu && (
                  <List sx={{ pl: 4 }}>
                    {item.submenu.map((sub) => (
                      <ListItem
                        button
                        key={sub.label}
                        component={Link}
                        to={sub.path}
                        onClick={() => setDrawerOpen(false)}
                        sx={{
                          color:
                            location.pathname === sub.path
                              ? theme.palette.primary.main
                              : "inherit",
                          backgroundColor:
                            location.pathname === sub.path ? "#f0f0f0" : "transparent",
                          "&:hover": {
                            color: theme.palette.primary.main,
                            backgroundColor: "#f9f9f9",
                          },
                        }}
                      >
                        <ListItemText primary={sub.label} />
                      </ListItem>
                    ))}
                    
                  </List>
                  
                  
                )}
                <Divider />
              </React.Fragment>
            ))}
          </List>
          <div style={{display:'flex', justifyContent:'center', alignItems:'center', paddingBottom:'20px'}}>
            <Button
      
                variant="contained"
                color="primary"
                 href="/documents/GUIN-INFRA-BROCHURE.pdf"  
  target="_blank"
  rel="noopener noreferrer"
               
                sx={{ borderRadius: 20, textTransform: "none",fontFamily: "Marcellus, serif", padding:'10pz',
                  "&:hover": { backgroundColor: "#CD9727" }
                }}
              >
               Brochure
              </Button>
          </div>
        </Box>
        
      </Drawer>

      {/* SEARCH OVERLAY */}
      <Fade in={showSearch}>
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            bgcolor: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1300,
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "80%",
              maxWidth: "500px",
              bgcolor: "#fff",
              borderRadius: 2,
              boxShadow: 6,
              p: 2,
              display: "flex",
              alignItems: "center",
            }}
          >
            <TextField fullWidth autoFocus variant="outlined" placeholder="Search..." />
            <IconButton
              onClick={() => setShowSearch(false)}
              sx={{ ml: 1 }}
              color="error"
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>
      </Fade>
    </>
  );
}
