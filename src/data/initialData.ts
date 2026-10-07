import {
  Project,
  SkillCategory,
  ExperienceItem,
  EducationItem,
  GitHubRepo,
  TestimonialItem,
  CertificationItem,
  TechnicalArticle,
  PortfolioProfile,
} from '../types/portfolio';

export const INITIAL_PROFILE: PortfolioProfile = {
  name: 'Mohsin Ali',
  title: 'PHP Laravel Developer | Web Developer | BS-IT Graduate',
  shortIntro:
    'BS Information Technology Graduate with hands-on experience in PHP, Laravel, MySQL, REST APIs, and responsive web application development. Passionate about building scalable business solutions.',
  fullBio:
    'As a BS Information Technology Graduate, I bridge the gap between robust backend software engineering and enterprise IT systems. Having completed intensive software engineering internships at Technic Mentors and Honda Atlas Cars Pakistan, I specialize in clean MVC architecture, Eloquent ORM relations, relational database design in MySQL, RESTful API integrations, and practical IT infrastructure troubleshooting.',
  email: 'mohsinrs595@gmail.com',
  whatsapp: '+923001234567',
  phone: '+92 300 1234567',
  github: 'https://github.com/mohsinali-dev',
  linkedin: 'https://linkedin.com/in/mohsin-ali-laravel',
  location: 'Lahore, Pakistan (Open to Remote & On-Site)',
  availability: 'Immediately Available for Junior Laravel / Full Stack / IT Engineer Roles',
  careerObjective:
    'Aspiring Software Engineer and Junior Laravel Developer aiming to leverage a solid BS-IT foundation in MVC patterns, database optimization, RESTful web services, and enterprise IT troubleshooting to contribute to high-performance software engineering teams while continuously mastering modern web architectures.',
  avatarUrl: '/src/assets/images/mohsin_ali_portrait_1791268352233.jpg',
};

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'Office Management System',
    tagline: 'Comprehensive Enterprise ERP & HR Operations Suite',
    description:
      'A multi-module enterprise web application designed to automate organization workflows including employee profiles, hierarchical departments, biometric-ready attendance logs, leave request approvals, structured payroll generation with tax calculations, and dynamic role-based access control (RBAC).',
    category: 'Full Stack',
    technologies: ['Laravel 10', 'PHP 8.2', 'MySQL', 'Bootstrap 5', 'jQuery', 'AJAX', 'Blade Engine'],
    features: [
      'Interactive Executive Admin Dashboard with real-time operational KPI summaries',
      'Employee Directory with designation tracking, document attachments, and lifecycle status',
      'Department & Designation hierarchy configuration with managerial assignment',
      'Daily Attendance Management with check-in/out timestamps and monthly duty roster summaries',
      'Leave Management module featuring multi-tier approval workflows and balance tracking',
      'Automated Payroll Calculation engine factoring allowances, deductions, and downloadable pay-slips',
      'Granular User Roles & Permissions system powered by custom middleware & gates',
      'Exportable tabular reports (PDF & Excel format) for HR and internal audit review',
    ],
    githubUrl: 'https://github.com/mohsinali-dev/office-management-system-laravel',
    liveDemoUrl: 'https://demo-office-mgmt.mohsinali.dev',
    previewImage: '/src/assets/images/office_management_preview_1791268370218.jpg',
    architectureDetails: {
      mvcStructure: 'Modular Service-Repository Pattern with Form Request validation and Policy authorization',
      databaseTables: ['users', 'employees', 'departments', 'designations', 'attendances', 'leaves', 'payrolls', 'roles_permissions'],
      sampleRoute: "Route::middleware(['auth', 'role:admin'])->prefix('admin')->group(...);",
      controllerLogic: 'PayrollController calculates net salary using transactional database operations to guarantee accounting consistency.',
    },
    featured: true,
  },
  {
    id: 'proj-2',
    title: 'Leads & Deals Management System',
    tagline: 'High-Retention Customer Pipeline & Sales CRM',
    description:
      'A purpose-built Customer Relationship Management (CRM) application that empowers business development teams to capture prospective leads, track consultative deal stages across a visual pipeline, schedule automated follow-up reminders, and analyze revenue conversion velocity.',
    category: 'CRM & Enterprise',
    technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'Chart.js'],
    features: [
      'Visual CRM Sales Dashboard displaying active pipeline valuation and win/loss velocity metrics',
      'Centralized Customer & Organization records with complete communication logs',
      'Lead Tracking engine with source attribution (Inbound, Referral, Cold, Organic)',
      'Multi-stage Deal Pipeline (Lead, Discovery, Proposal, Negotiation, Won/Lost)',
      'Scheduled Follow-up Reminders with priority flags and status notifications',
      'Status Management with automated stage transitions and audit timestamps',
      'Dynamic search and multi-parameter filtering for rapid client lookup',
    ],
    githubUrl: 'https://github.com/mohsinali-dev/leads-deals-crm-laravel',
    liveDemoUrl: 'https://demo-crm-pipeline.mohsinali.dev',
    previewImage: '/src/assets/images/leads_deals_crm_preview_1791268385211.jpg',
    architectureDetails: {
      mvcStructure: 'Event-driven architecture with queued notifications on stage progression',
      databaseTables: ['clients', 'leads', 'deals', 'deal_stages', 'follow_ups', 'activity_logs'],
      sampleRoute: "Route::resource('deals', DealController::class)->middleware('auth');",
      controllerLogic: 'DealController updates deal stage via AJAX and recalculates total pipeline value in real-time.',
    },
    featured: true,
  },
  {
    id: 'proj-3',
    title: 'Library Management System',
    tagline: 'Automated Cataloging, Circulations & Member Operations',
    description:
      'A reliable institutional catalog and book circulation system built for university and corporate libraries. Features barcode/ISBN lookup, member accounts, automated issue and return logs, overdue fine calculation, and lightning-fast full-text catalog search.',
    category: 'Laravel Backend',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Blade', 'Bootstrap', 'SQL Indexing'],
    features: [
      'Comprehensive Book Cataloging system indexing ISBN, Author, Genre, Rack number, and Stock count',
      'One-click Issue & Return circulation workflow with borrower record validation',
      'Patron & Student User Management with active borrow limits and historical logs',
      'Automated Overdue Penalty Calculator factoring weekend grace periods and daily fines',
      'Instant Search Functionality filtering books by title, author, category, or availability status',
      'Inventory health reports highlighting popular categories and missing/damaged items',
    ],
    githubUrl: 'https://github.com/mohsinali-dev/library-management-laravel',
    liveDemoUrl: 'https://demo-library.mohsinali.dev',
    previewImage: '/src/assets/images/library_system_preview_1791268398318.jpg',
    architectureDetails: {
      mvcStructure: 'Normalized 3NF relational schema with indexed search columns and Eloquent model scopes',
      databaseTables: ['books', 'categories', 'authors', 'members', 'borrow_records', 'fines'],
      sampleRoute: "Route::post('/circulation/issue', [CirculationController::class, 'issueBook']);",
      controllerLogic: 'CirculationController decrements book available copies wrapped in DB::transaction to prevent race conditions.',
    },
    featured: true,
  },
  {
    id: 'proj-4',
    title: 'REST API Integration Project',
    tagline: 'Secure Headless Web Services with Token Authentication',
    description:
      'A robust RESTful API backend engineered in Laravel adhering to JSON:API standards. Incorporates bearer token authentication via Laravel Sanctum, rigorous FormRequest payload validation, standardized HTTP status codes, structured JSON resource wrappers, and exhaustive Postman collection coverage.',
    category: 'REST API',
    technologies: ['Laravel Sanctum', 'RESTful Architecture', 'JSON APIs', 'Postman', 'MySQL', 'JWT'],
    features: [
      'Stateless API Authentication utilizing secure bearer tokens (Sanctum/JWT) with revocation',
      'Strict input validation with informative 422 Unprocessable Entity error envelopes',
      'Consistent JSON Response formatting with meta, pagination cursors, and data envelopes',
      'Exhaustive Postman Workspace documentation with pre-request scripts and automated tests',
      'API Rate Limiting (throttling) protecting endpoints against DDoS and brute-force attacks',
      'Comprehensive CRUD endpoints for external mobile application and third-party integrations',
    ],
    githubUrl: 'https://github.com/mohsinali-dev/laravel-rest-api-boilerplate',
    liveDemoUrl: 'https://api-docs.mohsinali.dev',
    previewImage: '/src/assets/images/office_management_preview_1791268370218.jpg',
    architectureDetails: {
      mvcStructure: 'API Resource Collections with custom Exception Handler transforms',
      databaseTables: ['users', 'personal_access_tokens', 'api_resources', 'audit_logs'],
      sampleRoute: "Route::middleware('auth:sanctum')->apiResource('v1/records', RecordApiController::class);",
      controllerLogic: 'Returns new ResourceCollection with sanitized fields avoiding exposure of sensitive DB attributes.',
    },
    featured: true,
  },
];

export const INITIAL_SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'backend',
    title: 'Backend Development',
    description: 'Core server-side engineering, object-oriented programming, and API architecture',
    skills: [
      { name: 'PHP (OOP & 8.x)', level: 88, badge: 'Core Language', details: 'Object-oriented programming, namespaces, interfaces, traits, and error handling' },
      { name: 'Laravel Framework', level: 90, badge: 'Primary Stack', details: 'Artisan CLI, Blade templating, routing, middleware, migrations, seeders, and queues' },
      { name: 'MVC Architecture', level: 92, badge: 'Design Pattern', details: 'Strict separation of Model data logic, View presentations, and Controller orchestration' },
      { name: 'REST APIs', level: 86, badge: 'Web Services', details: 'RESTful endpoint design, JSON transformations, status code integrity, and API throttling' },
      { name: 'Authentication & Security', level: 85, badge: 'Protection', details: 'Sanctum tokens, session auth, bcrypt hashing, CSRF protection, and SQL injection defense' },
      { name: 'CRUD Operations', level: 95, badge: 'Data Lifecycle', details: 'Clean validation rules, database transactions, mass assignment protection, and soft deletes' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Client-side structuring, responsive styling, and dynamic asynchronous UI integration',
    skills: [
      { name: 'HTML5', level: 95, badge: 'Semantics', details: 'Semantic HTML markup, accessibility compliance, and optimized document hierarchy' },
      { name: 'CSS3 & Flex/Grid', level: 90, badge: 'Layouts', details: 'Advanced layouts, CSS custom properties, media queries, and fluid typography' },
      { name: 'Bootstrap 5', level: 92, badge: 'Responsive Framework', details: 'Rapid prototyping, customized grid break-points, utility classes, and components' },
      { name: 'JavaScript (ES6+)', level: 82, badge: 'Scripting', details: 'DOM manipulation, promises, async/await, event listeners, and local storage state' },
      { name: 'jQuery', level: 85, badge: 'DOM Utility', details: 'Event bindings, dynamic selector handling, and animation hooks for legacy web apps' },
      { name: 'AJAX / Fetch API', level: 88, badge: 'Async Data', details: 'Seamless background server requests, JSON data exchange without page reloads' },
    ],
  },
  {
    id: 'database',
    title: 'Database Management',
    description: 'Relational data modeling, SQL optimization, and ORM abstractions',
    skills: [
      { name: 'MySQL', level: 88, badge: 'RDBMS', details: 'Relational design, foreign key constraints, transactions, and indexing strategies' },
      { name: 'Complex SQL Queries', level: 84, badge: 'Querying', details: 'Multi-table INNER/LEFT JOINs, GROUP BY aggregations, subqueries, and views' },
      { name: 'Database Design (3NF)', level: 86, badge: 'Architecture', details: 'Entity-relationship diagrams (ERD), normalization up to 3NF, and constraint rules' },
      { name: 'Eloquent ORM', level: 92, badge: 'Laravel ORM', details: 'One-to-Many, Many-to-Many relationships, eager loading with(), query scopes, and mutators' },
    ],
  },
  {
    id: 'tools',
    title: 'Developer Tools & Environment',
    description: 'Version control, dependency management, API testing, and local servers',
    skills: [
      { name: 'Git & GitHub', level: 88, badge: 'Version Control', details: 'Branching workflows, commits, pull requests, merge conflict resolution, and code reviews' },
      { name: 'VS Code & PHPStorm', level: 90, badge: 'Development IDE', details: 'Linters, extensions, Xdebug configurations, and terminal integration' },
      { name: 'Composer', level: 88, badge: 'Package Manager', details: 'PHP dependency resolution, autoloading PSR-4, and package script automation' },
      { name: 'Postman', level: 86, badge: 'API Testing', details: 'Environment variables, collection test suites, automated header authorizations' },
      { name: 'XAMPP / Local Dev', level: 92, badge: 'Stack Setup', details: 'Apache configuration, virtual hosts, php.ini tuning, and phpMyAdmin' },
    ],
  },
  {
    id: 'it_networking',
    title: 'IT & Networking Infrastructure',
    description: 'Enterprise IT fundamentals, hardware systems, and network configurations',
    skills: [
      { name: 'Networking Fundamentals', level: 85, badge: 'Infrastructure', details: 'OSI 7-Layer model, TCP/IP protocol suite, DNS, DHCP, and Subnetting' },
      { name: 'IP Addressing & Subnetting', level: 84, badge: 'IPv4 / IPv6', details: 'Classful/CIDR subnet calculations, public vs private IP scopes, and gateway setups' },
      { name: 'Router & Switch Basics', level: 80, badge: 'Hardware Config', details: 'VLAN segmentation, routing protocols, port security, and console administration' },
      { name: 'Cisco Packet Tracer', level: 85, badge: 'Simulation Tool', details: 'Designing virtual multi-branch network topologies and analyzing packet flows' },
      { name: 'Hardware & OS Troubleshooting', level: 90, badge: 'System Support', details: 'Diagnosing hardware failures, OS crash debugging, peripheral setups, and disk repair' },
    ],
  },
  {
    id: 'erp',
    title: 'Enterprise Systems & ERP',
    description: 'Exposure to multinational business process automation and enterprise software',
    skills: [
      { name: 'SAP ERP Fundamentals', level: 78, badge: 'Enterprise Software', details: 'Exposure gained during Honda Atlas Cars internship; SAP GUI navigation and modules' },
      { name: 'SAP FI/CO Overview', level: 75, badge: 'Financial Accounting', details: 'Understanding General Ledger, Cost Centers, and corporate accounting workflow links' },
      { name: 'Business Process Workflows', level: 85, badge: 'Operations', details: 'Procure-to-Pay, Order-to-Cash, and industrial inventory management pipeline knowledge' },
    ],
  },
];

export const INITIAL_EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    company: 'Technic Mentors',
    role: 'Web Development Intern (3 Months)',
    duration: '3 Months',
    period: 'Web Engineering Internship',
    location: 'Gujranwala / Hybrid, Pakistan',
    type: 'Internship',
    descriptionBullets: [
      'Developed and maintained modular web applications utilizing PHP 8 and the Laravel framework.',
      'Designed normalized MySQL relational database schemas with migrations and seeders for test coverage.',
      'Engineered clean CRUD functional modules with robust server-side validation and Eloquent ORM relationships.',
      'Implemented mobile-first, responsive user interfaces using Bootstrap 5, customized CSS, and jQuery AJAX interactions.',
      'Diagnosed, debugged, and resolved runtime software exceptions across development staging environments.',
      'Collaborated effectively within a team using Git and GitHub version control, participating in code reviews and branch management.',
    ],
    keyTech: ['PHP', 'Laravel', 'MySQL', 'Bootstrap 5', 'jQuery', 'AJAX', 'Git / GitHub', 'Eloquent ORM'],
    achievement: 'Delivered 3 complete CRUD operational modules ahead of schedule with zero critical database constraint bugs.',
  },
  {
    id: 'exp-2',
    company: 'Honda Atlas Cars Pakistan',
    role: 'IT Intern',
    duration: 'Professional Internship',
    period: 'Enterprise IT Support & Systems',
    location: 'Lahore, Pakistan',
    type: 'Internship',
    descriptionBullets: [
      'Gained valuable hands-on exposure to SAP ERP operational workflows and corporate master data structures.',
      'Assisted enterprise IT infrastructure engineers with network connectivity, switch port patching, and workstation IP configurations.',
      'Executed frontline IT support tasks resolving hardware, software, printing, and Active Directory domain user issues.',
      'Troubleshot network latency, DNS resolution errors, and local LAN connection outages for administrative workstations.',
      'Acquired deep practical understanding of high-reliability IT protocols and standard operating procedures (SOPs) within a Fortune 500 manufacturing facility.',
    ],
    keyTech: ['SAP ERP Overview', 'Networking', 'IP Configuration', 'Hardware Troubleshooting', 'System Diagnostics', 'Enterprise IT Support'],
    achievement: 'Maintained a 95%+ ticket resolution rating for internal department IT support calls during the internship tenure.',
  },
];

export const INITIAL_EDUCATION: EducationItem[] = [
  {
    id: 'edu-1',
    degree: 'BS Information Technology (BS-IT)',
    institution: 'University Graduate / Higher Education Institution',
    period: '4-Year Degree Program',
    status: 'Graduated / Fresh IT Graduate',
    highlights: [
      'Strong academic and practical focus on Software Engineering, Object-Oriented Analysis & Design, and Database Systems.',
      'Hands-on laboratory training in Computer Networks, Data Communications, Web Technologies, and Operating Systems.',
      'Completed multiple semester capstones demonstrating full-stack Laravel engineering and relational MySQL database design.',
    ],
    keyCourses: [
      'Object Oriented Programming (OOP)',
      'Web Technologies & Application Development',
      'Database Systems & Advanced SQL',
      'Data Structures & Algorithms',
      'Computer Networks & IP Protocols',
      'Software Engineering Principles',
      'Operating Systems & Troubleshooting',
    ],
  },
];

export const INITIAL_GITHUB_REPOS: GitHubRepo[] = [
  {
    name: 'office-management-system-laravel',
    description: 'Enterprise Office Management & HR portal built with Laravel 10, MySQL, and Bootstrap 5 featuring role-based access control and payroll automation.',
    stars: 14,
    forks: 5,
    language: 'PHP',
    techTags: ['Laravel', 'MySQL', 'HR-System', 'Bootstrap', 'RBAC'],
    url: 'https://github.com/mohsinali-dev/office-management-system-laravel',
    updatedDate: 'Updated this week',
    openIssues: 0,
  },
  {
    name: 'leads-deals-crm-laravel',
    description: 'Sales pipeline & customer tracking CRM software with visual deal stages, customer logs, and revenue metrics.',
    stars: 11,
    forks: 3,
    language: 'PHP',
    techTags: ['Laravel', 'CRM', 'Sales-Pipeline', 'ChartJS', 'MySQL'],
    url: 'https://github.com/mohsinali-dev/leads-deals-crm-laravel',
    updatedDate: 'Updated 2 weeks ago',
    openIssues: 0,
  },
  {
    name: 'library-management-laravel',
    description: 'Digital catalog and book borrowing system with automated fine calculations, overdue checks, and member management.',
    stars: 9,
    forks: 2,
    language: 'PHP',
    techTags: ['PHP', 'Laravel', 'Library-Management', 'Blade', 'MySQL'],
    url: 'https://github.com/mohsinali-dev/library-management-laravel',
    updatedDate: 'Updated last month',
    openIssues: 0,
  },
  {
    name: 'laravel-rest-api-boilerplate',
    description: 'Clean RESTful API starter kit featuring Sanctum token auth, API resource transformers, standard JSON responses, and Postman docs.',
    stars: 18,
    forks: 6,
    language: 'PHP',
    techTags: ['Laravel-API', 'Sanctum', 'REST-API', 'Postman', 'JWT'],
    url: 'https://github.com/mohsinali-dev/laravel-rest-api-boilerplate',
    updatedDate: 'Updated recently',
    openIssues: 0,
  },
];

export const INITIAL_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Senior Software Engineer / Team Lead',
    role: 'Engineering Lead',
    company: 'Technic Mentors',
    avatarText: 'TM',
    feedback:
      'Mohsin demonstrated remarkable dedication during his 3 months with us. His grasp of Laravel MVC conventions, eagerness to write clean migrations, and quick turnaround on CRUD modules made him an asset to the web team. He is well-prepared for any Junior Laravel role.',
    relationship: 'Direct Internship Supervisor',
  },
  {
    id: 'test-2',
    name: 'IT Infrastructure Specialist',
    role: 'IT Department Lead',
    company: 'Honda Atlas Cars Pakistan',
    avatarText: 'HA',
    feedback:
      'Mohsin approached complex enterprise IT challenges with curiosity and disciplined troubleshooting skills. From network cabling to workstation diagnostics and observing our ERP operations, he proved to be reliable, punctual, and technically astute.',
    relationship: 'Internship Mentor',
  },
];

export const INITIAL_CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'cert-1',
    title: 'Laravel 10 Backend Web Development Masterclass',
    issuer: 'Professional Web Engineering Academy',
    issueDate: '2025',
    credentialUrl: '#',
    topics: ['Eloquent ORM', 'Routing & Middleware', 'Authentication', 'REST APIs', 'Blade Engine'],
  },
  {
    id: 'cert-2',
    title: 'Networking Fundamentals & Cisco Packet Tracer Topology Design',
    issuer: 'IT Academy Certification',
    issueDate: '2024',
    credentialUrl: '#',
    topics: ['IPv4 Subnetting', 'VLANs', 'Routing & Switching', 'Troubleshooting'],
  },
  {
    id: 'cert-3',
    title: 'Relational Database Design & SQL Optimization with MySQL',
    issuer: 'Database Specialists Guild',
    issueDate: '2024',
    credentialUrl: '#',
    topics: ['3NF Normalization', 'Complex JOIN Queries', 'Indexes', 'ACID Transactions'],
  },
];

export const INITIAL_BLOGS: TechnicalArticle[] = [
  {
    id: 'blog-1',
    title: 'How to Prevent the N+1 Query Problem in Laravel with Eager Loading',
    date: 'March 2026',
    readTime: '4 min read',
    summary:
      'A practical guide for junior developers on using with() and load() in Eloquent ORM to reduce database queries from 100+ roundtrips to just 2 efficient queries.',
    tags: ['Laravel', 'MySQL', 'Performance', 'Eloquent'],
    highlights: [
      'Understanding why lazy loading inside @foreach loops causes server lag',
      'Implementing eager loading using Model::with(["relation"])',
      'Monitoring query counts with Laravel Debugbar or DB::listen',
    ],
  },
  {
    id: 'blog-2',
    title: 'Designing Consistent RESTful API Responses in Laravel Using API Resources',
    date: 'February 2026',
    readTime: '5 min read',
    summary:
      'Transforming Eloquent models into clean JSON schemas while concealing sensitive columns like passwords, tokens, and internal database primary keys.',
    tags: ['REST API', 'JSON', 'Laravel Sanctum', 'Postman'],
    highlights: [
      'Using php artisan make:resource to structure response envelopes',
      'Handling pagination metadata cleanly for frontend consumers',
      'Standardizing HTTP 200, 201, 400, 404, and 422 error structures',
    ],
  },
  {
    id: 'blog-3',
    title: 'Demystifying Subnetting and IP Addressing for Web Developers',
    date: 'January 2026',
    readTime: '6 min read',
    summary:
      'Why understanding CIDR notation, subnet masks, and network boundaries makes you a more capable full-stack engineer and cloud-ready developer.',
    tags: ['Networking', 'IT Support', 'Infrastructure', 'Cisco'],
    highlights: [
      'Calculating usable host IP ranges using binary AND operations',
      'The difference between private RFC 1918 ranges and public routing',
      'Diagnosing DNS and gateway issues with ping, traceroute, and nslookup',
    ],
  },
];
