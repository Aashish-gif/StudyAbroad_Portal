import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Main gradient background */}
      <div className="absolute inset-0 sky-gradient" />
      
      {/* Floating blobs */}
      <motion.div
        className="floating-blob w-96 h-96 top-20 left-10"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      <motion.div
        className="floating-blob w-64 h-64 top-40 right-20"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      <motion.div
        className="floating-blob w-80 h-80 bottom-20 left-1/4"
        animate={{
          x: [0, 120, 0],
          y: [0, -80, 0],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      <motion.div
        className="floating-blob w-48 h-48 bottom-40 right-1/3"
        animate={{
          x: [0, -60, 0],
          y: [0, 40, 0],
          rotate: [0, -90, -180, -270, -360],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  );
};

export default AnimatedBackground;

