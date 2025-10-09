import { useState } from "react";
import { motion } from "framer-motion";
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Users, 
  Clock, 
  Star, 
  Calendar,
  BarChart3,
  PieChart,
  Target,
  Award,
  Zap,
  Activity,
  Eye,
  Download,
  Filter
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";

const Analytics = () => {
  const [timeRange, setTimeRange] = useState("30d");

  // Dummy data for analytics
  const overviewStats = [
    {
      title: "Total Earnings",
      value: "$12,450",
      change: "+18.2%",
      trend: "up",
      icon: DollarSign,
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Sessions Completed",
      value: "89",
      change: "+12.5%",
      trend: "up",
      icon: Calendar,
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Active Students",
      value: "24",
      change: "+8.1%",
      trend: "up",
      icon: Users,
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Average Rating",
      value: "4.8",
      change: "+0.1",
      trend: "up",
      icon: Star,
      color: "from-yellow-500 to-orange-600"
    }
  ];

  const sessionMetrics = [
    { metric: "Completion Rate", value: 98, target: 95, status: "excellent" },
    { metric: "Response Time", value: 2.3, target: 4, unit: "hours", status: "excellent" },
    { metric: "Student Satisfaction", value: 96, target: 90, status: "excellent" },
    { metric: "Repeat Booking Rate", value: 85, target: 80, status: "good" }
  ];

  const topStudents = [
    {
      name: "Sarah Chen",
      sessions: 12,
      rating: 5.0,
      totalSpent: 900,
      lastSession: "2 days ago",
      trend: "up"
    },
    {
      name: "Mike Johnson",
      sessions: 8,
      rating: 4.8,
      totalSpent: 600,
      lastSession: "1 week ago",
      trend: "up"
    },
    {
      name: "Lisa Wang",
      sessions: 6,
      rating: 4.9,
      totalSpent: 450,
      lastSession: "3 days ago",
      trend: "stable"
    },
    {
      name: "Alex Rodriguez",
      sessions: 5,
      rating: 5.0,
      totalSpent: 375,
      lastSession: "1 week ago",
      trend: "up"
    }
  ];

  const earningsData = [
    { month: "Jan", earnings: 8500, sessions: 32 },
    { month: "Feb", earnings: 9200, sessions: 35 },
    { month: "Mar", earnings: 8800, sessions: 33 },
    { month: "Apr", earnings: 10500, sessions: 40 },
    { month: "May", earnings: 11200, sessions: 42 },
    { month: "Jun", earnings: 12450, sessions: 47 }
  ];

  const sessionTypes = [
    { type: "Career Planning", count: 35, percentage: 39, color: "bg-blue-500" },
    { type: "Technical Interview", count: 28, percentage: 31, color: "bg-green-500" },
    { type: "Resume Review", count: 15, percentage: 17, color: "bg-purple-500" },
    { type: "Leadership", count: 11, percentage: 13, color: "bg-orange-500" }
  ];

  const achievements = [
    {
      title: "Top Performer",
      description: "Highest rated mentor this month",
      icon: Award,
      earned: true,
      date: "2024-01-15"
    },
    {
      title: "Session Master",
      description: "Completed 100+ sessions",
      icon: Target,
      earned: true,
      date: "2024-01-10"
    },
    {
      title: "Earnings Champion",
      description: "Earned $10,000+ this month",
      icon: DollarSign,
      earned: true,
      date: "2024-01-05"
    },
    {
      title: "Student Favorite",
      description: "95%+ satisfaction rate",
      icon: Star,
      earned: false,
      progress: 92
    }
  ];

  const StatCard = ({ stat, index }) => {
    const Icon = stat.icon;
    const TrendIcon = stat.trend === "up" ? TrendingUp : TrendingDown;
    const trendColor = stat.trend === "up" ? "text-green-600" : "text-red-600";
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
      >
        <Card className="glass-card hover:shadow-xl transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">{stat.title}</p>
                <p className="text-3xl font-bold mt-1">{stat.value}</p>
                <div className="flex items-center gap-1 mt-2">
                  <TrendIcon className={`h-4 w-4 ${trendColor}`} />
                  <span className={`text-sm font-medium ${trendColor}`}>{stat.change}</span>
                </div>
              </div>
              <div className={`h-12 w-12 rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                <Icon className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  };

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Analytics Dashboard</h1>
            <p className="text-muted-foreground">Track your mentorship performance and growth</p>
          </div>
          <div className="flex items-center gap-3">
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="30d">Last 30 days</SelectItem>
                <SelectItem value="90d">Last 90 days</SelectItem>
                <SelectItem value="1y">Last year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {overviewStats.map((stat, index) => (
          <StatCard key={stat.title} stat={stat} index={index} />
        ))}
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="students">Students</TabsTrigger>
          <TabsTrigger value="earnings">Earnings</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Performance Metrics */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Performance Metrics
                </CardTitle>
                <CardDescription>Key performance indicators</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {sessionMetrics.map((metric, index) => (
                  <motion.div
                    key={metric.metric}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{metric.metric}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold">
                          {metric.value}{metric.unit && ` ${metric.unit}`}
                        </span>
                        <Badge 
                          variant={metric.status === "excellent" ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {metric.status}
                        </Badge>
                      </div>
                    </div>
                    <Progress 
                      value={(metric.value / metric.target) * 100} 
                      className="h-2" 
                    />
                    <p className="text-xs text-muted-foreground">
                      Target: {metric.target}{metric.unit && ` ${metric.unit}`}
                    </p>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Session Types */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="h-5 w-5" />
                  Session Types
                </CardTitle>
                <CardDescription>Distribution of session types</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {sessionTypes.map((type, index) => (
                  <motion.div
                    key={type.type}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${type.color}`} />
                      <span className="text-sm font-medium">{type.type}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">{type.count}</span>
                      <span className="text-sm font-bold">{type.percentage}%</span>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="students" className="space-y-6">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Top Students
              </CardTitle>
              <CardDescription>Your most engaged students</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topStudents.map((student, index) => (
                  <motion.div
                    key={student.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          {student.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold">{student.name}</h3>
                        <p className="text-sm text-muted-foreground">{student.lastSession}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <p className="text-sm font-medium">{student.sessions}</p>
                        <p className="text-xs text-muted-foreground">Sessions</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-medium">${student.totalSpent}</p>
                        <p className="text-xs text-muted-foreground">Total</p>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 text-yellow-500 fill-current" />
                          <span className="text-sm font-medium">{student.rating}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Rating</p>
                      </div>
                      <Badge variant={student.trend === "up" ? "default" : "secondary"}>
                        {student.trend}
                      </Badge>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="earnings" className="space-y-6">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Earnings Trend
              </CardTitle>
              <CardDescription>Monthly earnings and session volume</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {earningsData.map((month, index) => (
                  <motion.div
                    key={month.month}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div>
                      <h3 className="font-semibold">{month.month}</h3>
                      <p className="text-sm text-muted-foreground">{month.sessions} sessions</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-green-600">${month.earnings.toLocaleString()}</p>
                      <p className="text-sm text-muted-foreground">
                        ${Math.round(month.earnings / month.sessions)}/session
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className={`glass-card ${achievement.earned ? 'border-green-500/50' : ''}`}>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className={`h-12 w-12 rounded-full flex items-center justify-center ${
                          achievement.earned 
                            ? 'bg-gradient-to-br from-green-500 to-emerald-600' 
                            : 'bg-gradient-to-br from-gray-400 to-gray-500'
                        }`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold">{achievement.title}</h3>
                          <p className="text-sm text-muted-foreground">{achievement.description}</p>
                          {achievement.earned ? (
                            <p className="text-xs text-green-600 mt-1">
                              Earned on {new Date(achievement.date).toLocaleDateString()}
                            </p>
                          ) : (
                            <div className="mt-2">
                              <div className="flex items-center justify-between text-xs mb-1">
                                <span>Progress</span>
                                <span>{achievement.progress}%</span>
                              </div>
                              <Progress value={achievement.progress} className="h-2" />
                            </div>
                          )}
                        </div>
                        {achievement.earned && (
                          <Badge variant="default" className="bg-green-500">
                            <Award className="h-3 w-3 mr-1" />
                            Earned
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Analytics;


