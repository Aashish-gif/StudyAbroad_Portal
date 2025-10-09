import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { buildUniversityNameToSlug } from "./universitiesList";
import { BookOpen, Code, Briefcase, Beaker, Heart, Palette, GraduationCap, Clock, CheckCircle2, University } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Courses = () => {
  const navigate = useNavigate();
  const [activeCourse, setActiveCourse] = useState<any | null>(null);
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

  const detailedCourses: Array<{
    category: string;
    title: string;
    level: string;
    duration: string;
    overview: string;
    bestUniversities: string[];
    requirements: string[];
    outcomes: string[];
  }> = [
    {
      category: "Computer Science & IT",
      title: "Computer Science & IT",
      level: "Bachelors / Masters",
      duration: "3-4 years (BSc/BS), 1-2 years (MS/MSc)",
      overview: "Core computing foundations including algorithms, systems, databases, networking, and software development.",
      bestUniversities: ["MIT", "Stanford", "Carnegie Mellon", "ETH Zurich", "University of Oxford"],
      requirements: [
        "Strong math background (Calculus, Discrete Math)",
        "High school transcripts or undergraduate degree (for Masters)",
        "English proficiency (IELTS/TOEFL)",
        "GRE recommended for some programs",
      ],
      outcomes: ["Software Engineer", "Systems Engineer", "Product Engineer", "Technical Consultant"],
    },
    {
      category: "Computer Science & IT",
      title: "Artificial Intelligence",
      level: "Masters / Specialization",
      duration: "1-2 years (MS/MSc)",
      overview: "Machine learning, deep learning, NLP, computer vision, and responsible AI systems.",
      bestUniversities: ["Stanford", "CMU", "University of Toronto", "University of Oxford", "NUS"],
      requirements: [
        "Solid CS/Math foundation (Linear Algebra, Probability)",
        "Programming proficiency (Python)",
        "Relevant projects/publications strengthen application",
      ],
      outcomes: ["Machine Learning Engineer", "Research Scientist", "Data Scientist", "AI Product Engineer"],
    },
    {
      category: "Computer Science & IT",
      title: "Data Science",
      level: "Masters / PG Diploma",
      duration: "1-2 years",
      overview: "Statistics, data engineering, analytics, and ML for decision-making and predictive modeling.",
      bestUniversities: ["University of California, Berkeley", "Imperial College London", "ETH Zurich", "CMU", "University of Melbourne"],
      requirements: [
        "Background in CS/Math/Engineering or related field",
        "Statistics and programming (Python/R)",
        "English proficiency (IELTS/TOEFL)",
      ],
      outcomes: ["Data Scientist", "Data Analyst", "ML Engineer", "Analytics Consultant"],
    },
    {
      category: "Computer Science & IT",
      title: "Software Engineering",
      level: "Bachelors / Masters",
      duration: "3-4 years (UG), 1-2 years (PG)",
      overview: "Software design, architecture, testing, DevOps, and large-scale systems engineering.",
      bestUniversities: ["University of Illinois Urbana-Champaign", "University of Cambridge", "Georgia Tech", "University of Toronto", "TUM"],
      requirements: [
        "Math and programming background",
        "Project portfolio or internships are a plus",
        "Statement of Purpose and recommendation letters",
      ],
      outcomes: ["Backend Engineer", "Full-Stack Engineer", "SRE", "DevOps Engineer"],
    },
    {
      category: "Computer Science & IT",
      title: "Cybersecurity",
      level: "Masters / Certificate",
      duration: "1-2 years",
      overview: "Network security, cryptography, threat modeling, incident response, and cloud security.",
      bestUniversities: ["Carnegie Mellon", "University of Maryland", "ETH Zurich", "KU Leuven", "NTU Singapore"],
      requirements: [
        "CS/IT background with networking basics",
        "Security certifications help (e.g., Security+)",
        "English proficiency (IELTS/TOEFL)",
      ],
      outcomes: ["Security Engineer", "SOC Analyst", "Application Security", "Cloud Security Engineer"],
    },
    {
      category: "Business & Management",
      title: "MBA",
      level: "Masters",
      duration: "1-2 years",
      overview: "Leadership, strategy, finance, marketing, and operations with global immersion options.",
      bestUniversities: ["Harvard Business School", "Stanford GSB", "Wharton", "INSEAD", "London Business School"],
      requirements: [
        "Bachelor's degree and 2-5 years work experience",
        "GMAT/GRE (program dependent)",
        "Essays, recommendations, and interviews",
      ],
      outcomes: ["Product Manager", "Consultant", "Investment Banking", "Entrepreneur"],
    },
    {
      category: "Business & Management",
      title: "Finance",
      level: "Masters",
      duration: "1-2 years",
      overview: "Corporate finance, markets, risk, quantitative modeling, and fintech applications.",
      bestUniversities: ["MIT Sloan", "London School of Economics", "Princeton", "Columbia", "HEC Paris"],
      requirements: ["Math/quant background", "GMAT/GRE (often required)", "Strong quantitative skills"],
      outcomes: ["Financial Analyst", "Risk Analyst", "Quant", "Corporate Finance"],
    },
    {
      category: "Science & Engineering",
      title: "Mechanical Engineering",
      level: "Bachelors / Masters",
      duration: "3-4 years (UG), 1-2 years (PG)",
      overview: "Mechanics, design, manufacturing, robotics, and energy systems.",
      bestUniversities: ["MIT", "Georgia Tech", "ETH Zurich", "TU Munich", "University of Michigan"],
      requirements: ["Physics & Math foundation", "Portfolio/projects recommended", "English proficiency"],
      outcomes: ["Design Engineer", "Manufacturing Engineer", "Robotics Engineer"],
    },
    {
      category: "Medicine & Health",
      title: "Medicine",
      level: "Bachelors/MD",
      duration: "4-6 years + residency",
      overview: "Pre-clinical sciences, clinical rotations, and specialization pathways.",
      bestUniversities: ["Harvard", "Oxford", "Stanford", "Karolinska Institute", "Johns Hopkins"],
      requirements: ["Biology/Chemistry/Physics", "Admissions tests (e.g., MCAT/UCAT/BMAT)", "Clinical exposure preferred"],
      outcomes: ["Physician", "Surgeon", "Researcher"],
    },
    {
      category: "Arts & Design",
      title: "Architecture",
      level: "Bachelors / Masters",
      duration: "3-5 years (UG), 1-2 years (PG)",
      overview: "Architectural design, urban planning, sustainability, and digital fabrication.",
      bestUniversities: ["MIT", "ETH Zurich", "UCL (Bartlett)", "TU Delft", "Harvard GSD"],
      requirements: ["Portfolio", "Math/Physics basics", "English proficiency"],
      outcomes: ["Architect", "Urban Designer", "Sustainability Consultant"],
    },
  ];

  const uniSlugByName: Record<string, string> = buildUniversityNameToSlug();

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

        {/* Explore Featured Courses (moved under header) */}
        <div className="glass-card p-12 rounded-2xl mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Featured Courses</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {detailedCourses.map((item, index) => (
              <div key={`${item.title}-${index}`} className="bg-gradient-to-br from-white to-secondary p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="text-xs uppercase tracking-wide text-primary mb-1">{item.category}</div>
                    <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                  </div>
                  <Badge variant="secondary">{item.level}</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-6 line-clamp-3">{item.overview}</p>
                <Button size="sm" className="rounded-full w-full" onClick={() => setActiveCourse(item)}>View More</Button>
              </div>
            ))}
          </div>
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
                       <span>{course}</span>
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

        {/* Course Detail Dialog */}
        <Dialog open={!!activeCourse} onOpenChange={(o) => !o && setActiveCourse(null)}>
          <DialogContent className="bg-white border border-gray-200 text-gray-900 max-w-2xl">
            {activeCourse && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl text-gray-900">{activeCourse.title}</DialogTitle>
                  <DialogDescription className="text-gray-600">{activeCourse.category} • {activeCourse.level || 'Course Overview'}</DialogDescription>
                </DialogHeader>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-sm font-medium mb-2 flex items-center gap-2"><University className="h-4 w-4 text-primary" /> Top Universities</div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {(activeCourse.bestUniversities || [])
                        .filter((u: string) => !!uniSlugByName[u])
                        .map((u: string) => (
                          <Button
                            key={u}
                            variant="outline"
                            size="sm"
                            className="rounded-full"
                            onClick={() => {
                              const slug = uniSlugByName[u];
                              setActiveCourse(null);
                              navigate(`/universities/${slug}`);
                            }}
                          >
                            {u}
                          </Button>
                        ))}
                    </div>
                    <div className="text-sm font-medium mb-2 flex items-center gap-2"><GraduationCap className="h-4 w-4 text-primary" /> Requirements</div>
                    <ul className="space-y-1">
                      {(activeCourse.requirements || []).map((req: string, i: number) => (
                        <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-2 flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> Duration</div>
                    <p className="text-sm text-gray-700 mb-4">{activeCourse.duration || 'Varies by university'}</p>
                    <div className="text-sm font-medium mb-2 flex items-center gap-2"><BookOpen className="h-4 w-4 text-primary" /> Outcomes</div>
                    <div className="flex flex-wrap gap-2">
                      {(activeCourse.outcomes || []).map((o: string) => (
                        <Badge key={o} className="bg-gradient-to-r from-primary to-purple-600 text-white">{o}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Courses;