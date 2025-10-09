import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  gradient?: string;
}

const FeatureCard = ({ icon: Icon, title, description, index, gradient = "from-blue-500 to-purple-600" }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.05, 
        y: -10,
        transition: { duration: 0.2 }
      }}
      className="card-professional text-center group cursor-pointer relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
        initial={{ scale: 0 }}
        whileHover={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Icon container */}
      <motion.div
        className={`h-20 w-20 rounded-3xl bg-gradient-to-br ${gradient} flex items-center justify-center mx-auto mb-6 shadow-xl relative`}
        whileHover={{ 
          rotate: [0, -10, 10, 0],
          scale: 1.1
        }}
        transition={{ duration: 0.4 }}
      >
        <Icon className="h-10 w-10 text-white" />
        
        {/* Glow effect */}
        <motion.div
          className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-30 blur-xl`}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
      
      {/* Content */}
      <motion.h3 
        className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.3 }}
      >
        {title}
      </motion.h3>
      
      <motion.p 
        className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.4 }}
      >
        {description}
      </motion.p>
      
      {/* Animated border */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-transparent"
        style={{
          background: `linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.3), transparent)`,
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'xor',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        whileHover={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-60"
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 2,
              delay: i * 0.2,
              repeat: Infinity,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default FeatureCard;

