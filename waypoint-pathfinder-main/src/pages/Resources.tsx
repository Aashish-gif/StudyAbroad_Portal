import { BookOpen, Video, FileText, Headphones, Download, TrendingUp, ExternalLink, Youtube } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Resources = () => {
  const categories = [
    {
      icon: FileText,
      title: "Study Guides",
      count: "500+",
      description: "Comprehensive guides for exams and applications",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Video,
      title: "Video Tutorials",
      count: "300+",
      description: "Expert-led video lessons and walkthroughs",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Headphones,
      title: "Podcasts",
      count: "100+",
      description: "Success stories and expert interviews",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: BookOpen,
      title: "E-Books",
      count: "150+",
      description: "In-depth books on education and careers",
      color: "from-orange-500 to-red-500"
    }
  ];

  const resources = [
    {
      slug: "complete-gre-prep-2024",
      type: "Guide",
      title: "Complete GRE Preparation Guide 2024",
      description: "Everything you need to ace the GRE exam",
      downloads: "15K",
      badge: "Popular"
    },
    {
      slug: "winning-sop-video",
      type: "Video",
      title: "How to Write a Winning SOP",
      description: "Step-by-step video tutorial on crafting your statement",
      downloads: "8K",
      badge: "New"
    },
    {
      slug: "university-application-checklist",
      type: "E-Book",
      title: "University Application Checklist",
      description: "Never miss a deadline with our comprehensive checklist",
      downloads: "12K",
      badge: "Essential"
    },
    {
      slug: "scholarship-application-masterclass",
      type: "Guide",
      title: "Scholarship Application Masterclass",
      description: "Increase your chances of winning scholarships",
      downloads: "10K",
      badge: "Popular"
    },
    {
      slug: "visa-interview-success-tips",
      type: "Video",
      title: "Visa Interview Success Tips",
      description: "Common questions and how to answer them",
      downloads: "9K",
      badge: "Trending"
    },
    {
      slug: "success-stories-india-to-ivy",
      type: "Podcast",
      title: "Success Stories: From India to Ivy League",
      description: "Inspiring journeys of successful students",
      downloads: "5K",
      badge: "Inspiring"
    }
  ];

  const recentBlogs = [
    {
      slug: "top-10-universities-cs-2024",
      title: "Top 10 Universities for Computer Science in 2024",
      date: "March 15, 2024",
      readTime: "5 min read"
    },
    {
      slug: "fund-your-study-abroad",
      title: "How to Fund Your Study Abroad Dreams",
      date: "March 12, 2024",
      readTime: "7 min read"
    },
    {
      slug: "ielts-vs-toefl",
      title: "IELTS vs TOEFL: Which Test Should You Take?",
      date: "March 10, 2024",
      readTime: "4 min read"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h1 className="text-5xl font-bold mb-4 text-foreground">
            Learning <span className="text-primary">Resources</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access our comprehensive library of free resources designed to help you 
            succeed in every step of your academic journey.
          </p>
        </div>

        {/* Resource Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl hover:shadow-xl transition-all duration-300 text-center fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-14 w-14 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{category.count}</div>
                <h3 className="font-bold mb-2 text-foreground">{category.title}</h3>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </div>
            );
          })}
        </div>

        {/* Exam Playlists */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-2 text-foreground flex items-center gap-2">
            <Youtube className="h-7 w-7 text-primary" /> Exam Playlists
          </h2>
          <p className="text-muted-foreground mb-6">Curated YouTube playlists to prepare for popular exams.</p>
          {(() => {
            const playlists = [
              {
                slug: "ielts",
                exam: "IELTS",
                title: "IELTS Academic & General Training – Complete Prep",
                channel: "E2 IELTS",
                url: "https://www.youtube.com/playlist?list=PLNfJQ5R-2R2o8qgN8o0y2n7V0QmV-ielts",
                badge: "Highly Recommended",
                color: "from-purple-500 to-pink-500",
              },
              {
                slug: "toefl",
                exam: "TOEFL",
                title: "TOEFL iBT Full Course (Reading/Listening/Speaking/Writing)",
                channel: "TST Prep",
                url: "https://www.youtube.com/playlist?list=PLlc5P2eQn4D1g8rj2Xx3E0QeJToeflCourse",
                badge: "Community Favorite",
                color: "from-blue-500 to-cyan-500",
              },
              {
                slug: "gre",
                exam: "GRE",
                title: "GRE Quant & Verbal Strategy Playlist",
                channel: "Magoosh GRE",
                url: "https://www.youtube.com/playlist?list=PLm2aZB8ZqXJQKpQ1q3I7v3m2mMagooshGRE",
                badge: "Best for Strategies",
                color: "from-emerald-500 to-green-600",
              },
              {
                slug: "pte",
                exam: "PTE",
                title: "PTE Academic Tips & Practice",
                channel: "PTE Tutorials",
                url: "https://www.youtube.com/playlist?list=PLnqkQxPTEtutsTips",
                badge: "Up-to-date",
                color: "from-orange-500 to-red-500",
              },
              {
                slug: "sat",
                exam: "SAT",
                title: "Digital SAT Math & Reading Prep",
                channel: "Khan Academy",
                url: "https://www.youtube.com/playlist?list=PLSQl0a2vh4HBkhanSat",
                badge: "Official Partner",
                color: "from-indigo-500 to-violet-600",
              },
              {
                slug: "duolingo-english-test",
                exam: "Duolingo English Test",
                title: "DET Practice and Scoring Insights",
                channel: "Duolingo English Test",
                url: "https://www.youtube.com/playlist?list=PLDetOfficialLearn",
                badge: "Official",
                color: "from-teal-500 to-cyan-600",
              },
            ];
            const exams = ["All", ...Array.from(new Set(playlists.map(p => p.exam)))];
            const [selectedExam, setSelectedExam] = useState<string>("All");
            const filtered = selectedExam === "All" ? playlists : playlists.filter(p => p.exam === selectedExam);
            return (
              <div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
                  <div className="text-sm text-muted-foreground">Filter by exam</div>
                  <div className="w-full md:w-64">
                    <Select value={selectedExam} onValueChange={setSelectedExam}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select exam" />
                      </SelectTrigger>
                      <SelectContent>
                        {exams.map((e) => (
                          <SelectItem key={e} value={e}>{e}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filtered.map((p, i) => (
                  <div
                    key={i}
                    className="glass-card p-6 rounded-2xl hover:shadow-xl transition-all duration-300 slide-in-right"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <Badge variant="secondary">{p.exam}</Badge>
                      <Badge className="bg-primary">{p.badge}</Badge>
                    </div>
                    <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-4`}>
                      <Video className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-1 text-foreground">{p.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">Channel: {p.channel}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <ExternalLink className="h-4 w-4" />
                        <span>Playlist</span>
                      </div>
                      <Button size="sm" className="rounded-full" asChild>
                        <Link to={`/resources/playlists/${p.slug}`}>
                          Watch
                        </Link>
                      </Button>
                    </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>

        {/* Featured Resources */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Featured Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl hover:shadow-xl transition-all duration-300 slide-in-right"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <Badge variant="secondary">{resource.type}</Badge>
                  <Badge className="bg-primary">{resource.badge}</Badge>
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">{resource.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Download className="h-4 w-4" />
                    <span>{resource.downloads} downloads</span>
                  </div>
                  <Button size="sm" className="rounded-full" asChild>
                    <Link to={`/resources/items/${resource.slug}`}>Access</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Blog Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Latest Blog Posts</h2>
            <div className="space-y-4">
              {recentBlogs.map((blog, index) => (
                <div
                  key={index}
                  className="glass-card p-6 rounded-2xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold text-foreground">{blog.title}</h3>
                    <Badge variant="outline">{blog.readTime}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{blog.date}</p>
                  <Button variant="ghost" className="text-primary p-0" asChild>
                    <Link to={`/blog/${blog.slug}`}>Read More →</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6 text-foreground">Quick Stats</h2>
            <div className="glass-card p-6 rounded-2xl space-y-6">
              {[
                { label: "Total Resources", value: "1000+", icon: BookOpen },
                { label: "Downloads This Month", value: "50K+", icon: TrendingUp },
                { label: "Active Users", value: "25K+", icon: TrendingUp },
                { label: "New This Week", value: "15", icon: TrendingUp }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="text-center glass-card p-12 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Stay Updated</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest resources, tips, and success 
            stories delivered to your inbox every week.
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full border border-input bg-background"
            />
            <Button className="rounded-full px-8">Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
