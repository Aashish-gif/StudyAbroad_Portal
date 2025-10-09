import { useState } from "react";
import { Compass, Users, TrendingUp, MessageCircle, Calendar, Star, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const CareerCounseling = () => {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedCounselor, setSelectedCounselor] = useState<string | null>(null);
  const [bookingData, setBookingData] = useState({ date: '', time: '', email: '', message: '' });
  const [isBooked, setIsBooked] = useState(false);
  const [meetLink, setMeetLink] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const services = [
    {
      icon: Compass,
      title: "Career Assessment",
      description: "Discover your strengths, interests, and ideal career paths through comprehensive assessments",
      features: ["Personality Tests", "Skills Assessment", "Interest Mapping", "Career Matching"]
    },
    {
      icon: TrendingUp,
      title: "Goal Setting & Planning",
      description: "Create a roadmap to achieve your career aspirations with expert guidance",
      features: ["SMART Goals", "Action Plans", "Timeline Creation", "Progress Tracking"]
    },
    {
      icon: Users,
      title: "One-on-One Counseling",
      description: "Work directly with experienced counselors who understand your unique situation",
      features: ["Personal Sessions", "Career Guidance", "Decision Support", "Ongoing Mentorship"]
    },
    {
      icon: MessageCircle,
      title: "Industry Insights",
      description: "Get the latest information about trending careers and industry requirements",
      features: ["Market Trends", "Salary Insights", "Growth Prospects", "Skill Requirements"]
    }
  ];

  const counselors = [
    {
      name: "Dr. Sarah Johnson",
      specialization: "STEM Careers",
      experience: "15 years",
      rating: "4.9",
      sessions: "500+"
    },
    {
      name: "Michael Chen",
      specialization: "Business & Finance",
      experience: "12 years",
      rating: "4.8",
      sessions: "450+"
    },
    {
      name: "Priya Sharma",
      specialization: "Creative Arts",
      experience: "10 years",
      rating: "4.9",
      sessions: "380+"
    },
    {
      name: "David Williams",
      specialization: "Healthcare",
      experience: "18 years",
      rating: "5.0",
      sessions: "600+"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h1 className="text-5xl font-bold mb-4 text-foreground">
            <span className="text-primary">Career Counseling</span> Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get expert guidance to navigate your career journey. Our experienced counselors 
            help you make informed decisions about your education and professional path.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="glass-card p-8 rounded-2xl hover:shadow-xl transition-all duration-300 slide-in-right"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* How It Works */}
        <div className="glass-card p-12 rounded-2xl mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Book Session", desc: "Choose a counselor and schedule your session" },
              { step: "2", title: "Assessment", desc: "Complete career assessments and questionnaires" },
              { step: "3", title: "Consultation", desc: "Meet with your counselor for personalized guidance" },
              { step: "4", title: "Action Plan", desc: "Receive a detailed roadmap for your career journey" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  {item.step}
                </div>
                <h4 className="font-bold mb-2 text-foreground">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Counselors */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Meet Our Expert Counselors</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {counselors.map((counselor, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl hover:shadow-xl transition-all duration-300"
              >
                <div className="h-20 w-20 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4"></div>
                <h4 className="font-bold text-center mb-1 text-foreground">{counselor.name}</h4>
                <p className="text-sm text-center text-primary mb-3">{counselor.specialization}</p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center justify-between">
                    <span>Experience:</span>
                    <span className="font-medium">{counselor.experience}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Sessions:</span>
                    <span className="font-medium">{counselor.sessions}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Rating:</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{counselor.rating}</span>
                    </div>
                  </div>
                </div>
                <Dialog open={bookingOpen} onOpenChange={setBookingOpen}>
                  <DialogTrigger asChild>
                    <Button 
                      className="w-full mt-4 rounded-full" size="sm"
                      onClick={() => { setSelectedCounselor(counselor.name); setIsBooked(false); setMeetLink(null); }}
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Session
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-white border border-gray-200 text-gray-900 max-w-md">
                    <DialogHeader>
                      <DialogTitle className="text-2xl text-gray-900">Book with {selectedCounselor}</DialogTitle>
                      <DialogDescription className="text-gray-600">Schedule your counseling session</DialogDescription>
                    </DialogHeader>
                    {!isBooked ? (
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label className="text-gray-700">Date</Label>
                            <Input
                              type="date"
                              value={bookingData.date}
                              onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                              className="bg-white border-gray-300 text-gray-900"
                            />
                          </div>
                          <div>
                            <Label className="text-gray-700">Time</Label>
                            <Select onValueChange={(value) => setBookingData({ ...bookingData, time: value })}>
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
                            onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                            className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
                          />
                        </div>
                        <div>
                          <Label className="text-gray-700">Message (Optional)</Label>
                          <Textarea
                            placeholder="Tell us about your goals..."
                            value={bookingData.message}
                            onChange={(e) => setBookingData({ ...bookingData, message: e.target.value })}
                            className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
                          />
                        </div>
                        <Button
                          className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700"
                          disabled={submitting || !bookingData.date || !bookingData.time || !bookingData.email}
                          onClick={async () => {
                            try {
                              setSubmitting(true);
                              const res = await fetch('/api/book', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({
                                  consultantName: selectedCounselor,
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
                          }}
                        >
                          <Calendar className="h-4 w-4 mr-2" />
                          {submitting ? 'Booking...' : 'Confirm Booking'}
                        </Button>
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Mail className="h-8 w-8 text-white" />
                        </div>
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
                      </div>
                    )}
                  </DialogContent>
                </Dialog>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center glass-card p-12 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Start Your Career Journey Today</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Take the first step towards a fulfilling career. Book a free consultation 
            session with one of our expert counselors and discover your potential.
          </p>
          <Dialog open={bookingOpen} onOpenChange={setBookingOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="rounded-full px-8" onClick={() => { setSelectedCounselor('Any Counselor'); setIsBooked(false); setMeetLink(null); }}>
                Book Free Consultation
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-white border border-gray-200 text-gray-900 max-w-md">
              <DialogHeader>
                <DialogTitle className="text-2xl text-gray-900">Book a Session</DialogTitle>
                <DialogDescription className="text-gray-600">Schedule your counseling session</DialogDescription>
              </DialogHeader>
              {!isBooked ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-gray-700">Date</Label>
                      <Input type="date" value={bookingData.date} onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })} className="bg-white border-gray-300 text-gray-900" />
                    </div>
                    <div>
                      <Label className="text-gray-700">Time</Label>
                      <Select onValueChange={(value) => setBookingData({ ...bookingData, time: value })}>
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
                    <Input type="email" placeholder="your@email.com" value={bookingData.email} onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })} className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500" />
                  </div>
                  <div>
                    <Label className="text-gray-700">Message (Optional)</Label>
                    <Textarea placeholder="Tell us about your goals..." value={bookingData.message} onChange={(e) => setBookingData({ ...bookingData, message: e.target.value })} className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500" />
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700"
                    disabled={submitting || !bookingData.date || !bookingData.time || !bookingData.email}
                    onClick={async () => {
                      try {
                        setSubmitting(true);
                        const res = await fetch('/api/book', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({
                            consultantName: selectedCounselor,
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
                    }}
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    {submitting ? 'Booking...' : 'Confirm Booking'}
                  </Button>
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
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
                  <Badge className="bg-gradient-to-r from-green-400 to-blue-500 text-white">Check your email for details</Badge>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default CareerCounseling;