import { motion } from "framer-motion";
import { User, Mail, Phone, MapPin, GraduationCap, Building2, Calendar, Edit2, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SplineProfile from "@/components/SplineProfile";


const Profile = () => {
  return (
    <div className="min-h-screen premium-bg">
      
      {/* Profile Header */}
      <motion.div 
        className="bg-gradient-to-r from-primary via-purple-600 to-accent py-12 relative overflow-hidden"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div 
              className="flex items-center gap-6 text-white"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <motion.div 
                className="h-24 w-24 rounded-full bg-white/20 backdrop-blur flex items-center justify-center border-4 border-white/30"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <User className="h-12 w-12" />
              </motion.div>
              <div>
                <h1 className="text-3xl font-bold mb-2">John Doe</h1>
                <p className="text-white/90 mb-2">Aspiring Computer Science Student</p>
                <div className="flex items-center gap-4">
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    Premium Member
                  </Badge>
                  <span className="text-sm">Member since Jan 2024</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="h-64 lg:h-80"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <SplineProfile className="h-full w-full" />
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="section-padding">
        <div className="container-custom max-w-6xl">
          <Tabs defaultValue="personal" className="space-y-8">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="personal">Personal Info</TabsTrigger>
              <TabsTrigger value="academic">Academic</TabsTrigger>
              <TabsTrigger value="preferences">Preferences</TabsTrigger>
            </TabsList>

            {/* Personal Information Tab */}
            <TabsContent value="personal" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl">Personal Information</CardTitle>
                      <CardDescription>Update your personal details and contact information</CardDescription>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Edit2 className="h-5 w-5" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" defaultValue="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" defaultValue="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input id="email" type="email" placeholder="john.doe@example.com" defaultValue="john.doe@example.com" className="pl-10" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input id="phone" placeholder="+1 (555) 000-0000" defaultValue="+1 (555) 123-4567" className="pl-10" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dob">Date of Birth</Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input id="dob" type="date" className="pl-10" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Current Location</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input id="location" placeholder="New York, USA" defaultValue="Mumbai, India" className="pl-10" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea 
                      id="bio" 
                      placeholder="Tell us about yourself..." 
                      className="min-h-[120px]"
                      defaultValue="Passionate about technology and innovation. Looking to pursue higher education in Computer Science."
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Academic Information Tab */}
            <TabsContent value="academic" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Academic Background</CardTitle>
                  <CardDescription>Share your educational qualifications and achievements</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="education">Current Education Level</Label>
                    <div className="relative">
                      <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input id="education" placeholder="e.g., Bachelor's Degree" defaultValue="Bachelor's Degree" className="pl-10" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="institution">Institution Name</Label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input id="institution" placeholder="University name" defaultValue="Mumbai University" className="pl-10" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="field">Field of Study</Label>
                      <Input id="field" placeholder="e.g., Computer Science" defaultValue="Computer Science" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="gpa">GPA / Percentage</Label>
                      <Input id="gpa" placeholder="e.g., 8.5/10 or 85%" defaultValue="8.7/10" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="year">Year of Graduation</Label>
                      <Input id="year" type="number" placeholder="2024" defaultValue="2024" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="achievements">Academic Achievements</Label>
                    <Textarea 
                      id="achievements" 
                      placeholder="List your awards, honors, and notable achievements..." 
                      className="min-h-[120px]"
                      defaultValue="- Dean's List for 3 consecutive semesters&#10;- First place in Inter-college Hackathon 2023&#10;- Published research paper on AI/ML"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Test Scores</Label>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <span className="font-medium">GRE</span>
                        <Badge variant="secondary">320/340</Badge>
                      </div>
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <span className="font-medium">IELTS</span>
                        <Badge variant="secondary">7.5/9</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Preferences Tab */}
            <TabsContent value="preferences" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Study Abroad Preferences</CardTitle>
                  <CardDescription>Help us understand your study abroad goals and preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="targetCountries">Preferred Countries</Label>
                    <Input id="targetCountries" placeholder="e.g., USA, UK, Canada" defaultValue="USA, Canada, Germany" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="targetProgram">Target Program/Degree</Label>
                    <Input id="targetProgram" placeholder="e.g., Master's in Computer Science" defaultValue="Master's in Artificial Intelligence" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range (USD)</Label>
                      <Input id="budget" placeholder="e.g., $30,000 - $50,000" defaultValue="$40,000 - $60,000" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="intake">Preferred Intake</Label>
                      <Input id="intake" placeholder="e.g., Fall 2025" defaultValue="Fall 2025" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interests">Areas of Interest</Label>
                    <Textarea 
                      id="interests" 
                      placeholder="List your academic and research interests..." 
                      className="min-h-[120px]"
                      defaultValue="Artificial Intelligence, Machine Learning, Deep Learning, Computer Vision, Natural Language Processing"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="goals">Career Goals</Label>
                    <Textarea 
                      id="goals" 
                      placeholder="Describe your short-term and long-term career aspirations..." 
                      className="min-h-[120px]"
                      defaultValue="Short-term: Pursue Master's in AI from a top US university&#10;Long-term: Lead AI research at a leading tech company and contribute to cutting-edge innovations"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>University Preferences</Label>
                    <div className="flex flex-wrap gap-2">
                      {["Research-Focused", "Industry Partnerships", "Strong Alumni Network", "Scholarship Opportunities", "Urban Campus"].map((pref, index) => (
                        <Badge key={index} variant="outline" className="cursor-pointer hover:bg-primary hover:text-white transition-colors">
                          {pref}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Save Button */}
          <div className="flex justify-end gap-4 mt-8">
            <Button variant="outline" size="lg" className="rounded-full px-8">
              Cancel Changes
            </Button>
            <Button size="lg" className="btn-primary-custom rounded-full px-8">
              <Save className="h-5 w-5 mr-2" />
              Save Profile
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;