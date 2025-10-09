import { motion } from "framer-motion";
import { Users, Target, Award, Heart } from "lucide-react";
import SplineAbout from "@/components/SplineAbout";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To make studying abroad accessible and transparent by connecting students, consultants, and mentors on one trusted platform.",
    },
    {
      icon: Users,
      title: "Three Panels System",
      description:
        "PathBridge is built around three panels — Student, Consultant, and Mentor — that work together to provide complete study abroad support.",
    },
    {
      icon: Award,
      title: "Real Guidance",
      description:
        "Students can directly talk with alumni who are already studying in their dream colleges to get real insights and guidance.",
    },
    {
      icon: Heart,
      title: "Free & Student-First",
      description:
        "Many of our services are completely free because we believe every student deserves access to the right guidance.",
    },
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
                About <span className="text-gradient">PathBridge</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Every student dreams of studying abroad — to explore new
                opportunities, gain world-class education, and build a brighter
                future. But many students face challenges such as lack of proper
                guidance, misinformation, or high consultancy costs.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                <span className="font-semibold text-primary">PathBridge</span> was
                created to solve this problem. We bring the entire study-abroad
                ecosystem online — connecting students, consultants, and mentors
                on one trusted digital platform.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Unlike traditional offline consultancy,{" "}
                <span className="font-semibold text-primary">PathBridge</span>{" "}
                allows students to connect directly with verified consultants
                online, get instant support, and access premium resources without
                visiting any office.
              </p>
            </motion.div>

            <motion.div
              className="h-96 lg:h-[500px]"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                type: "spring",
                stiffness: 100,
              }}
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
            { number: "95%", label: "Success Rate" },
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
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 },
              }}
              viewport={{ once: true }}
            >
              <motion.div
                className="text-4xl font-bold text-primary mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  delay: index * 0.1 + 0.3,
                  type: "spring",
                  stiffness: 200,
                }}
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
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            What We Stand For
          </h2>
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
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-secondary to-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-foreground">
            Our Story
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              PathBridge was built by a team that understood how difficult it can
              be to study abroad without the right support. We saw students
              struggling to get trusted advice, wasting money on offline agents,
              and missing opportunities due to a lack of genuine guidance.
            </p>
            <p>
              That’s why we decided to bring everything online — so that students
              can connect with verified consultants, experienced mentors, and
              real alumni who have already achieved what they dream of.
            </p>
            <p>
              With PathBridge, students can get free support, learn from alumni
              of their dream colleges, and make smarter, faster, and more
              confident decisions for their future. Our goal is to make global
              education accessible to every dreamer, no matter where they come
              from.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
