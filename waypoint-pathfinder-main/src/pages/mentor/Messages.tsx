import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  Send, 
  Search,
  MoreVertical,
  Phone,
  Video,
  Paperclip,
  Smile
} from "lucide-react";

const MentorMessages = () => {
  const [selectedChat, setSelectedChat] = useState(1);
  const [messageText, setMessageText] = useState("");

  const conversations = [
    {
      id: 1,
      studentName: "Alex Johnson",
      lastMessage: "Thank you for the session! It was really helpful.",
      timestamp: "2 min ago",
      unread: 2,
      online: true,
      avatar: "AJ"
    },
    {
      id: 2,
      studentName: "Maria Garcia",
      lastMessage: "Can we schedule another session for next week?",
      timestamp: "1 hour ago",
      unread: 0,
      online: true,
      avatar: "MG"
    },
    {
      id: 3,
      studentName: "David Chen",
      lastMessage: "I've updated my resume based on your feedback",
      timestamp: "3 hours ago",
      unread: 1,
      online: false,
      avatar: "DC"
    },
    {
      id: 4,
      studentName: "Sarah Williams",
      lastMessage: "Looking forward to our session tomorrow!",
      timestamp: "Yesterday",
      unread: 0,
      online: false,
      avatar: "SW"
    },
    {
      id: 5,
      studentName: "James Brown",
      lastMessage: "Thanks for the career advice!",
      timestamp: "2 days ago",
      unread: 0,
      online: false,
      avatar: "JB"
    }
  ];

  const messages = {
    1: [
      { id: 1, sender: "student", text: "Hi! I wanted to discuss my career path", time: "10:30 AM" },
      { id: 2, sender: "mentor", text: "Hello Alex! I'd be happy to help. What specific area are you interested in?", time: "10:32 AM" },
      { id: 3, sender: "student", text: "I'm torn between data science and software engineering", time: "10:35 AM" },
      { id: 4, sender: "mentor", text: "Both are excellent choices. Let's explore your interests and strengths to help you decide.", time: "10:37 AM" },
      { id: 5, sender: "student", text: "Thank you for the session! It was really helpful.", time: "Just now" }
    ],
    2: [
      { id: 1, sender: "student", text: "Hello! Hope you're doing well", time: "9:00 AM" },
      { id: 2, sender: "mentor", text: "Hi Maria! I'm great, thank you. How can I help you today?", time: "9:15 AM" },
      { id: 3, sender: "student", text: "Can we schedule another session for next week?", time: "9:20 AM" }
    ],
    3: [
      { id: 1, sender: "student", text: "I've updated my resume based on your feedback", time: "2:00 PM" },
      { id: 2, sender: "mentor", text: "Great! Please share it and I'll review it.", time: "2:30 PM" }
    ]
  };

  const currentChat = conversations.find(c => c.id === selectedChat);
  const currentMessages = messages[selectedChat as keyof typeof messages] || [];

  const handleSendMessage = () => {
    if (messageText.trim()) {
      // In a real app, this would send the message to the backend
      console.log("Sending message:", messageText);
      setMessageText("");
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold text-gradient mb-2">Messages</h1>
        <p className="text-muted-foreground">Communicate with your mentees</p>
      </motion.div>

      {/* Messages Layout */}
      <Card className="glass-card">
        <div className="flex h-[calc(100vh-250px)]">
          {/* Conversations List */}
          <div className="w-80 border-r border-border/50">
            <CardHeader className="border-b border-border/50">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search conversations..."
                  className="pl-10"
                />
              </div>
            </CardHeader>
            <div className="overflow-y-auto h-full">
              {conversations.map((conv) => (
                <motion.div
                  key={conv.id}
                  onClick={() => setSelectedChat(conv.id)}
                  className={`p-4 border-b border-border/50 cursor-pointer transition-colors ${
                    selectedChat === conv.id ? "bg-primary/5" : "hover:bg-muted/50"
                  }`}
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-start gap-3">
                    <div className="relative">
                      <Avatar>
                        <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white">
                          {conv.avatar}
                        </AvatarFallback>
                      </Avatar>
                      {conv.online && (
                        <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold truncate">{conv.studentName}</h4>
                        <span className="text-xs text-muted-foreground">{conv.timestamp}</span>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">{conv.lastMessage}</p>
                    </div>
                    {conv.unread > 0 && (
                      <Badge className="bg-primary">{conv.unread}</Badge>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b border-border/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Avatar>
                    <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white">
                      {currentChat?.avatar}
                    </AvatarFallback>
                  </Avatar>
                  {currentChat?.online && (
                    <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white" />
                  )}
                </div>
                <div>
                  <h3 className="font-bold">{currentChat?.studentName}</h3>
                  <p className="text-xs text-muted-foreground">
                    {currentChat?.online ? "Online" : "Offline"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Phone className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Video className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {currentMessages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === "mentor" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[70%] ${message.sender === "mentor" ? "order-2" : "order-1"}`}>
                    <div
                      className={`rounded-2xl px-4 py-3 ${
                        message.sender === "mentor"
                          ? "bg-gradient-to-r from-primary to-purple-600 text-white"
                          : "bg-muted"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                    </div>
                    <span className="text-xs text-muted-foreground mt-1 block">
                      {message.time}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-border/50">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Paperclip className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Smile className="h-5 w-5" />
                </Button>
                <Input
                  placeholder="Type a message..."
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} className="btn-primary-custom">
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MentorMessages;
