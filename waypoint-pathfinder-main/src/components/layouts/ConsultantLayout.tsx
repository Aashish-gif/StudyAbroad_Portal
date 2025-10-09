import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { LayoutDashboard, Upload, Users, MessageCircle, User, DollarSign, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ConsultantLayoutProps {
  children: ReactNode;
}

const ConsultantLayout = ({ children }: ConsultantLayoutProps) => {
  const location = useLocation();

  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/consultant/dashboard" },
    { icon: Upload, label: "Uploads", path: "/consultant/uploads" },
    { icon: Users, label: "Students", path: "/consultant/students" },
    { icon: MessageCircle, label: "Messages", path: "/consultant/messages" },
    { icon: DollarSign, label: "Earnings", path: "/consultant/earnings" },
    { icon: User, label: "Profile", path: "/consultant/profile" }
  ];

  return (
    <div className="min-h-screen premium-bg">
      <div className="flex">
        <motion.aside initial={{ x: -300 }} animate={{ x: 0 }} className="fixed left-0 top-0 h-full w-64 glass-nav p-6 z-50">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gradient">Waypoint</h2>
            <p className="text-sm text-muted-foreground">Consultant Portal</p>
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
                      <h3 className="font-bold">Sarah Johnson</h3>
                      <p className="text-sm text-muted-foreground">Career Consultant</p>
                    </div>
                  </div>
                  <Badge variant="secondary">Expert Consultant</Badge>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-4">This Month</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Revenue</span>
                      <span className="font-medium text-green-600">$1,250</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Downloads</span>
                      <span className="font-medium">47</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">New Students</span>
                      <span className="font-medium">12</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultantLayout;