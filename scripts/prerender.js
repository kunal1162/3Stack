import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');
const templatePath = path.join(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('dist/index.html not found! Run npm run build first.');
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf8');

const baseUrl = 'https://3stack.in';

// Base schemas
const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${baseUrl}/#organization`,
  'name': '3Stack',
  'alternateName': ['3 Stack', '3Stack Agency', '3Stack IT Agency', '3Stack Digital Agency'],
  'legalName': '3Stack IT Agency',
  'url': baseUrl,
  'logo': `${baseUrl}/3stack-logo.png`,
  'email': '3stacktech@gmail.com',
  'contactPoint': {
    '@type': 'ContactPoint',
    'telephone': '+91-8306099337',
    'contactType': 'customer service',
    'email': '3stacktech@gmail.com',
    'availableLanguage': ['English', 'Hindi']
  },
  'sameAs': [
    'https://www.facebook.com/share/1FFHZrXkja/',
    'https://instagram.com/3stacktech',
    'https://wa.me/918306099337'
  ]
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${baseUrl}/#localbusiness`,
  'name': '3Stack',
  'alternateName': ['3 Stack', '3Stack IT Agency'],
  'image': `${baseUrl}/3stack-logo.png`,
  'url': baseUrl,
  'telephone': '+91-8306099337',
  'email': '3stacktech@gmail.com',
  'priceRange': '$$',
  'openingHours': 'Mo-Fr 09:00-18:00',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Jaipur',
    'addressLocality': 'Jaipur',
    'addressRegion': 'Rajasthan',
    'postalCode': '302012',
    'addressCountry': 'IN'
  },
  'parentOrganization': {
    '@id': `${baseUrl}/#organization`
  }
};

const routes = [
  {
    path: '/',
    title: '3Stack — Premium Web Development & Digital Marketing Agency | 3stack.in',
    description: '3Stack is a premier software engineering and digital marketing agency specializing in custom web applications, mobile apps, and business automation for high-growth brands.',
    canonical: `${baseUrl}`,
    noindex: false,
    breadcrumbs: [{ name: 'Home', url: '/' }],
    schemas: [
      orgSchema,
      localBusinessSchema,
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${baseUrl}/#website`,
        'name': '3Stack',
        'alternateName': '3 Stack',
        'url': baseUrl,
        'description': '3Stack provides high-performance web development, digital growth marketing, and intelligent business automation solutions.',
        'publisher': { '@id': `${baseUrl}/#organization` }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        '@id': `${baseUrl}/#faq`,
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'What is 3Stack IT Agency and what services do you provide?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '3Stack IT Agency is a full-service technology partner headquartered in Jaipur, India. We engineer custom web applications, build mobile apps, configure business automation, and execute AI-driven marketing campaigns to scale your operations.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Where is 3Stack IT Agency located and which regions do you serve?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Our central engineering studio is located in Jaipur, Rajasthan, 302012, India. We operate globally, serving funded startups, mid-market enterprises, and service businesses across India, North America, the UK, Europe, and the UAE.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What is your pricing model and project cost structure?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'We offer transparent, fixed project-based pricing with clearly defined milestones for defined scopes. For growing products or ongoing campaigns, we offer sprint-based billing or monthly retainer agreements.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Who owns the intellectual property and code upon project completion?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'You retain 100% full intellectual property (IP) and source code ownership. Upon completion and settlement of project milestones, we execute a complete handover of all Git repositories, design tokens, asset libraries, and server configurations.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How does 3Stack optimize web applications for search and answer engines (AEO)?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'We architect every platform with server-side rendering, semantic HTML5, deep schema markup (JSON-LD), sub-second page speeds, and direct question-answer content structures to ensure top indexing by Google and citation by AI answer engines.'
            }
          }
        ]
      }
    ],
    htmlContent: `
      <header class="navbar">
        <div class="container navbar-container">
          <a href="/" class="navbar-logo"><img src="/3stack-logo.png" alt="3Stack Logo" style="height:60px;width:auto;object-fit:contain;" /></a>
          <nav class="navbar-links desktop-only">
            <a href="/" class="nav-link active">Home</a>
            <a href="/services" class="nav-link">Services</a>
            <a href="/portfolio" class="nav-link">Portfolio</a>
            <a href="/about" class="nav-link">About</a>
            <a href="/blog" class="nav-link">Blog</a>
          </nav>
        </div>
      </header>
      <main class="main-content">
        <section class="hero-section">
          <div class="container hero-container text-center">
            <h1 class="hero-title">Digital Experiences <br /><span class="text-gradient">Built For Growth</span></h1>
            <p class="hero-subtitle">
              <strong>What does 3Stack do?</strong> 3Stack IT Agency is a full-service technology partner headquartered in Jaipur, India. We engineer custom <a href="/services/web-development" style="text-decoration:underline;">web applications</a>, build <a href="/services/app-development" style="text-decoration:underline;">mobile apps</a>, configure <a href="/services/business-automation" style="text-decoration:underline;">business automation</a>, and execute <a href="/services/digital-marketing" style="text-decoration:underline;">AI-driven marketing</a> campaigns to scale your operations.
            </p>
            <div class="hero-actions">
              <a href="/contact" class="btn btn-primary btn-lg">Start a Project</a>
              <a href="/portfolio" class="btn btn-outline btn-lg">View Our Work</a>
            </div>
          </div>
        </section>
        <section class="section services-section">
          <div class="container">
            <div class="section-header text-center">
              <h2 class="section-title">Our Expertise</h2>
              <p class="section-subtitle">Comprehensive digital solutions engineered to scale your business in the modern economy.</p>
            </div>
            <div class="grid grid-cols-3 gap-md mt-lg">
              <div class="service-card">
                <h3><a href="/services/web-development">Web Development</a></h3>
                <p>High-performance, scalable websites and web apps tailored to your business needs.</p>
              </div>
              <div class="service-card">
                <h3><a href="/services/app-development">App Development</a></h3>
                <p>Engaging native and cross-platform mobile experiences for iOS and Android.</p>
              </div>
              <div class="service-card">
                <h3><a href="/services/digital-marketing">Digital Marketing</a></h3>
                <p>Data-driven marketing strategies to increase your visibility and conversion rates.</p>
              </div>
              <div class="service-card">
                <h3><a href="/services/business-automation">Business Automation</a></h3>
                <p>Streamline your operations with intelligent automation tools and integrations.</p>
              </div>
              <div class="service-card">
                <h3><a href="/services/web-design">Web Design</a></h3>
                <p>Stunning, user-centric interfaces that captivate and retain your audience.</p>
              </div>
              <div class="service-card">
                <h3><a href="/services/autocad">AutoCAD Services</a></h3>
                <p>Precision drafting and 3D modeling for architectural and engineering projects.</p>
              </div>
            </div>
          </div>
        </section>
        <section class="section why-us-section">
          <div class="container">
            <h2 class="section-title">Why Partner With 3Stack IT Agency?</h2>
            <ul class="benefits-list">
              <li><h3>Conversion-Focused Architecture</h3><p>Every design and architectural decision is engineered with customer acquisition and measurable ROI at the core.</p></li>
              <li><h3>Type-Safe, Modern Tech Stack</h3><p>We use React, TypeScript, Node.js, and Next.js to ensure sub-second latency, maintainability, and zero technical debt.</p></li>
              <li><h3>End-to-End Agile Lifecycle</h3><p>From initial system architecture and Figma prototyping to cloud deployment and post-launch maintenance, we manage the entire delivery pipeline.</p></li>
            </ul>
          </div>
        </section>
        <section class="section faq-section" id="faq">
          <div class="container">
            <h2 class="section-title">Frequently Asked Questions</h2>
            <div class="faq-accordion">
              <div class="faq-item">
                <h3>What is 3Stack IT Agency and what services do you provide?</h3>
                <p>3Stack IT Agency is a full-service technology partner headquartered in Jaipur, India. We engineer custom web applications, build mobile apps, configure business automation, and execute AI-driven marketing campaigns to scale your operations.</p>
              </div>
              <div class="faq-item">
                <h3>Where is 3Stack IT Agency located and which regions do you serve?</h3>
                <p>Our central engineering studio is located in Jaipur, Rajasthan, 302012, India. We operate globally, serving funded startups, mid-market enterprises, and service businesses across India, North America, the UK, Europe, and the UAE.</p>
              </div>
              <div class="faq-item">
                <h3>What is your pricing model and project cost structure?</h3>
                <p>We offer transparent, fixed project-based pricing with clearly defined milestones for defined scopes. For growing products or ongoing campaigns, we offer sprint-based billing or monthly retainer agreements.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    `
  },
  {
    path: '/about',
    title: 'About Us | 3Stack IT Agency',
    description: 'Learn about 3Stack IT Agency: our technical mission, full-stack engineering team in Jaipur, and commitment to building scalable digital platforms for businesses worldwide.',
    canonical: `${baseUrl}/about`,
    noindex: false,
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'About Us', url: '/about' }],
    schemas: [orgSchema, localBusinessSchema],
    htmlContent: `
      <main class="main-content">
        <section class="section" style="padding-top:140px;">
          <div class="container">
            <h1 class="section-title">Architects of the Digital Future</h1>
            <p class="section-subtitle">3Stack IT Agency is an elite team of full-stack engineers, designers, and growth strategists headquartered in Jaipur, Rajasthan, delivering high-performance digital ecosystems for clients worldwide.</p>
            <h2>Building Long-Term Partnerships, Not Just Projects.</h2>
            <p>Our mission is to empower ambitious businesses with modern software architecture, human-centered UI/UX design, and algorithmic marketing that drive measurable revenue.</p>
            <h2>Frequently Asked Questions</h2>
            <div class="faq-item">
              <h3>What exactly does 3Stack IT Agency do?</h3>
              <p>We are a full-service digital and engineering agency headquartered in Jaipur, India. We engineer custom web applications, develop mobile applications, execute AI-driven digital marketing and SEO campaigns, construct business automation pipelines, and provide certified AutoCAD drafting services.</p>
            </div>
            <div class="faq-item">
              <h3>Where does 3Stack operate and who do you serve?</h3>
              <p>Our core development studio is located in Jaipur, Rajasthan, India (PIN: 302012). We serve clients globally, including funded startups, mid-market enterprises, and business service providers across India, the United States, the UK, Europe, and the Middle East.</p>
            </div>
          </div>
        </section>
      </main>
    `
  },
  {
    path: '/services',
    title: 'Our Services | 3Stack IT Agency',
    description: 'Explore 3Stack\'s premium digital services: custom web development, mobile app development, digital marketing, business automation, UI/UX design, and AutoCAD drafting.',
    canonical: `${baseUrl}/services`,
    noindex: false,
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }],
    schemas: [orgSchema, localBusinessSchema],
    htmlContent: `
      <main class="main-content">
        <section class="section" style="padding-top:140px;">
          <div class="container">
            <h1 class="section-title">Digital Solutions To Scale Your Business</h1>
            <p class="section-subtitle">We architect comprehensive digital ecosystems designed to elevate your brand, automate operations, and drive measurable, compound business growth.</p>
            <div class="services-list">
              <article>
                <h2><a href="/services/web-development">Custom Web Development</a></h2>
                <p>We build fast, secure, and scalable web applications using modern technologies like React, TypeScript, and Node.js.</p>
              </article>
              <article>
                <h2><a href="/services/app-development">Mobile App Development</a></h2>
                <p>Engaging native and cross-platform mobile experiences for iOS and Android using React Native, Swift, and Kotlin.</p>
              </article>
              <article>
                <h2><a href="/services/digital-marketing">AI-Driven Digital Marketing</a></h2>
                <p>Data-driven SEO, Google & Meta PPC, and conversion rate optimization engineered to compound pipeline and ROI.</p>
              </article>
              <article>
                <h2><a href="/services/business-automation">Business Process Automation</a></h2>
                <p>Eliminate manual data entry, connect software silos, and automate CRM pipelines with custom APIs and webhooks.</p>
              </article>
              <article>
                <h2><a href="/services/web-design">UI/UX Web Design</a></h2>
                <p>Conversion-driven Figma prototyping, design systems, and responsive layouts built on user psychology research.</p>
              </article>
              <article>
                <h2><a href="/services/autocad">AutoCAD Drafting Services</a></h2>
                <p>Precision 2D architectural drafting, MEP schematics, and 3D modeling adhering to ISO/ANSI international standards.</p>
              </article>
            </div>
          </div>
        </section>
      </main>
    `
  },
  {
    path: '/services/web-development',
    title: 'Custom Web Development Services | 3Stack IT Agency',
    description: 'Enterprise-grade custom web development using React, TypeScript, Node.js, and Next.js. Build secure, scalable SaaS platforms and web apps with 3Stack.',
    canonical: `${baseUrl}/services/web-development`,
    noindex: false,
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: 'Custom Web Development', url: '/services/web-development' }],
    schemas: [
      orgSchema,
      localBusinessSchema,
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `${baseUrl}/services/web-development/#service`,
        'name': 'Custom Web Development',
        'serviceType': 'Custom Web Development',
        'description': 'Enterprise-grade custom web development using React, TypeScript, Node.js, and Next.js.',
        'provider': { '@type': 'Organization', '@id': `${baseUrl}/#organization`, 'name': '3Stack IT Agency' }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        '@id': `${baseUrl}/services/web-development/#faq`,
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'How long does custom web development take at 3Stack?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'A standard corporate web application typically takes 4 to 6 weeks from discovery to launch. Complex SaaS platforms, client portals, or multi-role web apps generally require 8 to 16 weeks depending on feature scope and third-party integrations.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What is your web development pricing structure?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'We offer fixed project-based pricing for well-defined project scopes, allowing for predictable budgeting with no surprise fees. For evolving platforms or dedicated engineering teams, we offer flexible monthly retainers or sprint-based billing.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Who owns the source code and intellectual property?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'You retain 100% ownership of the code, database schemas, and all intellectual property upon project completion. We provide a full Git repository transfer and documentation.'
            }
          }
        ]
      }
    ],
    htmlContent: `
      <main class="main-content">
        <section class="section" style="padding-top:140px;">
          <div class="container">
            <nav aria-label="Breadcrumb"><ol><li><a href="/">Home</a></li> / <li><a href="/services">Services</a></li> / <li>Custom Web Development</li></ol></nav>
            <h1>Custom Web Development</h1>
            <p>High-performance, scalable web applications engineered with modern technologies tailored to your exact business workflow.</p>
            <h2>Service Overview</h2>
            <p>We engineer high-performance, custom-coded web architectures that scale seamlessly for startups, growing SMEs, and enterprise organizations. Off-the-shelf templates and generic page builders introduce technical debt, sluggish load times, and security vulnerabilities.</p>
            <h2>Who Needs This Service?</h2>
            <ul>
              <li><strong>Startups Building Scalable MVPs:</strong> Founders who need a production-ready Minimum Viable Product built quickly with clean architecture.</li>
              <li><strong>Businesses Outgrowing Template Builders:</strong> Companies requiring custom database logic and advanced user roles.</li>
              <li><strong>SaaS & Enterprise Platforms:</strong> Organizations requiring high-concurrency web software, real-time data sync, and enterprise security compliance.</li>
            </ul>
            <h2>What We Deliver</h2>
            <ul>
              <li>Custom Full-Stack Web Application (React, TypeScript, Node.js)</li>
              <li>Secure Authentication & Role-Based Access Control (RBAC)</li>
              <li>Custom RESTful & GraphQL API Architecture</li>
              <li>Sub-Second Page Load Optimization & Core Web Vitals Compliance</li>
              <li>Complete Intellectual Property (IP) & Source Code Transfer</li>
            </ul>
            <h2>Our 5-Step Execution Process</h2>
            <ol>
              <li>Architecture & Technical Discovery</li>
              <li>UI/UX Prototyping & System Design</li>
              <li>Agile Full-Stack Engineering</li>
              <li>Rigorous QA & Security Auditing</li>
              <li>Production Launch & SLA Support</li>
            </ol>
            <h2>Frequently Asked Questions</h2>
            <div class="faq-item">
              <h3>How long does custom web development take at 3Stack?</h3>
              <p>A standard corporate web application typically takes 4 to 6 weeks from discovery to launch. Complex SaaS platforms, client portals, or multi-role web apps generally require 8 to 16 weeks depending on feature scope and third-party integrations.</p>
            </div>
            <div class="faq-item">
              <h3>What is your web development pricing structure?</h3>
              <p>We offer fixed project-based pricing for well-defined project scopes, allowing for predictable budgeting with no surprise fees. For evolving platforms or dedicated engineering teams, we offer flexible monthly retainers or sprint-based billing.</p>
            </div>
            <div class="faq-item">
              <h3>Who owns the source code and intellectual property?</h3>
              <p>You retain 100% ownership of the code, database schemas, and all intellectual property upon project completion. We provide a full Git repository transfer and documentation.</p>
            </div>
          </div>
        </section>
      </main>
    `
  },
  {
    path: '/services/app-development',
    title: 'Mobile App Development Services | iOS & Android | 3Stack',
    description: 'Premier mobile app development for iOS and Android using React Native, Swift, and Kotlin. Create engaging mobile apps with 3Stack IT Agency.',
    canonical: `${baseUrl}/services/app-development`,
    noindex: false,
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: 'Mobile App Development', url: '/services/app-development' }],
    schemas: [orgSchema, localBusinessSchema],
    htmlContent: `
      <main class="main-content">
        <section class="section" style="padding-top:140px;">
          <div class="container">
            <nav aria-label="Breadcrumb"><ol><li><a href="/">Home</a></li> / <li><a href="/services">Services</a></li> / <li>Mobile App Development</li></ol></nav>
            <h1>Mobile App Development</h1>
            <p>Intuitive native and cross-platform mobile experiences for iOS and Android built for maximum performance and engagement.</p>
            <h2>Service Overview</h2>
            <p>We engineer cross-platform and native mobile applications for iOS and Android that deliver fluid user experiences, rapid load times, and enterprise-grade security.</p>
            <h2>Frequently Asked Questions</h2>
            <div class="faq-item">
              <h3>Do you develop for both Apple iOS and Google Android?</h3>
              <p>Yes. We utilize React Native to deliver high-performance applications across both iOS and Android simultaneously from a unified codebase, reducing cost and maintenance overhead while maintaining native UI fluidity.</p>
            </div>
            <div class="faq-item">
              <h3>How long does it take to launch a mobile app?</h3>
              <p>A Minimum Viable Product (MVP) app typically launches within 8 to 12 weeks. Complex apps with custom hardware integrations, real-time matchmaking, or extensive backend pipelines typically require 14 to 20 weeks.</p>
            </div>
          </div>
        </section>
      </main>
    `
  },
  {
    path: '/services/digital-marketing',
    title: 'Digital Marketing & SEO Agency | 3Stack IT Agency',
    description: 'Drive profitable digital growth with data-driven SEO, Google & Meta Ads, and Conversion Rate Optimization (CRO) by 3Stack IT Agency.',
    canonical: `${baseUrl}/services/digital-marketing`,
    noindex: false,
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: 'Digital Marketing', url: '/services/digital-marketing' }],
    schemas: [orgSchema, localBusinessSchema],
    htmlContent: `
      <main class="main-content">
        <section class="section" style="padding-top:140px;">
          <div class="container">
            <nav aria-label="Breadcrumb"><ol><li><a href="/">Home</a></li> / <li><a href="/services">Services</a></li> / <li>Digital Marketing</li></ol></nav>
            <h1>AI-Driven Digital Marketing</h1>
            <p>Data-driven SEO, PPC, and conversion rate optimization strategies engineered to compound your pipeline and maximize ROI.</p>
            <h2>Service Overview</h2>
            <p>We execute data-driven Search Engine Optimization (SEO), high-ROI paid advertising (Google & Meta Ads), and Conversion Rate Optimization (CRO). We focus strictly on qualified lead acquisition and CAC reduction.</p>
            <h2>Frequently Asked Questions</h2>
            <div class="faq-item">
              <h3>How long does SEO take to produce measurable leads?</h3>
              <p>Technical SEO fixes and initial indexing gains typically occur within 30 to 60 days. Substantial organic traffic growth, top keyword rankings, and consistent inbound leads typically compound within 3 to 6 months.</p>
            </div>
            <div class="faq-item">
              <h3>What is Answer Engine Optimization (AEO) and why does it matter?</h3>
              <p>AEO optimizes your website content, schema, and factual entity associations so that AI answer engines (ChatGPT, Perplexity, Gemini, Google AI Overviews) cite and recommend your business when users ask conversational questions.</p>
            </div>
          </div>
        </section>
      </main>
    `
  },
  {
    path: '/services/business-automation',
    title: 'Business Automation & Workflow Integrations | 3Stack',
    description: 'Automate repetitive workflows, connect legacy software, and build custom CRM pipelines. Save hundreds of operational hours with 3Stack IT Agency.',
    canonical: `${baseUrl}/services/business-automation`,
    noindex: false,
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: 'Business Automation', url: '/services/business-automation' }],
    schemas: [orgSchema, localBusinessSchema],
    htmlContent: `
      <main class="main-content">
        <section class="section" style="padding-top:140px;">
          <div class="container">
            <nav aria-label="Breadcrumb"><ol><li><a href="/">Home</a></li> / <li><a href="/services">Services</a></li> / <li>Business Automation</li></ol></nav>
            <h1>Business Process Automation</h1>
            <p>Eliminate manual data entry, streamline operations, and connect your business tools with custom API integrations and automated workflows.</p>
            <h2>Service Overview</h2>
            <p>We build custom automated workflows and API bridges that eliminate manual repetitive tasks, connect disparate software platforms, and accelerate business operations.</p>
            <h2>Frequently Asked Questions</h2>
            <div class="faq-item">
              <h3>What types of tasks can 3Stack automate?</h3>
              <p>We automate lead routing, customer onboarding, invoice generation, cross-platform CRM sync, order processing, email/SMS notifications, survey responses, and report compilation.</p>
            </div>
            <div class="faq-item">
              <h3>How much time can business automation save?</h3>
              <p>Our clients typically save between 15 to 40+ hours per week per department by eliminating manual data entry, human error, and multi-app copy-pasting.</p>
            </div>
          </div>
        </section>
      </main>
    `
  },
  {
    path: '/services/web-design',
    title: 'UI/UX Design & Brand Identity | 3Stack Digital Agency',
    description: 'Conversion-driven UI/UX design, design systems, and Figma prototyping. Elevate your brand identity with 3Stack IT Agency in Jaipur.',
    canonical: `${baseUrl}/services/web-design`,
    noindex: false,
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: 'UI/UX Web Design', url: '/services/web-design' }],
    schemas: [orgSchema, localBusinessSchema],
    htmlContent: `
      <main class="main-content">
        <section class="section" style="padding-top:140px;">
          <div class="container">
            <nav aria-label="Breadcrumb"><ol><li><a href="/">Home</a></li> / <li><a href="/services">Services</a></li> / <li>UI/UX Web Design</li></ol></nav>
            <h1>UI/UX Web Design</h1>
            <p>Bespoke UI/UX design, interactive prototypes, and design systems crafted to elevate brand perception and maximize user conversion.</p>
            <h2>Service Overview</h2>
            <p>We design conversion-focused user interfaces (UI) and frictionless user experiences (UX) based on empirical user psychology research.</p>
            <h2>Frequently Asked Questions</h2>
            <div class="faq-item">
              <h3>What deliverables are included in a UI/UX design project?</h3>
              <p>You receive complete Figma source files, interactive prototypes, responsive artboards (desktop, tablet, mobile), design tokens, exported SVG/PNG assets, and development handoff specs.</p>
            </div>
          </div>
        </section>
      </main>
    `
  },
  {
    path: '/services/autocad',
    title: 'AutoCAD Drafting & 3D Modeling Services | 3Stack',
    description: 'Accurate 2D architectural drafting, MEP schematics, and 3D modeling. Trust 3Stack IT Agency for precision AutoCAD engineering drawings.',
    canonical: `${baseUrl}/services/autocad`,
    noindex: false,
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: 'AutoCAD Services', url: '/services/autocad' }],
    schemas: [orgSchema, localBusinessSchema],
    htmlContent: `
      <main class="main-content">
        <section class="section" style="padding-top:140px;">
          <div class="container">
            <nav aria-label="Breadcrumb"><ol><li><a href="/">Home</a></li> / <li><a href="/services">Services</a></li> / <li>AutoCAD Services</li></ol></nav>
            <h1>AutoCAD Services & 3D Drafting</h1>
            <p>Precision 2D drafting, 3D architectural modeling, and MEP schematics delivered with mathematical accuracy adhering to international standards.</p>
            <h2>Service Overview</h2>
            <p>We provide certified 2D technical drafting, MEP schematics, and 3D architectural modeling for engineering firms, architects, and contractors worldwide.</p>
            <h2>Frequently Asked Questions</h2>
            <div class="faq-item">
              <h3>What file formats can 3Stack accept and deliver?</h3>
              <p>We accept sketches, PDFs, TIFFs, scanned blueprints, and BIM models. We deliver final files in DWG, DXF, DWF, and high-resolution vector PDF formats.</p>
            </div>
          </div>
        </section>
      </main>
    `
  },
  {
    path: '/portfolio',
    title: 'Our Work & Case Studies | 3Stack IT Agency',
    description: 'Explore 3Stack\'s portfolio of custom web development, mobile applications, and digital marketing case studies delivered for growing businesses.',
    canonical: `${baseUrl}/portfolio`,
    noindex: false,
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Portfolio', url: '/portfolio' }],
    schemas: [orgSchema, localBusinessSchema],
    htmlContent: `
      <main class="main-content">
        <section class="section" style="padding-top:140px;">
          <div class="container">
            <h1 class="section-title">Projects We're Proud Of</h1>
            <p class="section-subtitle">Explore how we've helped businesses across various industries achieve their digital goals through innovative technology and strategic design.</p>
            <h2>Selected Client Work & Live Demonstrations</h2>
            <article>
              <h3>Modern Invitation Card</h3>
              <p>Elegant, interactive, and beautifully crafted digital invitation cards for weddings and premium events.</p>
            </article>
            <article>
              <h3>Gym Website</h3>
              <p>A comprehensive and interactive gym website with a modern design and smooth user experience.</p>
            </article>
            <article>
              <h3>Photography Portfolio</h3>
              <p>A visually stunning and highly responsive portfolio website designed to showcase high-res photography.</p>
            </article>
            <article>
              <h3>Beauty Parlour Platform</h3>
              <p>An elegant booking and service discovery platform tailored for a premium beauty salon.</p>
            </article>
          </div>
        </section>
      </main>
    `
  },
  {
    path: '/blog',
    title: 'Blog & Insights | 3Stack IT Agency',
    description: 'Read in-depth technical insights, architectural guides, and digital marketing strategies from 3Stack IT Agency.',
    canonical: `${baseUrl}/blog`,
    noindex: false,
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }],
    schemas: [orgSchema, localBusinessSchema],
    htmlContent: `
      <main class="main-content">
        <section class="section" style="padding-top:140px;">
          <div class="container">
            <h1 class="section-title">Insights & Articles</h1>
            <p class="section-subtitle">Expert perspectives on engineering architecture, AI marketing, and enterprise software growth.</p>
            <article>
              <h2><a href="/blog/the-future-of-web-development-in-2026">How a Top IT Agency Drives Digital Transformation in 2026</a></h2>
              <p>Learn how partnering with a top IT agency for custom web development, SEO, and business automation drives scalable growth and digital transformation in 2026.</p>
            </article>
            <article>
              <h2><a href="/blog/how-to-improve-your-conversion-rates">Unlocking 10x ROI: Data-Driven Digital Marketing & CRO Strategies</a></h2>
              <p>Discover proven Conversion Rate Optimization (CRO) frameworks and data-driven marketing strategies that top IT agencies use to multiply business revenue.</p>
            </article>
            <article>
              <h2><a href="/blog/why-react-is-still-king-for-ui">Why React & TypeScript Dominate Enterprise Web Development</a></h2>
              <p>Explore why React and TypeScript remain the premier combination for enterprise web applications and mobile cross-platform systems with 3Stack IT Agency.</p>
            </article>
          </div>
        </section>
      </main>
    `
  },
  {
    path: '/blog/the-future-of-web-development-in-2026',
    title: 'How a Top IT Agency Drives Digital Transformation in 2026 | 3Stack IT Agency',
    description: 'Learn how partnering with a top IT agency for custom web development, SEO, and business automation drives scalable growth and digital transformation in 2026.',
    canonical: `${baseUrl}/blog/the-future-of-web-development-in-2026`,
    noindex: false,
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'How a Top IT Agency Drives Digital Transformation in 2026', url: '/blog/the-future-of-web-development-in-2026' }],
    schemas: [
      orgSchema,
      localBusinessSchema,
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        '@id': `${baseUrl}/blog/the-future-of-web-development-in-2026/#article`,
        'mainEntityOfPage': `${baseUrl}/blog/the-future-of-web-development-in-2026`,
        'headline': 'How a Top IT Agency Drives Digital Transformation in 2026',
        'datePublished': '2026-09-15T08:00:00+05:30',
        'dateModified': '2026-09-20T12:00:00+05:30',
        'author': { '@type': 'Organization', 'name': '3Stack Tech Team', 'url': baseUrl },
        'publisher': { '@type': 'Organization', '@id': `${baseUrl}/#organization`, 'name': '3Stack IT Agency' }
      }
    ],
    htmlContent: `
      <main class="main-content">
        <article class="section" style="padding-top:140px;">
          <div class="container">
            <nav aria-label="Breadcrumb"><ol><li><a href="/">Home</a></li> / <li><a href="/blog">Blog</a></li> / <li>How a Top IT Agency Drives Digital Transformation in 2026</li></ol></nav>
            <h1>How a Top IT Agency Drives Digital Transformation in 2026</h1>
            <p>Author: 3Stack Tech Team &bull; Published: Sep 15, 2026</p>
            <h2>The Shift to Custom Software and Next-Gen Web Development</h2>
            <p>In today's hyper-competitive digital landscape, relying on off-the-shelf templates and generic page builders is no longer sufficient. Growing businesses require bespoke architectures engineered specifically for their unique operational workflows. Partnering with a top-tier agency for <a href="/services/web-development">custom web development services</a> ensures your platform scales reliably as transaction volumes surge.</p>
            <h2>Digital Marketing and SEO: The New Algorithmic Paradigm</h2>
            <p>A high-performance web application is only half of the growth equation. To achieve market leadership, businesses must combine technical excellence with data-driven <a href="/services/digital-marketing">AI-driven digital marketing and SEO</a>.</p>
            <h2>Business Automation and Systems Integration</h2>
            <p>Operational efficiency is the primary differentiator for scalable businesses. Companies are increasingly deploying <a href="/services/business-automation">business process automation</a> to eliminate error-prone manual data entry.</p>
          </div>
        </article>
      </main>
    `
  },
  {
    path: '/blog/how-to-improve-your-conversion-rates',
    title: 'Unlocking 10x ROI: Data-Driven Digital Marketing & CRO Strategies | 3Stack IT Agency',
    description: 'Discover proven Conversion Rate Optimization (CRO) frameworks and data-driven marketing strategies that top IT agencies use to multiply business revenue.',
    canonical: `${baseUrl}/blog/how-to-improve-your-conversion-rates`,
    noindex: false,
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Unlocking 10x ROI: Data-Driven Digital Marketing & CRO Strategies', url: '/blog/how-to-improve-your-conversion-rates' }],
    schemas: [
      orgSchema,
      localBusinessSchema,
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        '@id': `${baseUrl}/blog/how-to-improve-your-conversion-rates/#article`,
        'mainEntityOfPage': `${baseUrl}/blog/how-to-improve-your-conversion-rates`,
        'headline': 'Unlocking 10x ROI: Data-Driven Digital Marketing & CRO Strategies',
        'datePublished': '2026-09-02T08:00:00+05:30',
        'dateModified': '2026-09-20T12:00:00+05:30',
        'author': { '@type': 'Organization', 'name': '3Stack Marketing Team', 'url': baseUrl },
        'publisher': { '@type': 'Organization', '@id': `${baseUrl}/#organization`, 'name': '3Stack IT Agency' }
      }
    ],
    htmlContent: `
      <main class="main-content">
        <article class="section" style="padding-top:140px;">
          <div class="container">
            <nav aria-label="Breadcrumb"><ol><li><a href="/">Home</a></li> / <li><a href="/blog">Blog</a></li> / <li>Unlocking 10x ROI: Data-Driven Digital Marketing & CRO Strategies</li></ol></nav>
            <h1>Unlocking 10x ROI: Data-Driven Digital Marketing & CRO Strategies</h1>
            <p>Author: 3Stack Marketing Team &bull; Published: Sep 02, 2026</p>
            <h2>The Mathematics of Conversion Rate Optimization</h2>
            <p>Traffic without conversion is merely vanity. True commercial growth depends on optimizing every micro-step of the customer journey through <a href="/services/digital-marketing">digital marketing services</a>.</p>
            <h2>Eliminating Friction in UI/UX Design</h2>
            <p>Investing in human-centered <a href="/services/web-design">UI/UX web design</a> creates frictionless reading paths that guide visitors naturally toward inquiry submission.</p>
            <h2>Automated Lead Nurturing</h2>
            <p>Deploying intelligent <a href="/services/business-automation">workflow automation</a> ensures that leads are instantly acknowledged and routed to sales specialists in real time.</p>
          </div>
        </article>
      </main>
    `
  },
  {
    path: '/blog/why-react-is-still-king-for-ui',
    title: 'Why React & TypeScript Dominate Enterprise Web Development | 3Stack IT Agency',
    description: 'Explore why React and TypeScript remain the premier combination for enterprise web applications and mobile cross-platform systems with 3Stack IT Agency.',
    canonical: `${baseUrl}/blog/why-react-is-still-king-for-ui`,
    noindex: false,
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Why React & TypeScript Dominate Enterprise Web Development', url: '/blog/why-react-is-still-king-for-ui' }],
    schemas: [
      orgSchema,
      localBusinessSchema,
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        '@id': `${baseUrl}/blog/why-react-is-still-king-for-ui/#article`,
        'mainEntityOfPage': `${baseUrl}/blog/why-react-is-still-king-for-ui`,
        'headline': 'Why React & TypeScript Dominate Enterprise Web Development',
        'datePublished': '2026-09-20T08:00:00+05:30',
        'dateModified': '2026-09-20T12:00:00+05:30',
        'author': { '@type': 'Organization', 'name': '3Stack Tech Team', 'url': baseUrl },
        'publisher': { '@type': 'Organization', '@id': `${baseUrl}/#organization`, 'name': '3Stack IT Agency' }
      }
    ],
    htmlContent: `
      <main class="main-content">
        <article class="section" style="padding-top:140px;">
          <div class="container">
            <nav aria-label="Breadcrumb"><ol><li><a href="/">Home</a></li> / <li><a href="/blog">Blog</a></li> / <li>Why React & TypeScript Dominate Enterprise Web Development</li></ol></nav>
            <h1>Why React & TypeScript Dominate Enterprise Web Development</h1>
            <p>Author: 3Stack Tech Team &bull; Published: Sep 20, 2026</p>
            <h2>Type Safety and Component Modularity</h2>
            <p>Enterprise applications demand long-term maintainability. Choosing the React and TypeScript ecosystem for <a href="/services/web-development">custom web development</a> provides compile-time error checking and reusable UI components.</p>
            <h2>Cross-Platform Code Sharing via React Native</h2>
            <p>One of the strongest strategic advantages of React is seamless portability to mobile for <a href="/services/app-development">mobile app development</a> using React Native.</p>
          </div>
        </article>
      </main>
    `
  },
  {
    path: '/contact',
    title: 'Contact Us | 3Stack IT Agency',
    description: 'Get in touch with 3Stack IT Agency in Jaipur. Schedule a 30-minute discovery call to discuss web development, mobile apps, or digital marketing.',
    canonical: `${baseUrl}/contact`,
    noindex: false,
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Contact Us', url: '/contact' }],
    schemas: [orgSchema, localBusinessSchema],
    htmlContent: `
      <main class="main-content">
        <section class="section" style="padding-top:140px;">
          <div class="container">
            <h1>Let's talk about your project</h1>
            <p>Whether you have an established product specification or need architectural guidance, our engineering team is ready to help. Fill out our form or contact us directly.</p>
            <h2>Direct Contact Channels</h2>
            <ul>
              <li><strong>Email Us:</strong> <a href="mailto:3stacktech@gmail.com">3stacktech@gmail.com</a></li>
              <li><strong>Call Us:</strong> <a href="tel:+918306099337">+91 8306099337</a></li>
              <li><strong>Visit Us:</strong> Jaipur, Rajasthan, 302012, India</li>
            </ul>
          </div>
        </section>
      </main>
    `
  },
  {
    path: '/terms',
    title: 'Terms of Service | 3Stack IT Agency',
    description: 'Review the terms and conditions governing professional services provided by 3Stack IT Agency.',
    canonical: `${baseUrl}/terms`,
    noindex: false,
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Terms of Service', url: '/terms' }],
    schemas: [orgSchema, localBusinessSchema],
    htmlContent: `
      <main class="main-content">
        <section class="section" style="padding-top:140px;">
          <div class="container">
            <h1>Terms of Service</h1>
            <p>Last Updated: September 20, 2026</p>
            <h2>1. Acceptance of Terms</h2>
            <p>By engaging 3Stack IT Agency for services, you agree to be bound by these Terms of Service.</p>
            <h2>2. Scope of Services & Milestones</h2>
            <p>All client engagements are executed pursuant to a mutually agreed Statement of Work (SOW).</p>
            <h2>3. Intellectual Property & Code Ownership</h2>
            <p>Upon full receipt of project payments, full intellectual property rights and source code repositories for custom-developed software are transferred to the client.</p>
          </div>
        </section>
      </main>
    `
  },
  {
    path: '/privacy',
    title: 'Privacy Policy | 3Stack IT Agency',
    description: 'Learn how 3Stack IT Agency collects, protects, and handles personal and commercial data across our web services.',
    canonical: `${baseUrl}/privacy`,
    noindex: false,
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Privacy Policy', url: '/privacy' }],
    schemas: [orgSchema, localBusinessSchema],
    htmlContent: `
      <main class="main-content">
        <section class="section" style="padding-top:140px;">
          <div class="container">
            <h1>Privacy Policy</h1>
            <p>Last Updated: September 20, 2026</p>
            <h2>1. Overview & Scope</h2>
            <p>3Stack IT Agency values your privacy. This Privacy Policy details how we collect, store, and safeguard information gathered through our website.</p>
            <h2>2. Information We Collect</h2>
            <p>We collect information provided directly by you when submitting project inquiry forms (full name, email address, phone number, and project descriptions).</p>
          </div>
        </section>
      </main>
    `
  },
  {
    path: '/404',
    title: 'Page Not Found | 3Stack IT Agency',
    description: 'The page you are looking for does not exist.',
    canonical: `${baseUrl}/404`,
    noindex: true,
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: '404', url: '/404' }],
    schemas: [orgSchema],
    htmlContent: `
      <main class="main-content">
        <section class="section" style="height:100vh;display:flex;align-items:center;justify-content:center;text-align:center;">
          <div class="container">
            <h1 style="font-size:6rem;color:var(--accent-primary);">404</h1>
            <h2>Page Not Found</h2>
            <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
            <a href="/" class="btn btn-primary">Return Home</a>
          </div>
        </section>
      </main>
    `
  }
];

function buildBreadcrumbSchema(breadcrumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbs.map((b, i) => ({
      '@type': 'ListItem',
      'position': i + 1,
      'name': b.name,
      'item': b.url.startsWith('http') ? b.url : `${baseUrl}${b.url}`
    }))
  };
}

let generatedCount = 0;

for (const r of routes) {
  let html = template;

  // 1. Replace Title
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${r.title}</title>`);

  // 2. Replace or inject meta description
  if (html.includes('<meta name="description"')) {
    html = html.replace(/<meta name="description"[^>]*>/i, `<meta name="description" content="${r.description}" />`);
  } else {
    html = html.replace('</head>', `  <meta name="description" content="${r.description}" />\n</head>`);
  }

  // 3. Inject canonical tag
  const canonicalTag = `<link rel="canonical" href="${r.canonical}" />`;
  if (html.includes('<link rel="canonical"')) {
    html = html.replace(/<link rel="canonical"[^>]*>/i, canonicalTag);
  } else {
    html = html.replace('</head>', `  ${canonicalTag}\n</head>`);
  }

  // 4. Inject robots meta tag
  const robotsTag = `<meta name="robots" content="${r.noindex ? 'noindex, nofollow' : 'index, follow'}" />`;
  if (html.includes('<meta name="robots"')) {
    html = html.replace(/<meta name="robots"[^>]*>/i, robotsTag);
  } else {
    html = html.replace('</head>', `  ${robotsTag}\n</head>`);
  }

  // 5. OpenGraph & Twitter tags
  const ogTags = `
    <meta property="og:title" content="${r.title}" />
    <meta property="og:description" content="${r.description}" />
    <meta property="og:url" content="${r.canonical}" />
    <meta property="og:site_name" content="3Stack" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="${baseUrl}/3stack-logo.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${r.title}" />
    <meta name="twitter:description" content="${r.description}" />
    <meta name="twitter:image" content="${baseUrl}/3stack-logo.png" />
  `;
  html = html.replace('</head>', `${ogTags}\n</head>`);

  // 6. Assemble JSON-LD Schemas
  const allSchemas = [...r.schemas];
  if (r.breadcrumbs && r.breadcrumbs.length > 0) {
    allSchemas.push(buildBreadcrumbSchema(r.breadcrumbs));
  }
  const jsonLdScript = `\n  <script type="application/ld+json">\n${JSON.stringify(allSchemas, null, 2)}\n  </script>\n`;
  html = html.replace('</head>', `${jsonLdScript}</head>`);

  // 7. Inject crawlable semantic HTML into <div id="root"></div>
  const footerHtml = `
    <footer class="footer">
      <div class="container">
        <p>&copy; ${new Date().getFullYear()} 3Stack IT Agency. All rights reserved.</p>
        <p>Jaipur, Rajasthan, 302012, India &bull; <a href="mailto:3stacktech@gmail.com">3stacktech@gmail.com</a> &bull; <a href="tel:+918306099337">+91 8306099337</a></p>
      </div>
    </footer>
  `;
  const fullContent = `${r.htmlContent}\n${footerHtml}`;
  html = html.replace('<div id="root"></div>', `<div id="root">${fullContent}</div>`);

  // 8. Determine target output path
  let targetFile;
  if (r.path === '/') {
    targetFile = path.join(distDir, 'index.html');
  } else if (r.path === '/404') {
    targetFile = path.join(distDir, '404.html');
  } else {
    const routeDir = path.join(distDir, r.path.slice(1));
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }
    targetFile = path.join(routeDir, 'index.html');
  }

  fs.writeFileSync(targetFile, html, 'utf8');
  generatedCount++;
}

console.log(`Successfully pre-rendered ${generatedCount} static routes with full HTML, metadata, and JSON-LD schemas!`);
