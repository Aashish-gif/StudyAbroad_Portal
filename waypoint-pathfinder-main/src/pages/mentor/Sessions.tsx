import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calendar, 
  Clock, 
  Video, 
  Phone, 
  MapPin, 
  DollarSign, 
  CheckCircle, 
  X, 
  MessageCircle, 
  FileText, 
  Star,
  User,
  AlertCircle,
  CreditCard,
  Shield,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Sessions = () => {
  const [selectedSession, setSelectedSession] = useState(null);
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);

  // Dummy data for sessions
  const upcomingSessions = [
    {
      id: 1,
      student: {
        name: "Sarah Chen",
        avatar: "/api/placeholder/40/40",
        email: "sarah.chen@email.com",
        rating: 4.9
      },
      topic: "Career Planning & Interview Prep",
      date: "2024-01-15",
      time: "14:00",
      duration: 60,
      type: "video",
      status: "confirmed",
      rate: 75,
      meetingLink: "https://meet.waypoint.com/session-1",
      notes: "Focus on behavioral questions and STAR method",
      objectives: [
        "Prepare for technical interviews",
        "Practice system design questions", 
        "Review resume and portfolio"
      ]
    },
    {
      id: 2,
      student: {
        name: "Mike Johnson",
        avatar: "/api/placeholder/40/40",
        email: "mike.johnson@email.com",
        rating: 4.7
      },
      topic: "Resume Review & LinkedIn Optimization",
      date: "2024-01-15",
      time: "16:30",
      duration: 45,
      type: "video",
      status: "pending",
      rate: 75,
      meetingLink: "https://meet.waypoint.com/session-2",
      notes: "Recent graduate looking for entry-level positions",
      objectives: [
        "Optimize resume for ATS",
        "Improve LinkedIn profile",
        "Identify target companies"
      ]
    },
    {
      id: 3,
      student: {
        name: "Lisa Wang",
        avatar: "/api/placeholder/40/40",
        email: "lisa.wang@email.com",
        rating: 4.8
      },
      topic: "Leadership Development & Team Management",
      date: "2024-01-16",
      time: "10:00",
      duration: 90,
      type: "video",
      status: "confirmed",
      rate: 85,
      meetingLink: "https://meet.waypoint.com/session-3",
      notes: "Mid-level manager looking to advance to senior role",
      objectives: [
        "Develop leadership skills",
        "Learn team management techniques",
        "Create advancement strategy"
      ]
    }
  ];

  const completedSessions = [
    {
      id: 4,
      student: {
        name: "Alex Rodriguez",
        avatar: "/api/placeholder/40/40",
        email: "alex.rodriguez@email.com",
        rating: 4.9
      },
      topic: "Technical Skills Assessment",
      date: "2024-01-12",
      time: "15:00",
      duration: 60,
      type: "video",
      status: "completed",
      rate: 75,
      feedback: {
        rating: 5,
        comment: "Excellent session! Dr. Smith provided great insights into my technical skills and career path."
      },
      outcome: "Student identified key areas for improvement and created learning plan"
    },
    {
      id: 5,
      student: {
        name: "Emma Thompson",
        avatar: "/api/placeholder/40/40",
        email: "emma.thompson@email.com",
        rating: 4.8
      },
      topic: "Product Management Fundamentals",
      date: "2024-01-10",
      time: "14:00",
      duration: 75,
      type: "video",
      status: "completed",
      rate: 80,
      feedback: {
        rating: 4,
        comment: "Very knowledgeable mentor. Helped me understand PM frameworks and best practices."
      },
      outcome: "Student gained clarity on PM role and next steps for career transition"
    }
  ];

  const handleStartSession = (sessionId: number) => {
    // Handle starting a session
    console.log('Starting session:', sessionId);
  };

  const handleCompleteSession = (sessionId: number) => {
    // Handle completing a session
    console.log('Completing session:', sessionId);
  };

  const handleReschedule = (sessionId: number) => {
    // Handle rescheduling
    console.log('Rescheduling session:', sessionId);
  };

  const handleCancel = (sessionId: number) => {
    // Handle cancellation
    console.log('Cancelling session:', sessionId);
  };

  const SessionCard = ({ session, isCompleted = false }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="border rounded-lg p-6 hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12">
            <AvatarImage src={session.student.avatar} />
            <AvatarFallback>{session.student.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold">{session.student.name}</h3>
            <p className="text-sm text-muted-foreground">{session.topic}</p>
            <div className="flex items-center gap-2 mt-1">
              <Star className="h-3 w-3 text-yellow-500 fill-current" />
              <span className="text-xs text-muted-foreground">{session.student.rating}</span>
            </div>
          </div>
        </div>
        <Badge variant={session.status === 'confirmed' ? 'default' : session.status === 'pending' ? 'secondary' : 'outline'}>
          {session.status}
        </Badge>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          {new Date(session.date).toLocaleDateString()}
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          {session.time}
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          {session.type === 'video' ? <Video className="h-4 w-4" /> : <Phone className="h-4 w-4" />}
          {session.duration} min
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <DollarSign className="h-4 w-4" />
          ${session.rate}/hour
        </div>
      </div>

      {session.notes && (
        <div className="mb-4">
          <Label className="text-sm font-medium">Session Notes:</Label>
          <p className="text-sm text-muted-foreground mt-1">{session.notes}</p>
        </div>
      )}

      {session.objectives && (
        <div className="mb-4">
          <Label className="text-sm font-medium">Session Objectives:</Label>
          <ul className="text-sm text-muted-foreground mt-1 space-y-1">
            {session.objectives.map((objective, index) => (
              <li key={index} className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3 text-green-500" />
                {objective}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex gap-2 pt-4 border-t">
        {!isCompleted ? (
          <>
            {session.status === 'confirmed' && (
              <Button 
                onClick={() => handleStartSession(session.id)}
                className="flex-1 btn-primary-custom"
              >
                <Video className="h-4 w-4 mr-2" />
                Start Session
              </Button>
            )}
            {session.status === 'pending' && (
              <>
                <Button 
                  onClick={() => handleCompleteSession(session.id)}
                  variant="outline"
                  className="flex-1"
                >
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Accept
                </Button>
                <Button 
                  onClick={() => handleCancel(session.id)}
                  variant="outline"
                  size="icon"
                >
                  <X className="h-4 w-4" />
                </Button>
              </>
            )}
            <Button 
              onClick={() => handleReschedule(session.id)}
              variant="outline"
              size="icon"
            >
              <Calendar className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline"
              size="icon"
            >
              <MessageCircle className="h-4 w-4" />
            </Button>
          </>
        ) : (
          <div className="w-full">
            {session.feedback && (
              <div className="mb-3 p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">{session.feedback.rating}/5</span>
                </div>
                <p className="text-sm text-muted-foreground">{session.feedback.comment}</p>
              </div>
            )}
            <div className="text-sm text-muted-foreground">
              <strong>Outcome:</strong> {session.outcome}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold text-foreground mb-2">Session Management</h1>
        <p className="text-muted-foreground">Manage your mentorship sessions and track progress</p>
      </motion.div>

      <Tabs defaultValue="upcoming" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="upcoming">Upcoming Sessions</TabsTrigger>
          <TabsTrigger value="completed">Completed Sessions</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {upcomingSessions.map((session, index) => (
              <SessionCard key={session.id} session={session} index={index} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="completed" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {completedSessions.map((session, index) => (
              <SessionCard key={session.id} session={session} isCompleted={true} index={index} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Payment Processing Dialog */}
      <Dialog open={showPaymentDialog} onOpenChange={setShowPaymentDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              Payment Processing
            </DialogTitle>
            <DialogDescription>
              Secure payment processing for your mentorship session
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <Alert>
              <Shield className="h-4 w-4" />
              <AlertDescription>
                Your payment is secured with 256-bit SSL encryption
              </AlertDescription>
            </Alert>

            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                <span>Session Fee (60 min)</span>
                <span className="font-semibold">$75.00</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                <span>Platform Fee (5%)</span>
                <span className="font-semibold">$3.75</span>
              </div>
              <Separator />
              <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg">
                <span className="font-semibold">Total</span>
                <span className="font-bold text-lg">$78.75</span>
              </div>
            </div>

            <div className="space-y-3">
              <Label htmlFor="card-number">Card Number</Label>
              <Input id="card-number" placeholder="1234 5678 9012 3456" />
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input id="expiry" placeholder="MM/YY" />
                </div>
                <div>
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" placeholder="123" />
                </div>
              </div>
            </div>

            <Button className="w-full btn-primary-custom">
              <CreditCard className="h-4 w-4 mr-2" />
              Process Payment
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Sessions;


