import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Building2, BookOpen, GraduationCap, Compass, Plane, FileText, User, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/about", label: "About Us", icon: Building2 },
    { path: "/universities", label: "Universities", icon: GraduationCap },
    { path: "/courses", label: "Courses", icon: BookOpen },
    { path: "/test-prep", label: "Test Prep", icon: FileText },
    { path: "/career-counseling", label: "Career Counseling", icon: Compass },
    { path: "/study-abroad", label: "Study Abroad", icon: Plane },
    { path: "/resources", label: "Resources", icon: BookOpen },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className="glass-nav fixed left-0 top-0 h-screen w-64 p-6 z-50 hidden lg:block"
    >
      {/* Logo Section */}
      <motion.div 
        className="mb-8"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
      >
        <Link to="/" className="flex items-center gap-3 group">
          <motion.div 
            className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary via-purple-500 to-accent flex items-center justify-center shadow-lg"
            whileHover={{ 
              scale: 1.1, 
              rotate: 360,
              transition: { duration: 0.6 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <GraduationCap className="h-7 w-7 text-white" />
          </motion.div>
          <div>
            <h1 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
              PathBridge
            </h1>
            <motion.p 
              className="text-xs text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Bridge to Global Education
            </motion.p>
          </div>
        </Link>
      </motion.div>

      {/* Navigation Items */}
      <div className="space-y-2">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          
          return (
            <motion.div
              key={item.path}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.3 }}
            >
              <Link to={item.path} className="block">
                <motion.div
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 relative overflow-hidden group ${
                    active
                      ? "bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg"
                      : "text-foreground hover:bg-secondary/50 hover:text-primary"
                  }`}
                  whileHover={{ 
                    scale: 1.02,
                    x: 5,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Active indicator */}
                  <AnimatePresence>
                    {active && (
                      <motion.div
                        className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-full"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        exit={{ scaleY: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </AnimatePresence>
                  
                  {/* Icon with animation */}
                  <motion.div
                    className="relative"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Icon className="h-5 w-5" />
                    {active && (
                      <motion.div
                        className="absolute -top-1 -right-1"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <Sparkles className="h-3 w-3 text-yellow-300" />
                      </motion.div>
                    )}
                  </motion.div>
                  
                  <span className="font-medium">{item.label}</span>
                  
                  {/* Hover effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Profile & Login Buttons */}
      <motion.div 
        className="absolute bottom-6 left-6 right-6 space-y-3"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
      >
        <Link to="/profile">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button variant={isActive("/profile") ? "default" : "outline"} className="w-full rounded-full h-12 font-semibold">
              <User className="h-4 w-4 mr-2" />Profile
            </Button>
          </motion.div>
        </Link>
        <Link to="/login">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button className="w-full rounded-full h-12 font-semibold btn-primary-custom">
              <User className="h-4 w-4 mr-2" />Login
            </Button>
          </motion.div>
        </Link>
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;