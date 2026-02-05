import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface CelestialButtonProps extends HTMLMotionProps<'button'> {
  children: React.ReactNode;
}

export function CelestialButton({ children, className = '', ...props }: CelestialButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`relative group px-10 py-4 flex items-center justify-center rounded-full ${className}`}
      style={{
        background: 'linear-gradient(180deg, #78350F 0%, #451A03 100%)',
        border: '2px solid #F59E0B',
        boxShadow: '0 4px 15px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)'
      }}
      {...props}
    >
      <span 
        className="font-bold text-amber-100 text-lg tracking-widest uppercase"
        style={{ 
          fontFamily: "'Cinzel Decorative', Georgia, serif",
          textShadow: '0 2px 4px rgba(0,0,0,0.8)'
        }}
      >
        {children}
      </span>
    </motion.button>
  );
}
