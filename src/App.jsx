import React, { useState, useEffect } from 'react';
import { useLenis } from './hooks/useLenis';
import { RouterProvider, useRouter } from './router';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import DetailModal from './components/DetailModal';
import { JsonLd, getOrganizationSchema, getWebSiteSchema, getFaqPageSchema } from './components/JsonLd';
import { HOMEPAGE_FAQS } from './data/faqsData';

// Sections
import Hero from './sections/Hero';
import ValueStrip from './sections/ValueStrip';
import Services from './sections/Services';
import WhyUs from './sections/WhyUs';
import Work from './sections/Work';
import Capabilities from './sections/Capabilities';
import FaqSection from './sections/FaqSection';
import CtaSection from './sections/CtaSection';

// Dedicated Pages
import ServicePage from './pages/ServicePage';
import NotFoundPage from './pages/NotFoundPage';

function AppContent() {
  // Initialize smooth scrolling with GSAP ScrollTrigger synchronization
  useLenis();

  const { path } = useRouter();

  // Modals state
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactDefaultService, setContactDefaultService] = useState('');
  const [detailModalData, setDetailModalData] = useState(null);

  const handleOpenContact = (defaultService = '') => {
    setContactDefaultService(defaultService);
    setIsContactOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactOpen(false);
    setContactDefaultService('');
  };

  const handleSelectService = (service) => {
    setDetailModalData({
      tag: service.tag,
      title: service.title,
      description: service.description,
      deliverables: service.deliverables,
      techStack: service.techStack,
      imageSrc: service.imageSrc,
      imageAlt: service.imageAlt,
    });
  };

  const handleSelectProject = (project) => {
    setDetailModalData({
      tag: project.tag,
      title: project.title,
      description: project.description,
      deliverables: project.deliverables,
      techStack: project.techStack,
      imageSrc: project.imageSrc,
      imageAlt: project.imageAlt,
    });
  };

  const handleCloseDetail = () => {
    setDetailModalData(null);
  };

  // Smoothly dismiss full-screen preloader once React application is ready
  useEffect(() => {
    const preloader = document.getElementById('app-preloader');
    if (preloader) {
      const timer = setTimeout(() => {
        preloader.classList.add('loaded');
        setTimeout(() => {
          if (preloader.parentNode) {
            preloader.parentNode.removeChild(preloader);
          }
        }, 550);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, []);

  // Set default home metadata when on root
  useEffect(() => {
    if (path === '/' || path === '') {
      document.title = '3STACK — Build, Grow & Automate | Modern Web & Software Solutions';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          '3STACK builds modern websites, software solutions, digital experiences and business automation systems that help businesses build, grow and work smarter.'
        );
      }
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute('href', 'https://3stack.tech/');
      }
    }
  }, [path]);

  // Determine active view based on path
  const renderView = () => {
    if (path === '/' || path === '' || path.startsWith('/#')) {
      return (
        <main id="main-content">
          <Hero onOpenContact={() => handleOpenContact()} />
          <ValueStrip />
          <Services onSelectService={handleSelectService} />
          <WhyUs onOpenContact={handleOpenContact} />
          <Work onSelectProject={handleSelectProject} />
          <Capabilities />
          <FaqSection onOpenContact={() => handleOpenContact()} />
          <CtaSection onOpenContact={() => handleOpenContact()} />
        </main>
      );
    }

    if (path.startsWith('/services/')) {
      const slug = path.replace('/services/', '').replace(/\/$/, '');
      return (
        <main id="main-content">
          <ServicePage slug={slug} onOpenContact={handleOpenContact} />
        </main>
      );
    }

    return (
      <main id="main-content">
        <NotFoundPage />
      </main>
    );
  };

  const isHome = path === '/' || path === '' || path.startsWith('/#');

  return (
    <div className="app-wrapper">
      {/* Global Brand JSON-LD Schemas */}
      <JsonLd schema={getOrganizationSchema()} />
      <JsonLd schema={getWebSiteSchema()} />
      {isHome && <JsonLd schema={getFaqPageSchema(HOMEPAGE_FAQS)} />}

      {/* Luxury smooth cursor follower */}
      <CustomCursor />

      {/* Primary Navigation */}
      <Navbar onOpenContact={() => handleOpenContact()} />

      {/* Dynamic View (Home / Service / 404) */}
      {renderView()}

      {/* Brand Footer */}
      <Footer onOpenContact={() => handleOpenContact()} />

      {/* Interactive Contact & Estimation Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={handleCloseContact}
        defaultService={contactDefaultService}
      />

      {/* Interactive Service / Project Specification Modal */}
      <DetailModal
        isOpen={!!detailModalData}
        data={detailModalData}
        onClose={handleCloseDetail}
        onActionClick={(serviceName) => {
          handleOpenContact(serviceName);
        }}
      />
    </div>
  );
}

export function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}

export default App;
