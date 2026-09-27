import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetails from './pages/ServiceDetails';
import Work from './pages/Work';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFound from './pages/NotFound';
import { WhatsAppFloat } from './components/ui/WhatsAppFloat';
import { CallFloat } from './components/ui/CallFloat';
import './App.css';

export default function App() {
  const location = useLocation();

  // Global scroll reveal effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Optional: stop observing once it's visible if you only want it to animate once
            // observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Wait a brief moment for dynamic content (lazy loaded pages) to mount
    const timeout = setTimeout(() => {
      const elements = document.querySelectorAll('.animate-fade-in-up, .animate-fade-in');
      elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, [location.pathname]); // Re-run when the route changes

  return (
    <div className="app-container">
      <ScrollToTop />
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetails />} />
          <Route path="/portfolio" element={<Work />} />
          <Route path="/work" element={<Work />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <WhatsAppFloat />
      <CallFloat />
      <Footer />
    </div>
  );
}