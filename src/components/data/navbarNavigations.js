// src/components/data/navbarNavigations.js

export const navbarNavigations = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  {
    label: "Services",
    path: "/services",
    submenu: [
      { label: "Real Estate Solutions", path: "/services/real-estate", icons: "1" },
      { label: "Construction Materials", path: "/services/materials", icons: "2" },
      { label: "Interior & Exterior Design", path: "/services/design", icons: "3" },
      { label: "Civil Engineering & Construction", path: "/services/civil", icons: "4" },
      { label: "Project Management", path: "/services/management", icons: "5" },
      { label: "Building Development Service", path: "/services/development", icons: "6" },
      { label: "Renovation and Remodeling", path: "/services/renovation", icons: "7" },
    ],
  },
  {
    label: "Projects",
    path: "/projects",
    submenu: [
      { label: "Past Projects", path: "/projects/past", icons: "8" },
      { label: "OnGoing Projects", path: "/projects/ongoing", icons: "9" },
      { label: "Upcoming Projects", path: "/projects/upcoming", icons: "10" },
    ],
  },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];
