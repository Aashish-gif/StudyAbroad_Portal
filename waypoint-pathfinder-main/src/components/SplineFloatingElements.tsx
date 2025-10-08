import { Suspense, useRef, useEffect, lazy, useState } from "react";
import { motion } from "framer-motion";

// Lazy load Spline component for better performance
const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineFloatingElementsProps {
  className?: string;
  intensity?: number;
}

const SplineFloatingElements = ({ 
  className = "", 
  intensity = 1 
}: SplineFloatingElementsProps) => {
  const splineRef = useRef<any>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      // Mouse interaction disabled to prevent errors
      return;
    };

    const onScroll = () => {
      // Scroll interaction disabled to prevent errors
      return;
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, [intensity, hasError]);

  const onLoad = (splineApp: any) => {
    try {
      splineRef.current = splineApp;
    } catch (error) {
      console.error("Spline load error:", error);
      setHasError(true);
    }
  };

  const onError = () => {
    setHasError(true);
  };

  return null; // Temporarily disabled
};

export default SplineFloatingElements;
