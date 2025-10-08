import { Plane, FileText, DollarSign, Home, ShieldCheck, Map } from "lucide-react";
import { Button } from "@/components/ui/button";

const StudyAbroad = () => {
  const services = [
    {
      icon: FileText,
      title: "Application Support",
      description: "Complete guidance through university applications, essay writing, and documentation",
      points: ["University Selection", "SOP/LOR Writing", "Application Review", "Deadline Management"]
    },
    {
      icon: ShieldCheck,
      title: "Visa Assistance",
      description: "Navigate the complex visa process with our expert support and guidance",
      points: ["Document Preparation", "Interview Prep", "Visa Application", "Post-Visa Support"]
    },
    {
      icon: DollarSign,
      title: "Financial Planning",
      description: "Understand costs, find scholarships, and plan your finances effectively",
      points: ["Budget Planning", "Scholarship Search", "Loan Assistance", "Part-time Work Info"]
    },
    {
      icon: Home,
      title: "Pre-Departure Support",
      description: "Get ready for your journey with comprehensive pre-departure guidance",
      points: ["Accommodation Help", "Travel Planning", "Culture Prep", "Packing Assistance"]
    }
  ];

  const destinations = [
    {
      country: "United States",
      universities: "4,000+",
      students: "1M+",
      highlights: ["Top QS Rankings", "Research Opportunities", "Diverse Programs", "OPT Benefits"],
      flag: "🇺🇸"
    },
    {
      country: "United Kingdom",
      universities: "160+",
      students: "500K+",
      highlights: ["World-Class Education", "Shorter Duration", "Post-Study Work", "Rich Culture"],
      flag: "🇬🇧"
    },
    {
      country: "Canada",
      universities: "200+",
      students: "640K+",
      highlights: ["PR Opportunities", "Affordable Tuition", "Safe Environment", "Work Rights"],
      flag: "🇨🇦"
    },
    {
      country: "Australia",
      universities: "43+",
      students: "700K+",
      highlights: ["Quality Education", "Work Opportunities", "Great Climate", "Global Recognition"],
      flag: "🇦🇺"
    },
    {
      country: "Germany",
      universities: "400+",
      students: "400K+",
      highlights: ["Low/No Tuition", "Strong Economy", "Research Focus", "EU Access"],
      flag: "🇩🇪"
    },
    {
      country: "Singapore",
      universities: "35+",
      students: "100K+",
      highlights: ["Asian Hub", "Top Universities", "Career Growth", "Multicultural"],
      flag: "🇸🇬"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h1 className="text-5xl font-bold mb-4 text-foreground">
            Study <span className="text-primary">Abroad</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your future with international education. We guide you through every 
            step of your study abroad journey, from university selection to settling in.
          </p>
        </div>

        {/* Services */}
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
                <ul className="space-y-2">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span className="text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Popular Destinations */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Popular Study Destinations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((dest, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-4 text-center">{dest.flag}</div>
                <h3 className="text-xl font-bold text-center mb-4 text-foreground">{dest.country}</h3>
                <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                  <div className="text-center">
                    <div className="font-bold text-primary">{dest.universities}</div>
                    <div className="text-muted-foreground">Universities</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-primary">{dest.students}</div>
                    <div className="text-muted-foreground">Int'l Students</div>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  {dest.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full rounded-full" variant="outline">
                  Explore {dest.country}
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Process Timeline */}
        <div className="glass-card p-12 rounded-2xl mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Your Study Abroad Timeline</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { month: "12-18 months", task: "Research & Planning" },
              { month: "9-12 months", task: "Test Prep & Applications" },
              { month: "6-9 months", task: "Admissions & Financial Aid" },
              { month: "3-6 months", task: "Visa & Documentation" },
              { month: "0-3 months", task: "Pre-Departure Prep" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-3">
                  <Map className="h-8 w-8 text-white" />
                </div>
                <div className="font-bold mb-1 text-primary">{phase.month}</div>
                <div className="text-sm text-muted-foreground">{phase.task}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center glass-card p-12 rounded-2xl">
          <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6">
            <Plane className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-foreground">Ready to Start Your Journey?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book a free consultation with our study abroad experts and take the first 
            step towards your international education dreams.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="rounded-full px-8">
              <Plane className="h-5 w-5 mr-2" />
              Book Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8">
              Download Guide
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyAbroad;