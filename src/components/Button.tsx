'use client';
import { motion } from 'motion/react';

type Car = {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
};
function Button({ onClick, children, className }: Car) {
  return (
    <motion.button
      onClick={onClick}
      className={className}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.09 }}
    >
      {children}
    </motion.button>
  );
}
export default Button;
