import React from 'react';
import { motion } from 'framer-motion';

const LeafBackground: React.FC = () => {
  const leaves = Array.from({ length: 15 }, (_, i) => i);
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {leaves.map((leaf, index) => (
        <motion.div
          key={index}
          className="absolute text-green-600/20"
          initial={{
            top: -100,
            left: `${Math.random() * 100}%`,
            rotate: 0,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            top: '100vh',
            rotate: Math.random() > 0.5 ? 360 : -360,
            x: Math.random() * 100 - 50,
          }}
          transition={{
            duration: Math.random() * 20 + 15,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 20,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9 14.35 12 13 13 12" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default LeafBackground;