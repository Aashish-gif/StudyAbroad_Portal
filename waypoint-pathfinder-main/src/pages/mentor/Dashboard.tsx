import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users, 
  Calendar, 
  Star, 
  Plus, 
  MessageCircle, 
  TrendingUp, 
  DollarSign, 
  Clock, 
  CheckCircle, 
  X, 
  UserCheck, 
  Award, 
  BarChart3, 
  Settings, 
  Bell,
  Wallet,
  Target,
  Zap,
  Heart,
  ThumbsUp,
  AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Loader from "@/components/Loader";

const MentorDashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const [mentorData, setMentorData] = useState(null);
  const [hourlyRate, setHourlyRate] = useState("75");
  const [isAvailable, setIsAvailable] = useState(true);

  // Dummy data for demonstration
  const mentorStats = {
    activeMentees: 12,
    upcomingSessions: 5,
    avgRating: 4.8,
    totalEarnings: 2850,
    totalSessions: 48,
    responseTime: "2 hours",
    completionRate: 95
  };

  const kpis = [
    { label: "Active Mentees", value: mentorStats.activeMentees, icon: Users, color: "from-blue-500 to-purple-600", change: "+3" },
    { label: "Upcoming Sessions", value: mentorStats.upcomingSessions, icon: Calendar, color: "from-green-500 to-blue-600", change: "+1" },
    { label: "Avg. Rating", value: mentorStats.avgRating, icon: Star, color: "from-yellow-500 to-orange-600", change: "+0.2" },
    { label: "Total Earnings", value: `$${mentorStats.totalEarnings}`, icon: DollarSign, color: "from-emerald-500 to-teal-600", change: "+$450" }
  ];

  const upcomingSessions = [
    { 
      id: 1,
      student: "Sarah Chen", 
      avatar: "/api/placeholder/40/40",
      time: "2:00 PM", 
      date: "Today",
      topic: "Career Planning", 
      status: "confirmed",
      duration: "60 min",
      rate: "$75"
    },
    { 
      id: 2,
      student: "Mike Johnson", 
      avatar: "/api/placeholder/40/40",
      time: "4:30 PM", 
      date: "Today",
      topic: "Resume Review", 
      status: "pending",
      duration: "45 min",
      rate: "$75"
    },
    { 
      id: 3,
      student: "Lisa Wang", 
      avatar: "/api/placeholder/40/40",
      time: "10:00 AM", 
      date: "Tomorrow",
      topic: "Interview Prep", 
      status: "confirmed",
      duration: "90 min",
      rate: "$75"
    }
  ];

  const mentorshipRequests = [
    {
      id: 1,
      student: "Alex Rodriguez",
      avatar: "/api/placeholder/40/40",
      specialization: "Software Engineering",
      message: "Hi! I'm looking for guidance on transitioning from frontend to full-stack development. I have 2 years of React experience.",
      requestedDate: "2 hours ago",
      urgency: "high",
      budget: "$100/hour",
      preferredTime: "Weekday evenings"
    },
    {
      id: 2,
      student: "Emma Thompson",
      avatar: "/api/placeholder/40/40",
      specialization: "Product Management",
      message: "I'm a recent graduate looking to break into PM. Would love to learn about your journey and get career advice.",
      requestedDate: "1 day ago",
      urgency: "medium",
      budget: "$80/hour",
      preferredTime: "Weekend mornings"
    },
    {
      id: 3,
      student: "David Kim",
      avatar: "/api/placeholder/40/40",
      specialization: "Data Science",
      message: "Need help with machine learning project portfolio and interview preparation for data scientist roles.",
      requestedDate: "3 days ago",
      urgency: "low",
      budget: "$90/hour",
      preferredTime: "Flexible"
    }
  ];

  const recentFeedback = [
    {
      id: 1,
      student: "Maria Garcia",
      rating: 5,
      comment: "Dr. Smith was incredibly helpful! The career guidance session really opened my eyes to new opportunities.",
      date: "2 days ago",
      session: "Career Planning"
    },
    {
      id: 2,
      student: "James Wilson",
      rating: 5,
      comment: "Excellent mentor with deep industry knowledge. Highly recommend for anyone in tech!",
      date: "1 week ago",
      session: "Technical Interview"
    },
    {
      id: 3,
      student: "Sophie Chen",
      rating: 4,
      comment: "Great session! Very professional and provided actionable advice.",
      date: "1 week ago",
      session: "Resume Review"
    }
  ];

  const availabilitySlots = [
    { day: "Monday", slots: ["9:00 AM - 12:00 PM", "2:00 PM - 6:00 PM"], available: true },
    { day: "Tuesday", slots: ["10:00 AM - 2:00 PM", "4:00 PM - 8:00 PM"], available: true },
    { day: "Wednesday", slots: ["9:00 AM - 1:00 PM", "3:00 PM - 7:00 PM"], available: false },
    { day: "Thursday", slots: ["11:00 AM - 3:00 PM", "5:00 PM - 9:00 PM"], available: true },
    { day: "Friday", slots: ["9:00 AM - 5:00 PM"], available: true },
    { day: "Saturday", slots: ["10:00 AM - 2:00 PM"], available: true },
    { day: "Sunday", slots: [], available: false }
  ];

  useEffect(() => {
    // Simulate loading mentor data
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Load mentor data from sessionStorage if available
      const savedData = sessionStorage.getItem('mentorData');
      if (savedData) {
        const data = JSON.parse(savedData);
        setMentorData(data);
        setHourlyRate(data.hourlyRate || "75");
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleAcceptRequest = (requestId: number) => {
    // Handle accepting mentorship request
    console.log('Accepting request:', requestId);
  };

  const handleDeclineRequest = (requestId: number) => {
    // Handle declining mentorship request
    console.log('Declining request:', requestId);
  };

  const handleRateUpdate = (newRate: string) => {
    setHourlyRate(newRate);
    // Save to sessionStorage
    if (mentorData) {
      const updatedData = { ...mentorData, hourlyRate: newRate };
      sessionStorage.setItem('mentorData', JSON.stringify(updatedData));
    }
  };

  if (isLoading) {
    return <Loader size="lg" text="Loading your dashboard..." fullScreen />;
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, Dr. Smith! 👋</h1>
          <p className="text-muted-foreground">Ready to guide another student today?</p>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="secondary" className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${isAvailable ? 'bg-green-500' : 'bg-red-500'}`} />
            {isAvailable ? 'Available' : 'Busy'}
          </Badge>
          <Button variant="outline" size="sm">
            <Bell className="h-4 w-4" />
          </Button>
        </div>
      </motion.div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, index) => {
          const Icon = kpi.icon;
          return (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
              <Card className="glass-card hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{kpi.label}</p>
                      <motion.p className="text-3xl font-bold" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: index * 0.1 + 0.3, type: "spring" }}>
                        {kpi.value}
                      </motion.p>
                      <p className="text-xs text-green-600 font-medium">{kpi.change}</p>
                    </div>
                    <div className={`h-12 w-12 rounded-full bg-gradient-to-br ${kpi.color} flex items-center justify-center shadow-lg`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Main Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="requests">Requests</TabsTrigger>
          <TabsTrigger value="sessions">Sessions</TabsTrigger>
          <TabsTrigger value="availability">Availability</TabsTrigger>
          <TabsTrigger value="feedback">Feedback</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Upcoming Sessions */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Upcoming Sessions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingSessions.map((session, index) => (
                  <motion.div key={session.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={session.avatar} />
                        <AvatarFallback>{session.student.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{session.student}</p>
                        <p className="text-sm text-muted-foreground">{session.topic}</p>
                        <p className="text-xs text-muted-foreground">{session.duration} • {session.rate}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{session.date}</p>
                      <p className="text-sm text-muted-foreground">{session.time}</p>
                      <Badge variant={session.status === "confirmed" ? "default" : "secondary"} className="mt-1">
                        {session.status}
                      </Badge>
                    </div>
                  </motion.div>
                ))}
                <Button className="w-full" variant="outline">View All Sessions</Button>
              </CardContent>
            </Card>

            {/* Quick Actions & Settings */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Manage your mentoring activities</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="hourly-rate">Hourly Rate</Label>
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                      <Input
                        id="hourly-rate"
                        type="number"
                        value={hourlyRate}
                        onChange={(e) => handleRateUpdate(e.target.value)}
                        className="w-20 text-center"
                        min="10"
                        max="1000"
                      />
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor="availability">Available for new sessions</Label>
                    <Switch
                      id="availability"
                      checked={isAvailable}
                      onCheckedChange={setIsAvailable}
                    />
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-3">
                  <Button className="w-full btn-primary-custom justify-start" size="lg">
                    <Plus className="h-5 w-5 mr-2" />Set Availability
                  </Button>
                  <Button className="w-full justify-start" variant="outline" size="lg">
                    <MessageCircle className="h-5 w-5 mr-2" />Message Students
                  </Button>
                  <Button className="w-full justify-start" variant="outline" size="lg">
                    <BarChart3 className="h-5 w-5 mr-2" />View Analytics
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="requests" className="space-y-6">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="h-5 w-5" />
                Mentorship Requests
              </CardTitle>
              <CardDescription>Review and respond to student requests</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {mentorshipRequests.map((request, index) => (
                <motion.div key={request.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                  className="border rounded-lg p-6 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={request.avatar} />
                        <AvatarFallback>{request.student.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{request.student}</h3>
                        <p className="text-sm text-muted-foreground">{request.specialization}</p>
                        <p className="text-xs text-muted-foreground">{request.requestedDate}</p>
                      </div>
                    </div>
                    <Badge variant={request.urgency === 'high' ? 'destructive' : request.urgency === 'medium' ? 'default' : 'secondary'}>
                      {request.urgency} priority
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{request.message}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      Budget: {request.budget}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {request.preferredTime}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button onClick={() => handleAcceptRequest(request.id)} className="flex-1">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Accept
                    </Button>
                    <Button onClick={() => handleDeclineRequest(request.id)} variant="outline" className="flex-1">
                      <X className="h-4 w-4 mr-2" />
                      Decline
                    </Button>
                    <Button variant="outline" size="icon">
                      <MessageCircle className="h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sessions" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Today's Sessions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingSessions.filter(s => s.date === 'Today').map((session, index) => (
                  <motion.div key={session.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={session.avatar} />
                        <AvatarFallback>{session.student.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{session.student}</p>
                        <p className="text-sm text-muted-foreground">{session.topic}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{session.time}</p>
                      <Badge variant={session.status === "confirmed" ? "default" : "secondary"}>
                        {session.status}
                      </Badge>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Session Analytics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Completion Rate</span>
                      <span>{mentorStats.completionRate}%</span>
                    </div>
                    <Progress value={mentorStats.completionRate} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Response Time</span>
                      <span>{mentorStats.responseTime}</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Student Satisfaction</span>
                      <span>{(mentorStats.avgRating * 20).toFixed(0)}%</span>
                    </div>
                    <Progress value={mentorStats.avgRating * 20} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="availability" className="space-y-6">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Weekly Availability
              </CardTitle>
              <CardDescription>Manage your available time slots</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {availabilitySlots.map((day, index) => (
                  <motion.div key={day.day} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-20 font-medium">{day.day}</div>
                      <div className="flex-1">
                        {day.slots.length > 0 ? (
                          <div className="flex flex-wrap gap-2">
                            {day.slots.map((slot, slotIndex) => (
                              <Badge key={slotIndex} variant="outline" className="text-xs">
                                {slot}
                              </Badge>
                            ))}
                          </div>
                        ) : (
                          <span className="text-muted-foreground text-sm">No availability</span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch checked={day.available} />
                      <Button variant="outline" size="sm">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t">
                <Button className="w-full btn-primary-custom">
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Time Slot
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="feedback" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  Recent Feedback
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentFeedback.map((feedback, index) => (
                  <motion.div key={feedback.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                    className="border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>{feedback.student.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-sm">{feedback.student}</p>
                          <p className="text-xs text-muted-foreground">{feedback.session}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-4 w-4 ${i < feedback.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{feedback.comment}</p>
                    <p className="text-xs text-muted-foreground">{feedback.date}</p>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Rating Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{mentorStats.avgRating}</div>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-6 w-6 ${i < Math.floor(mentorStats.avgRating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">Based on {mentorStats.totalSessions} sessions</p>
                </div>
                
                <Separator />
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">5 stars</span>
                    <div className="flex-1 mx-3">
                      <Progress value={85} className="h-2" />
                    </div>
                    <span className="text-sm text-muted-foreground">85%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">4 stars</span>
                    <div className="flex-1 mx-3">
                      <Progress value={15} className="h-2" />
                    </div>
                    <span className="text-sm text-muted-foreground">15%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">3 stars</span>
                    <div className="flex-1 mx-3">
                      <Progress value={0} className="h-2" />
                    </div>
                    <span className="text-sm text-muted-foreground">0%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">2 stars</span>
                    <div className="flex-1 mx-3">
                      <Progress value={0} className="h-2" />
                    </div>
                    <span className="text-sm text-muted-foreground">0%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">1 star</span>
                    <div className="flex-1 mx-3">
                      <Progress value={0} className="h-2" />
                    </div>
                    <span className="text-sm text-muted-foreground">0%</span>
                  </div>
                </div>
                
                <Separator />
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-green-600">{mentorStats.completionRate}%</div>
                    <div className="text-xs text-muted-foreground">Completion Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">{mentorStats.responseTime}</div>
                    <div className="text-xs text-muted-foreground">Avg Response Time</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

    </div>
  );
};

export default MentorDashboard;