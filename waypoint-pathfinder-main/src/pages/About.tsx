import { motion } from "framer-motion";
import { Users, Target, Award, Heart } from "lucide-react";
import SplineAbout from "@/components/SplineAbout";


const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower students worldwide with personalized guidance and resources for their academic journey."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Connect with experienced consultants and mentors who understand your aspirations."
    },
    {
      icon: Award,
      title: "Proven Success",
      description: "Thousands of students have achieved their dreams with our comprehensive support."
    },
    {
      icon: Heart,
      title: "Student-First",
      description: "Every decision we make is centered around what's best for our students' futures."
    }
  ];

  return (
    <div className="min-h-screen premium-bg">
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                About <span className="text-gradient">Waypoint</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                We're on a mission to make quality education accessible to everyone. 
                Waypoint is your trusted partner in navigating the complex world of higher education 
                and career planning.
              </p>
            </motion.div>
            
            <motion.div
              className="h-96 lg:h-[500px]"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8, type: "spring", stiffness: 100 }}
            >
              <SplineAbout className="h-full w-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section 
        className="py-16 px-6 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "10K+", label: "Students Guided" },
            { number: "500+", label: "Universities" },
            { number: "50+", label: "Countries" },
            { number: "95%", label: "Success Rate" }
          ].map((stat, index) => (
            <motion.div 
              key={index} 
              className="glass-card p-6 rounded-2xl text-center"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                transition: { duration: 0.2 }
              }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="text-4xl font-bold text-primary mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Values Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">What We Stand For</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index} 
                  className="glass-card p-8 rounded-2xl hover:shadow-xl transition-all duration-300 slide-in-right"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="h-14 w-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-secondary to-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-foreground">Our Story</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Waypoint was founded by a group of education enthusiasts who experienced firsthand 
              the challenges of navigating the complex landscape of higher education. We saw students 
              struggling to find the right information, connect with the right mentors, and make 
              informed decisions about their futures.
            </p>
            <p>
              Today, Waypoint has grown into a comprehensive platform that combines cutting-edge 
              AI technology with human expertise to provide personalized guidance at every step 
              of the education journey. From test preparation to university selection, from SOP 
              writing to career counseling, we're here to support students in achieving their dreams.
            </p>
            <p>
              Our platform connects students with experienced consultants, mentors, and a wealth 
              of resources, all designed to make the path to success clearer and more achievable. 
              We believe that every student deserves access to quality guidance, regardless of 
              their background or location.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;