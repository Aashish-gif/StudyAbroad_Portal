import { motion } from "framer-motion";
import { Users, DollarSign, Upload, Plus, FileText, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ConsultantDashboard = () => {
  const kpis = [
    { label: "Active Students", value: 24, icon: Users, color: "from-blue-500 to-purple-600" },
    { label: "Total Earnings", value: "$2,450", icon: DollarSign, color: "from-green-500 to-blue-600" },
    { label: "Resources Uploaded", value: 18, icon: Upload, color: "from-purple-500 to-pink-600" }
  ];

  const recentActivity = [
    { student: "Alex Kumar", action: "Downloaded Resume Template", time: "2 hours ago" },
    { student: "Maria Garcia", action: "Booked consultation", time: "4 hours ago" },
    { student: "David Chen", action: "Completed course", time: "1 day ago" }
  ];

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Good morning, Sarah! 🌟</h1>
        <p className="text-muted-foreground">Here's what's happening with your consultancy.</p>
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
            <CardTitle>Your Next Launch</CardTitle>
            <CardDescription>Ready to publish your latest resource</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 border rounded-lg bg-muted/20">
              <h4 className="font-medium mb-2">Advanced Interview Techniques</h4>
              <p className="text-sm text-muted-foreground mb-4">Complete guide with video examples and practice questions</p>
              <Button className="btn-primary-custom">
                <Plus className="h-4 w-4 mr-2" />
                Publish Resource
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Recent Student Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((activity, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 p-3 border rounded-lg">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <FileText className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">{activity.student}</p>
                  <p className="text-sm text-muted-foreground">{activity.action}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card className="glass-card">
        <CardContent className="p-8">
          <div className="flex items-center justify-center h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl">
            <div className="text-center">
              <motion.div
                className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center"
                animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <TrendingUp className="h-10 w-10 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-primary mb-2">Growing Impact</h3>
              <p className="text-muted-foreground">Helping students achieve their career goals</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ConsultantDashboard;