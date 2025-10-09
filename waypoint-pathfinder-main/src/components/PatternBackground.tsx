import { motion } from "framer-motion";

interface PatternBackgroundProps {
  pattern?: "dots" | "grid" | "waves" | "hexagons" | "circles";
  intensity?: number;
  className?: string;
}

const PatternBackground = ({ 
  pattern = "dots", 
  intensity = 0.1, 
  className = "" 
}: PatternBackgroundProps) => {
  const patterns = {
    dots: {
      backgroundImage: `
        radial-gradient(circle at 1px 1px, rgba(59, 130, 246, ${intensity}) 1px, transparent 0)
      `,
      backgroundSize: "20px 20px",
    },
    grid: {
      backgroundImage: `
        linear-gradient(rgba(59, 130, 246, ${intensity}) 1px, transparent 1px),
        linear-gradient(90deg, rgba(59, 130, 246, ${intensity}) 1px, transparent 1px)
      `,
      backgroundSize: "30px 30px",
    },
    waves: {
      backgroundImage: `
        radial-gradient(ellipse at center, rgba(59, 130, 246, ${intensity}) 0%, transparent 70%)
      `,
      backgroundSize: "100px 100px",
    },
    hexagons: {
      backgroundImage: `
        radial-gradient(circle at 50% 50%, rgba(59, 130, 246, ${intensity}) 0%, transparent 50%)
      `,
      backgroundSize: "40px 40px",
    },
    circles: {
      backgroundImage: `
        radial-gradient(circle at 25% 25%, rgba(59, 130, 246, ${intensity}) 0%, transparent 50%),
        radial-gradient(circle at 75% 75%, rgba(147, 51, 234, ${intensity}) 0%, transparent 50%)
      `,
      backgroundSize: "60px 60px",
    },
  };

  return (
    <motion.div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={patterns[pattern]}
      animate={{
        backgroundPosition: ["0% 0%", "100% 100%"],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {/* Animated overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5"
        animate={{
          opacity: [0.3, 0.7, 0.3],
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

export default PatternBackground;

