import React, { useState } from "react";
import { motion } from "framer-motion";
import "../assets/motionstyle.css";
const FramerMotion = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <motion.div
        layout
        data-isOpen={isOpen}
        initial={{ borderRadius: 50 }}
        className="parent"
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div layout className="child" />
      </motion.div>
    </div>
  );
};

export default FramerMotion;
