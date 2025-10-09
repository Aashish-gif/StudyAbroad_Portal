import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import MobileNav from "./components/MobileNav";

import Landing from "./pages/Landing";
import Index from "./pages/Index";
import About from "./pages/About";
import Universities from "./pages/Universities";
import UniversityDetail from "./pages/UniversityDetail";
import Courses from "./pages/Courses";
import TestPrep from "./pages/TestPrep";
import CareerCounseling from "./pages/CareerCounseling";
import StudyAbroad from "./pages/StudyAbroad";
import Resources from "./pages/Resources";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import StudentDashboard from "./pages/student/Dashboard";
import StudentConsultants from "./pages/student/Consultants";
import MentorDashboard from "./pages/mentor/Dashboard";
import MentorSessions from "./pages/mentor/Sessions";
import MentorAvailability from "./pages/mentor/Availability";
import MentorFeedback from "./pages/mentor/Feedback";
import MentorAnalytics from "./pages/mentor/Analytics";
import MentorRequests from "./pages/mentor/Requests";
import MentorMessages from "./pages/mentor/Messages";
import MentorProfile from "./pages/mentor/Profile";
import MentorRegistration from "./pages/MentorRegistration";
import ConsultantDashboard from "./pages/consultant/Dashboard";
import StudentLayout from "./components/layouts/StudentLayout";
import MentorLayout from "./components/layouts/MentorLayout";
import ConsultantLayout from "./components/layouts/ConsultantLayout";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  
  // Routes where sidebar should be hidden
  const noSidebarRoutes = ['/landing', '/login', '/mentor/register'];
  const shouldShowSidebar = !noSidebarRoutes.includes(location.pathname) && 
                           !location.pathname.startsWith('/mentor/') && 
                           !location.pathname.startsWith('/consultant/') &&
                           !location.pathname.startsWith('/student/');

  return (
    <div className="flex min-h-screen w-full relative">
      {shouldShowSidebar && (
        <>
          <Navigation />
          <MobileNav />
        </>
      )}
      <main className={`flex-1 ${shouldShowSidebar ? 'lg:ml-64 pt-20 lg:pt-0' : ''} relative z-10`}>
        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/universities" element={<Universities />} />
          <Route path="/universities/:universityId" element={<UniversityDetail />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/test-prep" element={<TestPrep />} />
          <Route path="/career-counseling" element={<CareerCounseling />} />
          <Route path="/study-abroad" element={<StudyAbroad />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/student/dashboard" element={<StudentLayout><StudentDashboard /></StudentLayout>} />
          <Route path="/student/consultants" element={<StudentLayout><StudentConsultants /></StudentLayout>} />
          <Route path="/mentor/register" element={<MentorRegistration />} />
          <Route path="/mentor/dashboard" element={<MentorLayout><MentorDashboard /></MentorLayout>} />
          <Route path="/mentor/sessions" element={<MentorLayout><MentorSessions /></MentorLayout>} />
          <Route path="/mentor/availability" element={<MentorLayout><MentorAvailability /></MentorLayout>} />
          <Route path="/mentor/feedback" element={<MentorLayout><MentorFeedback /></MentorLayout>} />
          <Route path="/mentor/analytics" element={<MentorLayout><MentorAnalytics /></MentorLayout>} />
          <Route path="/mentor/requests" element={<MentorLayout><MentorRequests /></MentorLayout>} />
          <Route path="/mentor/messages" element={<MentorLayout><MentorMessages /></MentorLayout>} />
          <Route path="/mentor/profile" element={<MentorLayout><MentorProfile /></MentorLayout>} />
          <Route path="/consultant/dashboard" element={<ConsultantLayout><ConsultantDashboard /></ConsultantLayout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
