import { motion } from "framer-motion";
import { Users, Globe2, TrendingUp, Award } from "lucide-react";

const FloatingStats = () => {
  const stats = [
    { 
      number: "10,000+", 
      label: "Students Placed", 
      icon: Users,
      color: "from-blue-500 to-purple-600",
      delay: 0
    },
    { 
      number: "500+", 
      label: "Partner Universities", 
      icon: Globe2,
      color: "from-purple-500 to-pink-600",
      delay: 0.2
    },
    { 
      number: "50+", 
      label: "Countries", 
      icon: Globe2,
      color: "from-pink-500 to-red-600",
      delay: 0.4
    },
    { 
      number: "98%", 
      label: "Success Rate", 
      icon: TrendingUp,
      color: "from-green-500 to-blue-600",
      delay: 0.6
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: stat.delay,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ 
              scale: 1.05, 
              y: -5,
              transition: { duration: 0.2 }
            }}
            className="glass-card p-6 rounded-2xl text-center group cursor-pointer"
          >
            <motion.div
              className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Icon className="h-8 w-8 text-white" />
            </motion.div>
            
            <motion.div 
              className="text-3xl md:text-4xl font-bold mb-2 text-foreground"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: stat.delay + 0.3, type: "spring", stiffness: 200 }}
            >
              {stat.number}
            </motion.div>
            
            <div className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
              {stat.label}
            </div>
            
            {/* Animated border */}
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-primary via-purple-500 to-accent opacity-0 group-hover:opacity-100"
              style={{
                background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #f59e0b)',
                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                maskComposite: 'xor',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingStats;

