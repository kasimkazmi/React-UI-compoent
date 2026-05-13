import React from "react";
import { motion } from "framer-motion";

export const MagicButton = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium shadow-lg hover:bg-indigo-700 transition-colors"
    >
      Magic Button
    </motion.button>
  );
};
