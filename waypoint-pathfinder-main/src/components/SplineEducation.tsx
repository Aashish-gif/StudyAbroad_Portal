import { Suspense, useRef, lazy } from "react";
import { motion } from "framer-motion";

// Lazy load Spline component for better performance
const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineEducationProps {
  className?: string;
  sceneUrl?: string;
}

const SplineEducation = ({ className = "", sceneUrl }: SplineEducationProps) => {
  const splineRef = useRef<any>(null);

  const onLoad = (splineApp: any) => {
    if (splineApp) {
      splineRef.current = splineApp;
      
      // Spline loaded successfully
      console.log('Spline education scene loaded');
    }
  };

  return (
    <motion.div
      className={`relative w-full h-full overflow-hidden rounded-2xl ${className}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-purple-500/10">
        <motion.div
          className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      {/* Interactive overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
      
      {/* Animated border */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-transparent"
        style={{
          background: "linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.3), transparent)",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "xor",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.div>
  );
};

export default SplineEducation;
