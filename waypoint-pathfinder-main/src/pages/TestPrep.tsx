import { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Target, BookOpen, Clock, Award, PlayCircle, Timer, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fetchBestPlaylists } from "@/utils/youtube";

const TestPrep = () => {
  const [detailsTest, setDetailsTest] = useState<any | null>(null);
  const [prepTest, setPrepTest] = useState<any | null>(null);
  const [ytQuery, setYtQuery] = useState<string>("");
  const [playlists, setPlaylists] = useState<any[]>([]);
  const [loadingPlaylists, setLoadingPlaylists] = useState(false);
  const [activeTab, setActiveTab] = useState("playlists");

  // Simple MCQ test state
  const [testOpen, setTestOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number | null>>({});
  const [submitted, setSubmitted] = useState(false);

  const dummyQuestions = useMemo(() => ([
    { q: "What is 2 + 2?", options: ["3", "4", "5", "6"], correct: 1 },
    { q: "Which is a prime number?", options: ["9", "12", "13", "15"], correct: 2 },
    { q: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], correct: 2 },
  ]), []);

  useEffect(() => {
    if (!testOpen) return;
    setTimeLeft(60); // 60 seconds for demo
  }, [testOpen]);

  useEffect(() => {
    if (!testOpen || submitted) return;
    if (timeLeft <= 0) return;
    const t = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(t);
  }, [testOpen, timeLeft, submitted]);
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
                <Link to={`/test-prep/${test.name.toLowerCase()}/start`} className="flex-1">
                  <Button className="w-full rounded-full">
                    Start Preparation
                  </Button>
                </Link>
                <Link to={`/test-prep/${test.name.toLowerCase()}`} className="flex-1">
                  <Button variant="outline" className="w-full rounded-full">Learn More</Button>
                </Link>
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
      {/* Learn More Dialog */}
      <Dialog open={!!detailsTest} onOpenChange={(o) => !o && setDetailsTest(null)}>
        <DialogContent className="bg-white border border-gray-200 text-gray-900 max-w-2xl">
          {detailsTest && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{detailsTest.fullName} ({detailsTest.name})</DialogTitle>
                <DialogDescription>{detailsTest.description}</DialogDescription>
              </DialogHeader>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-medium mb-2">Duration</p>
                  <div className="flex items-center gap-2 text-sm"><Clock className="h-4 w-4 text-primary" />{detailsTest.duration}</div>
                  <p className="text-sm font-medium mt-4 mb-2">Sections</p>
                  <div className="flex flex-wrap gap-2">
                    {detailsTest.sections.map((s: string, i: number) => (<Badge key={i} variant="outline" className="text-xs">{s}</Badge>))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">Score Range</p>
                  <Badge className="bg-primary">{detailsTest.score}</Badge>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Start Preparation Dialog */}
      <Dialog open={!!prepTest} onOpenChange={(o) => !o && setPrepTest(null)}>
        <DialogContent className="bg-white border border-gray-200 text-gray-900 max-w-3xl">
          {prepTest && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">Start Preparation: {prepTest.name}</DialogTitle>
                <DialogDescription>Curated resources and practice for {prepTest.fullName}</DialogDescription>
              </DialogHeader>
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid grid-cols-3 w-full">
                  <TabsTrigger value="playlists">Best Playlists</TabsTrigger>
                  <TabsTrigger value="dpp">DPP</TabsTrigger>
                  <TabsTrigger value="tests">Tests</TabsTrigger>
                </TabsList>
                <TabsContent value="playlists" className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-700">Query: <span className="font-semibold">{ytQuery || (prepTest.name + " preparation")}</span></div>
                    <Button size="sm" onClick={async () => {
                      try {
                        setLoadingPlaylists(true);
                        const res = await fetchBestPlaylists(ytQuery || (prepTest.name + " preparation"));
                        setPlaylists(res);
                      } catch (e) {
                        console.error(e);
                        alert('Failed to fetch playlists');
                      } finally {
                        setLoadingPlaylists(false);
                      }
                    }} disabled={loadingPlaylists}>
                      {loadingPlaylists ? 'Loading...' : 'Fetch Playlists'}
                    </Button>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {playlists.map((p: any) => (
                      <a key={p.id} href={`https://www.youtube.com/playlist?list=${p.id}`} target="_blank" rel="noreferrer" className="block rounded-xl border hover:shadow-lg transition overflow-hidden">
                        {p.thumbnailUrl && (<img src={p.thumbnailUrl} alt={p.title} className="w-full h-40 object-cover" />)}
                        <div className="p-4">
                          <div className="font-semibold mb-1 line-clamp-2">{p.title}</div>
                          <div className="text-xs text-gray-500 flex items-center gap-1"><PlayCircle className="h-3 w-3" /> {p.channelTitle}</div>
                        </div>
                      </a>
                    ))}
                    {!loadingPlaylists && playlists.length === 0 && (
                      <div className="text-sm text-gray-600">Click "Fetch Playlists" to load recommendations.</div>
                    )}
                  </div>
                </TabsContent>
                <TabsContent value="dpp" className="space-y-3">
                  <div className="text-sm text-gray-700">Daily Practice Problems (DPP) - Dummy data</div>
                  {[1,2,3,4,5].map((n) => (
                    <div key={n} className="rounded-lg border p-4 flex items-center justify-between">
                      <div>
                        <div className="font-semibold">Set {n}</div>
                        <div className="text-xs text-gray-500">20 questions • Mixed difficulty</div>
                      </div>
                      <Button size="sm" variant="outline">Open</Button>
                    </div>
                  ))}
                </TabsContent>
                <TabsContent value="tests" className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-700">Timed MCQ Test - Demo</div>
                    <Button size="sm" onClick={() => { setTestOpen(true); setSubmitted(false); setAnswers({}); }}>Start Test</Button>
                  </div>
                  <Dialog open={testOpen} onOpenChange={(o) => { if (!o) { setTestOpen(false); setSubmitted(false); } }}>
                    <DialogContent className="bg-white border border-gray-200 text-gray-900 max-w-2xl">
                      <div className="flex items-center justify-between mb-4">
                        <div className="font-semibold">Test - {prepTest.name}</div>
                        <div className="flex items-center gap-2 text-sm"><Timer className="h-4 w-4" /> {timeLeft}s</div>
                      </div>
                      <div className="space-y-4">
                        {dummyQuestions.map((q, qi) => (
                          <div key={qi} className="rounded-lg border p-4">
                            <div className="font-medium mb-2">Q{qi + 1}. {q.q}</div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {q.options.map((opt, oi) => {
                                const selected = answers[qi] === oi;
                                const correct = submitted && q.correct === oi;
                                const wrong = submitted && selected && q.correct !== oi;
                                return (
                                  <button
                                    key={oi}
                                    className={`text-left rounded-lg border p-2 transition ${selected ? 'border-primary' : ''} ${correct ? 'bg-green-50 border-green-400' : ''} ${wrong ? 'bg-red-50 border-red-400' : ''}`}
                                    onClick={() => !submitted && setAnswers({ ...answers, [qi]: oi })}
                                  >
                                    {opt}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center justify-end gap-2 mt-4">
                        {!submitted ? (
                          <Button onClick={() => setSubmitted(true)} disabled={timeLeft <= 0}>Submit</Button>
                        ) : (
                          <Button variant="outline" onClick={() => { setTestOpen(false); setSubmitted(false); }}>Close</Button>
                        )}
                      </div>
                      {submitted && (
                        <div className="mt-4 rounded-lg border p-4">
                          {(() => {
                            const score = dummyQuestions.reduce((acc, q, i) => acc + ((answers[i] === q.correct) ? 1 : 0), 0);
                            return (
                              <div>
                                <div className="font-semibold mb-2">Score: {score} / {dummyQuestions.length}</div>
                                <div className="space-y-2">
                                  {dummyQuestions.map((q, i) => (
                                    <div key={i} className="text-sm flex items-center gap-2">
                                      {answers[i] === q.correct ? <CheckCircle2 className="h-4 w-4 text-green-600" /> : <XCircle className="h-4 w-4 text-red-600" />}
                                      <span>Q{i+1} Correct Answer: {q.options[q.correct]}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            );
                          })()}
                        </div>
                      )}
                    </DialogContent>
                  </Dialog>
                </TabsContent>
              </Tabs>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TestPrep;