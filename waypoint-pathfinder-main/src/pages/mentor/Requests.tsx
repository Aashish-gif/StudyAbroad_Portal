import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  CheckCircle, 
  XCircle, 
  Clock, 
  User,
  Calendar,
  MessageSquare,
  Star
} from "lucide-react";

const MentorRequests = () => {
  const [requests, setRequests] = useState([
    {
      id: 1,
      studentName: "Alex Johnson",
      email: "alex.j@email.com",
      program: "Computer Science",
      university: "Stanford University",
      topic: "Career Planning",
      message: "I need guidance on transitioning from academia to industry. Looking for insights on tech career paths.",
      requestedDate: "2024-10-15",
      status: "pending",
      rating: null,
      urgency: "high"
    },
    {
      id: 2,
      studentName: "Maria Garcia",
      email: "maria.g@email.com",
      program: "Business Administration",
      university: "Harvard Business School",
      topic: "Technical Interview Prep",
      message: "Preparing for consulting firm interviews. Need help with case studies and technical rounds.",
      requestedDate: "2024-10-14",
      status: "pending",
      rating: 4.8,
      urgency: "medium"
    },
    {
      id: 3,
      studentName: "David Chen",
      email: "david.c@email.com",
      program: "Data Science",
      university: "MIT",
      topic: "Resume Review",
      message: "Would like feedback on my resume before applying to top tech companies.",
      requestedDate: "2024-10-13",
      status: "pending",
      rating: 4.9,
      urgency: "low"
    },
    {
      id: 4,
      studentName: "Sarah Williams",
      email: "sarah.w@email.com",
      program: "Engineering",
      university: "UC Berkeley",
      topic: "Project Guidance",
      message: "Working on a machine learning project and need architectural guidance.",
      requestedDate: "2024-10-12",
      status: "accepted",
      rating: 5.0,
      urgency: "medium"
    },
    {
      id: 5,
      studentName: "James Brown",
      email: "james.b@email.com",
      program: "MBA",
      university: "Wharton",
      topic: "Career Transition",
      message: "Looking to pivot from finance to product management. Need strategic advice.",
      requestedDate: "2024-10-11",
      status: "rejected",
      rating: null,
      urgency: "low"
    }
  ]);

  const handleAccept = (id: number) => {
    setRequests(requests.map(req => 
      req.id === id ? { ...req, status: "accepted" } : req
    ));
  };

  const handleReject = (id: number) => {
    setRequests(requests.map(req => 
      req.id === id ? { ...req, status: "rejected" } : req
    ));
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "high": return "bg-red-500";
      case "medium": return "bg-yellow-500";
      case "low": return "bg-green-500";
      default: return "bg-gray-500";
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge variant="outline" className="bg-yellow-500/10 text-yellow-600 border-yellow-500/20">Pending</Badge>;
      case "accepted":
        return <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-500/20">Accepted</Badge>;
      case "rejected":
        return <Badge variant="outline" className="bg-red-500/10 text-red-600 border-red-500/20">Rejected</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const pendingRequests = requests.filter(r => r.status === "pending");
  const acceptedRequests = requests.filter(r => r.status === "accepted");
  const rejectedRequests = requests.filter(r => r.status === "rejected");

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold text-gradient mb-2">Mentorship Requests</h1>
        <p className="text-muted-foreground">Review and manage student mentorship requests</p>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Pending</p>
                  <h3 className="text-3xl font-bold text-yellow-600">{pendingRequests.length}</h3>
                </div>
                <div className="h-12 w-12 rounded-full bg-yellow-500/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Accepted</p>
                  <h3 className="text-3xl font-bold text-green-600">{acceptedRequests.length}</h3>
                </div>
                <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Rejected</p>
                  <h3 className="text-3xl font-bold text-red-600">{rejectedRequests.length}</h3>
                </div>
                <div className="h-12 w-12 rounded-full bg-red-500/10 flex items-center justify-center">
                  <XCircle className="h-6 w-6 text-red-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Requests List */}
      <div className="space-y-4">
        {requests.map((request, index) => (
          <motion.div
            key={request.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="glass-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white">
                        {request.studentName.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-bold">{request.studentName}</h3>
                        <div className={`h-2 w-2 rounded-full ${getUrgencyColor(request.urgency)}`} />
                      </div>
                      <p className="text-sm text-muted-foreground">{request.email}</p>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="text-xs text-muted-foreground">{request.university}</span>
                        <span className="text-xs text-muted-foreground">•</span>
                        <span className="text-xs text-muted-foreground">{request.program}</span>
                        {request.rating && (
                          <>
                            <span className="text-xs text-muted-foreground">•</span>
                            <div className="flex items-center gap-1">
                              <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                              <span className="text-xs font-medium">{request.rating}</span>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {getStatusBadge(request.status)}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <MessageSquare className="h-4 w-4 text-primary" />
                      <span className="font-semibold text-sm">Topic: {request.topic}</span>
                    </div>
                    <p className="text-muted-foreground ml-6">{request.message}</p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>Requested: {new Date(request.requestedDate).toLocaleDateString()}</span>
                    </div>
                    
                    {request.status === "pending" && (
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleReject(request.id)}
                          className="text-red-600 hover:bg-red-50"
                        >
                          <XCircle className="h-4 w-4 mr-2" />
                          Reject
                        </Button>
                        <Button
                          size="sm"
                          onClick={() => handleAccept(request.id)}
                          className="bg-green-600 hover:bg-green-700"
                        >
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Accept
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MentorRequests;
