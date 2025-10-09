import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star, Award, Users, Globe2, BookOpen, TrendingUp, Shield, Sparkles, Zap, GraduationCap, Brain, Target, Rocket, Heart, Crown } from "lucide-react";
import heroImage from "@/assets/hero-students.jpg";
import counselingImage from "@/assets/counseling-illustration.png";
import globalImage from "@/assets/global-education.png";
import AnimatedBackground from "@/components/AnimatedBackground";
import FloatingStats from "@/components/FloatingStats";
import FeatureCard from "@/components/FeatureCard";
import SplineHero from "@/components/SplineHero";
import SplineFloatingElements from "@/components/SplineFloatingElements";
import PatternBackground from "@/components/PatternBackground";
import ImageWithFallback from "@/components/ImageWithFallback";

const Index = () => {
  const stats = [
    { number: "10,000+", label: "Students Placed", icon: Users },
    { number: "500+", label: "Partner Universities", icon: Globe2 },
    { number: "50+", label: "Countries", icon: Globe2 },
    { number: "98%", label: "Success Rate", icon: TrendingUp }
  ];

  const features = [
    {
      icon: BookOpen,
      title: "Expert Guidance",
      description: "Get personalized counseling from industry experts with 15+ years of experience",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: Shield,
      title: "100% Transparency",
      description: "No hidden costs, complete visibility into the entire application process",
      gradient: "from-green-500 to-blue-600"
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "98% admission success rate across top global universities",
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  const services = [
    {
      title: "Career Counseling",
      description: "Discover your ideal career path with AI-powered assessments and expert guidance",
      link: "/career-counseling",
      image: counselingImage,
      icon: Brain
    },
    {
      title: "University Selection",
      description: "Find the perfect university match from 500+ institutions across 50+ countries",
      link: "/universities",
      image: globalImage,
      icon: GraduationCap
    },
    {
      title: "Test Preparation",
      description: "Ace GRE, GMAT, IELTS, TOEFL with comprehensive prep programs",
      link: "/test-prep",
      image: counselingImage,
      icon: Target
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      university: "Stanford University",
      quote: "Waypoint made my dream of studying at Stanford a reality. The guidance was exceptional!",
      rating: 5
    },
    {
      name: "Rahul Mehta",
      university: "MIT",
      quote: "From test prep to visa guidance, Waypoint supported me every step of the way.",
      rating: 5
    },
    {
      name: "Ananya Patel",
      university: "Oxford University",
      quote: "The counselors truly understood my goals and helped me craft a winning application.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen premium-bg">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full blur-3xl opacity-20 ${
              i % 3 === 0 ? 'bg-pink-500' : i % 3 === 1 ? 'bg-cyan-500' : 'bg-yellow-500'
            }`}
            style={{
              width: `${200 + i * 50}px`,
              height: `${200 + i * 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 100, -100, 0],
              y: [0, -100, 100, 0],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="section-padding container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="z-10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            >
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 border border-primary/20"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Award className="h-4 w-4" />
                </motion.div>
                <span className="text-sm font-semibold">Trusted by 10,000+ Students</span>
              </motion.div>
              
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-foreground"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Bridge Your Dreams to
                <motion.span 
                  className="block bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  Global Education
                </motion.span>
                with PathBridge
              </motion.h1>
              
              <motion.p 
                className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Connect with expert consultants, AI-powered tools, and dedicated mentors to make your study abroad dreams a reality. 🌟
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <Link to="/login">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full px-8 h-14 text-lg font-semibold shadow-2xl">
                      Start Your Journey
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <Rocket className="ml-2 h-5 w-5" />
                      </motion.div>
                    </Button>
                  </motion.div>
                </Link>
                <Link to="/about">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg font-semibold border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white">
                      Learn More
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-6 text-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                {[
                  "🎯 AI-Powered Matching",
                  "💬 24/7 Expert Support", 
                  "🏆 99% Success Rate"
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    >
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </motion.div>
                    <span className="font-medium text-foreground">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8, type: "spring", stiffness: 100 }}
            >
              <motion.div 
                className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]"
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <SplineHero />
                
                {/* Floating particles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white rounded-full opacity-60"
                    style={{
                      left: `${20 + i * 10}%`,
                      top: `${30 + i * 8}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.6, 1, 0.6],
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: 3,
                      delay: i * 0.3,
                      repeat: Infinity,
                    }}
                  />
                ))}
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl"
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <div className="flex items-center gap-3">
                  <motion.div 
                    className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    <Star className="h-6 w-6 text-white" />
                  </motion.div>
                  <div>
                    <motion.div 
                      className="text-2xl font-bold"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1, type: "spring", stiffness: 200 }}
                    >
                      4.9/5
                    </motion.div>
                    <div className="text-sm text-muted-foreground">Student Rating</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section 
        className="py-16 bg-gradient-to-br from-primary via-purple-600 to-accent text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        
        <div className="container-custom relative z-10">
          <FloatingStats />
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        className="section-padding bg-muted/30 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Why Choose <span className="text-gradient">Waypoint</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              India's most trusted study abroad platform with comprehensive end-to-end support
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
                gradient={feature.gradient}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for every step of your study abroad journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link key={index} to={service.link}>
                <div className="card-professional group cursor-pointer h-full">
                  <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                    <ImageWithFallback
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      fallbackIcon={
                        <div className="h-16 w-16 mx-auto mb-2 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                          <service.icon className="h-8 w-8 text-white" />
                        </div>
                      }
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center text-primary font-semibold group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Student <span className="text-primary">Success Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from students who achieved their dreams with Waypoint
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-professional">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-lg mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                <div className="border-t pt-4">
                  <div className="font-bold text-lg">{testimonial.name}</div>
                  <div className="text-primary font-semibold">{testimonial.university}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="card-professional text-center max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 hero-gradient opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Start Your <span className="text-primary">Study Abroad Journey?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Book a free consultation with our expert counselors and take the first step 
                towards your dream education.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/student/consultants">
                  <Button size="lg" className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white rounded-full px-10 h-16 text-lg font-semibold shadow-2xl">
                    Book Free Consultation
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="rounded-full px-10 h-16 text-lg font-semibold border-2">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
              <div className="mt-8 flex items-center justify-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Free Profile Evaluation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>No Hidden Charges</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 border-t">
        <div className="container-custom">
          <div className="text-center text-muted-foreground mb-8">
            <p className="font-semibold">Trusted by Students Worldwide</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {["Harvard", "Stanford", "MIT", "Oxford", "Cambridge", "Yale"].map((uni, index) => (
              <div key={index} className="text-xl font-bold">
                {uni}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;