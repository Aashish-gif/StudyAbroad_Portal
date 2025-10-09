import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Star, 
  TrendingUp, 
  MessageSquare, 
  ThumbsUp, 
  Award, 
  BarChart3,
  Filter,
  Download,
  Eye,
  Reply,
  Heart,
  Target,
  Users,
  Calendar,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

const Feedback = () => {
  const [filterRating, setFilterRating] = useState("all");
  const [filterPeriod, setFilterPeriod] = useState("all");

  // Dummy data for feedback and ratings
  const mentorStats = {
    overallRating: 4.8,
    totalReviews: 127,
    responseRate: 96,
    completionRate: 98,
    averageResponseTime: "2.3 hours"
  };

  const ratingDistribution = [
    { stars: 5, count: 102, percentage: 80 },
    { stars: 4, count: 18, percentage: 14 },
    { stars: 3, count: 5, percentage: 4 },
    { stars: 2, count: 2, percentage: 2 },
    { stars: 1, count: 0, percentage: 0 }
  ];

  const recentFeedback = [
    {
      id: 1,
      student: {
        name: "Sarah Chen",
        avatar: "/api/placeholder/40/40",
        location: "San Francisco, CA"
      },
      rating: 5,
      comment: "Dr. Smith was incredibly helpful! The career guidance session really opened my eyes to new opportunities. His insights about the tech industry were spot-on and he provided actionable advice that I'm already implementing.",
      date: "2 days ago",
      session: "Career Planning",
      duration: "60 min",
      topics: ["Career Transition", "Industry Insights", "Goal Setting"],
      helpful: true,
      wouldRecommend: true
    },
    {
      id: 2,
      student: {
        name: "Mike Johnson",
        avatar: "/api/placeholder/40/40",
        location: "Austin, TX"
      },
      rating: 5,
      comment: "Excellent mentor with deep industry knowledge. The technical interview preparation was thorough and well-structured. I felt much more confident after our session.",
      date: "1 week ago",
      session: "Technical Interview Prep",
      duration: "90 min",
      topics: ["System Design", "Coding Interview", "Behavioral Questions"],
      helpful: true,
      wouldRecommend: true
    },
    {
      id: 3,
      student: {
        name: "Lisa Wang",
        avatar: "/api/placeholder/40/40",
        location: "New York, NY"
      },
      rating: 4,
      comment: "Great session! Very professional and provided actionable advice. The resume review was comprehensive and helped me identify areas for improvement.",
      date: "1 week ago",
      session: "Resume Review",
      duration: "45 min",
      topics: ["Resume Optimization", "ATS Optimization", "LinkedIn Profile"],
      helpful: true,
      wouldRecommend: true
    },
    {
      id: 4,
      student: {
        name: "Alex Rodriguez",
        avatar: "/api/placeholder/40/40",
        location: "Miami, FL"
      },
      rating: 5,
      comment: "Outstanding mentorship! Dr. Smith's approach to problem-solving and his ability to explain complex concepts in simple terms is remarkable. Highly recommend!",
      date: "2 weeks ago",
      session: "Leadership Development",
      duration: "75 min",
      topics: ["Team Management", "Communication", "Strategic Thinking"],
      helpful: true,
      wouldRecommend: true
    },
    {
      id: 5,
      student: {
        name: "Emma Thompson",
        avatar: "/api/placeholder/40/40",
        location: "Seattle, WA"
      },
      rating: 4,
      comment: "Very knowledgeable mentor. Helped me understand PM frameworks and best practices. The session was well-structured and I got valuable insights.",
      date: "2 weeks ago",
      session: "Product Management",
      duration: "60 min",
      topics: ["PM Frameworks", "Stakeholder Management", "Roadmap Planning"],
      helpful: true,
      wouldRecommend: true
    }
  ];

  const achievements = [
    {
      title: "Top Rated Mentor",
      description: "Consistently rated 4.8+ stars",
      icon: Star,
      color: "text-yellow-500"
    },
    {
      title: "Response Champion",
      description: "96% response rate",
      icon: TrendingUp,
      color: "text-green-500"
    },
    {
      title: "Session Expert",
      description: "98% completion rate",
      icon: Award,
      color: "text-blue-500"
    }
  ];

  const filteredFeedback = recentFeedback.filter(feedback => {
    if (filterRating !== "all" && feedback.rating.toString() !== filterRating) {
      return false;
    }
    // Add period filtering logic here
    return true;
  });

  const FeedbackCard = ({ feedback }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="border rounded-lg p-6 hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12">
            <AvatarImage src={feedback.student.avatar} />
            <AvatarFallback>{feedback.student.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold">{feedback.student.name}</h3>
            <p className="text-sm text-muted-foreground">{feedback.student.location}</p>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < feedback.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">{feedback.date}</span>
            </div>
          </div>
        </div>
        <Badge variant="outline">{feedback.session}</Badge>
      </div>

      <p className="text-muted-foreground mb-4 leading-relaxed">{feedback.comment}</p>

      <div className="space-y-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>{feedback.duration}</span>
          <span>•</span>
          <Calendar className="h-4 w-4" />
          <span>{feedback.date}</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {feedback.topics.map((topic, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {topic}
            </Badge>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-3 border-t">
          <div className="flex items-center gap-2 text-sm text-green-600">
            <ThumbsUp className="h-4 w-4" />
            <span>Helpful</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-blue-600">
            <Heart className="h-4 w-4" />
            <span>Would recommend</span>
          </div>
          <div className="flex-1" />
          <Button variant="ghost" size="sm">
            <Reply className="h-4 w-4 mr-1" />
            Reply
          </Button>
          <Button variant="ghost" size="sm">
            <Eye className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold text-foreground mb-2">Feedback & Ratings</h1>
        <p className="text-muted-foreground">Track your mentorship performance and student satisfaction</p>
      </motion.div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Overall Rating</p>
                  <p className="text-3xl font-bold">{mentorStats.overallRating}</p>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < Math.floor(mentorStats.overallRating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} />
                    ))}
                  </div>
                </div>
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center">
                  <Star className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Reviews</p>
                  <p className="text-3xl font-bold">{mentorStats.totalReviews}</p>
                  <p className="text-xs text-green-600 mt-1">+12 this month</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Response Rate</p>
                  <p className="text-3xl font-bold">{mentorStats.responseRate}%</p>
                  <p className="text-xs text-green-600 mt-1">Excellent</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Completion Rate</p>
                  <p className="text-3xl font-bold">{mentorStats.completionRate}%</p>
                  <p className="text-xs text-green-600 mt-1">Outstanding</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Achievements */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-3 p-4 border rounded-lg hover:shadow-md transition-all"
                  >
                    <Icon className={`h-8 w-8 ${achievement.color}`} />
                    <div>
                      <h4 className="font-semibold">{achievement.title}</h4>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Rating Distribution */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}>
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Rating Distribution
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {ratingDistribution.map((rating) => (
                <div key={rating.stars} className="flex items-center gap-3">
                  <div className="flex items-center gap-1 w-16">
                    <span className="text-sm font-medium">{rating.stars}</span>
                    <Star className="h-3 w-3 text-yellow-500 fill-current" />
                  </div>
                  <div className="flex-1">
                    <Progress value={rating.percentage} className="h-2" />
                  </div>
                  <span className="text-sm text-muted-foreground w-12 text-right">{rating.count}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Recent Feedback */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }} className="lg:col-span-2">
          <Card className="glass-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Recent Feedback
                </CardTitle>
                <div className="flex items-center gap-2">
                  <Select value={filterRating} onValueChange={setFilterRating}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Ratings</SelectItem>
                      <SelectItem value="5">5 Stars</SelectItem>
                      <SelectItem value="4">4 Stars</SelectItem>
                      <SelectItem value="3">3 Stars</SelectItem>
                      <SelectItem value="2">2 Stars</SelectItem>
                      <SelectItem value="1">1 Star</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-96 overflow-y-auto premium-scrollbar">
                {filteredFeedback.map((feedback) => (
                  <FeedbackCard key={feedback.id} feedback={feedback} />
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Feedback;


