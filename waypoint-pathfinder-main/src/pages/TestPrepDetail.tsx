import { useParams, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, ArrowLeft } from "lucide-react";

const TESTS: Record<string, any> = {
  gre: {
    name: "GRE",
    fullName: "Graduate Record Examination",
    description: "Essential for graduate school admissions in the US",
    duration: "3 hours 45 minutes",
    sections: ["Analytical Writing", "Verbal Reasoning", "Quantitative Reasoning"],
    score: "260-340",
  },
  gmat: {
    name: "GMAT",
    fullName: "Graduate Management Admission Test",
    description: "Required for MBA and business school programs",
    duration: "3 hours 7 minutes",
    sections: ["Analytical Writing", "Integrated Reasoning", "Quantitative", "Verbal"],
    score: "200-800",
  },
  ielts: {
    name: "IELTS",
    fullName: "International English Language Testing System",
    description: "English proficiency test for study and migration",
    duration: "2 hours 45 minutes",
    sections: ["Listening", "Reading", "Writing", "Speaking"],
    score: "0-9 bands",
  },
  toefl: {
    name: "TOEFL",
    fullName: "Test of English as a Foreign Language",
    description: "English language test for academic purposes",
    duration: "3 hours",
    sections: ["Reading", "Listening", "Speaking", "Writing"],
    score: "0-120",
  },
  sat: {
    name: "SAT",
    fullName: "Scholastic Assessment Test",
    description: "Standardized test for US college admissions",
    duration: "3 hours",
    sections: ["Reading", "Writing and Language", "Math"],
    score: "400-1600",
  },
  act: {
    name: "ACT",
    fullName: "American College Testing",
    description: "Alternative to SAT for US college admissions",
    duration: "2 hours 55 minutes",
    sections: ["English", "Math", "Reading", "Science"],
    score: "1-36",
  },
};

const TestPrepDetail = () => {
  const { testId } = useParams();
  const key = (testId || "").toLowerCase();
  const test = TESTS[key];
  if (!test) {
    return (
      <div className="min-h-screen py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/test-prep"><Button variant="outline" className="mb-6"><ArrowLeft className="h-4 w-4 mr-2"/>Back</Button></Link>
          <h1 className="text-3xl font-bold">Test Not Found</h1>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link to="/test-prep"><Button variant="outline" className="mb-6"><ArrowLeft className="h-4 w-4 mr-2"/>Back</Button></Link>
        <h1 className="text-4xl font-bold mb-2">{test.fullName} ({test.name})</h1>
        <p className="text-muted-foreground mb-4">{test.description}</p>
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center gap-2 text-sm"><Clock className="h-4 w-4 text-primary" /> {test.duration}</div>
          <Badge>{test.score}</Badge>
        </div>
        <div className="mb-4">
          <div className="font-semibold mb-2">Sections</div>
          <div className="flex flex-wrap gap-2">
            {test.sections.map((s: string, i: number) => (<Badge key={i} variant="outline" className="text-xs">{s}</Badge>))}
          </div>
        </div>

        {/* Dummy detailed description */}
        <div className="glass-card p-6 rounded-2xl mb-6">
          <div className="font-semibold text-lg mb-2">About this exam</div>
          <p className="text-muted-foreground leading-relaxed">
            This is a comprehensive standardized assessment designed to evaluate your readiness for advanced study. The test measures core abilities
            such as critical reasoning, problem solving, verbal comprehension, and quantitative analysis. A strong performance reflects consistent
            practice, familiarity with the test format, and effective time management strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="glass-card p-6 rounded-2xl">
            <div className="font-semibold mb-2">Syllabus overview (dummy)</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Algebra, arithmetic, data interpretation</li>
              <li>• Reading comprehension, text completion</li>
              <li>• Analytical writing and argument analysis</li>
              <li>• Logic, number properties, probability</li>
              <li>• Vocabulary, grammar, sentence structure</li>
            </ul>
          </div>
          <div className="glass-card p-6 rounded-2xl">
            <div className="font-semibold mb-2">Preparation strategy (dummy)</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Build a weekly plan with topic-wise goals</li>
              <li>• Practice mixed sets under timed conditions</li>
              <li>• Review mistakes and maintain an error log</li>
              <li>• Take 3–5 full-length mocks before test day</li>
              <li>• Focus on accuracy first, then speed</li>
            </ul>
          </div>
        </div>

        <div className="glass-card p-6 rounded-2xl mb-6">
          <div className="font-semibold mb-2">Important notes (dummy)</div>
          <p className="text-sm text-muted-foreground">
            Registration deadlines, identification requirements, and permitted materials vary by location. Plan logistics at least two weeks in advance.
            Ensure you are comfortable with on-screen calculator usage (if applicable) and understand the break policy.
          </p>
        </div>

        <div className="flex gap-3 mt-8">
          <Link to={`/test-prep/${key}/start`}><Button className="rounded-full">Start Preparation</Button></Link>
        </div>
      </div>
    </div>
  );
};

export default TestPrepDetail;


