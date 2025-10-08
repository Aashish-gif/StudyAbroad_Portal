import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isPointer, setIsPointer] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    const handlePointerEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        setIsPointer(true);
      }
    };

    const handlePointerLeave = () => {
      setIsPointer(false);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseover', handlePointerEnter);
    window.addEventListener('mouseout', handlePointerLeave);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseover', handlePointerEnter);
      window.removeEventListener('mouseout', handlePointerLeave);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="w-full h-full rounded-full bg-white"
          animate={{
            scale: isPointer ? 1.5 : 1,
            opacity: isHovering ? 1 : 0.8,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 28,
          }}
        />
      </motion.div>

      {/* Cursor trail */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 pointer-events-none z-[9998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="w-full h-full rounded-full bg-gradient-to-r from-primary to-purple-500"
          animate={{
            scale: isPointer ? 2 : 1,
            opacity: isHovering ? 0.6 : 0.3,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        />
      </motion.div>

      {/* Cursor particles */}
      {isHovering && (
        <div className="fixed top-0 left-0 pointer-events-none z-[9997]">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full"
              style={{
                x: cursorXSpring,
                y: cursorYSpring,
              }}
              animate={{
                x: [0, (Math.random() - 0.5) * 100],
                y: [0, (Math.random() - 0.5) * 100],
                opacity: [0.8, 0],
                scale: [1, 0],
              }}
              transition={{
                duration: 1,
                delay: i * 0.1,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            />
          ))}
        </div>
      )}
    </>
  );
};
export default CustomCursor;
