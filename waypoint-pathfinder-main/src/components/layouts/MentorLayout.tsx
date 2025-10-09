import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { LayoutDashboard, Users, Calendar, MessageCircle, User, Clock, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface MentorLayoutProps {
  children: ReactNode;
}

const MentorLayout = ({ children }: MentorLayoutProps) => {
  const location = useLocation();

  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/mentor/dashboard" },
    { icon: Users, label: "Students", path: "/mentor/students" },
    { icon: Calendar, label: "Sessions", path: "/mentor/sessions" },
    { icon: Clock, label: "Availability", path: "/mentor/availability" },
    { icon: MessageCircle, label: "Messages", path: "/mentor/messages" },
    { icon: User, label: "Profile", path: "/mentor/profile" }
  ];

  return (
    <div className="min-h-screen premium-bg">
      <div className="flex">
        <motion.aside initial={{ x: -300 }} animate={{ x: 0 }} className="fixed left-0 top-0 h-full w-64 glass-nav p-6 z-50">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gradient">Waypoint</h2>
            <p className="text-sm text-muted-foreground">Mentor Portal</p>
          </div>
          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link key={item.path} to={item.path}>
                  <motion.div className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive ? "bg-primary text-white" : "hover:bg-muted/50"}`} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                  </motion.div>
                </Link>
              );
            })}
          </nav>
        </motion.aside>

        <div className="flex-1 ml-64">
          <div className="flex">
            <main className="flex-1 p-6">{children}</main>
            <aside className="w-80 p-6 space-y-6">
              <Card className="glass-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <User className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold">Dr. Smith</h3>
                      <p className="text-sm text-muted-foreground">Career Mentor</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm font-medium">4.8 Rating</span>
                  </div>
                  <Badge variant="secondary">Premium Mentor</Badge>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorLayout;