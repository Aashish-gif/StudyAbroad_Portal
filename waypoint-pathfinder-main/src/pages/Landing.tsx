import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  Globe, 
  Award, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Star,
  MessageCircle
} from "lucide-react";

const LandingPage = () => {
  const features = [
    {
      icon: GraduationCap,
      title: "Top Universities",
      description: "Access to 500+ universities worldwide",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Expert Mentors",
      description: "Connect with experienced professionals",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: BookOpen,
      title: "Course Library",
      description: "Comprehensive test prep and courses",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Study opportunities in 50+ countries",
      color: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { value: "10K+", label: "Students Placed" },
    { value: "500+", label: "Universities" },
    { value: "95%", label: "Success Rate" },
    { value: "50+", label: "Countries" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Stanford University",
      image: "SJ",
      content: "Waypoint helped me get into my dream university. The mentors were incredibly supportive!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "MIT",
      image: "MC",
      content: "The test prep courses and career counseling made all the difference in my application.",
      rating: 5
    },
    {
      name: "Priya Patel",
      role: "Oxford University",
      image: "PP",
      content: "Amazing platform! The guidance I received was personalized and extremely helpful.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen premium-bg">
      {/* Header */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 glass-nav"
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary via-purple-500 to-accent flex items-center justify-center">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gradient">Waypoint</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="outline" className="rounded-full">Sign In</Button>
            </Link>
            <Link to="/login">
              <Button className="btn-primary-custom rounded-full">Get Started</Button>
            </Link>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                🎓 Your Gateway to Global Education
              </span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">Transform Your Future</span>
              <br />
              <span className="text-foreground">with Expert Guidance</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Connect with top universities worldwide, get personalized mentorship, 
              and achieve your academic dreams with Waypoint's comprehensive platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="btn-primary-custom text-lg px-8 py-6 rounded-full">
                    Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </Link>
              <Link to="/universities">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full">
                    Explore Universities
                  </Button>
                </motion.div>
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <Card className="glass-card text-center">
                  <CardContent className="p-6">
                    <h3 className="text-4xl font-bold text-gradient mb-2">{stat.value}</h3>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Why Choose Waypoint?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to succeed in your educational journey, all in one place.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="glass-card h-full hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">How It Works</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Start your journey in three simple steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Create Account", description: "Sign up and complete your profile", icon: Users },
              { step: "02", title: "Connect with Mentors", description: "Match with expert mentors in your field", icon: MessageCircle },
              { step: "03", title: "Achieve Success", description: "Get guidance and reach your goals", icon: Award }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  <Card className="glass-card">
                    <CardContent className="p-8 text-center">
                      <div className="text-6xl font-bold text-primary/20 mb-4">{item.step}</div>
                      <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                  {index < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="h-8 w-8 text-primary" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Success Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Hear from students who achieved their dreams with Waypoint
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass-card h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6">"{testimonial.content}"</p>
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <span className="text-white font-bold">{testimonial.image}</span>
                      </div>
                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card bg-gradient-to-br from-primary/10 via-purple-500/10 to-accent/10">
              <CardContent className="p-12 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-gradient">Ready to Start?</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Join thousands of students achieving their educational dreams
                </p>
                <Link to="/login">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" className="btn-primary-custom text-lg px-12 py-6 rounded-full">
                      Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </motion.div>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Waypoint</h3>
              <p className="text-sm text-muted-foreground">
                Your global education partner, helping students achieve their dreams.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/universities" className="block text-sm text-muted-foreground hover:text-primary">
                  Universities
                </Link>
                <Link to="/courses" className="block text-sm text-muted-foreground hover:text-primary">
                  Courses
                </Link>
                <Link to="/test-prep" className="block text-sm text-muted-foreground hover:text-primary">
                  Test Prep
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2">
                <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary">
                  About Us
                </Link>
                <Link to="/resources" className="block text-sm text-muted-foreground hover:text-primary">
                  Resources
                </Link>
                <Link to="/career-counseling" className="block text-sm text-muted-foreground hover:text-primary">
                  Career Counseling
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-sm text-muted-foreground">
                Email: support@waypoint.com<br />
                Phone: +1 (555) 123-4567
              </p>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 Waypoint. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
