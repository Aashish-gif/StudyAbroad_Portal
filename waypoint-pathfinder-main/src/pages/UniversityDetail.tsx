import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, DollarSign, GraduationCap, Users, Calendar, Award, Globe, BookOpen, Star, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import SplineUniversity from "@/components/SplineUniversity";
import SplineFloatingElements from "@/components/SplineFloatingElements";
import PatternBackground from "@/components/PatternBackground";
import AnimatedBackground from "@/components/AnimatedBackground";

const UniversityDetail = () => {
  const { universityId } = useParams();

  // Mock data - in a real app, this would come from an API
  const universities = {
    "stanford": {
      name: "Stanford University",
      country: "United States",
      city: "Stanford, California",
      ranking: "#3 Global",
      tuition: "$55,000/year",
      programs: ["Computer Science", "Engineering", "Business", "Medicine", "Law"],
      acceptance: "4%",
      founded: "1885",
      students: "17,000",
      description: "Stanford University is a private research university in Stanford, California. The campus occupies 8,180 acres, among the largest in the United States, and enrolls over 17,000 students. Stanford is ranked among the best universities in the world.",
      highlights: [
        "Silicon Valley location provides unparalleled tech opportunities",
        "World-class faculty including Nobel Prize winners",
        "Strong alumni network including Google, Yahoo, and Netflix founders",
        "Cutting-edge research facilities and laboratories"
      ],
      admissionRequirements: [
        "High school diploma or equivalent",
        "SAT/ACT scores (optional for 2024-2025)",
        "TOEFL/IELTS for international students",
        "Letters of recommendation",
        "Personal essays"
      ],
      scholarships: [
        "Need-based financial aid available",
        "Merit scholarships for exceptional students",
        "International student scholarships",
        "Research assistantships and fellowships"
      ],
      campusLife: [
        "800+ student organizations",
        "State-of-the-art athletic facilities",
        "Diverse dining options",
        "On-campus housing guaranteed for first-year students"
      ]
    },
    "oxford": {
      name: "University of Oxford",
      country: "United Kingdom",
      city: "Oxford, England",
      ranking: "#1 UK",
      tuition: "£28,000/year",
      programs: ["Law", "Medicine", "Philosophy", "History", "English Literature"],
      acceptance: "17%",
      founded: "1096",
      students: "24,000",
      description: "The University of Oxford is a collegiate research university in Oxford, England. There is evidence of teaching as early as 1096, making it the oldest university in the English-speaking world and the world's second-oldest university in continuous operation.",
      highlights: [
        "One of the oldest and most prestigious universities globally",
        "Tutorial system provides personalized education",
        "Beautiful historic campus with stunning architecture",
        "Strong tradition of academic excellence"
      ],
      admissionRequirements: [
        "A-levels or equivalent qualifications",
        "IELTS 7.0+ or TOEFL 100+",
        "Personal statement",
        "Academic references",
        "Admissions tests (varies by course)"
      ],
      scholarships: [
        "Rhodes Scholarships for international students",
        "Clarendon Scholarships",
        "Departmental scholarships",
        "College-specific funding"
      ],
      campusLife: [
        "39 colleges and 6 permanent private halls",
        "Rich cultural and social activities",
        "Historic libraries and museums",
        "Traditional dining halls and formal events"
      ]
    },
    "eth-zurich": {
      name: "ETH Zurich",
      country: "Switzerland",
      city: "Zurich, Switzerland",
      ranking: "#8 Europe",
      tuition: "CHF 730/year",
      programs: ["Engineering", "Science", "Mathematics", "Computer Science", "Architecture"],
      acceptance: "27%",
      founded: "1855",
      students: "22,000",
      description: "ETH Zurich is a public research university in the city of Zürich, Switzerland. Founded by the Swiss Federal Government in 1854 with the stated mission to educate engineers and scientists, the school focuses exclusively on science, technology, engineering and mathematics.",
      highlights: [
        "Extremely affordable tuition for world-class education",
        "Strong focus on STEM fields",
        "Excellent research opportunities",
        "Multilingual environment (German, English, French, Italian)"
      ],
      admissionRequirements: [
        "Swiss Matura or equivalent",
        "German language proficiency (C1 level)",
        "Mathematics and science prerequisites",
        "Entrance examination for some programs"
      ],
      scholarships: [
        "Swiss Government Excellence Scholarships",
        "ETH Excellence Scholarship",
        "Department-specific funding",
        "Research assistantships"
      ],
      campusLife: [
        "Modern campus with cutting-edge facilities",
        "Active student associations",
        "Proximity to Swiss Alps for outdoor activities",
        "International student community"
      ]
    },
    "toronto": {
      name: "University of Toronto",
      country: "Canada",
      city: "Toronto, Ontario",
      ranking: "#1 Canada",
      tuition: "CAD 58,000/year",
      programs: ["Data Science", "AI", "Engineering", "Medicine", "Business"],
      acceptance: "43%",
      founded: "1827",
      students: "97,000",
      description: "The University of Toronto is a public research university in Toronto, Ontario, Canada, located on the grounds that surround Queen's Park. It was founded by royal charter in 1827 as King's College, the first institution of higher learning in Upper Canada.",
      highlights: [
        "Leading research university in Canada",
        "Diverse and inclusive community",
        "Strong industry connections in tech and finance",
        "Beautiful campus in downtown Toronto"
      ],
      admissionRequirements: [
        "High school diploma with strong grades",
        "English proficiency (IELTS/TOEFL)",
        "Supplementary application for some programs",
        "Portfolio for creative programs"
      ],
      scholarships: [
        "Entrance scholarships for high achievers",
        "International student awards",
        "Need-based financial assistance",
        "Research and teaching assistantships"
      ],
      campusLife: [
        "Three campuses across Toronto",
        "800+ student clubs and organizations",
        "Varsity athletics and intramural sports",
        "Rich cultural diversity and events"
      ]
    },
    "nus": {
      name: "National University of Singapore",
      country: "Singapore",
      city: "Singapore",
      ranking: "#1 Asia",
      tuition: "SGD 37,000/year",
      programs: ["Business", "Computing", "Engineering", "Medicine", "Law"],
      acceptance: "5%",
      founded: "1905",
      students: "40,000",
      description: "The National University of Singapore is Singapore's flagship university, which offers a global approach to education and research, with a focus on Asian perspectives and expertise.",
      highlights: [
        "Gateway to Asia-Pacific opportunities",
        "Multicultural environment",
        "Strong industry partnerships",
        "Innovation and entrepreneurship focus"
      ],
      admissionRequirements: [
        "A-levels or equivalent",
        "English proficiency (IELTS 6.5+ or TOEFL 90+)",
        "Personal statement",
        "Academic achievements and extracurricular activities"
      ],
      scholarships: [
        "NUS Merit Scholarships",
        "ASEAN Undergraduate Scholarship",
        "International Student Scholarships",
        "Research scholarships"
      ],
      campusLife: [
        "Modern campus with state-of-the-art facilities",
        "Diverse student organizations",
        "Cultural festivals and events",
        "Easy access to Singapore's attractions"
      ]
    },
    "melbourne": {
      name: "University of Melbourne",
      country: "Australia",
      city: "Melbourne, Victoria",
      ranking: "#1 Australia",
      tuition: "AUD 45,000/year",
      programs: ["Medicine", "Engineering", "Arts", "Business", "Law"],
      acceptance: "70%",
      founded: "1853",
      students: "52,000",
      description: "The University of Melbourne is a public research university located in Melbourne, Australia. Founded in 1853, it is Australia's second oldest university and the oldest in Victoria.",
      highlights: [
        "Australia's leading research university",
        "Melbourne Model provides flexible degree structure",
        "Strong global rankings and reputation",
        "Beautiful campus in vibrant city"
      ],
      admissionRequirements: [
        "Australian Year 12 or equivalent",
        "English proficiency (IELTS 6.5+ or TOEFL 79+)",
        "Prerequisites vary by course",
        "Personal statement and references"
      ],
      scholarships: [
        "Melbourne International Undergraduate Scholarship",
        "Melbourne Access Scholarship",
        "Faculty-specific scholarships",
        "Research training program scholarships"
      ],
      campusLife: [
        "Historic campus with modern facilities",
        "200+ student clubs and societies",
        "Sports and recreation facilities",
        "Cultural events and festivals"
      ]
    }
  };

  const university = universities[universityId as keyof typeof universities];

  if (!university) {
    return (
      <div className="min-h-screen premium-bg py-20 px-6 flex items-center justify-center">
        <AnimatedBackground />
        <div className="text-center relative z-10">
          <h1 className="text-4xl font-bold mb-4 text-foreground">University Not Found</h1>
          <p className="text-muted-foreground mb-6">The university you're looking for doesn't exist.</p>
          <Link to="/universities">
            <Button>Back to Universities</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen premium-bg py-20 px-6">
      <AnimatedBackground />
      <SplineFloatingElements intensity={0.2} />
      <PatternBackground pattern="waves" intensity={0.04} />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Back Button */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/universities">
            <Button variant="outline" className="rounded-full">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Universities
            </Button>
          </Link>
        </motion.div>

        {/* University Header */}
        <motion.div 
          className="glass-card p-8 rounded-2xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-4xl font-bold text-foreground mb-2">{university.name}</h1>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <MapPin className="h-5 w-5" />
                    <span className="text-lg">{university.city}, {university.country}</span>
                  </div>
                </div>
                <Badge variant="secondary" className="text-lg px-4 py-2">{university.ranking}</Badge>
              </div>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {university.description}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Tuition</p>
                    <p className="font-semibold">{university.tuition}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Acceptance Rate</p>
                    <p className="font-semibold">{university.acceptance}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Students</p>
                    <p className="font-semibold">{university.students}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Founded</p>
                    <p className="font-semibold">{university.founded}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 3D University Scene */}
            <div className="lg:w-1/3">
              <motion.div
                className="h-64 rounded-2xl overflow-hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <SplineUniversity 
                  className="h-full w-full" 
                  interactive={true}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Programs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Popular Programs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {university.programs.map((program, idx) => (
                  <Badge key={idx} variant="outline" className="text-sm px-4 py-2">
                    {program}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                Why Choose This University?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {university.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Admission Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Admission Requirements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {university.admissionRequirements.map((requirement, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{requirement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Scholarships */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Scholarships & Financial Aid
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {university.scholarships.map((scholarship, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{scholarship}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Campus Life */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Campus Life
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {university.campusLife.map((life, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{life}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="glass-card p-8 rounded-2xl text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
        >
          {/* Animated background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Apply to <span className="text-gradient">{university.name}?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Get personalized guidance on your application to {university.name}. 
              Our expert counselors can help you with the entire process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-primary-custom rounded-full px-10 h-16 text-lg font-semibold">
                Start Application
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-10 h-16 text-lg font-semibold border-2">
                Talk to a Counselor
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UniversityDetail;

