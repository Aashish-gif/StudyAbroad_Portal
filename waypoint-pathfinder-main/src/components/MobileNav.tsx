import { Link, useLocation } from "react-router-dom";
import { Home, Building2, BookOpen, GraduationCap, Compass, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/about", label: "About Us", icon: Building2 },
    { path: "/universities", label: "Universities", icon: GraduationCap },
    { path: "/courses", label: "Courses", icon: BookOpen },
    { path: "/test-prep", label: "Test Prep", icon: BookOpen },
    { path: "/career-counseling", label: "Career Counseling", icon: Compass },
    { path: "/study-abroad", label: "Study Abroad", icon: GraduationCap },
    { path: "/resources", label: "Resources", icon: BookOpen },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="lg:hidden fixed top-0 left-0 right-0 z-50 glass-nav p-4">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <GraduationCap className="h-5 w-5 text-white" />
          </div>
          <h1 className="text-xl font-bold text-foreground">Waypoint</h1>
        </Link>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-6">
            <div className="space-y-2 mt-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                      isActive(item.path)
                        ? "bg-primary text-white shadow-md"
                        : "text-foreground hover:bg-secondary/50"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default MobileNav;