import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, MessageCircle, Users, Target, Brain, Sparkles, TrendingUp, Award, Globe, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getSession } from "@/utils/auth";

const StudentDashboard = () => {
  const user = getSession();
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const quickActions = [
    { title: "AI SOP Writer", description: "Generate your Statement of Purpose", icon: Brain, color: "from-purple-500 to-pink-500", path: "/student/sop-writer" },
    { title: "AI Chatbot", description: "Get instant answers", icon: MessageCircle, color: "from-blue-500 to-cyan-500", path: "/student/chatbot" },
    { title: "College Finder", description: "Find your perfect match", icon: Target, color: "from-green-500 to-emerald-500", path: "/student/colleges" },
    { title: "Free Resources", description: "Access study materials", icon: BookOpen, color: "from-orange-500 to-red-500", path: "/student/resources" },
    { title: "Find Mentors", description: "Connect with experts", icon: Users, color: "from-indigo-500 to-purple-500", path: "/student/mentors" },
    { title: "Consultants", description: "Professional guidance", icon: Award, color: "from-pink-500 to-rose-500", path: "/student/consultants" }
  ];

  const stats = [
    { label: "Applications", value: "3", icon: Globe, color: "text-blue-500" },
    { label: "Mentors", value: "2", icon: Users, color: "text-green-500" },
    { label: "Resources", value: "15", icon: BookOpen, color: "text-purple-500" },
    { label: "Progress", value: "78%", icon: TrendingUp, color: "text-orange-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-6">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full blur-2xl opacity-10 ${
              i % 3 === 0 ? 'bg-cyan-500' : i % 3 === 1 ? 'bg-pink-500' : 'bg-yellow-500'
            }`}
            style={{
              width: `${100 + i * 20}px`,
              height: `${100 + i * 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 50, -50, 0],
              y: [0, -50, 50, 0],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <motion.div
              className="h-16 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-8 w-8 text-white" />
            </motion.div>
            <div>
              <h1 className="text-4xl font-bold text-white">Welcome back, {user?.name || 'Student'}! 🎓</h1>
              <p className="text-purple-200">Ready to take the next step in your journey?</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.1 }} whileHover={{ scale: 1.05, y: -5 }}>
                <Card className="backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all">
                  <CardContent className="p-4 text-center">
                    <Icon className={`h-8 w-8 mx-auto mb-2 ${stat.color}`} />
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-purple-200">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setActiveCard(index)}
                onHoverEnd={() => setActiveCard(null)}
                whileHover={{ scale: 1.05, y: -10 }}
                className="cursor-pointer"
              >
                <Card className="backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all h-full relative overflow-hidden">
                  <motion.div className={`absolute inset-0 bg-gradient-to-br ${action.color} opacity-0 hover:opacity-10 transition-opacity`} animate={activeCard === index ? { opacity: 0.1 } : { opacity: 0 }} />
                  <CardHeader className="relative z-10">
                    <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center mb-4`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-white">{action.title}</CardTitle>
                    <CardDescription className="text-purple-200">{action.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <Button className={`w-full bg-gradient-to-r ${action.color} hover:opacity-90 text-white border-0`} onClick={() => window.location.href = action.path}>
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;