import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import NotFound from "../pages/NotFound";

import LoadingScreen from "../src/components/LoadingScreen"; // Import your loading component

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000); // 5 seconds splash
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />; // Show loading splash first
  }

  // Show app content after loading finishes
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
