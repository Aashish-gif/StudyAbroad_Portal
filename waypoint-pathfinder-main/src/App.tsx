import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import MobileNav from "./components/MobileNav";

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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>

        <div className="flex min-h-screen w-full relative">
          <Navigation />
          <MobileNav />
          <main className="flex-1 lg:ml-64 pt-20 lg:pt-0 relative z-10">
            <Routes>
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
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
