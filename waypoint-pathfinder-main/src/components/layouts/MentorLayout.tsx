import { ReactNode, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  MessageCircle, 
  User, 
  Clock, 
  Star, 
  LogOut, 
  Bell, 
  Settings, 
  BarChart3,
  GraduationCap,
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface MentorLayoutProps {
  children: ReactNode;
}

const MentorLayout = ({ children }: MentorLayoutProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);
  const [mentorName, setMentorName] = useState("Dr. Sarah Smith");
  const companyName = "Waypoint";

  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/mentor/dashboard" },
    { icon: Users, label: "Requests", path: "/mentor/requests" },
    { icon: Calendar, label: "Sessions", path: "/mentor/sessions" },
    { icon: Clock, label: "Availability", path: "/mentor/availability" },
    { icon: Star, label: "Feedback", path: "/mentor/feedback" },
    { icon: MessageCircle, label: "Messages", path: "/mentor/messages" },
    { icon: BarChart3, label: "Analytics", path: "/mentor/analytics" },
    { icon: User, label: "Profile", path: "/mentor/profile" }
  ];

  useEffect(() => {
    const savedData = sessionStorage.getItem('mentorData');
    if (savedData) {
      const data = JSON.parse(savedData);
      if (data.personalInfo?.firstName && data.personalInfo?.lastName) {
        setMentorName(`${data.personalInfo.firstName} ${data.personalInfo.lastName}`);
      }
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/landing');
  };

  const handleLogoClick = () => {
    navigate('/mentor/dashboard');
  };

  return (
    <div className="min-h-screen premium-bg">
      {/* Hoverable Sidebar */}
      <motion.aside
        initial={{ x: 0 }}
        animate={{ width: isSidebarHovered ? 256 : 80 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        onMouseEnter={() => setIsSidebarHovered(true)}
        onMouseLeave={() => setIsSidebarHovered(false)}
        className="fixed left-0 top-0 h-full glass-nav z-50 overflow-hidden"
      >
        <div className="p-4 h-full flex flex-col">
          {/* Logo */}
          <motion.button
            onClick={handleLogoClick}
            className="mb-8 flex items-center gap-3 cursor-pointer group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="h-12 w-12 min-w-[48px] rounded-2xl bg-gradient-to-br from-primary via-purple-500 to-accent flex items-center justify-center shadow-lg">
              <GraduationCap className="h-7 w-7 text-white" />
            </div>
            <AnimatePresence>
              {isSidebarHovered && (
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden whitespace-nowrap"
                >
                  <h2 className="text-xl font-bold text-gradient">Waypoint</h2>
                  <p className="text-xs text-muted-foreground">Mentor Portal</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Navigation */}
          <nav className="space-y-2 flex-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link key={item.path} to={item.path}>
                  <motion.div
                    className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all ${
                      isActive
                        ? "bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg"
                        : "hover:bg-muted/50"
                    }`}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon className="h-5 w-5 min-w-[20px]" />
                    <AnimatePresence>
                      {isSidebarHovered && (
                        <motion.span
                          initial={{ opacity: 0, width: 0 }}
                          animate={{ opacity: 1, width: "auto" }}
                          exit={{ opacity: 0, width: 0 }}
                          transition={{ duration: 0.2 }}
                          className="font-medium overflow-hidden whitespace-nowrap"
                        >
                          {item.label}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </Link>
              );
            })}
          </nav>
        </div>
      </motion.aside>

      {/* Main Content Area */}
      <div className={`transition-all duration-300 ${isSidebarHovered ? 'ml-64' : 'ml-20'}`}>
        {/* Top Navbar */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="sticky top-0 z-40 glass-nav border-b border-border/50"
        >
          <div className="flex items-center justify-between px-6 py-4">
            {/* Company Name */}
            <div className="flex items-center gap-4">
              <div>
                <h1 className="text-xl font-bold text-gradient">{companyName}</h1>
                <p className="text-sm text-muted-foreground">Mentorship Platform</p>
              </div>
            </div>

            {/* Right Side - Mentor Info & Profile */}
            <div className="flex items-center gap-4">
              {/* Mentor Name */}
              <div className="text-right hidden md:block">
                <p className="text-sm font-medium">{mentorName}</p>
                <p className="text-xs text-muted-foreground">Mentor</p>
              </div>

              {/* Notifications */}
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
              </Button>

              {/* Profile Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2">
                    <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <User className="h-5 w-5 text-white" />
                    </div>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>
                    <div>
                      <p className="font-medium">{mentorName}</p>
                      <p className="text-xs text-muted-foreground">mentor@waypoint.com</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate('/mentor/profile')}>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/mentor/settings')}>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </motion.div>

        {/* Page Content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default MentorLayout;