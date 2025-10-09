import { motion } from "framer-motion";
import { Users, Calendar, Star, Plus, MessageCircle, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const MentorDashboard = () => {
  const kpis = [
    { label: "Active Mentees", value: 12, icon: Users, color: "from-blue-500 to-purple-600" },
    { label: "Upcoming Sessions", value: 5, icon: Calendar, color: "from-green-500 to-blue-600" },
    { label: "Avg. Rating", value: 4.8, icon: Star, color: "from-yellow-500 to-orange-600" }
  ];

  const upcomingSessions = [
    { student: "Sarah Chen", time: "2:00 PM", topic: "Career Planning", status: "confirmed" },
    { student: "Mike Johnson", time: "4:30 PM", topic: "Resume Review", status: "pending" },
    { student: "Lisa Wang", time: "Tomorrow 10:00 AM", topic: "Interview Prep", status: "confirmed" }
  ];

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, Dr. Smith! 👋</h1>
        <p className="text-muted-foreground">Ready to guide another student today?</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {kpis.map((kpi, index) => {
          const Icon = kpi.icon;
          return (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
              <Card className="glass-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{kpi.label}</p>
                      <motion.p className="text-3xl font-bold" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: index * 0.1 + 0.3, type: "spring" }}>
                        {kpi.value}
                      </motion.p>
                    </div>
                    <div className={`h-12 w-12 rounded-full bg-gradient-to-br ${kpi.color} flex items-center justify-center`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Upcoming Sessions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingSessions.map((session, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div>
                  <p className="font-medium">{session.student}</p>
                  <p className="text-sm text-muted-foreground">{session.topic}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{session.time}</p>
                  <Badge variant={session.status === "confirmed" ? "default" : "secondary"}>{session.status}</Badge>
                </div>
              </motion.div>
            ))}
            <Button className="w-full" variant="outline">View All Sessions</Button>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Manage your mentoring activities</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full btn-primary-custom justify-start" size="lg">
              <Plus className="h-5 w-5 mr-2" />Set Availability
            </Button>
            <Button className="w-full justify-start" variant="outline" size="lg">
              <MessageCircle className="h-5 w-5 mr-2" />Message Students
            </Button>
            <Button className="w-full justify-start" variant="outline" size="lg">
              <TrendingUp className="h-5 w-5 mr-2" />View Analytics
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MentorDashboard;