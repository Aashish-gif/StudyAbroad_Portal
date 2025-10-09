import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Star, 
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Upload,
  DollarSign,
  Clock,
  Globe,
  Award,
  FileText,
  Shield
} from "lucide-react";

interface FormData {
  // Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  
  // Professional Information
  profession: string;
  experience: string;
  specialization: string[];
  education: string;
  certifications: string;
  
  // Mentorship Details
  hourlyRate: string;
  availability: string[];
  bio: string;
  achievements: string;
  
  // Verification
  linkedinUrl: string;
  portfolioUrl: string;
  documents: File[];
  
  // Terms
  termsAccepted: boolean;
  verificationCode: string;
}

const MentorRegistration = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    profession: "",
    experience: "",
    specialization: [],
    education: "",
    certifications: "",
    hourlyRate: "",
    availability: [],
    bio: "",
    achievements: "",
    linkedinUrl: "",
    portfolioUrl: "",
    documents: [],
    termsAccepted: false,
    verificationCode: ""
  });

  const steps = [
    { id: 1, title: "Personal Info", description: "Basic information" },
    { id: 2, title: "Professional", description: "Experience & expertise" },
    { id: 3, title: "Mentorship", description: "Rates & availability" },
    { id: 4, title: "Verification", description: "Identity verification" },
    { id: 5, title: "Review", description: "Final review" }
  ];

  const specializations = [
    "Career Development", "Technical Skills", "Leadership", "Entrepreneurship",
    "Data Science", "Software Engineering", "Product Management", "Marketing",
    "Finance", "Consulting", "Research", "Education", "Healthcare", "Design"
  ];

  const availabilityOptions = [
    "Monday Morning", "Monday Afternoon", "Monday Evening",
    "Tuesday Morning", "Tuesday Afternoon", "Tuesday Evening",
    "Wednesday Morning", "Wednesday Afternoon", "Wednesday Evening",
    "Thursday Morning", "Thursday Afternoon", "Thursday Evening",
    "Friday Morning", "Friday Afternoon", "Friday Evening",
    "Saturday Morning", "Saturday Afternoon", "Saturday Evening",
    "Sunday Morning", "Sunday Afternoon", "Sunday Evening"
  ];

  const handleInputChange = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSpecializationToggle = (specialization: string) => {
    setFormData(prev => ({
      ...prev,
      specialization: prev.specialization.includes(specialization)
        ? prev.specialization.filter(s => s !== specialization)
        : [...prev.specialization, specialization]
    }));
  };

  const handleAvailabilityToggle = (availability: string) => {
    setFormData(prev => ({
      ...prev,
      availability: prev.availability.includes(availability)
        ? prev.availability.filter(a => a !== availability)
        : [...prev.availability, availability]
    }));
  };

  const handleVerification = async () => {
    setIsVerifying(true);
    // Simulate verification process
    setTimeout(() => {
      setIsVerifying(false);
      setIsVerified(true);
    }, 3000);
  };

  const handleSubmit = () => {
    // Save to sessionStorage and redirect
    sessionStorage.setItem('mentorData', JSON.stringify({
      personalInfo: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        location: formData.location
      },
      professionalInfo: {
        profession: formData.profession,
        experience: formData.experience,
        specialization: formData.specialization,
        education: formData.education,
        certifications: formData.certifications
      },
      rateAndAvailability: {
        hourlyRate: formData.hourlyRate,
        availability: formData.availability
      },
      bio: formData.bio,
      achievements: formData.achievements,
      id: Date.now(),
      status: 'active',
      rating: 0,
      totalSessions: 0,
      joinDate: new Date().toISOString()
    }));
    window.location.href = '/mentor/dashboard';
  };

  const nextStep = () => {
    if (currentStep < steps.length) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="pl-10"
                    placeholder="John"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="pl-10"
                  placeholder="john.doe@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="pl-10"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location *</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  className="pl-10"
                  placeholder="San Francisco, CA"
                />
              </div>
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="profession">Current Profession *</Label>
              <div className="relative">
                <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="profession"
                  value={formData.profession}
                  onChange={(e) => handleInputChange('profession', e.target.value)}
                  className="pl-10"
                  placeholder="Software Engineer"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience">Years of Experience *</Label>
              <Input
                id="experience"
                type="number"
                value={formData.experience}
                onChange={(e) => handleInputChange('experience', e.target.value)}
                placeholder="5"
                min="1"
                max="50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="education">Education Background</Label>
              <div className="relative">
                <GraduationCap className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Textarea
                  id="education"
                  value={formData.education}
                  onChange={(e) => handleInputChange('education', e.target.value)}
                  className="pl-10 min-h-[100px]"
                  placeholder="Master's in Computer Science from Stanford University"
                />
              </div>
            </div>

            <div className="space-y-3">
              <Label>Areas of Specialization *</Label>
              <div className="grid grid-cols-2 gap-2">
                {specializations.map((spec) => (
                  <motion.div
                    key={spec}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Badge
                      variant={formData.specialization.includes(spec) ? "default" : "outline"}
                      className={`cursor-pointer p-2 w-full justify-center transition-all ${
                        formData.specialization.includes(spec) ? "bg-primary text-primary-foreground" : ""
                      }`}
                      onClick={() => handleSpecializationToggle(spec)}
                    >
                      {spec}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="certifications">Certifications & Awards</Label>
              <Textarea
                id="certifications"
                value={formData.certifications}
                onChange={(e) => handleInputChange('certifications', e.target.value)}
                placeholder="AWS Certified Solutions Architect, Google Cloud Professional..."
              />
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="hourlyRate">Hourly Rate (USD) *</Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="hourlyRate"
                  type="number"
                  value={formData.hourlyRate}
                  onChange={(e) => handleInputChange('hourlyRate', e.target.value)}
                  className="pl-10"
                  placeholder="75"
                  min="10"
                  max="1000"
                />
              </div>
              <p className="text-sm text-muted-foreground">Recommended: $50-200 per hour</p>
            </div>

            <div className="space-y-3">
              <Label>Availability *</Label>
              <p className="text-sm text-muted-foreground">Select your available time slots</p>
              <div className="grid grid-cols-3 gap-2 max-h-60 overflow-y-auto premium-scrollbar">
                {availabilityOptions.map((option) => (
                  <motion.div
                    key={option}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Badge
                      variant={formData.availability.includes(option) ? "default" : "outline"}
                      className={`cursor-pointer p-2 w-full justify-center text-xs transition-all ${
                        formData.availability.includes(option) ? "bg-primary text-primary-foreground" : ""
                      }`}
                      onClick={() => handleAvailabilityToggle(option)}
                    >
                      {option}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Professional Bio *</Label>
              <Textarea
                id="bio"
                value={formData.bio}
                onChange={(e) => handleInputChange('bio', e.target.value)}
                className="min-h-[120px]"
                placeholder="Tell potential mentees about your background, expertise, and mentoring style..."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="achievements">Key Achievements</Label>
              <Textarea
                id="achievements"
                value={formData.achievements}
                onChange={(e) => handleInputChange('achievements', e.target.value)}
                placeholder="Led 50+ person engineering team, Built 3 successful startups, Published 20+ research papers..."
              />
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            <div className="text-center space-y-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto"
              >
                <Shield className="h-8 w-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold">Identity Verification</h3>
              <p className="text-muted-foreground">We need to verify your identity to ensure quality mentorship</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="linkedinUrl">LinkedIn Profile *</Label>
              <div className="relative">
                <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="linkedinUrl"
                  type="url"
                  value={formData.linkedinUrl}
                  onChange={(e) => handleInputChange('linkedinUrl', e.target.value)}
                  className="pl-10"
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="portfolioUrl">Portfolio/Website</Label>
              <div className="relative">
                <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="portfolioUrl"
                  type="url"
                  value={formData.portfolioUrl}
                  onChange={(e) => handleInputChange('portfolioUrl', e.target.value)}
                  className="pl-10"
                  placeholder="https://yourportfolio.com"
                />
              </div>
            </div>

            <div className="space-y-4">
              <Label>Upload Documents</Label>
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground mb-2">Upload your resume or CV</p>
                <Button variant="outline" size="sm">
                  Choose Files
                </Button>
              </div>
            </div>

            <div className="text-center space-y-4">
              <Button
                onClick={handleVerification}
                disabled={isVerifying || isVerified}
                className="w-full btn-primary-custom"
                size="lg"
              >
                {isVerifying ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                    />
                    Verifying...
                  </>
                ) : isVerified ? (
                  <>
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Verified
                  </>
                ) : (
                  "Start Verification"
                )}
              </Button>
              
              {isVerified && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-green-600 text-sm flex items-center justify-center gap-2"
                >
                  <CheckCircle className="h-4 w-4" />
                  Verification completed successfully!
                </motion.div>
              )}
            </div>
          </motion.div>
        );

      case 5:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-xl font-bold">Review Your Application</h3>
              <p className="text-muted-foreground">Please review all information before submitting</p>
            </div>

            <div className="space-y-4">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Personal Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p><span className="font-medium">Name:</span> {formData.firstName} {formData.lastName}</p>
                  <p><span className="font-medium">Email:</span> {formData.email}</p>
                  <p><span className="font-medium">Phone:</span> {formData.phone || "Not provided"}</p>
                  <p><span className="font-medium">Location:</span> {formData.location}</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Briefcase className="h-5 w-5" />
                    Professional Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p><span className="font-medium">Profession:</span> {formData.profession}</p>
                  <p><span className="font-medium">Experience:</span> {formData.experience} years</p>
                  <p><span className="font-medium">Specializations:</span> {formData.specialization.join(", ")}</p>
                  <p><span className="font-medium">Education:</span> {formData.education}</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <DollarSign className="h-5 w-5" />
                    Mentorship Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p><span className="font-medium">Hourly Rate:</span> ${formData.hourlyRate}/hour</p>
                  <p><span className="font-medium">Availability:</span> {formData.availability.length} time slots selected</p>
                  <p><span className="font-medium">Bio:</span> {formData.bio}</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={formData.termsAccepted}
                onCheckedChange={(checked) => handleInputChange('termsAccepted', checked)}
              />
              <Label htmlFor="terms" className="text-sm">
                I agree to the <span className="text-primary cursor-pointer">Terms of Service</span> and <span className="text-primary cursor-pointer">Privacy Policy</span>
              </Label>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen premium-bg flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl"
      >
        <Card className="glass-card">
          <CardHeader className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Award className="h-8 w-8 text-white" />
            </motion.div>
            <CardTitle className="text-3xl font-bold text-gradient">Become a Mentor</CardTitle>
            <CardDescription>Join our community of expert mentors and help students achieve their goals</CardDescription>
          </CardHeader>

          <CardContent className="space-y-8">
            {/* Progress Bar */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex flex-col items-center ${
                      currentStep >= step.id ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                        currentStep >= step.id
                          ? "bg-primary border-primary text-white"
                          : "border-muted-foreground/30"
                      }`}
                    >
                      {currentStep > step.id ? (
                        <CheckCircle className="h-5 w-5" />
                      ) : (
                        <span className="font-bold">{step.id}</span>
                      )}
                    </div>
                    <div className="text-center mt-2">
                      <p className="text-xs font-medium">{step.title}</p>
                      <p className="text-xs text-muted-foreground">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <Progress value={(currentStep / steps.length) * 100} className="h-2" />
            </div>

            {/* Step Content */}
            <AnimatePresence mode="wait">
              {renderStep()}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6 border-t">
              <Button
                onClick={prevStep}
                disabled={currentStep === 1}
                variant="outline"
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Previous
              </Button>

              {currentStep === steps.length ? (
                <Button
                  onClick={handleSubmit}
                  disabled={!formData.termsAccepted || !isVerified}
                  className="btn-primary-custom flex items-center gap-2"
                >
                  Submit Application
                  <ArrowRight className="h-4 w-4" />
                </Button>
              ) : (
                <Button
                  onClick={nextStep}
                  className="btn-primary-custom flex items-center gap-2"
                >
                  Next
                  <ArrowRight className="h-4 w-4" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default MentorRegistration;
