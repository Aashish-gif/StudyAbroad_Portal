import { useState } from "react";
import { motion } from "framer-motion";
import { Star, MapPin, Clock, DollarSign, Video, Mail, Award, Users, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Consultants = () => {
  const [selectedConsultant, setSelectedConsultant] = useState<any>(null);
  const [bookingData, setBookingData] = useState({
    date: '',
    time: '',
    message: '',
    email: ''
  });
  const [isBooked, setIsBooked] = useState(false);
  const [meetLink, setMeetLink] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const consultants = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      title: "Study Abroad Expert",
      country: "USA",
      experience: "15+ years",
      rating: 4.9,
      reviews: 234,
      price: "$150/hour",
      specialties: ["MBA Applications", "Ivy League", "Scholarships"],
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face",
      availability: "Available Today",
      description: "Former Harvard admissions officer with expertise in top-tier university applications."
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      title: "Engineering Consultant",
      country: "Canada",
      experience: "12+ years",
      rating: 4.8,
      reviews: 189,
      price: "$120/hour",
      specialties: ["Engineering Programs", "Research", "Co-op Programs"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      availability: "Available Tomorrow",
      description: "MIT graduate specializing in engineering programs across North America."
    },
    {
      id: 3,
      name: "Dr. Priya Sharma",
      title: "Medical School Advisor",
      country: "UK",
      experience: "10+ years",
      rating: 4.9,
      reviews: 156,
      price: "$180/hour",
      specialties: ["Medical School", "UCAT/BMAT", "Personal Statements"],
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      availability: "Available This Week",
      description: "Oxford Medical School graduate helping students enter top medical programs."
    },
    {
      id: 4,
      name: "James Wilson",
      title: "Business School Expert",
      country: "Australia",
      experience: "8+ years",
      rating: 4.7,
      reviews: 98,
      price: "$100/hour",
      specialties: ["MBA", "GMAT Prep", "Career Transition"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      availability: "Available Next Week",
      description: "Wharton MBA helping professionals transition to top business schools."
    }
  ];

  const handleBooking = async () => {
    try {
      setSubmitting(true);
      const res = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          consultantName: selectedConsultant?.name,
          userEmail: bookingData.email,
          date: bookingData.date,
          time: bookingData.time,
          message: bookingData.message,
        })
      });
      if (!res.ok) throw new Error('Booking failed');
      const data = await res.json();
      setMeetLink(data.meetLink);
      setIsBooked(true);
    } catch (e) {
      console.error(e);
      alert('Failed to book session. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-6">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full blur-3xl opacity-10 ${
              i % 3 === 0 ? 'bg-cyan-500' : i % 3 === 1 ? 'bg-pink-500' : 'bg-yellow-500'
            }`}
            style={{
              width: `${150 + i * 30}px`,
              height: `${150 + i * 30}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 100, -100, 0],
              y: [0, -100, 100, 0],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration: 20 + i * 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            Expert <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Consultants</span>
          </h1>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Connect with experienced consultants who will guide you through your study abroad journey 🌟
          </p>
        </motion.div>

        {/* Consultants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {consultants.map((consultant, index) => (
            <motion.div
              key={consultant.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/15 transition-all h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <motion.img
                      src={consultant.image}
                      alt={consultant.name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-white/20"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    />
                    <div className="flex-1">
                      <CardTitle className="text-white text-xl">{consultant.name}</CardTitle>
                      <CardDescription className="text-purple-200">{consultant.title}</CardDescription>
                      <div className="flex items-center gap-2 mt-2">
                        <MapPin className="h-4 w-4 text-cyan-400" />
                        <span className="text-sm text-cyan-400">{consultant.country}</span>
                        <Clock className="h-4 w-4 text-green-400 ml-2" />
                        <span className="text-sm text-green-400">{consultant.experience}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Rating & Reviews */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-white font-medium">{consultant.rating}</span>
                      </div>
                      <span className="text-purple-200 text-sm">({consultant.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center gap-1 text-green-400 font-bold">
                      <DollarSign className="h-4 w-4" />
                      <span>{consultant.price}</span>
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-2">
                    {consultant.specialties.map((specialty, idx) => (
                      <Badge key={idx} className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                        {specialty}
                      </Badge>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-purple-200 text-sm">{consultant.description}</p>

                  {/* Availability */}
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm font-medium">{consultant.availability}</span>
                  </div>

                  {/* Book Button */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white"
                        onClick={() => setSelectedConsultant(consultant)}
                      >
                        <Video className="h-4 w-4 mr-2" />
                        Book Free Consultation
                      </Button>
                    </DialogTrigger>
                    
                    <DialogContent className="bg-white border border-gray-200 text-gray-900 max-w-md">
                      <DialogHeader>
                        <DialogTitle className="text-2xl text-gray-900">
                          Book with {selectedConsultant?.name}
                        </DialogTitle>
                        <DialogDescription className="text-gray-600">
                          Schedule your free consultation session
                        </DialogDescription>
                      </DialogHeader>

                      {!isBooked ? (
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label className="text-gray-700">Date</Label>
                              <Input
                                type="date"
                                value={bookingData.date}
                                onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
                                className="bg-white border-gray-300 text-gray-900"
                              />
                            </div>
                            <div>
                              <Label className="text-gray-700">Time</Label>
                              <Select onValueChange={(value) => setBookingData({...bookingData, time: value})}>
                                <SelectTrigger className="bg-white border-gray-300 text-gray-900">
                                  <SelectValue placeholder="Select time" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="09:00">09:00 AM</SelectItem>
                                  <SelectItem value="11:00">11:00 AM</SelectItem>
                                  <SelectItem value="14:00">02:00 PM</SelectItem>
                                  <SelectItem value="16:00">04:00 PM</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div>
                            <Label className="text-gray-700">Your Email</Label>
                            <Input
                              type="email"
                              placeholder="your@email.com"
                              value={bookingData.email}
                              onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
                              className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
                            />
                          </div>

                          <div>
                            <Label className="text-gray-700">Message (Optional)</Label>
                            <Textarea
                              placeholder="Tell us about your goals..."
                              value={bookingData.message}
                              onChange={(e) => setBookingData({...bookingData, message: e.target.value})}
                              className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
                            />
                          </div>

                          <Button 
                            onClick={handleBooking}
                            className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700"
                            disabled={submitting || !bookingData.date || !bookingData.time || !bookingData.email}
                          >
                            <Calendar className="h-4 w-4 mr-2" />
                            {submitting ? 'Booking...' : 'Confirm Booking'}
                          </Button>
                        </div>
                      ) : (
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className="text-center py-8"
                        >
                          <motion.div
                            className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 0.5 }}
                          >
                            <Mail className="h-8 w-8 text-white" />
                          </motion.div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">Booking Confirmed! 🎉</h3>
                          <p className="text-gray-600 mb-4">
                            Meeting link has been sent to <span className="text-blue-600">{bookingData.email}</span>
                          </p>
                          <div className="bg-gray-50 rounded-lg p-4 mb-4">
                            <p className="text-sm text-gray-900">
                              <strong>Meet Link:</strong><br/>
                              <span className="text-blue-600">{meetLink || 'Generating link...'}</span>
                            </p>
                          </div>
                          <Badge className="bg-gradient-to-r from-green-400 to-blue-500 text-white">
                            Check your email for details
                          </Badge>
                        </motion.div>
                      )}
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Consultants;