/**
 * 3STACK Services Data Source
 * Comprehensive, verified information for On-Page SEO, AEO, and Topical Authority.
 */

export const SERVICES_MAP = {
  'web-design-development': {
    id: 'app-web',
    slug: 'web-design-development',
    route: '/services/web-design-development',
    title: 'Web Design & Website Development',
    shortTitle: 'App & Web Designing',
    tag: 'UI/UX & Web Solutions',
    benchmark: 'Responsive & Fast',
    metaTitle: 'Web Design & Website Development Services | 3STACK',
    metaDescription:
      'Custom responsive websites, landing pages, and web application UI/UX built for speed, conversion, and brand credibility by 3STACK. Mobile-first engineering with clean code.',
    canonicalUrl: 'https://3stack.tech/services/web-design-development',
    imageSrc: '/images/service-web-design.webp',
    fallbackImageSrc: '/images/service-web-design.jpg',
    imageAlt: 'Modern Responsive Web and Mobile App UI Design Interface',
    iconName: 'Layout',
    accentColor: '#00C79E',
    summary:
      'We design and develop modern, responsive, and user-focused websites, landing pages, and web applications that represent your business effectively and convert visitors into clients.',
    problemSolved:
      'Many businesses struggle with outdated websites that load slowly, look cluttered on mobile devices, fail to convert traffic, or are difficult to maintain. 3STACK solves this by building custom, high-speed, mobile-first web experiences designed around clear user journeys and real business goals.',
    whoIsItFor: [
      'Startups and small businesses needing a clean, credible digital presence.',
      'Growing companies seeking to redesign an outdated site for higher conversion rates.',
      'Fitness brands, cafes, professional service firms, and contractors requiring bespoke portfolios.',
      'Businesses requiring modern, accessible web application dashboards and customer portals.',
    ],
    deliverables: [
      'Custom UI/UX Wireframing & Responsive Prototypes',
      'Mobile-First Responsive Web Design across all devices',
      'High-Converting Landing Pages & Business Portfolios',
      'Core Web Vitals Optimization (Fast LCP, Low CLS, Smooth INP)',
      'Search Engine Friendly HTML5 Semantic Architecture',
      'Cross-Browser & Cross-Device Compatibility Verification',
    ],
    capabilities: [
      'React & Modern JavaScript Architecture',
      'Modular CSS & Scalable Design Systems',
      'Interactive Micro-Animations & Fluid Layouts',
      'Asset Compression & High-Efficiency WebP Delivery',
      'Custom Lead Capture Forms & Email Delivery',
      'Accessibility & Usability Best Practices',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Requirement Discovery',
        desc: 'We analyze your brand, audience, and operational goals to establish the ideal site structure and conversion funnel.',
      },
      {
        step: '02',
        title: 'UI/UX Wireframing & Design',
        desc: 'We craft high-fidelity responsive layouts, establishing cohesive visual hierarchy, typography, and interactive touchpoints.',
      },
      {
        step: '03',
        title: 'Clean Frontend Development',
        desc: 'We engineer the website using clean, modular code for maximum performance, fast load times, and fluid interactions.',
      },
      {
        step: '04',
        title: 'SEO & Performance Profiling',
        desc: 'We optimize Core Web Vitals, implement structured Schema markup, configure meta tags, and test across device viewports.',
      },
      {
        step: '05',
        title: 'Launch & Deployment Verification',
        desc: 'We assist with domain pointing, SSL security verification, form testing, and post-launch stability monitoring.',
      },
    ],
    faqs: [
      {
        question: 'What types of websites does 3STACK build?',
        answer:
          'We build modern corporate websites, high-converting landing pages, creative portfolios, and customized web application interfaces tailored specifically to your business requirements.',
      },
      {
        question: 'Will my website work seamlessly on mobile phones and tablets?',
        answer:
          'Yes. Every website we build is designed mobile-first and thoroughly tested across smartphone, tablet, laptop, and ultra-wide desktop screens.',
      },
      {
        question: 'Do you include on-page SEO with website development?',
        answer:
          'Yes. Every project includes technical on-page SEO foundations: semantic HTML5 tags, logical H1-H3 hierarchy, meta descriptions, Open Graph cards, and structured JSON-LD schemas.',
      },
      {
        question: 'How do customers contact us through the website?',
        answer:
          'We implement responsive interactive contact forms with anti-spam validation that deliver inquiries straight to your inbox or business notification channels.',
      },
    ],
    relatedSlugs: ['digital-marketing-seo', 'software-development', 'business-automation'],
  },

  'digital-marketing-seo': {
    id: 'marketing',
    slug: 'digital-marketing-seo',
    route: '/services/digital-marketing-seo',
    title: 'Digital Marketing & Search Engine Optimization (SEO)',
    shortTitle: 'Digital Marketing',
    tag: 'Growth & Visibility',
    benchmark: 'Audience Reach',
    metaTitle: 'Digital Marketing & SEO Services | 3STACK',
    metaDescription:
      'Boost search engine visibility, reach targeted audiences, and drive customer engagement with 3STACK digital marketing, SEO, and social media growth strategies.',
    canonicalUrl: 'https://3stack.tech/services/digital-marketing-seo',
    imageSrc: '/images/service-marketing.webp',
    fallbackImageSrc: '/images/service-marketing.jpg',
    imageAlt: 'Digital Marketing Analytics and Growth Metrics Dashboard',
    iconName: 'TrendingUp',
    accentColor: '#00D9F5',
    summary:
      'Help your business grow its digital presence, connect with high-intent customers, and improve organic search visibility through strategic digital marketing and SEO.',
    problemSolved:
      'Building a website is ineffective if prospective customers cannot find it. Disconnected marketing campaigns and lack of search optimization lead to low traffic and wasted budgets. 3STACK aligns technical SEO, content strategy, and social reach to deliver consistent organic visibility.',
    whoIsItFor: [
      'Local businesses and service providers wanting to be found on Google search.',
      'Brands launching new websites that need baseline search indexation and keyword rankings.',
      'Companies aiming to grow an active audience on Instagram and social channels.',
      'Organizations wanting transparent digital campaigns focused on genuine user engagement.',
    ],
    deliverables: [
      'Comprehensive Technical & On-Page SEO Audit',
      'Target Keyword Research & Search-Intent Mapping',
      'Semantic HTML, Title, & Meta Description Optimization',
      'Structured Schema.org JSON-LD Implementation',
      'Social Media Content Strategy & Brand Consistency',
      'Local Business Search Visibility & Profile Optimization',
    ],
    capabilities: [
      'Search Engine Optimization (Technical & On-Page)',
      'Answer Engine Optimization (AEO) for AI Search Systems',
      'Social Media Presence Strategy & Campaign Planning',
      'Content Structure & Entity Relationship Mapping',
      'Conversion Rate Optimization (CRO) Insights',
      'Performance Analytics & Visibility Tracking',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Audience & Search Analysis',
        desc: 'We research your target audience, identify relevant high-intent keywords, and evaluate competitors in your sector.',
      },
      {
        step: '02',
        title: 'Technical SEO Optimization',
        desc: 'We optimize crawlability, site speed, heading structures, URL canonicals, and structured JSON-LD data.',
      },
      {
        step: '03',
        title: 'Content & Messaging Alignment',
        desc: 'We refine website copy, FAQs, and service descriptions to directly answer customer queries and rank for relevant terms.',
      },
      {
        step: '04',
        title: 'Social & Brand Amplification',
        desc: 'We align social media messaging with brand positioning to generate consistent touchpoints across Instagram and online channels.',
      },
      {
        step: '05',
        title: 'Review & Iteration',
        desc: 'We evaluate search performance, indexation, and user engagement, refining content and strategy based on real metrics.',
      },
    ],
    faqs: [
      {
        question: 'What is the difference between SEO and Digital Marketing at 3STACK?',
        answer:
          'SEO ensures your website is technically sound, easily discovered by Google and AI answer engines, and ranked for relevant queries. Digital marketing encompasses broader social media reach, brand messaging, and audience engagement campaigns.',
      },
      {
        question: 'How long does it take to see results from SEO?',
        answer:
          'Technical SEO improvements take effect as search crawlers re-index your pages (typically days to weeks). Organic ranking growth for competitive keywords typically builds over 2 to 6 months of consistent visibility.',
      },
      {
        question: 'Does 3STACK optimize for AI search engines like ChatGPT and Perplexity?',
        answer:
          'Yes. We practice Answer Engine Optimization (AEO), structuring clear question-and-answer content, semantic microdata, and entity relationships that AI search engines can easily ingest and summarize.',
      },
      {
        question: 'Can you help improve our Instagram presence?',
        answer:
          'Yes. We help plan consistent brand themes, visuals, and messaging for social media platforms including Instagram to drive customer trust and direct inquiries.',
      },
    ],
    relatedSlugs: ['web-design-development', 'business-automation', 'software-development'],
  },

  'business-automation': {
    id: 'automation',
    slug: 'business-automation',
    route: '/services/business-automation',
    title: 'Business Workflow Automation',
    shortTitle: 'Business Automation',
    tag: 'Workflow Systems',
    benchmark: 'Save Repetitive Hours',
    metaTitle: 'Business Workflow Automation Services | 3STACK',
    metaDescription:
      'Eliminate manual data entry, streamline lead capture, and connect your business tools with custom workflow automation systems engineered by 3STACK.',
    canonicalUrl: 'https://3stack.tech/services/business-automation',
    imageSrc: '/images/service-automation.webp',
    fallbackImageSrc: '/images/service-automation.jpg',
    imageAlt: 'Business Automation and Connected Node Workflow Pipeline System',
    iconName: 'Workflow',
    accentColor: '#3B82F6',
    summary:
      'Simplify repetitive tasks, connect disconnected tools, and build automated workflows that save time, eliminate human errors, and let your team focus on high-value business operations.',
    problemSolved:
      'Growing businesses frequently lose dozens of hours every week manually copying data between spreadsheets, forgetting customer follow-ups, and managing fragmented tools. 3STACK builds reliable automations that connect your platforms and run automatically in the background.',
    whoIsItFor: [
      'Businesses drowning in repetitive manual data entry and spreadsheet updates.',
      'Sales and customer service teams needing automated lead routing and notifications.',
      'Gyms, cafes, and service businesses requiring automated renewal or booking reminders.',
      'Organizations looking to link web forms directly with CRMs, email services, or databases.',
    ],
    deliverables: [
      'Repetitive Process Identification & Workflow Blueprinting',
      'Web Form to CRM & Notification Pipeline Automation',
      'Automated Customer Confirmation & Alert Workflows',
      'Data Synchronization Across Disconnected Tools & Sheets',
      'Lead Capture Routing & Sales Follow-Up Automations',
      'Error Handling & Reliability Fallbacks for Critical Tasks',
    ],
    capabilities: [
      'API & Webhook Integrations',
      'Multi-Step Automated Triggers & Actions',
      'CRM, Email & Messaging Workflows',
      'Spreadsheet & Cloud Database Synchronization',
      'Customer Onboarding & Reminder Sequences',
      'Process Auditing & Bottleneck Reduction',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Workflow Audit',
        desc: 'We review your daily operations to identify repetitive manual bottlenecks that consume valuable employee hours.',
      },
      {
        step: '02',
        title: 'Automation Blueprint',
        desc: 'We map out logic triggers, data mappings, validation rules, and error handling for the entire workflow.',
      },
      {
        step: '03',
        title: 'Integration & Development',
        desc: 'We configure and code the automations connecting your web forms, CRM, messaging, and operational databases.',
      },
      {
        step: '04',
        title: 'Sandbox Testing & Validation',
        desc: 'We rigorously test edge cases, failed deliveries, and data consistency to ensure 100% dependable execution.',
      },
      {
        step: '05',
        title: 'Live Deployment & Handover',
        desc: 'We activate the automated systems and provide clear documentation so your team understands the automated flow.',
      },
    ],
    faqs: [
      {
        question: 'What kind of tasks can 3STACK automate?',
        answer:
          'We automate lead intake notifications, CRM customer records, booking confirmations, invoice generation triggers, automated email follow-ups, and data synchronization between spreadsheets and databases.',
      },
      {
        question: 'Do I need expensive software licenses to benefit from automation?',
        answer:
          'Not necessarily. We design pragmatic automations using cost-effective tools, webhooks, and tailored scripts, avoiding bloated software subscriptions wherever possible.',
      },
      {
        question: 'Will our team know if an automation fails or experiences an error?',
        answer:
          'Yes. We build in notifications and logging so your team is immediately alerted if an API or third-party service encounters an issue.',
      },
      {
        question: 'How quickly can a workflow automation be implemented?',
        answer:
          'Standard lead capture and notification workflows can typically be deployed within 3 to 7 business days once scope is confirmed.',
      },
    ],
    relatedSlugs: ['software-development', 'web-design-development', 'cloud-solutions'],
  },

  'software-development': {
    id: 'software',
    slug: 'software-development',
    route: '/services/software-development',
    title: 'Custom Software Development',
    shortTitle: 'Software Development',
    tag: 'Custom Operational Tools',
    benchmark: 'Tailored Business Logic',
    metaTitle: 'Custom Software Development Services | 3STACK',
    metaDescription:
      'Bespoke software systems, admin portals, management dashboards, and operational tools built around your exact business workflow by 3STACK.',
    canonicalUrl: 'https://3stack.tech/services/software-development',
    imageSrc: '/images/service-software.webp',
    fallbackImageSrc: '/images/service-software.jpg',
    imageAlt: 'Custom Software Development and Engineering Architecture IDE',
    iconName: 'Code2',
    accentColor: '#10B981',
    summary:
      'Custom software and tailored digital tools engineered to solve specific operational challenges, streamline internal management, and scale your business without unnecessary complexity.',
    problemSolved:
      'Off-the-shelf software often comes with steep recurring monthly subscription fees, cluttered features you never touch, and rigid workflows that do not match your real business model. 3STACK builds tailored tools with the exact features your business requires.',
    whoIsItFor: [
      'Businesses requiring specialized internal management portals or admin dashboards.',
      'Gyms and fitness centers needing tailored member management and renewal tracking.',
      'Cafes, restaurants, and retail shops needing straightforward POS billing and inventory tracking.',
      'Enterprises needing custom database architecture and private internal business logic.',
    ],
    deliverables: [
      'Custom Business Management Software & Admin Portals',
      'POS Billing & Point-of-Sale Operational Interfaces',
      'Member, Customer & Subscription Tracking Systems',
      'Role-Based Access Control & User Permissions',
      'Centralized Database Architecture & Schema Design',
      'Exportable Reporting & Real-Time Performance Analytics',
    ],
    capabilities: [
      'Custom Full-Stack Application Architecture',
      'Relational & Document Database Engineering',
      'Secure Authentication & Token Management',
      'Responsive Web-Based Management Interfaces',
      'Inventory, Billing & Attendance Tracking Logic',
      'Maintainable Codebases & API Development',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Business Logic Modeling',
        desc: 'We document your exact operational process, data models, user roles, and reporting requirements.',
      },
      {
        step: '02',
        title: 'Architecture & UX Wireframing',
        desc: 'We map intuitive dashboard navigation, data entry forms, and administrative controls for rapid daily use.',
      },
      {
        step: '03',
        title: 'Modular Development',
        desc: 'We develop the application using secure database layers, clean API endpoints, and fast frontend interfaces.',
      },
      {
        step: '04',
        title: 'Operational Field Testing',
        desc: 'We simulate real-world transactions, staff workflows, and stress scenarios to guarantee stability.',
      },
      {
        step: '05',
        title: 'Deployment & Ongoing Support',
        desc: 'We deploy the software to secure infrastructure, onboard your staff, and provide iterative support as requirements grow.',
      },
    ],
    faqs: [
      {
        question: 'What examples of custom software has 3STACK built or developed?',
        answer:
          'We have engineered specialized solutions including Cafe Management Systems (POS billing, menu categorization, daily sales tracking) and Gym Management Platforms (member registrations, subscription renewals, attendance tracking).',
      },
      {
        question: 'Do we own the software after it is developed?',
        answer:
          'Yes. Unlike proprietary SaaS tools with lock-in, custom software built for your business belongs to you, giving you full control over your operational assets.',
      },
      {
        question: 'Can the software be accessed from mobile phones and tablets?',
        answer:
          'Yes. Our web-based software dashboards are responsive, enabling managers and staff to view metrics, register items, or update records from tablets, phones, or desktops.',
      },
      {
        question: 'How do you handle data security and backups?',
        answer:
          'We implement secure user authentication, role-based access control, data encryption in transit, and automated database backups to prevent data loss.',
      },
    ],
    relatedSlugs: ['business-automation', 'web-design-development', 'cloud-solutions'],
  },

  'autocad-designs': {
    id: 'autocad',
    slug: 'autocad-designs',
    route: '/services/autocad-designs',
    title: 'AutoCAD Designs & 2D Technical Drafting',
    shortTitle: 'AutoCAD Designs',
    tag: 'Engineering Precision',
    benchmark: 'Accurate Drafting',
    metaTitle: 'AutoCAD Designs & 2D Technical Drafting Services | 3STACK',
    metaDescription:
      'Precise 2D architectural floor plans, mechanical drafting, and paper-to-CAD conversion services by 3STACK. Clean, standardized, layered CAD drafting.',
    canonicalUrl: 'https://3stack.tech/services/autocad-designs',
    imageSrc: '/images/service-autocad.webp',
    fallbackImageSrc: '/images/service-autocad.jpg',
    imageAlt: 'AutoCAD 2D Architectural Floor Plan and Technical CAD Drafting',
    iconName: 'Layers',
    accentColor: '#10B981',
    summary:
      'Accurate 2D drafting, floor plan design, layout planning, and technical drafting support for engineering, architectural, and construction projects.',
    problemSolved:
      'Inaccurate sketches, unstandardized CAD files, and illegible hand-drawn paper plans create expensive mistakes on construction sites and fabrication floors. 3STACK delivers standardized, clean, layered 2D drawings ready for review, submission, and fabrication.',
    whoIsItFor: [
      'Architects, civil engineers, and general contractors needing accurate 2D CAD drafting.',
      'Gym, cafe, and commercial space owners needing functional equipment floor plans.',
      'Manufacturers and mechanical shops requiring precise component drafting.',
      'Property owners converting legacy paper drawings into standardized digital CAD files.',
    ],
    deliverables: [
      '2D Architectural Floor Plans, Elevations & Section Layouts',
      'Mechanical & Industrial Component Technical Drafting',
      'Paper Sketch & Scanned Blueprints to Standardized CAD Conversion',
      'Structured Layering, Dimensioning & Title Block Formatting',
      'Export to DWG, DXF, and High-Resolution Scaled PDF',
      'Commercial Space Equipment & Facility Layout Planning',
    ],
    capabilities: [
      'Standardized CAD Layer Management',
      'Dimensional Tolerancing & Scale Compliance',
      'Commercial Facility Planning (Gyms, Cafes, Retail)',
      'Legacy Blueprint Digitization & Redrawing',
      'Multi-Format Deliverables (DWG, DXF, PDF)',
      'Rapid Revisions & Detail Drawing Support',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Input & Measurement Review',
        desc: 'We review your rough sketches, dimension sheets, existing blueprints, or architectural specifications.',
      },
      {
        step: '02',
        title: 'CAD Drafting & Layer Setup',
        desc: 'We draft the 2D layout in AutoCAD using standardized line weights, recognized layers, and precise dimensions.',
      },
      {
        step: '03',
        title: 'Draft Review & Revisions',
        desc: 'We share preliminary PDF drafts with you to verify spacing, door clearances, equipment placements, and notes.',
      },
      {
        step: '04',
        title: 'Final Detail Polish',
        desc: 'We complete title blocks, hatchings, text annotations, legends, and scale calibrations.',
      },
      {
        step: '05',
        title: 'Final Delivery Package',
        desc: 'We deliver clean DWG source files alongside plot-ready, high-resolution vector PDF documents.',
      },
    ],
    faqs: [
      {
        question: 'What file formats can 3STACK deliver for AutoCAD projects?',
        answer:
          'We provide standardized native DWG files, universal DXF files, and high-resolution vector PDF files formatted to your desired sheet scale.',
      },
      {
        question: 'Can you convert our hand-drawn paper sketches into CAD drawings?',
        answer:
          'Yes. We specialize in converting hand-drawn sketches, scanned legacy blueprints, and paper plans into clean, accurate digital CAD files.',
      },
      {
        question: 'Can you draft commercial gym or cafe floor layouts?',
        answer:
          'Yes. We have practical experience laying out gym facilities (equipment spacing, circulation paths) and cafe spaces for optimal real-world flow.',
      },
      {
        question: 'What information do I need to provide to start a CAD drafting project?',
        answer:
          'You can provide sketches with dimensions, site photos, existing PDF plans, or architectural scope notes. We will review them and clarify any questions before drafting.',
      },
    ],
    relatedSlugs: ['web-design-development', 'software-development', 'business-automation'],
  },

  'cloud-solutions': {
    id: 'cloud',
    slug: 'cloud-solutions',
    route: '/services/cloud-solutions',
    title: 'Cloud Solutions & Infrastructure Hosting',
    shortTitle: 'Cloud Solutions',
    tag: 'Cloud & Infrastructure',
    benchmark: 'Dependable & Secure',
    metaTitle: 'Cloud Solutions & Web Hosting Infrastructure | 3STACK',
    metaDescription:
      'Dependable cloud setup, web hosting configuration, SSL security, automated backups, and deployment pipelines engineered by 3STACK.',
    canonicalUrl: 'https://3stack.tech/services/cloud-solutions',
    imageSrc: '/images/service-cloud.webp',
    fallbackImageSrc: '/images/service-cloud.jpg',
    imageAlt: 'Cloud Infrastructure Monitoring and Network Operations Operations',
    iconName: 'Cloud',
    accentColor: '#00C79E',
    summary:
      'Reliable cloud hosting setup, system deployment, SSL security, automated data backups, and modern digital infrastructure to ensure your platforms remain fast, available, and secure.',
    problemSolved:
      'Slow servers, unexpected downtime, missing SSL certificates, and lack of automated backups expose businesses to lost revenue and customer trust. 3STACK sets up modern, dependable hosting infrastructure configured for 99.9% uptime and high security.',
    whoIsItFor: [
      'Companies launching websites or web apps requiring reliable modern cloud hosting.',
      'Businesses wanting to migrate away from slow, overpriced legacy shared hosting.',
      'Organizations needing automated database backups and disaster recovery safeguards.',
      'Brands requiring custom domains, corporate emails, and verified SSL certificates.',
    ],
    deliverables: [
      'Cloud Hosting & Infrastructure Deployment Setup',
      'Custom Domain DNS Management & Verified SSL Certificates',
      'Automated Database & Application Backup Systems',
      'Continuous Deployment & Automated Build Pipelines',
      'Server Security Hardening & Firewall Rules',
      'Uptime Monitoring & Performance Diagnostic Setup',
    ],
    capabilities: [
      'Modern Cloud Hosting Providers & Static CDNs',
      'DNS Routing & Global Edge Distribution',
      'Automated Data Redundancy & Backups',
      'Environment Variable & Secret Management',
      'Fast CDN Asset Delivery & HTTP/3 Support',
      'Infrastructure Health Monitoring & Maintenance',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Infrastructure Assessment',
        desc: 'We analyze your expected traffic, storage, database demands, and compliance requirements.',
      },
      {
        step: '02',
        title: 'Architecture & Provider Selection',
        desc: 'We recommend modern, cost-efficient cloud hosting environments avoiding unnecessary server expenses.',
      },
      {
        step: '03',
        title: 'DNS, SSL & Server Configuration',
        desc: 'We configure DNS records, point custom domains, provision SSL certificates, and set up security policies.',
      },
      {
        step: '04',
        title: 'Backup & Pipeline Implementation',
        desc: 'We establish automated backup schedules and streamlined deployment processes for worry-free updates.',
      },
      {
        step: '05',
        title: 'Monitoring & Handoff',
        desc: 'We verify global CDN performance, configure uptime alerts, and provide full administrative credentials to your team.',
      },
    ],
    faqs: [
      {
        question: 'Which cloud and hosting providers does 3STACK work with?',
        answer:
          'We configure modern, high-performance providers including Vercel, Netlify, Cloudflare, AWS, DigitalOcean, and modern VPS environments depending on project needs.',
      },
      {
        question: 'Can you help configure our custom domain and SSL certificate?',
        answer:
          'Yes. We handle full DNS routing, domain pointing, SPF/DKIM records for corporate emails, and automated renewal of HTTPS SSL certificates.',
      },
      {
        question: 'How do you safeguard our data against accidental loss?',
        answer:
          'We configure scheduled automated backups and off-site storage snapshots so databases and critical application assets can be restored rapidly if needed.',
      },
      {
        question: 'Will our website load quickly for visitors worldwide?',
        answer:
          'Yes. We implement global Content Delivery Networks (CDNs) and modern caching headers so assets load quickly from edge servers closest to each visitor.',
      },
    ],
    relatedSlugs: ['web-design-development', 'software-development', 'business-automation'],
  },
};

export const SERVICES_LIST = Object.values(SERVICES_MAP);
