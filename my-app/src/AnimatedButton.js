import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

function AnimatedButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="bg-purple-600 text-white py-2 px-6 rounded-xl flex items-center gap-2 transition duration-300"
    >
      <CheckCircle size={20} />
      <span>Click Me</span>
    </motion.button>
  );
}

export default AnimatedButton;
