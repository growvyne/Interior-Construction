// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import NotFound from "../pages/NotFound";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        {/* Add more routes here as you create pages */}

        {/* 404 fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
