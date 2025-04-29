
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LoanAgreement from "./pages/LoanAgreement";
import Authentication from "./pages/Authentication";
import GPSCapture from "./pages/GPSCapture";
import ESPPage from "./pages/ESPPage";
import SuccessPage from "./pages/SuccessPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/loan-agreement" element={<LoanAgreement />} />
          <Route path="/authentication" element={<Authentication />} />
          <Route path="/gps-capture" element={<GPSCapture />} />
          <Route path="/esp-capture" element={<ESPPage />} />
          <Route path="/signed-success" element={<SuccessPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
