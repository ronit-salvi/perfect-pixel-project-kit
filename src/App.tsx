
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SigningJourneyProvider } from "./contexts/SigningJourneyContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Authentication from "./pages/Authentication";
import GPSCapture from "./pages/GPSCapture";
import ConsentPage from "./pages/ConsentPage";
import DocumentPreviewPage from "./pages/DocumentPreviewPage";
import ESPSignPage from "./pages/ESPSignPage";
import SuccessPage from "./pages/SuccessPage";
import FinalSuccessPage from "./pages/FinalSuccessPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SigningJourneyProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/document-preview/:documentIndex" element={<DocumentPreviewPage />} />
            <Route path="/authentication" element={<Authentication />} />
            <Route path="/gps-capture" element={<GPSCapture />} />
            <Route path="/consent" element={<ConsentPage />} />
            <Route path="/esp-sign/:documentIndex" element={<ESPSignPage />} />
            <Route path="/success/:documentIndex" element={<SuccessPage />} />
            <Route path="/final-success" element={<FinalSuccessPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </SigningJourneyProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
