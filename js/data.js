// DATA
const projectsData = [
  {
    id: 1,
    cat: "business",
    img: "images/projects/firminiq.png",
    title: "Firminiq",
    desc: "Corporate & business consulting platform. Website design, development, SEO, speed optimization and ongoing maintenance.",
    stack: ["HTML", "CSS", "JavaScript", "SEO", "Speed Optimization"],
    color: "linear-gradient(135deg,#eaf4ff,#dbeafe)",
    catLabel: "Business",
    live: "https://firminiq.com/",
    github: ""
  },
  {
    id: 2,
    cat: "business",
    img: "images/projects/firminiq.png",
    title: "Quantic",
    desc: "AI-powered SEO and digital marketing platform with website development, SEO and content integration.",
    stack: ["Website Design", "SEO", "Content Integration"],
    color: "linear-gradient(135deg,#1e1b4b,#312e81)",
    catLabel: "Digital Marketing",
    live: "https://getquantic.com/",
    github: ""
  },
  {
    id: 3,
    cat: "blog",
    img: "images/projects/firminiq.png",
    title: "TechKopra",
    desc: "Tech blog and news platform with website design, development, SEO and content management.",
    stack: ["HTML", "CSS", "CMS", "SEO"],
    color: "linear-gradient(135deg,#0f172a,#1e3a8a)",
    catLabel: "Blog",
    live: "https://techkopra.com/",
    github: ""
  },
  {
    id: 4,
    cat: "portfolio",
    img: "images/projects/firminiq.png",
    title: "Litpix Studio",
    desc: "Photography and creative studio website with portfolio integration, website design, development and SEO.",
    stack: ["Portfolio UI", "Website Design", "SEO"],
    color: "linear-gradient(135deg,#fff1f2,#fce7f3)",
    catLabel: "Portfolio",
    live: "https://litpixstudio.in/",
    github: ""
  },
  {
    id: 5,
    cat: "ecommerce",
    img: "images/projects/firminiq.png",
    title: "HCI Comfort Zone",
    desc: "Ergonomic chairs and office comfort e-commerce store with product integration and SEO.",
    stack: ["E-Commerce", "Product Integration", "SEO"],
    color: "linear-gradient(135deg,#ecfdf5,#d1fae5)",
    catLabel: "E-Commerce",
    live: "https://chair.hcicomfortzone.com/",
    github: ""
  },
  {
    id: 6,
    cat: "ecommerce",
    img: "images/projects/firminiq.png",
    title: "Human Care Store",
    desc: "Healthcare products e-commerce store with product integration, payment gateway setup and SEO.",
    stack: ["E-Commerce", "Payment Gateway", "SEO"],
    color: "linear-gradient(135deg,#eff6ff,#dbeafe)",
    catLabel: "E-Commerce",
    live: "https://buy.humancarei.com/",
    github: ""
  },
  {
    id: 7,
    cat: "ecommerce",
    img: "images/projects/firminiq.png",
    title: "Human Care Deals",
    desc: "Deals and offers platform for healthcare products with deal management system and SEO.",
    stack: ["Deals System", "Website Development", "SEO"],
    color: "linear-gradient(135deg,#f5f3ff,#ede9fe)",
    catLabel: "Deals Platform",
    live: "https://deals.humancarei.com/",
    github: ""
  },
  {
    id: 8,
    cat: "business",
    img: "images/projects/firminiq.png",
    title: "Rotai",
    desc: "Healthy and authentic roti / food brand website with menu management and SEO.",
    stack: ["Website Design", "Menu Management", "SEO"],
    color: "linear-gradient(135deg,#052e16,#14532d)",
    catLabel: "Food Brand",
    live: "https://rotai.in/",
    github: "https://github.com/JP0209y/Rotai-Web"
  },
  {
    id: 9,
    cat: "ecommerce",
    img: "images/projects/firminiq.png",
    title: "Fujiiryoki",
    desc: "Premium massage chairs and wellness solutions e-commerce website with product integration and SEO.",
    stack: ["E-Commerce", "Product Integration", "SEO"],
    color: "linear-gradient(135deg,#f8fafc,#e2e8f0)",
    catLabel: "Wellness",
    live: "https://fujiiryoki.co.in/",
    github: ""
  },
  {
    id: 10,
    cat: "business",
    img: "images/projects/firminiq.png",
    title: "Human Care International",
    desc: "Main corporate website for Human Care Group with branding, content management and SEO.",
    stack: ["Corporate Website", "Branding", "SEO"],
    color: "linear-gradient(135deg,#ecfeff,#cffafe)",
    catLabel: "Corporate",
    live: "https://humancarei.com/",
    github: ""
  },
  {
    id: 11,
    cat: "landing",
    img: "images/projects/firminiq.png",
    title: "Human Care Franchise",
    desc: "Franchise opportunity platform with lead generation system, website development and SEO.",
    stack: ["Landing Page", "Lead Generation", "SEO"],
    color: "linear-gradient(135deg,#e0f2fe,#bae6fd)",
    catLabel: "Landing Page",
    live: "https://franchise.humancarei.com/",
    github: "https://github.com/JP0209y/hci-franchise-html"
  }
];

const skillsData = [
  { name: "HTML5", icon: "language", pct: 98 },
  { name: "CSS3", icon: "palette", pct: 96 },
  { name: "Bootstrap", icon: "view_quilt", pct: 95 },
  { name: "JavaScript", icon: "bolt", pct: 88 },
  { name: "Tailwind CSS", icon: "speed", pct: 82 },
  { name: "React.js", icon: "developer_mode", pct: 70 },
  { name: "Next.js", icon: "change_history", pct: 65 },
  { name: "Vite", icon: "settings", pct: 70 },
  { name: "React Native", icon: "smartphone", pct: 60 },
  { name: "WordPress", icon: "edit_note", pct: 85 },
  { name: "UI/UX Design", icon: "brush", pct: 88 },
  { name: "Figma", icon: "ads_click", pct: 82 },
  { name: "Responsive Design", icon: "design_services", pct: 96 },
  { name: "SEO Friendly UI", icon: "rocket_launch", pct: 90 },
  { name: "Image Optimization", icon: "image", pct: 92 },
  { name: "GitHub", icon: "construction", pct: 82 }
];