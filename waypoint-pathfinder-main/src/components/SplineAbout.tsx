import { Suspense, useRef, lazy } from "react";
import { motion } from "framer-motion";

// Lazy load Spline component for better performance
const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineAboutProps {
  className?: string;
}

const SplineAbout = ({ className = "" }: SplineAboutProps) => {
  const splineRef = useRef<any>(null);

  const onLoad = (splineApp: any) => {
    if (splineApp) {
      splineRef.current = splineApp;
      
      // Spline about loaded successfully
      console.log('Spline about scene loaded');
    }
  };

  return (
    <motion.div
      className={`relative w-full h-full overflow-hidden rounded-2xl ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-purple-500/10">
        <motion.div
          className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      {/* Animated overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-purple-500/20 pointer-events-none"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};

export default SplineAbout;
