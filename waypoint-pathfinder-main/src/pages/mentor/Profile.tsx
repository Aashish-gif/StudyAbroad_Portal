import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  GraduationCap,
  Award,
  Star,
  Edit,
  Save,
  DollarSign,
  Globe,
  Linkedin,
  Github,
  Calendar
} from "lucide-react";

const MentorProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: "Sarah",
    lastName: "Smith",
    title: "Senior Software Engineer & Career Mentor",
    email: "sarah.smith@waypoint.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    bio: "Passionate about helping students navigate their career paths in technology. With 10+ years of experience in software engineering at leading tech companies, I specialize in career planning, technical interview preparation, and professional development.",
    company: "Google",
    position: "Senior Software Engineer",
    experience: "10+ years",
    education: "PhD in Computer Science, Stanford University",
    specializations: ["Career Planning", "Technical Interviews", "Software Engineering", "Data Science"],
    hourlyRate: 150,
    totalSessions: 127,
    averageRating: 4.8,
    responseTime: "< 2 hours",
    languages: ["English", "Spanish"],
    linkedin: "linkedin.com/in/sarahsmith",
    github: "github.com/sarahsmith",
    website: "sarahsmith.dev"
  });

  useEffect(() => {
    const savedData = sessionStorage.getItem('mentorData');
    if (savedData) {
      const data = JSON.parse(savedData);
      setProfileData(prev => ({
        ...prev,
        ...data.personalInfo,
        ...data.professionalInfo,
        hourlyRate: data.rateAndAvailability?.hourlyRate || prev.hourlyRate
      }));
    }
  }, []);

  const handleSave = () => {
    sessionStorage.setItem('mentorData', JSON.stringify({
      personalInfo: {
        firstName: profileData.firstName,
        lastName: profileData.lastName,
        email: profileData.email,
        phone: profileData.phone
      },
      professionalInfo: {
        title: profileData.title,
        company: profileData.company,
        position: profileData.position,
        bio: profileData.bio
      },
      rateAndAvailability: {
        hourlyRate: profileData.hourlyRate
      }
    }));
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-4xl font-bold text-gradient mb-2">Profile</h1>
          <p className="text-muted-foreground">Manage your mentor profile and information</p>
        </div>
        <Button
          onClick={() => isEditing ? handleSave() : setIsEditing(true)}
          className={isEditing ? "bg-green-600 hover:bg-green-700" : "btn-primary-custom"}
        >
          {isEditing ? (
            <>
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </>
          ) : (
            <>
              <Edit className="h-4 w-4 mr-2" />
              Edit Profile
            </>
          )}
        </Button>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Column - Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-1"
        >
          <Card className="glass-card">
            <CardContent className="p-6 text-center">
              <Avatar className="h-32 w-32 mx-auto mb-4">
                <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white text-3xl">
                  {profileData.firstName[0]}{profileData.lastName[0]}
                </AvatarFallback>
              </Avatar>
              
              <h2 className="text-2xl font-bold mb-1">
                {profileData.firstName} {profileData.lastName}
              </h2>
              <p className="text-muted-foreground mb-4">{profileData.title}</p>
              
              <div className="flex items-center justify-center gap-2 mb-4">
                <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                <span className="text-2xl font-bold">{profileData.averageRating}</span>
                <span className="text-muted-foreground">({profileData.totalSessions} sessions)</span>
              </div>

              <Badge className="bg-gradient-to-r from-primary to-purple-600 mb-6">
                Premium Mentor
              </Badge>

              <div className="space-y-3 text-left">
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>{profileData.email}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{profileData.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{profileData.location}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  <span>${profileData.hourlyRate}/hour</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border/50">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-primary">{profileData.totalSessions}</p>
                    <p className="text-xs text-muted-foreground">Total Sessions</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">{profileData.responseTime}</p>
                    <p className="text-xs text-muted-foreground">Response Time</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Right Column - Details */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-2 space-y-6"
        >
          {/* Personal Information */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label>First Name</Label>
                  <Input
                    value={profileData.firstName}
                    onChange={(e) => setProfileData({...profileData, firstName: e.target.value})}
                    disabled={!isEditing}
                  />
                </div>
                <div>
                  <Label>Last Name</Label>
                  <Input
                    value={profileData.lastName}
                    onChange={(e) => setProfileData({...profileData, lastName: e.target.value})}
                    disabled={!isEditing}
                  />
                </div>
              </div>
              <div>
                <Label>Email</Label>
                <Input
                  value={profileData.email}
                  onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                  disabled={!isEditing}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label>Phone</Label>
                  <Input
                    value={profileData.phone}
                    onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                    disabled={!isEditing}
                  />
                </div>
                <div>
                  <Label>Location</Label>
                  <Input
                    value={profileData.location}
                    onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                    disabled={!isEditing}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Information */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                Professional Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Professional Title</Label>
                <Input
                  value={profileData.title}
                  onChange={(e) => setProfileData({...profileData, title: e.target.value})}
                  disabled={!isEditing}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label>Company</Label>
                  <Input
                    value={profileData.company}
                    onChange={(e) => setProfileData({...profileData, company: e.target.value})}
                    disabled={!isEditing}
                  />
                </div>
                <div>
                  <Label>Position</Label>
                  <Input
                    value={profileData.position}
                    onChange={(e) => setProfileData({...profileData, position: e.target.value})}
                    disabled={!isEditing}
                  />
                </div>
              </div>
              <div>
                <Label>Bio</Label>
                <Textarea
                  value={profileData.bio}
                  onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                  disabled={!isEditing}
                  rows={4}
                />
              </div>
              <div>
                <Label>Hourly Rate ($)</Label>
                <Input
                  type="number"
                  value={profileData.hourlyRate}
                  onChange={(e) => setProfileData({...profileData, hourlyRate: parseInt(e.target.value)})}
                  disabled={!isEditing}
                />
              </div>
            </CardContent>
          </Card>

          {/* Education & Specializations */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                Education & Expertise
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Education</Label>
                <Input
                  value={profileData.education}
                  onChange={(e) => setProfileData({...profileData, education: e.target.value})}
                  disabled={!isEditing}
                />
              </div>
              <div>
                <Label>Specializations</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {profileData.specializations.map((spec, index) => (
                    <Badge key={index} variant="secondary">
                      {spec}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <Label>Languages</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {profileData.languages.map((lang, index) => (
                    <Badge key={index} variant="outline">
                      <Globe className="h-3 w-3 mr-1" />
                      {lang}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Social Links
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="flex items-center gap-2">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Label>
                <Input
                  value={profileData.linkedin}
                  onChange={(e) => setProfileData({...profileData, linkedin: e.target.value})}
                  disabled={!isEditing}
                  placeholder="linkedin.com/in/username"
                />
              </div>
              <div>
                <Label className="flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  GitHub
                </Label>
                <Input
                  value={profileData.github}
                  onChange={(e) => setProfileData({...profileData, github: e.target.value})}
                  disabled={!isEditing}
                  placeholder="github.com/username"
                />
              </div>
              <div>
                <Label className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  Website
                </Label>
                <Input
                  value={profileData.website}
                  onChange={(e) => setProfileData({...profileData, website: e.target.value})}
                  disabled={!isEditing}
                  placeholder="yourwebsite.com"
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default MentorProfile;
