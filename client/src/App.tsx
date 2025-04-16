import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { AnimatePresence } from "framer-motion";

// Pages
import Home from "@/pages/home";
import Services from "@/pages/services";
import Industries from "@/pages/industries";
import HowItWorks from "@/pages/how-it-works";
import CaseStudies from "@/pages/case-studies";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";

// Components
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/scroll-to-top-button";

function Router() {
  const [location] = useLocation();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <AnimatePresence mode="wait">
        <Switch key={location}>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/industries" component={Industries} />
          <Route path="/how-it-works" component={HowItWorks} />
          <Route path="/case-studies" component={CaseStudies} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <ScrollToTopButton />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
