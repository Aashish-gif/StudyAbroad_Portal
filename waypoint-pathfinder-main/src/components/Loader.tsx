import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div
          className="relative w-20 h-20 mx-auto mb-6"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-0 rounded-full border-4 border-white/30"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-white animate-spin"></div>
          <motion.div
            className="absolute inset-2 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </motion.div>
        <motion.h2
          className="text-2xl font-bold text-white mb-2"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          PathBridge
        </motion.h2>
        <p className="text-white/80">Loading your journey...</p>
      </div>
    </div>
  );
};

export default Loader;