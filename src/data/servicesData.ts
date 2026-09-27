export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServiceProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface TargetAudience {
  title: string;
  description: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  shortDescription: string;
  overview: string;
  whoNeedsThis: TargetAudience[];
  deliverables: string[];
  process: ServiceProcessStep[];
  technologies: string[];
  faqs: ServiceFAQ[];
}

export const serviceDetailsData: Record<string, ServiceDetail> = {
  'web-development': {
    id: 'web-development',
    title: 'Custom Web Development',
    seoTitle: 'Custom Web Development Services | 3Stack IT Agency',
    seoDescription: 'Enterprise-grade custom web development using React, TypeScript, Node.js, and Next.js. Build secure, scalable SaaS platforms and web apps with 3Stack.',
    seoKeywords: 'Web Development Services, React Development Company, Custom SaaS Development, Node.js Agency, Enterprise Web App, Full Stack Developers India',
    shortDescription: 'High-performance, scalable web applications engineered with modern technologies tailored to your exact business workflow.',
    overview: `
      <p><strong>What is 3Stack's Web Development service?</strong> 3Stack IT Agency is a web development agency in India offering custom software and UI/UX design. We engineer high-performance, custom-coded web architectures that scale seamlessly for startups, growing SMEs, and enterprise organizations. Off-the-shelf templates and generic page builders introduce technical debt, sluggish load times, and security vulnerabilities. Your web application is the core digital engine of your business, and it must operate reliably under heavy concurrent traffic.</p>
      <p style="margin-top: 1rem;">At 3Stack, our full-stack engineering team builds bespoke custom software and web applications using modern, type-safe frameworks including React, TypeScript, Next.js, Node.js, and PostgreSQL. We emphasize clean code architectures, intuitive UI/UX design, modular microservices, RESTful and GraphQL APIs, and rigorous security standards. From dynamic SaaS platforms and client portals to high-throughput business web apps, every solution is built to maximize user retention and long-term scalability.</p>
    `,
    whoNeedsThis: [
      {
        title: 'Startups Building Scalable MVPs',
        description: 'Founders who need a production-ready Minimum Viable Product built quickly with clean architecture that investors and early adopters can trust.'
      },
      {
        title: 'Businesses Outgrowing Template Builders',
        description: 'Companies limited by WordPress, Shopify, or Wix that require custom database logic, advanced user roles, and proprietary business workflows.'
      },
      {
        title: 'SaaS & Enterprise Platforms',
        description: 'Organizations requiring high-concurrency web software, real-time data sync, multi-tenant databases, and enterprise security compliance.'
      },
      {
        title: 'E-Commerce & High-Volume Portals',
        description: 'Merchants requiring sub-second page loads, custom inventory management, checkout pipelines, and ERP system integrations.'
      }
    ],
    deliverables: [
      'Custom Full-Stack Web Application (React, TypeScript, Node.js)',
      'Secure Authentication & Role-Based Access Control (RBAC)',
      'Custom RESTful & GraphQL API Architecture',
      'Database Modeling & Optimization (PostgreSQL, MongoDB)',
      'Sub-Second Page Load Optimization & Core Web Vitals Compliance',
      'Automated CI/CD Pipeline & Cloud Deployment (AWS / Vercel)',
      'Complete Intellectual Property (IP) & Source Code Transfer'
    ],
    process: [
      {
        step: '01',
        title: 'Architecture & Technical Discovery',
        description: 'We audit your business requirements, define data schemas, select optimal tech stacks, and blueprint an efficient, scalable system architecture.'
      },
      {
        step: '02',
        title: 'UI/UX Prototyping & System Design',
        description: 'Our designers build high-fidelity interactive wireframes and reusable UI component libraries to ensure intuitive user flows prior to coding.'
      },
      {
        step: '03',
        title: 'Agile Full-Stack Engineering',
        description: 'Our developers write modular, type-safe code in two-week iterative sprints, delivering transparent weekly demos and progress checkpoints.'
      },
      {
        step: '04',
        title: 'Rigorous QA & Security Auditing',
        description: 'Every endpoint undergoes automated unit testing, end-to-end user journey validation, vulnerability scanning, and cross-browser stress tests.'
      },
      {
        step: '05',
        title: 'Production Launch & SLA Support',
        description: 'We execute zero-downtime deployment, set up real-time telemetry and crash monitoring, and provide post-launch maintenance retainers.'
      }
    ],
    technologies: ['React', 'TypeScript', 'Next.js', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Redis', 'AWS', 'Docker', 'Tailwind CSS'],
    faqs: [
      {
        q: 'How long does custom web development take at 3Stack?',
        a: 'A standard corporate web application typically takes 4 to 6 weeks from discovery to launch. Complex SaaS platforms, client portals, or multi-role web apps generally require 8 to 16 weeks depending on feature scope and third-party integrations.'
      },
      {
        q: 'What is your web development pricing structure?',
        a: 'We offer fixed project-based pricing for well-defined project scopes, allowing for predictable budgeting with no surprise fees. For evolving platforms or dedicated engineering teams, we offer flexible monthly retainers or sprint-based billing.'
      },
      {
        q: 'Who owns the source code and intellectual property?',
        a: 'You retain 100% ownership of the code, database schemas, and all intellectual property upon project completion. We provide a full Git repository transfer and documentation.'
      },
      {
        q: 'Do you provide post-launch maintenance and updates?',
        a: 'Yes. We offer ongoing maintenance agreements that include security patches, server infrastructure monitoring, dependency updates, and feature enhancements.'
      },
      {
        q: 'How do you ensure web application performance and SEO?',
        a: 'We engineer with server-side rendering (SSR), optimized asset bundles, semantic HTML5, schema markup, and lazy-loading techniques to consistently score 90+ on Google Core Web Vitals.'
      }
    ]
  },
  'app-development': {
    id: 'app-development',
    title: 'Mobile App Development',
    seoTitle: 'Mobile App Development Services | iOS & Android | 3Stack',
    seoDescription: 'Premier mobile app development for iOS and Android using React Native, Swift, and Kotlin. Create engaging mobile apps with 3Stack IT Agency.',
    seoKeywords: 'Mobile App Development, React Native Agency, iOS App Developers, Android App Development, Cross-Platform Mobile Apps, App Development Jaipur',
    shortDescription: 'Intuitive native and cross-platform mobile experiences for iOS and Android built for maximum performance and engagement.',
    overview: `
      <p><strong>What is 3Stack's Mobile App Development service?</strong> We engineer cross-platform and native mobile applications for iOS and Android that deliver fluid user experiences, rapid load times, and enterprise-grade security. Mobile applications represent direct, persistent communication with your audience, demanding exceptional stability and UX polish.</p>
      <p style="margin-top: 1rem;">Our mobile engineering team leverages React Native for cost-efficient cross-platform deployment, as well as native Swift and Kotlin for hardware-intensive applications. We handle the entire lifecycle—from intuitive UX micro-interactions and offline-first state synchronization to automated App Store (iOS) and Google Play Store compliance and launch execution.</p>
    `,
    whoNeedsThis: [
      {
        title: 'Consumer Facing Brands & E-Commerce',
        description: 'Retailers and service brands seeking to increase customer loyalty, repeat purchases, and engagement through push notifications.'
      },
      {
        title: 'On-Demand & Real-Time Services',
        description: 'Businesses requiring geolocation tracking, live dispatch, in-app messaging, and instant payments (e.g., delivery, logistics, booking).'
      },
      {
        title: 'Enterprise Workforce Applications',
        description: 'Organizations deploying internal tools for field technicians, sales representatives, and warehouse logistics with offline capabilities.'
      },
      {
        title: 'B2B & Fintech Applications',
        description: 'Security-critical products requiring biometric authentication (FaceID), encrypted local storage, and real-time financial data feeds.'
      }
    ],
    deliverables: [
      'Cross-Platform iOS & Android Application (React Native)',
      'Native Module Integrations (Camera, GPS, Biometrics, Bluetooth)',
      'Offline-First Data Sync & Push Notification Infrastructure',
      'App Store Optimization (ASO) & Full Store Approval Management',
      'Integrated In-App Purchases (IAP) & Secure Stripe/Payment Gateways',
      'Real-Time Crash Analytics & User Behavior Tracking'
    ],
    process: [
      {
        step: '01',
        title: 'Mobile Product Strategy',
        description: 'We define the mobile core user journey, hardware integration requirements, and state architecture across operating systems.'
      },
      {
        step: '02',
        title: 'Native-Feel UX Prototyping',
        description: 'We construct interactive touch prototypes adhering to Apple Human Interface Guidelines and Google Material Design.'
      },
      {
        step: '03',
        title: 'Sprint Development & Hardware Testing',
        description: 'We build feature modules iteratively, testing on real physical iOS and Android devices for performance and battery efficiency.'
      },
      {
        step: '04',
        title: 'Beta Distribution (TestFlight & Play Console)',
        description: 'We distribute closed beta builds to stakeholders and pilot users to collect telemetry and refine usability.'
      },
      {
        step: '05',
        title: 'App Store Submission & Live Monitoring',
        description: 'We guide your app through Apple and Google review guidelines, guarantee launch approval, and monitor production crash metrics.'
      }
    ],
    technologies: ['React Native', 'Swift', 'Kotlin', 'Firebase', 'GraphQL', 'Redux Toolkit', 'Fastlane', 'Xcode', 'Android Studio'],
    faqs: [
      {
        q: 'Do you develop for both Apple iOS and Google Android?',
        a: 'Yes. We utilize React Native to deliver high-performance applications across both iOS and Android simultaneously from a unified codebase, reducing cost and maintenance overhead while maintaining native UI fluidity.'
      },
      {
        q: 'How long does it take to launch a mobile app?',
        a: 'A Minimum Viable Product (MVP) app typically launches within 8 to 12 weeks. Complex apps with custom hardware integrations, real-time matchmaking, or extensive backend pipelines typically require 14 to 20 weeks.'
      },
      {
        q: 'Do you handle the App Store and Google Play approval process?',
        a: 'Yes, we handle the entire submission process, including metadata preparation, privacy policy declarations, developer account configuration, and compliance review resolutions until your app is live.'
      },
      {
        q: 'Can the app operate when users are offline?',
        a: 'Yes. We build offline-first data architectures using local SQLite, WatermelonDB, or MMKV storage that synchronizes automatically whenever network connectivity is restored.'
      }
    ]
  },
  'digital-marketing': {
    id: 'digital-marketing',
    title: 'AI-Driven Digital Marketing',
    seoTitle: 'Digital Marketing & SEO Agency | 3Stack IT Agency',
    seoDescription: 'Drive profitable digital growth with data-driven SEO, Google & Meta Ads, and Conversion Rate Optimization (CRO) by 3Stack IT Agency.',
    seoKeywords: 'Digital Marketing Services, SEO Agency India, Performance Marketing, PPC Management, Conversion Rate Optimization, Growth Marketing Agency',
    shortDescription: 'Data-driven SEO, PPC, and conversion rate optimization strategies engineered to compound your pipeline and maximize ROI.',
    overview: `
      <p><strong>What is 3Stack's Digital Marketing service?</strong> 3Stack IT Agency is a digital marketing agency specializing in AI-driven SEO and PPC campaigns. We execute data-driven Search Engine Optimization (SEO), high-ROI Pay-Per-Click (PPC) advertising (Google & Meta Ads), and Conversion Rate Optimization (CRO). Vanity metrics like impressions and clicks do not pay bills; we focus strictly on qualified lead acquisition, customer acquisition cost (CAC) reduction, and measurable revenue growth.</p>
      <p style="margin-top: 1rem;">By blending advanced technical SEO, Answer Engine Optimization (AEO), algorithmic PPC ad bidding, and deep CRO funnels, we turn digital channels into predictable growth engines. Every campaign is backed by real-time analytics dashboards so you always know your exact return on ad spend (ROAS).</p>
    `,
    whoNeedsThis: [
      {
        title: 'B2B Companies & Service Firms',
        description: 'Businesses needing a predictable pipeline of qualified inbound inquiries from decision-makers searching on Google.'
      },
      {
        title: 'E-Commerce Brands Scaling Revenue',
        description: 'Online retailers looking to scale customer acquisition profitably across Google Shopping, Performance Max, and Instagram ads.'
      },
      {
        title: 'Local Businesses in Jaipur & Beyond',
        description: 'Companies that need to dominate local search, Google Maps 3-pack, and neighborhood-specific search queries.'
      },
      {
        title: 'Tech Startups Needing Growth Acceleration',
        description: 'Ventures seeking to validate customer funnels, lower CAC, and scale user onboarding via data-driven marketing experiments.'
      }
    ],
    deliverables: [
      'Comprehensive Technical, On-Page & Schema SEO Architecture',
      'Answer Engine Optimization (AEO) for AI Search Visibility',
      'High-Intent Paid Search (Google Ads & Search Retargeting)',
      'Paid Social Performance Campaigns (Meta Ads Manager & LinkedIn)',
      'Conversion Rate Optimization (CRO) Heatmaps & A/B Landing Pages',
      'Custom Google Analytics 4 (GA4) & Server-Side Attribution Tracking',
      'Transparent Monthly ROI & Executive Growth Reports'
    ],
    process: [
      {
        step: '01',
        title: 'Audience & Competitive Intelligence Audit',
        description: 'We dissect competitor ad spends, keyword gaps, and customer search intent to build a targeted acquisition blueprint.'
      },
      {
        step: '02',
        title: 'Technical Foundation & Conversion Tracking',
        description: 'We install server-side GTM, GA4 events, and conversion APIs to eliminate attribution blind spots before spending a dollar.'
      },
      {
        step: '03',
        title: 'Campaign Build & Landing Page Engineering',
        description: 'We construct high-converting dedicated landing pages and launch segmented ad creative matched to high-intent keywords.'
      },
      {
        step: '04',
        title: 'Algorithmic Optimization & Bid Scaling',
        description: 'We continuously test ad copy, prune negative keywords, and reallocate budget to the highest-converting customer segments.'
      },
      {
        step: '05',
        title: 'Reporting & Strategy Evolution',
        description: 'We provide bi-weekly performance updates detailing CPA, ROAS, pipeline value, and next-phase scaling opportunities.'
      }
    ],
    technologies: ['Google Ads', 'Meta Ads Manager', 'Google Analytics 4', 'Google Tag Manager', 'SEMrush', 'Ahrefs', 'Hotjar', 'HubSpot'],
    faqs: [
      {
        q: 'How long does SEO take to produce measurable leads?',
        a: 'Technical SEO fixes and initial indexing gains typically occur within 30 to 60 days. Substantial organic traffic growth, top keyword rankings, and consistent inbound leads typically compound within 3 to 6 months.'
      },
      {
        q: 'What is Answer Engine Optimization (AEO) and why does it matter?',
        a: 'AEO optimizes your website content, schema, and factual entity associations so that AI answer engines (ChatGPT, Perplexity, Gemini, Google AI Overviews) cite and recommend your business when users ask conversational questions.'
      },
      {
        q: 'Do you require long-term contracts for marketing campaigns?',
        a: 'We work on transparent 3-month initial commitments to allow sufficient time for data collection and algorithmic optimization, transitioning to flexible monthly retainers thereafter.'
      },
      {
        q: 'How do you measure marketing return on investment (ROI)?',
        a: 'We track closed deals and verified leads directly back to specific ad clicks or organic pages using GA4 conversion events and CRM attribution, focusing on CAC and ROAS.'
      }
    ]
  },
  'business-automation': {
    id: 'business-automation',
    title: 'Business Process Automation',
    seoTitle: 'Business Automation & Workflow Integrations | 3Stack',
    seoDescription: 'Automate repetitive workflows, connect legacy software, and build custom CRM pipelines. Save hundreds of operational hours with 3Stack IT Agency.',
    seoKeywords: 'Business Process Automation, Custom API Integrations, Zapier Expert Agency, CRM Automation, Workflow Modernization, Make Automation Consultant',
    shortDescription: 'Eliminate manual data entry, streamline operations, and connect your business tools with custom API integrations and automated workflows.',
    overview: `
      <p><strong>What is 3Stack's Business Automation service?</strong> We build custom automated workflows and API bridges that eliminate manual repetitive tasks, connect disparate software platforms, and accelerate business operations. Human error and hours spent copying data between spreadsheets drain company productivity.</p>
      <p style="margin-top: 1rem;">Our automation engineers build custom Node.js and Python microservices, configure enterprise webhook integrations, and deploy robust workflows across tools like Salesforce, HubSpot, Stripe, Slack, and Google Workspace. By automating lead intake, invoicing, customer onboarding, and reporting, we give your team back hundreds of hours every month.</p>
    `,
    whoNeedsThis: [
      {
        title: 'Growing Agencies & Service Providers',
        description: 'Firms needing automatic contract generation, onboarding email sequences, and project management sync upon payment.'
      },
      {
        title: 'High-Volume Sales Teams',
        description: 'Sales departments losing leads due to slow response times that need instant lead routing, SMS alerts, and automatic CRM population.'
      },
      {
        title: 'E-Commerce & Logistics Operations',
        description: 'Merchants requiring real-time inventory synchronization across multi-channel stores, warehouse systems, and shipping carriers.'
      },
      {
        title: 'Financial & Administrative Departments',
        description: 'Teams bogged down by repetitive monthly invoice generation, expense categorization, and financial reconciliation.'
      }
    ],
    deliverables: [
      'Custom API Integration & Webhook Listener Microservices',
      'Automated Multi-Step Lead Intake & CRM Pipeline Routing',
      'Automated Invoicing, Payment Collection & Accounting Sync',
      'Automated Client Onboarding & Document Generation Workflows',
      'Real-Time Internal Alert Systems (Slack, WhatsApp, Email)',
      'Error Handling, Retry Logic & System Reliability Dashboards'
    ],
    process: [
      {
        step: '01',
        title: 'Operational Workflow Bottleneck Audit',
        description: 'We analyze your team’s repetitive manual tasks, mapping where time and data are lost across software applications.'
      },
      {
        step: '02',
        title: 'Architecture & Security Mapping',
        description: 'We design secure API integration blueprints with OAuth 2.0 authentication, rate limiting, and encrypted payload protocols.'
      },
      {
        step: '03',
        title: 'Custom Scripting & Integration Build',
        description: 'We write robust API bridges and automate pipelines using custom cloud functions, webhooks, or enterprise workflow engines.'
      },
      {
        step: '04',
        title: 'Edge-Case Testing & Fail-Safe Verification',
        description: 'We stress-test payloads, network timeouts, and data formatting edge cases to ensure zero dropped records or duplicate syncs.'
      },
      {
        step: '05',
        title: 'Team Training & Continuous Telemetry',
        description: 'We train your administrative staff, provide full architecture documentation, and implement automated error alerts.'
      }
    ],
    technologies: ['Node.js', 'Python', 'Zapier', 'Make (Integromat)', 'REST APIs', 'Webhooks', 'HubSpot APIs', 'Salesforce APIs', 'Stripe', 'Google Workspace'],
    faqs: [
      {
        q: 'What types of tasks can 3Stack automate?',
        a: 'We automate lead routing, customer onboarding, invoice generation, cross-platform CRM sync, order processing, email/SMS notifications, survey responses, and report compilation.'
      },
      {
        q: 'Do we need to replace our current software platforms?',
        a: 'No. Our automation solutions are designed to connect your existing tools (CRM, accounting software, email, spreadsheets) through custom APIs and webhooks without disrupting existing workflows.'
      },
      {
        q: 'How much time can business automation save?',
        a: 'Our clients typically save between 15 to 40+ hours per week per department by eliminating manual data entry, human error, and multi-app copy-pasting.'
      },
      {
        q: 'How secure is automated data transfer?',
        a: 'Security is paramount. All data transfers use TLS/SSL encryption, strict OAuth 2.0 token handling, least-privilege API scopes, and zero unencrypted credential storage.'
      }
    ]
  },
  'web-design': {
    id: 'web-design',
    title: 'UI/UX Web Design',
    seoTitle: 'UI/UX Design & Brand Identity | 3Stack Digital Agency',
    seoDescription: 'Conversion-driven UI/UX design, design systems, and Figma prototyping. Elevate your brand identity with 3Stack IT Agency in Jaipur.',
    seoKeywords: 'UI/UX Web Design, Figma Prototyping Agency, Brand Identity Design, Website Redesign, UX Audit, Mobile-First Design Jaipur',
    shortDescription: 'Bespoke UI/UX design, interactive prototypes, and design systems crafted to elevate brand perception and maximize user conversion.',
    overview: `
      <p><strong>What is 3Stack's UI/UX Web Design service?</strong> We design conversion-focused user interfaces (UI) and frictionless user experiences (UX) based on empirical user psychology research. Visitors judge a business's credibility in less than 50 milliseconds based solely on visual design and layout clarity.</p>
      <p style="margin-top: 1rem;">Our UI/UX design studio transforms complex product workflows into clear, delightful interfaces. From comprehensive design systems in Figma with standardized color tokens and typography to clickable prototypes and responsive layouts, we ensure every interaction moves your users effortlessly toward conversion.</p>
    `,
    whoNeedsThis: [
      {
        title: 'Products with High User Drop-Off Rates',
        description: 'Platforms with low checkout or signup conversions that need a comprehensive UX audit and streamlined interface overhaul.'
      },
      {
        title: 'Startups Preparing for Investor Pitching',
        description: 'Founders who need polished, clickable Figma prototypes to demonstrate product viability and vision to investors.'
      },
      {
        title: 'Brands Needing Modern Visual Identity',
        description: 'Established companies with outdated websites that fail to reflect their premium service quality and market leadership.'
      },
      {
        title: 'Software Teams Needing Design Systems',
        description: 'Engineering departments requiring structured Figma UI component libraries to accelerate frontend development velocity.'
      }
    ],
    deliverables: [
      'Interactive Clickable Prototypes (Figma)',
      'Complete Design Systems & Reusable Token Libraries',
      'Mobile, Tablet & Desktop Responsive Layouts',
      'Comprehensive Brand Identity & Style Guides',
      'UX Friction & Usability Heuristic Audits',
      'Developer-Ready Handoff with Asset Exports & CSS Specs'
    ],
    process: [
      {
        step: '01',
        title: 'User Research & Competitive Benchmarking',
        description: 'We study your target user persona, map behavioral pain points, and benchmark the visual landscape of top market competitors.'
      },
      {
        step: '02',
        title: 'Information Architecture & Wireframes',
        description: 'We establish the navigational hierarchy and build low-fidelity wireframes to optimize conversion pathways before styling.'
      },
      {
        step: '03',
        title: 'Design System & Visual Styling',
        description: 'We establish a bespoke visual language including color palettes, typography scales, spacing tokens, and custom UI components.'
      },
      {
        step: '04',
        title: 'Interactive Prototyping & Usability Testing',
        description: 'We assemble interactive clickable Figma prototypes and conduct usability sessions to validate navigation and ergonomics.'
      },
      {
        step: '05',
        title: 'Developer Handoff & Quality Assurance',
        description: 'We deliver clean Figma files with auto-layout, documented component variants, and collaborate with developers during implementation.'
      }
    ],
    technologies: ['Figma', 'Adobe XD', 'Illustrator', 'Photoshop', 'Tokens Studio', 'Zeroheight', 'Balsamiq'],
    faqs: [
      {
        q: 'What deliverables are included in a UI/UX design project?',
        a: 'You receive complete Figma source files, interactive prototypes, responsive artboards (desktop, tablet, mobile), design tokens, exported SVG/PNG assets, and development handoff specs.'
      },
      {
        q: 'How do you ensure the design converts visitors into customers?',
        a: 'We design using visual hierarchy principles, proven F-pattern and Z-pattern reading flows, prominent contrast call-to-actions, and reduced cognitive friction in form fields.'
      },
      {
        q: 'Can 3Stack code the design after it is approved?',
        a: 'Yes! Our UI/UX designers collaborate directly with our in-house full-stack web and mobile engineering teams, ensuring the live code matches the approved design with 100% pixel fidelity.'
      },
      {
        q: 'How many design revisions are included?',
        a: 'We structure our design phases with milestones for wireframes, style direction, and final layouts, incorporating iterative feedback at each milestone until complete satisfaction.'
      }
    ]
  },
  'autocad': {
    id: 'autocad',
    title: 'AutoCAD Services & 3D Drafting',
    seoTitle: 'AutoCAD Drafting & 3D Modeling Services | 3Stack',
    seoDescription: 'Accurate 2D architectural drafting, MEP schematics, and 3D modeling. Trust 3Stack IT Agency for precision AutoCAD engineering drawings.',
    seoKeywords: 'AutoCAD Drafting Services, 2D Drafting Agency, 3D Architectural Modeling, MEP Schematics, Paper to CAD Conversion, CAD Outsourcing India',
    shortDescription: 'Precision 2D drafting, 3D architectural modeling, and MEP schematics delivered with mathematical accuracy adhering to international standards.',
    overview: `
      <p><strong>What are 3Stack's AutoCAD services?</strong> We provide certified 2D technical drafting, MEP (Mechanical, Electrical, Plumbing) schematics, and 3D architectural modeling for engineering firms, architects, and contractors worldwide. Precision is non-negotiable; minor drafting discrepancies can lead to costly real-world construction delays.</p>
      <p style="margin-top: 1rem;">Our team of certified CAD drafters converts rough concepts, hand sketches, and legacy paper blueprints into standardized, multi-layered DWG and DXF technical drawings. We adhere strictly to international drafting standards (ISO, ANSI), ensuring seamless permit approvals and manufacturing readiness.</p>
    `,
    whoNeedsThis: [
      {
        title: 'Architectural & Engineering Firms',
        description: 'Practices requiring dependable overflow drafting support to meet strict permit deadlines without hiring internal staff.'
      },
      {
        title: 'MEP & HVAC Contractors',
        description: 'Specialists requiring clear mechanical, electrical, and plumbing schematics, duct layouts, and riser diagrams.'
      },
      {
        title: 'Real Estate Developers & Builders',
        description: 'Developers needing high-precision 2D floor plans, site elevations, and realistic 3D exterior/interior architectural visualizations.'
      },
      {
        title: 'Facilities & Manufacturing Companies',
        description: 'Facilities needing accurate as-built drawings and paper-to-CAD vector conversions for legacy machinery and structures.'
      }
    ],
    deliverables: [
      'Architectural 2D Floor Plans, Elevations & Section Views',
      'MEP (Mechanical, Electrical, Plumbing) Schematics',
      'High-Precision 3D Exterior & Interior Architectural Models',
      'Legacy Paper Blueprints & PDF to Layered DWG/DXF Conversion',
      'Structural Framing & Foundation Detail Drawings',
      'Complete Layer Organization adhering to ISO/ANSI Standards'
    ],
    process: [
      {
        step: '01',
        title: 'Technical Scope & Input Verification',
        description: 'We review your rough sketches, PDFs, or site survey data to establish unit standards, layering rules, and project tolerances.'
      },
      {
        step: '02',
        title: 'Base Plan Drafting & Layering Setup',
        description: 'We construct clean, mathematically accurate base drawings with standardized layers, line weights, and dimension styles.'
      },
      {
        step: '03',
        title: 'Detailing, Annotations & MEP Integration',
        description: 'We add precise dimensions, callouts, hatching, and technical annotations across all floor plans, elevations, and service routes.'
      },
      {
        step: '04',
        title: 'Independent Quality Review & Standards Audit',
        description: 'A senior CAD engineer verifies all drawing scales, interference checks, and geometric alignments against project specifications.'
      },
      {
        step: '05',
        title: 'Final Packaging & Format Delivery',
        description: 'We deliver final drawing packages in DWG, DXF, and print-ready vector PDF formats alongside plot style (.ctb) configuration files.'
      }
    ],
    technologies: ['AutoCAD', 'Revit', 'SketchUp', '3ds Max', 'AutoCAD MEP', 'Navisworks', 'SolidWorks'],
    faqs: [
      {
        q: 'What file formats can 3Stack accept and deliver?',
        a: 'We accept sketches, PDFs, TIFFs, scanned blueprints, and BIM models. We deliver final files in DWG, DXF, DWF, and high-resolution vector PDF formats.'
      },
      {
        q: 'Can you convert old paper blueprints into editable CAD files?',
        a: 'Yes. Our paper-to-CAD conversion service manually traces and re-engineers raster blueprints into layered, dimensionally accurate vector DWG files with full layer hierarchy.'
      },
      {
        q: 'What drafting standards do you adhere to?',
        a: 'We follow ISO, ANSI, AIA, and BS drafting conventions, customizing layer naming, text fonts, and line weights to your firm’s specific CAD manual.'
      },
      {
        q: 'What is the turnaround time for CAD drafting projects?',
        a: 'Small residential floor plans or conversions are typically delivered within 24 to 48 hours. Comprehensive commercial drawing sets or 3D models typically take 1 to 2 weeks.'
      }
    ]
  }
};
