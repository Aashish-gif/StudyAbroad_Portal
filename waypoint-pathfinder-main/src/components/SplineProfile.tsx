import { Suspense, useRef, lazy } from "react";
import { motion } from "framer-motion";

// Lazy load Spline component for better performance
const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineProfileProps {
  className?: string;
}

const SplineProfile = ({ className = "" }: SplineProfileProps) => {
  const splineRef = useRef<any>(null);

  const onLoad = (splineApp: any) => {
    if (splineApp) {
      splineRef.current = splineApp;
      
      // Spline profile loaded successfully
      console.log('Spline profile scene loaded');
    }
  };

  return (
    <motion.div
      className={`relative w-full h-full overflow-hidden rounded-2xl ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      whileHover={{ scale: 1.03 }}
    >
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-purple-500/10">
        <motion.div
          className="w-12 h-12 border-3 border-primary border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      {/* Interactive glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-purple-500/20 pointer-events-none"
        animate={{
          opacity: [0.4, 0.8, 0.4],
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

export default SplineProfile;
