import { Target, BookOpen, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const TestPrep = () => {
  const tests = [
    {
      name: "GRE",
      fullName: "Graduate Record Examination",
      description: "Essential for graduate school admissions in the US",
      duration: "3 hours 45 minutes",
      sections: ["Analytical Writing", "Verbal Reasoning", "Quantitative Reasoning"],
      score: "260-340"
    },
    {
      name: "GMAT",
      fullName: "Graduate Management Admission Test",
      description: "Required for MBA and business school programs",
      duration: "3 hours 7 minutes",
      sections: ["Analytical Writing", "Integrated Reasoning", "Quantitative", "Verbal"],
      score: "200-800"
    },
    {
      name: "IELTS",
      fullName: "International English Language Testing System",
      description: "English proficiency test for study and migration",
      duration: "2 hours 45 minutes",
      sections: ["Listening", "Reading", "Writing", "Speaking"],
      score: "0-9 bands"
    },
    {
      name: "TOEFL",
      fullName: "Test of English as a Foreign Language",
      description: "English language test for academic purposes",
      duration: "3 hours",
      sections: ["Reading", "Listening", "Speaking", "Writing"],
      score: "0-120"
    },
    {
      name: "SAT",
      fullName: "Scholastic Assessment Test",
      description: "Standardized test for US college admissions",
      duration: "3 hours",
      sections: ["Reading", "Writing and Language", "Math"],
      score: "400-1600"
    },
    {
      name: "ACT",
      fullName: "American College Testing",
      description: "Alternative to SAT for US college admissions",
      duration: "2 hours 55 minutes",
      sections: ["English", "Math", "Reading", "Science"],
      score: "1-36"
    }
  ];

  const features = [
    {
      icon: Target,
      title: "Personalized Study Plans",
      description: "AI-powered study plans tailored to your strengths and weaknesses"
    },
    {
      icon: BookOpen,
      title: "Comprehensive Materials",
      description: "Access thousands of practice questions and full-length tests"
    },
    {
      icon: Clock,
      title: "Time Management",
      description: "Learn strategies to optimize your time during the exam"
    },
    {
      icon: Award,
      title: "Expert Guidance",
      description: "Get tips and tricks from instructors who scored in the 99th percentile"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h1 className="text-5xl font-bold mb-4 text-foreground">
            <span className="text-primary">Test Preparation</span> Programs
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Master standardized tests with our comprehensive preparation programs. 
            Expert-led courses, practice tests, and personalized study plans to help you achieve your target score.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl text-center fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Tests Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {tests.map((test, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl hover:shadow-xl transition-all duration-300 slide-in-right"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">{test.name}</h3>
                  <p className="text-sm text-muted-foreground">{test.fullName}</p>
                </div>
                <Badge className="bg-primary">{test.score}</Badge>
              </div>
              
              <p className="text-muted-foreground mb-4">{test.description}</p>
              
              <div className="flex items-center gap-2 mb-4 text-sm">
                <Clock className="h-4 w-4 text-primary" />
                <span>{test.duration}</span>
              </div>

              <div className="mb-6">
                <p className="text-sm font-medium mb-2">Test Sections:</p>
                <div className="flex flex-wrap gap-2">
                  {test.sections.map((section, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {section}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <Button className="flex-1 rounded-full">Start Preparation</Button>
                <Button variant="outline" className="flex-1 rounded-full">Learn More</Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="glass-card p-12 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Ready to Start Your Preparation?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of students who have achieved their dream scores with our proven preparation methods. 
            Get started with a free diagnostic test today.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="rounded-full px-8">
              Take Free Diagnostic Test
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8">
              View All Programs
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPrep;