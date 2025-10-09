import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, FileText } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import SplineFloatingElements from "@/components/SplineFloatingElements";
import PatternBackground from "@/components/PatternBackground";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const UniversityApplication = () => {
  const { universityId } = useParams();
  const [successOpen, setSuccessOpen] = useState(false);

  const universityName = useMemo(() => {
    const map: Record<string, string> = {
      "stanford": "Stanford University",
      "oxford": "University of Oxford",
      "eth-zurich": "ETH Zurich",
      "toronto": "University of Toronto",
      "nus": "National University of Singapore",
      "melbourne": "University of Melbourne"
    };
    return map[universityId ?? ""] ?? (universityId ? universityId : "University");
  }, [universityId]);

  return (
    <div className="min-h-screen premium-bg py-20 px-6">
      <AnimatedBackground />
      <SplineFloatingElements intensity={0.2} />
      <PatternBackground pattern="grid" intensity={0.03} />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to={`/universities/${universityId}`}>
            <Button variant="outline" className="rounded-full">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to {universityName}
            </Button>
          </Link>
        </motion.div>

        <motion.div
          className="glass-card p-8 rounded-2xl mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Apply to <span className="text-gradient">{universityName}</span>
          </h1>
          <p className="text-muted-foreground">
            Complete the application details below and our team will reach out with next steps.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Application Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSuccessOpen(true);
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-muted-foreground">Full Name</label>
                      <Input placeholder="Your full name" className="mt-1" required />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground">Email</label>
                      <Input type="email" placeholder="you@example.com" className="mt-1" required />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground">Phone</label>
                      <Input type="tel" placeholder="+1 555 000 1234" className="mt-1" />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground">Country of Citizenship</label>
                      <Input placeholder="e.g. India" className="mt-1" />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground">Program</label>
                      <Input placeholder="e.g. Computer Science" className="mt-1" required />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground">Intake</label>
                      <Select>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select intake" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fall">Fall</SelectItem>
                          <SelectItem value="spring">Spring</SelectItem>
                          <SelectItem value="summer">Summer</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground">Highest Education</label>
                      <Select>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="highschool">High School</SelectItem>
                          <SelectItem value="bachelors">Bachelor's</SelectItem>
                          <SelectItem value="masters">Master's</SelectItem>
                          <SelectItem value="phd">PhD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground">GPA / Percentage</label>
                      <Input placeholder="e.g. 3.6 / 85%" className="mt-1" />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground">English Proficiency</label>
                      <Select>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ielts">IELTS</SelectItem>
                          <SelectItem value="toefl">TOEFL</SelectItem>
                          <SelectItem value="pte">PTE</SelectItem>
                          <SelectItem value="waived">Waived/Not Applicable</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground">Test Score</label>
                      <Input placeholder="e.g. IELTS 7.5" className="mt-1" />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground">Estimated Budget</label>
                      <Input placeholder="e.g. $30,000 / year" className="mt-1" />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground">Preferred Countries</label>
                      <Input placeholder="e.g. USA, Canada" className="mt-1" />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground">Work Experience (years)</label>
                      <Input type="number" min={0} placeholder="e.g. 2" className="mt-1" />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="text-sm text-muted-foreground">Profile Summary</label>
                    <Textarea placeholder="Briefly describe your academic background and goals" className="mt-1" rows={6} />
                  </div>

                  <div className="mt-6 flex gap-3">
                    <Button type="submit" className="btn-primary-custom rounded-full px-8">
                      Submit Application
                    </Button>
                    <Link to={`/universities/${universityId}`}>
                      <Button type="button" variant="outline" className="rounded-full px-8">Cancel</Button>
                    </Link>
                  </div>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Why Apply With Us</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                    Personalized application guidance from expert counselors
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                    Profile evaluation and course/university shortlisting
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                    SOP/LOR review and editing support
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                    Scholarship and financial aid guidance
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                    Visa, accommodation, and pre-departure assistance
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>

      <AlertDialog open={successOpen} onOpenChange={setSuccessOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Application submitted successfully</AlertDialogTitle>
            <AlertDialogDescription>
              We have received your application for {universityName}. Our team will contact you shortly with next steps.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setSuccessOpen(false)}>Close</AlertDialogCancel>
            <Link to={`/universities/${universityId}`}>
              <AlertDialogAction>Back to University</AlertDialogAction>
            </Link>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default UniversityApplication;


