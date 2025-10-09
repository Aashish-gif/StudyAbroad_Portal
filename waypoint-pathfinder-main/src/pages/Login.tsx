import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, EyeOff, Mail, Lock, User, BookOpen, Users, Plane, Globe, GraduationCap, Compass, Landmark, MapPin, Briefcase, School, Award, Building2, Rocket, Map, Flag } from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState<"student" | "mentor" | "consultant">("student");
  const [formData, setFormData] = useState<{ password: string }>({ password: "" });

  const roles = [
    {
      id: "student" as const,
      title: "Student",
      description: "Access courses and mentorship",
      icon: BookOpen,
      color: "from-blue-500 to-purple-600"
    },
    {
      id: "mentor" as const,
      title: "Mentor",
      description: "Guide and support students",
      icon: Users,
      color: "from-green-500 to-blue-600"
    },
    {
      id: "consultant" as const,
      title: "Consultant",
      description: "Provide expert consultation",
      icon: User,
      color: "from-purple-500 to-pink-600"
    }
  ];

  const handleLogin = () => {
    // Redirect based on role
    const routes = {
      student: "/",
      mentor: "/mentor/dashboard",
      consultant: "/consultant/dashboard"
    };
    window.location.href = routes[selectedRole];
  };

  return (
    <div className="min-h-screen premium-bg relative overflow-hidden flex items-center justify-center p-6">
      {/* Decorative study-abroad icons */}
      <motion.div
        className="pointer-events-none absolute -top-10 -left-10 opacity-20"
        initial={{ rotate: -10, scale: 0.9 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Plane className="h-24 w-24 text-primary" />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute top-10 right-10 opacity-20"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Globe className="h-20 w-20 text-accent" />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute bottom-10 left-10 opacity-20"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <GraduationCap className="h-20 w-20 text-primary" />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute -bottom-6 right-20 opacity-20"
        initial={{ rotate: 10, scale: 0.9 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <BookOpen className="h-24 w-24 text-accent" />
      </motion.div>

      {/* Extra floating icons for immersive feel */}
      <motion.div className="pointer-events-none absolute top-28 left-1/4 opacity-20" animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }}>
        <Landmark className="h-12 w-12" />
      </motion.div>
      <motion.div className="pointer-events-none absolute top-1/3 right-1/3 opacity-20" animate={{ y: [0, 12, 0] }} transition={{ duration: 3.5, repeat: Infinity, delay: 0.4 }}>
        <MapPin className="h-10 w-10" />
      </motion.div>
      <motion.div className="pointer-events-none absolute bottom-24 right-1/4 opacity-20" animate={{ y: [0, -8, 0] }} transition={{ duration: 3.2, repeat: Infinity, delay: 0.6 }}>
        <Briefcase className="h-12 w-12" />
      </motion.div>
      <motion.div className="pointer-events-none absolute bottom-1/3 left-1/3 opacity-20" animate={{ y: [0, 10, 0] }} transition={{ duration: 4.2, repeat: Infinity, delay: 0.2 }}>
        <School className="h-12 w-12" />
      </motion.div>
      <motion.div className="pointer-events-none absolute top-1/4 right-8 opacity-20" animate={{ y: [0, -12, 0] }} transition={{ duration: 3.8, repeat: Infinity, delay: 0.8 }}>
        <Award className="h-10 w-10" />
      </motion.div>
      <motion.div className="pointer-events-none absolute bottom-10 left-1/5 opacity-20" animate={{ y: [0, 14, 0] }} transition={{ duration: 4.6, repeat: Infinity, delay: 0.5 }}>
        <Building2 className="h-12 w-12" />
      </motion.div>
      <motion.div className="pointer-events-none absolute top-6 left-1/2 opacity-20" animate={{ y: [0, -10, 0] }} transition={{ duration: 3.6, repeat: Infinity }}>
        <Map className="h-10 w-10" />
      </motion.div>
      <motion.div className="pointer-events-none absolute bottom-1/4 right-8 opacity-20" animate={{ y: [0, -10, 0] }} transition={{ duration: 4.1, repeat: Infinity }}>
        <Flag className="h-10 w-10" />
      </motion.div>

      {/* Animated planes flying across the screen */}
      <motion.div
        className="pointer-events-none absolute top-24 left-[-10%] text-primary/80"
        animate={{ x: ['-10%', '110%'] , y: [0, -10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
      >
        <Plane className="h-8 w-8" />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute top-1/2 left-[-15%] text-accent/80"
        animate={{ x: ['-15%', '115%'], y: [0, 8, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear', delay: 2 }}
      >
        <Rocket className="h-7 w-7" />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute bottom-24 left-[-12%] text-primary/70"
        animate={{ x: ['-12%', '112%'], y: [0, -6, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'linear', delay: 4 }}
      >
        <Plane className="h-7 w-7" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <Card className="glass-card relative overflow-hidden">
          {/* subtle compass glow */}
          <motion.div
            className="absolute -top-8 -right-8 opacity-10"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Compass className="h-40 w-40" />
          </motion.div>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-gradient">Welcome Back</CardTitle>
            <CardDescription>Sign in to your Waypoint account</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Icon belt to make it lively */}
            <div className="flex items-center justify-center gap-4 opacity-80">
              <Plane className="h-5 w-5" />
              <Globe className="h-5 w-5" />
              <School className="h-5 w-5" />
              <Landmark className="h-5 w-5" />
              <Award className="h-5 w-5" />
              <MapPin className="h-5 w-5" />
            </div>
            {/* Role Selection */}
            <div className="space-y-3">
              <Label>I am a:</Label>
              <div className="grid grid-cols-3 gap-2">
                {roles.map((role) => {
                  const Icon = role.icon;
                  return (
                    <motion.button
                      key={role.id}
                      onClick={() => setSelectedRole(role.id)}
                      className={`p-3 rounded-xl border-2 transition-all ${
                        selectedRole === role.id
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Icon className="h-5 w-5 mx-auto mb-1" />
                      <div className="text-xs font-medium">{role.title}</div>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>

              <TabsContent value="login" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input id="email" type="email" placeholder="Enter your email" className="pl-10" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                      className="pl-10 pr-10 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <Button onClick={handleLogin} className="w-full btn-primary-custom">
                  Sign In as {roles.find(r => r.id === selectedRole)?.title}
                </Button>
              </TabsContent>

              <TabsContent value="signup" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signupEmail">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input id="signupEmail" type="email" placeholder="Enter your email" className="pl-10" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signupPassword">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="signupPassword"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a password"
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                      className="pl-10 pr-10 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <Button onClick={handleLogin} className="w-full btn-primary-custom">
                  Create {roles.find(r => r.id === selectedRole)?.title} Account
                </Button>
              </TabsContent>
            </Tabs>

            <div className="text-center text-sm text-muted-foreground">
              <Link to="/forgot-password" className="hover:text-primary">
                Forgot your password?
              </Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Login;
