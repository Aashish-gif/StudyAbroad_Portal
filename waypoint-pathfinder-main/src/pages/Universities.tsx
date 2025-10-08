import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, MapPin, DollarSign, GraduationCap, Star, TrendingUp, Users, Globe } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AnimatedBackground from "@/components/AnimatedBackground";
import SplineUniversity from "@/components/SplineUniversity";
import SplineFloatingElements from "@/components/SplineFloatingElements";
import PatternBackground from "@/components/PatternBackground";

const Universities = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const universities = [
    {
      id: "stanford",
      name: "Stanford University",
      country: "United States",
      ranking: "#3 Global",
      tuition: "$55,000/year",
      programs: ["Computer Science", "Engineering", "Business"],
      acceptance: "4%"
    },
    {
      id: "oxford",
      name: "University of Oxford",
      country: "United Kingdom",
      ranking: "#1 UK",
      tuition: "£28,000/year",
      programs: ["Law", "Medicine", "Philosophy"],
      acceptance: "17%"
    },
    {
      id: "eth-zurich",
      name: "ETH Zurich",
      country: "Switzerland",
      ranking: "#8 Europe",
      tuition: "CHF 730/year",
      programs: ["Engineering", "Science", "Mathematics"],
      acceptance: "27%"
    },
    {
      id: "toronto",
      name: "University of Toronto",
      country: "Canada",
      ranking: "#1 Canada",
      tuition: "CAD 58,000/year",
      programs: ["Data Science", "AI", "Engineering"],
      acceptance: "43%"
    },
    {
      id: "nus",
      name: "National University of Singapore",
      country: "Singapore",
      ranking: "#1 Asia",
      tuition: "SGD 37,000/year",
      programs: ["Business", "Computing", "Engineering"],
      acceptance: "5%"
    },
    {
      id: "melbourne",
      name: "University of Melbourne",
      country: "Australia",
      ranking: "#1 Australia",
      tuition: "AUD 45,000/year",
      programs: ["Medicine", "Engineering", "Arts"],
      acceptance: "70%"
    }
  ];

  return (
    <div className="min-h-screen premium-bg">
      <AnimatedBackground />
      <SplineFloatingElements intensity={0.3} />
      <PatternBackground pattern="grid" intensity={0.03} />
      
      <div className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <motion.h1 
              className="text-5xl font-bold mb-4 text-foreground"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Find Your Perfect <span className="text-gradient">University</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Explore top universities worldwide and find the perfect match for your academic goals
            </motion.p>
          </motion.div>

          {/* Search Bar */}
          <motion.div 
            className="glass-card p-6 rounded-2xl mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex gap-4 flex-col md:flex-row">
              <div className="flex-1 relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                </motion.div>
                <Input
                  placeholder="Search by university name or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 rounded-full border-2 focus:border-primary transition-colors"
                />
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="h-12 px-8 rounded-full btn-primary-custom">
                  Search
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Universities Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {universities.map((uni, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  delay: 0.6 + index * 0.1, 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { duration: 0.2 }
                }}
                className="glass-card p-6 rounded-2xl group cursor-pointer relative overflow-hidden"
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                />
                
                {/* 3D University Scene */}
                <div className="mb-4 relative z-10">
                  <div className="h-32 mb-4 rounded-xl overflow-hidden">
                    <SplineUniversity 
                      className="h-full w-full" 
                      interactive={true}
                    />
                  </div>
                  
                  <div className="flex items-start justify-between mb-2">
                    <motion.h3 
                      className="text-xl font-bold text-foreground group-hover:text-primary transition-colors"
                      whileHover={{ scale: 1.02 }}
                    >
                      {uni.name}
                    </motion.h3>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Badge variant="secondary" className="ml-2">
                        {uni.ranking}
                      </Badge>
                    </motion.div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    >
                      <MapPin className="h-4 w-4" />
                    </motion.div>
                    <span className="text-sm">{uni.country}</span>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-3 mb-4 relative z-10">
                  <motion.div 
                    className="flex items-center gap-2"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    >
                      <DollarSign className="h-4 w-4 text-primary" />
                    </motion.div>
                    <span className="text-sm font-medium">{uni.tuition}</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-2"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 + 0.5 }}
                    >
                      <GraduationCap className="h-4 w-4 text-primary" />
                    </motion.div>
                    <span className="text-sm">Acceptance: {uni.acceptance}</span>
                  </motion.div>
                </div>

                {/* Programs */}
                <div className="mb-4 relative z-10">
                  <p className="text-sm font-medium mb-2">Popular Programs:</p>
                  <div className="flex flex-wrap gap-2">
                    {uni.programs.map((program, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.8 + index * 0.1 + idx * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        <Badge variant="outline" className="text-xs">
                          {program}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <Link to={`/universities/${uni.id}`} className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="w-full rounded-full group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        Learn More
                      </motion.span>
                    </Button>
                  </motion.div>
                </Link>
                
                {/* Floating particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-60"
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
                        delay: i * 0.5,
                        repeat: Infinity,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="glass-card p-12 rounded-2xl mt-16 text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            <div className="relative z-10">
              <motion.h2 
                className="text-3xl font-bold mb-4 text-foreground"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
              >
                Need Help Choosing?
              </motion.h2>
              <motion.p 
                className="text-muted-foreground mb-6 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
              >
                Our expert counselors can help you find universities that match your profile, 
                budget, and career goals. Get personalized recommendations today.
              </motion.p>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="rounded-full px-8 btn-primary-custom">
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    Talk to a Counselor
                  </motion.span>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Universities;