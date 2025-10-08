import { Suspense, useRef, lazy, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-students.jpg";

// Lazy load Spline component for better performance
const Spline = lazy(() => import("@splinetool/react-spline"));

const SplineHero = () => {
  const splineRef = useRef<any>(null);
  const [hasError, setHasError] = useState(false);

  const onLoad = (splineApp: any) => {
    try {
      if (splineApp) {
        splineRef.current = splineApp;
        
        // Add interactive animations
        const onMouseMove = (event: MouseEvent) => {
          if (splineRef.current) {
            try {
              const { clientX, clientY } = event;
              const x = (clientX / window.innerWidth) * 2 - 1;
              const y = -(clientY / window.innerHeight) * 2 + 1;
              
              // Rotate 3D objects based on mouse position
              splineRef.current.setVariable?.("mouseX", x);
              splineRef.current.setVariable?.("mouseY", y);
            } catch (error) {
              // Silently handle interaction errors
            }
          }
        };

        window.addEventListener("mousemove", onMouseMove);
        
        return () => {
          window.removeEventListener("mousemove", onMouseMove);
        };
      }
    } catch (error) {
      setHasError(true);
    }
  };

  const FallbackContent = () => (
    <div className="w-full h-full rounded-3xl overflow-hidden">
      <img 
        src={heroImage} 
        alt="Students pursuing global education" 
        className="w-full h-full object-cover"
      />
    </div>
  );

  return (
    <motion.div
      className="relative w-full h-full"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, type: "spring", stiffness: 100 }}
    >
      <FallbackContent />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-background/20 pointer-events-none" />
      
      {/* Floating particles overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default SplineHero;
