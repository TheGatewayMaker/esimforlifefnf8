import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FeaturesPage from "@/pages/Features";
import BuyPage from "@/pages/Buy";
import ReferPage from "@/pages/Refer";
import SupportPage from "@/pages/Support";
import { useEffect } from "react";

// Force dark mode on app initialization
document.documentElement.classList.add("dark");
localStorage.setItem("theme", "dark");

const queryClient = new QueryClient();

function ScrollToHash() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [location]);
  return null;
}

const AppRoutes = () => (
  <>
    <Header />
    <ScrollToHash />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/features" element={<FeaturesPage />} />
      <Route path="/buy" element={<BuyPage />} />
      <Route path="/refer" element={<ReferPage />} />
      <Route path="/support" element={<SupportPage />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
