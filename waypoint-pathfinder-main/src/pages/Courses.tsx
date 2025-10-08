import { BookOpen, Code, Briefcase, Beaker, Heart, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";

const Courses = () => {
  const categories = [
    {
      icon: Code,
      title: "Computer Science & IT",
      courses: ["Artificial Intelligence", "Data Science", "Software Engineering", "Cybersecurity"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Briefcase,
      title: "Business & Management",
      courses: ["MBA", "Finance", "Marketing", "Entrepreneurship"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Beaker,
      title: "Science & Engineering",
      courses: ["Mechanical Engineering", "Biotechnology", "Physics", "Chemistry"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Heart,
      title: "Medicine & Health",
      courses: ["Medicine", "Nursing", "Public Health", "Pharmacy"],
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Palette,
      title: "Arts & Design",
      courses: ["Graphic Design", "Fine Arts", "Architecture", "Fashion Design"],
      color: "from-amber-500 to-yellow-500"
    },
    {
      icon: BookOpen,
      title: "Humanities & Social Sciences",
      courses: ["Psychology", "Sociology", "Economics", "Political Science"],
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h1 className="text-5xl font-bold mb-4 text-foreground">
            Explore <span className="text-primary">Courses</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover thousands of courses across diverse fields. Find your passion and 
            build the skills that will shape your future career.
          </p>
        </div>

        {/* Course Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl hover:shadow-xl transition-all duration-300 slide-in-right"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-14 w-14 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}>
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{category.title}</h3>
                <ul className="space-y-2 mb-4">
                  {category.courses.map((course, idx) => (
                    <li key={idx} className="text-muted-foreground flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      {course}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full rounded-full">
                  View All Courses
                </Button>
              </div>
            );
          })}
        </div>

        {/* Popular Courses Section */}
        <div className="glass-card p-12 rounded-2xl mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Most Popular Courses</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "MBA in Finance",
              "Master's in AI",
              "Bachelor's in CS",
              "MS in Data Science",
              "Medicine (MBBS)",
              "Master's in Psychology",
              "Engineering",
              "Digital Marketing"
            ].map((course, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-secondary p-6 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <h4 className="font-bold text-foreground mb-2">{course}</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Top universities offering this program
                </p>
                <Button size="sm" variant="ghost" className="text-primary">
                  Learn More →
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center glass-card p-12 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Not Sure Which Course to Choose?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Take our AI-powered assessment to discover courses that align with your 
            interests, skills, and career aspirations.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="rounded-full px-8">
              Take Assessment
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8">
              Talk to Counselor
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;