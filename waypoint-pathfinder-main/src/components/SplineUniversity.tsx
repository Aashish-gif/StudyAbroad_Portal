import { Suspense, useRef, lazy } from "react";
import { motion } from "framer-motion";

// Lazy load Spline component for better performance
const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineUniversityProps {
  className?: string;
  interactive?: boolean;
}

const SplineUniversity = ({ className = "", interactive = true }: SplineUniversityProps) => {
  const splineRef = useRef<any>(null);

  const onLoad = (splineApp: any) => {
    if (splineApp) {
      splineRef.current = splineApp;
      
      // Spline university loaded successfully
      console.log('Spline university scene loaded');
    }
  };

  return (
    <motion.div
      className={`relative w-full h-full overflow-hidden rounded-xl ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-purple-500/10">
        <motion.div
          className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-purple-500/20 pointer-events-none"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};

export default SplineUniversity;
