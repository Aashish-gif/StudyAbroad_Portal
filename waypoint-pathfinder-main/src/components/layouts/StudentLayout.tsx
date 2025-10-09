import { ReactNode } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { LayoutDashboard, User, MessageCircle, BookOpen, Users, Target, Brain, Award, LogOut, Home } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getSession, clearSession } from "@/utils/auth";

interface StudentLayoutProps {
  children: ReactNode;
}

const StudentLayout = ({ children }: StudentLayoutProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = getSession();

  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/student/dashboard" },
    { icon: User, label: "Profile", path: "/student/profile" },
    { icon: Brain, label: "AI SOP Writer", path: "/student/sop-writer" },
    { icon: MessageCircle, label: "AI Chatbot", path: "/student/chatbot" },
    { icon: Target, label: "College Finder", path: "/student/colleges" },
    { icon: BookOpen, label: "Resources", path: "/student/resources" },
    { icon: Users, label: "Mentors", path: "/student/mentors" },
    { icon: Award, label: "Consultants", path: "/student/consultants" }
  ];

  const handleLogout = () => {
    clearSession();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="flex">
        <motion.aside initial={{ x: -300 }} animate={{ x: 0 }} className="fixed left-0 top-0 h-full w-64 backdrop-blur-xl bg-white/10 border-r border-white/20 p-6 z-50">
          <div className="mb-8">
            <Link to="/" className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center">
                <Home className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">PathBridge</h2>
                <p className="text-xs text-purple-200">Student Portal</p>
              </div>
            </Link>
          </div>
          
          <nav className="space-y-2 mb-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link key={item.path} to={item.path}>
                  <motion.div className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white" : "text-purple-200 hover:bg-white/10"}`} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                  </motion.div>
                </Link>
              );
            })}
          </nav>

          <div className="absolute bottom-6 left-6 right-6">
            <Card className="backdrop-blur-xl bg-white/10 border border-white/20 mb-4">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 flex items-center justify-center">
                    <User className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">{user?.name}</h4>
                    <p className="text-xs text-purple-200">{user?.email}</p>
                  </div>
                </div>
                <Badge className="bg-gradient-to-r from-green-400 to-blue-500 text-white">Active Student</Badge>
              </CardContent>
            </Card>
            <Button onClick={handleLogout} variant="outline" className="w-full border-white/20 text-purple-200 hover:bg-white/10">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </motion.aside>

        <main className="flex-1 ml-64">
          {children}
        </main>
      </div>
    </div>
  );
};

export default StudentLayout;