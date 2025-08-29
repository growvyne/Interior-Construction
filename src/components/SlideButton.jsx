// components/SlideButton.jsx
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

export default function SlideButton({ text, onClick, className }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={cn(
        "relative px-6 py-3 overflow-hidden rounded-lg bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold shadow-lg",
        className
      )}
    >
      <span className="relative z-10">{text}</span>
      <motion.div
        initial={{ x: "-100%" }}
        whileHover={{ x: "0%" }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 bg-white/20"
      />
    </motion.button>
  );
}
