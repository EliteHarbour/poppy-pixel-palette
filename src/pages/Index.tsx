import { useState, useEffect, useRef } from "react";
import { 
  Heart, Mail, Phone, MapPin, Linkedin, ExternalLink, ChevronRight,
  MessageSquare, Code, Headphones
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import SkillTag from "@/components/SkillTag";
import ExperienceCard from "@/components/ExperienceCard";
import FloatingShapes from "@/components/FloatingShapes";
import AnimatedText from "@/components/AnimatedText";
import ScrollToTop from "@/components/ScrollToTop";
import ToolCard from "@/components/ToolCard";

const heroPhoto = "/lovable-uploads/2ad85604-131e-48ce-9d08-2ee4455921fa.png";

const projects = [
  {
    id: 1,
    title: "Clipsy (Assistive Tech Platform)",
    description: "Clipsy is an AI-powered accessibility platform I helped design and build, making tech more friendly for people with disabilities and seniors. We listened to users at every step to create something that truly helps.",
    image: "/lovable-uploads/7563ced7-1326-47c6-86ed-2882a3913fa1.png",
    link: "https://clipsy-ai.netlify.app/",
    category: "design",
    color: "bg-pastel-blue"
  },
  {
    id: 2,
    title: "SpeakUp – Metro Marketing Project",
    description: "Conducted on-ground commuter profiling in Chennai Metro to identify digital behaviors and needs. Designed a marketing campaign for a ₹399 public speaking course tailored to aspirational commuters, achieving ~650 conversions with 28% ROI using WhatsApp-based delivery.",
    image: "/lovable-uploads/27ce9766-bc2e-4011-9d7c-eb7d4fec7c7e.png",
    link: "https://www.canva.com/design/DAGmUjZhbug/FnbP93bV4QezWtbkWVLyLA/edit?utm_content=DAGmUjZhbug&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    category: "marketing",
    color: "bg-pastel-green"
  },
  {
    id: 3,
    title: "Meta Bias Analysis – Capstone Project",
    description: "Analyzed bias in Meta's platforms and proposed strategies like algorithm audits, ethical pricing, and inclusive design. Applied lessons from real-world business failures to tech ethics.",
    image: "/lovable-uploads/579db186-93b4-41d4-bb83-8d95b4376a58.png",
    link: "https://www.canva.com/design/DAGZ07IGvCg/Sl16a_4OiDhvQoV1NOWrpQ/edit?utm_content=DAGZ07IGvCg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    category: "business",
    color: "bg-pastel-purple"
  },
  {
    id: 4,
    title: "Eliteharbur (Shopify E-commerce Website)",
    description: "I built and launched a cheerful, easy-to-use Shopify website for Eliteharbur, helping their brand deliver a simple and delightful shopping experience.",
    image: "/lovable-uploads/2a39adcf-4595-4697-83e3-31bdeba09dc9.png",
    link: "https://1bjvju-n0.myshopify.com",
    category: "development",
    color: "bg-pastel-pink"
  },
  {
    id: 5,
    title: "Capstone Project – Elder Care Startup",
    description: "I created a business plan for an elder care startup—combining design thinking, user feedback, and financial planning to move from idea to real impact.",
    image: "/lovable-uploads/66cd5996-1505-4ab1-a76a-957635cc0dfa.png",
    link: "https://www.canva.com/design/DAGcWV_xY-0/auL4BI6ZLSKRorTlikyzoA/edit?utm_content=DAGcWV_xY-0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    category: "business",
    color: "bg-pastel-purple"
  },
  {
    id: 6,
    title: "Brand Genesis – BotanIQ",
    description: "For BotanIQ, I developed a fresh, organic brand identity and designed their Shopify website—helping them share their wellness mission in every pixel.",
    image: "/lovable-uploads/b6d48e18-014c-440d-a2f6-f2034b689cf7.png",
    link: "https://www.canva.com/design/DAGfJjAB924/a9ahSQYHvKcJM6mZi8rs5A/edit?utm_content=DAGfJjAB924&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    category: "branding",
    color: "bg-pastel-green"
  },
  {
    id: 7,
    title: "Business Analysis & Process Management (Coursera)",
    description: "On Coursera, I learned to map processes, optimize workflows, and make sharper decisions—all rooted in real data.",
    image: "/lovable-uploads/54a5335b-0e37-4755-bad8-7b3190c26528.png",
    link: "https://coursera.org/share/2ed4ccb6db4602de024b5beb556dff77",
    category: "business",
    color: "bg-pastel-yellow"
  },
  {
    id: 8,
    title: "Responsive Web Interface (Multi-Specialty Hospital)",
    description: "I designed a modern, user-centric landing page for a multi-specialty hospital to make information easy and accessible.",
    image: "/lovable-uploads/2717389b-a8fc-4483-aab7-2dd20f17e15a.png",
    link: "https://www.figma.com/design/xQfo4JD2pAdJ72yQNulIbw/MediVerse?node-id=0-1&t=6jz1CjFqbBPkMuyD-1",
    category: "design",
    color: "bg-pastel-peach"
  },
  {
    id: 9,
    title: "Plug It (EV Charging Startup)",
    description: "My team and I won the SDG Hackathon with Plug It, a sustainable solution for EV charging that's all about greener cities.",
    image: "/lovable-uploads/867f07c3-2caa-41ee-aef0-7cd319b5ab4d.png",
    link: "https://www.canva.com/design/DAGRtb_1joA/muGtqJ2DYkv7h1ZGlZjXmA/edit?utm_content=DAGRtb_1joA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    category: "business",
    color: "bg-pastel-blue"
  },
  {
    id: 10,
    title: "Interplanetary Travel App Prototype (Figma)",
    description: "Just for fun: I created a Figma prototype for a cosmic travel app like Uber—imagining what space journeys could look like if booking was easy and playful.",
    image: "/lovable-uploads/dfc28735-190a-425b-8e34-bde4ee4fbf97.png",
    link: "https://www.figma.com/design/QbdK2rp95arptXRLtENCCP/Uber--multiverse-of-cabness---SPACESHIP?node-id=0-1&t=jr9JcCKEhEQmWUL3-1",
    category: "design",
    color: "bg-pastel-green"
  },
  {
    id: 11,
    title: "Vivah Brand Analysis",
    description: "I audited Vivah's social presence and delivered creative strategies to help their engagement skyrocket.",
    image: "/lovable-uploads/315fb446-1f42-48c3-8761-ad3b92690fec.png",
    link: "https://www.canva.com/design/DAGeiIlsq3c/zYDg7k6ykXSEaJiSVxH-Gw/edit?utm_content=DAGeiIlsq3c&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    category: "marketing",
    color: "bg-pastel-pink"
  },
  {
    id: 12,
    title: "Email Marketing Lead Magnet Page (Kit.com)",
    description: "From idea to launch: I designed a high-converting email lead magnet page on Kit.com, complete with automation sequences for growth.",
    image: "/lovable-uploads/1af44227-f669-4179-b3c3-2645c31e9972.png",
    link: "https://acessup.kit.com/367660ff99",
    category: "marketing",
    color: "bg-pastel-purple"
  },
  {
    id: 13,
    title: "Google Ads Campaign for Dinora (B2B Jeans Brand)",
    description: "I drove real business results with targeted Google Ads for Dinora—optimizing creative, keywords, bidding, and reporting to maximize quality B2B leads.",
    image: "/lovable-uploads/11391f00-db89-4744-a2a5-0b4de5744119.png",
    link: "https://gamma.app/docs/Google-Search-Campaign-for-Denora-Shop-dwct1zzka2rqcdb",
    category: "marketing",
    color: "bg-pastel-yellow"
  }
];

const skills = [
  { category: "Digital Marketing", skills: ["Meta Ads", "Google Ads", "SEO", "Social Media Strategy", "Content Creation", "Analytics", "Email Marketing", "WhatsApp Marketing"] },
  { category: "Branding", skills: ["Brand Strategy", "Visual Identity", "Storytelling", "Logo Design", "Typography"] },
  { category: "Business Development", skills: ["Market Research", "Business Model Innovation", "Investor Pitching", "Strategic Planning", "Go-to-Market Strategies"] },
  { category: "Project Management", skills: ["Agile Project Planning", "Process Mapping", "Cross-functional Collaboration", "Team Leadership", "Event Management"] },
  { category: "UI/UX Design", skills: ["Figma", "Canva", "Responsive Web Design", "User-Centric Prototyping", "Empathy Mapping", "Wireframing"] },
  { category: "Content Creation", skills: ["Creative Writing", "Public Speaking", "Multimedia Production", "Persuasive Storytelling"] },
  { category: "Data Analysis", skills: ["Excel", "Financial Statement Analysis", "Break-even Calculations", "Market Research", "Analytics"] },
  { category: "Technical Tools", skills: ["Microsoft Office", "Trello", "Jira", "Shopify", "WordPress", "SEMrush", "Mixpanel", "Zapier", "n8n", "kit.com", "aisensy", "Google Analytics", "Workflow Automation"] },
];

const experiences = [
  {
    title: "Co-Founder",
    company: "Clipsy",
    duration: "Jan 2025 – Present",
    description: [
      "Spearheaded the conceptualization and design of an AI-powered assistive technology platform for people with disabilities and older adults.",
      "Conducted 100+ user interviews to inform accessible and intuitive feature development.",
      "Developed business strategy, investor pitches, and digital marketing campaigns to build early brand presence and community engagement."
    ],
    color: "blue"
  },
  {
    title: "Business Student",
    company: "Institute of Venture Building (IVB)",
    duration: "Oct 2024 – Present",
    description: [
      "Led a winning team at the SDG Hackathon, developing a sustainable EV charging solution.",
      "Conducted market research, strategic analysis, and collaborated with industry mentors to refine business models."
    ],
    color: "green"
  },
  {
    title: "Apprentice",
    company: "Pathways to Google",
    duration: "May 2023 – Aug 2023",
    description: [
      "Completed hands-on training in product management and user experience design.",
      "Worked on cross-functional projects, enhancing technical and leadership skills."
    ],
    color: "yellow"
  },
  {
    title: "Freelance Content Creator",
    company: "Self-employed",
    duration: "Mar 2022 – Present",
    description: [
      "Designed and executed digital content strategies for startups and brands.",
      "Produced multimedia content, managed content calendars, and optimized campaigns using analytics."
    ],
    color: "purple"
  },
  {
    title: "Event Management Lead",
    company: "Astitva, IIT Dhanbad",
    duration: "Mar 2022 – Jan 2024",
    description: [
      "Organized and managed over 10 events promoting gender inclusivity and digital accessibility.",
      "Designed digital campaigns and engaged 250+ participants per event."
    ],
    color: "pink"
  }
];

const education = [
  {
    institution: "IIT (ISM) Dhanbad",
    degree: "Bachelor of Technology in Computer Science and Engineering (2021–2024) (dropped out)",
    description: "Pursued a comprehensive curriculum in computer science and engineering, focusing on software development, data structures, and algorithms."
  }
];

const categories = [
  { id: "all", name: "All Projects" },
  { id: "design", name: "Design" },
  { id: "development", name: "Development" },
  { id: "business", name: "Business" },
  { id: "marketing", name: "Marketing" },
  { id: "branding", name: "Branding" },
];

const tools = [
  { name: "Canva", icon: "canva" },
  { name: "Figma", icon: "figma" },
  { name: "Meta Ads Manager", icon: "meta-ads-manager" },
  { name: "Google Analytics", icon: "google-analytics" },
  { name: "Jira", icon: "jira" },
  { name: "Trello", icon: "trello" },
  { name: "Excel", icon: "excel" },
  { name: "VS Code", icon: "code" },
  { name: "Shopify", icon: "shopify" },
  { name: "WordPress", icon: "wordpress" },
  { name: "Kit.com", icon: "kit" },
  { name: "Aisensy", icon: "message-square" },
  { name: "SEMrush", icon: "semrush" },
  { name: "Google Ads", icon: "google-ads-manager" },
  { name: "Bubble", icon: "bubble" },
  { name: "Zapier", icon: "zapier" },
  { name: "n8n", icon: "n8n" },
  { name: "Mixpanel", icon: "mixpanel" },
  { name: "ChatGPT", icon: "chatgpt" },
  { name: "Claude", icon: "claude" },
  { name: "Gemini", icon: "gemini" },
  { name: "Midjourney", icon: "midjourney" },
  { name: "ElevenLabs", icon: "headphones" }
];

const useOnScreen = (ref: React.RefObject<HTMLElement>) => {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref]);
  return isIntersecting;
};

const Index = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [isVisible, setIsVisible] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);

    const allImages = [
      heroPhoto,
      ...projects.map(proj => proj.image)
    ];
    let loadedImages = 0;
    allImages.forEach(src => {
      const img = new window.Image();
      img.onload = () => {
        loadedImages++;
        if (loadedImages === allImages.length) {
          setImagesLoaded(true);
        }
      };
      img.src = src;
    });
  }, []);

  const aboutRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const educationRef = useRef<HTMLElement>(null);
  const achievementsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const aboutVisible = useOnScreen(aboutRef);
  const skillsVisible = useOnScreen(skillsRef);
  const experienceVisible = useOnScreen(experienceRef);
  const projectsVisible = useOnScreen(projectsRef);
  const educationVisible = useOnScreen(educationRef);
  const achievementsVisible = useOnScreen(achievementsRef);
  const contactVisible = useOnScreen(contactRef);

  const filteredProjects = activeTab === "all"
    ? projects
    : projects.filter(project => project.category === activeTab);

  return (
    <div className="min-h-screen bg-white">
      <FloatingShapes />
      <ScrollToTop />
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-4 md:px-0">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className={`md:w-1/2 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <AnimatedText text="Adnan" speed={120} className="text-primary" /> 👋
            </h1>
            <div className="h-1 w-20 bg-black mb-6"></div>
            <h2 className="text-xl md:text-2xl mb-6 text-primary font-medium">
              Business student with a passion for innovation, digital marketing, branding, and creating brands that make a difference.
            </h2>
            <p className="text-gray-700 mb-8 max-w-md leading-relaxed">
              Thanks for dropping by! I'm always excited to take creative ideas and turn them into something real whether that's a brand, website, or full marketing campaign. Let’s create something meaningful together.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#contact" 
                className="sticker-button bg-primary text-white hover-scale"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="sticker-button bg-white hover-scale"
              >
                See My Work
              </a>
            </div>
          </div>
          <div className={`md:w-1/2 mt-10 md:mt-0 flex justify-center items-center transition-opacity duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="relative flex items-center justify-center">
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-pastel-yellow rounded-full z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-pastel-pink rounded-full z-0"></div>
              <div className="relative z-10 w-72 h-72 rounded-full overflow-hidden border-4 border-black sticker-card p-1 bg-white flex items-center justify-center shadow-lg">
                <img
                  src={heroPhoto}
                  alt="Adnan Ahamed Farooqui"
                  className="w-full h-full object-cover rounded-full object-top"
                  style={{ backgroundColor: "#ffdee2" }}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 bg-pastel-blue px-4 md:px-0" ref={aboutRef}>
        <div className={`container mx-auto transition-all duration-1000 ${aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="sticker-card bg-white p-8 max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              I'm passionate about blending creativity, business sense, and technology to solve real problems for real people. My superpowers? Leading data-driven marketing, building playful brands, and taking projects from "just an idea" to full launch always with a user-first mindset.
            </p>
            <p className="text-lg">
              Right now I'm studying Entrepreneurship at IVB and Computer Applications at SRM, but the biggest lessons often come from collaborating with amazing people and tackling new challenges head-on.
            </p>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section id="skills" ref={skillsRef} className="py-20 px-4 md:px-0">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="sticker-card p-6">
                <h3 className="text-xl font-bold mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <SkillTag 
                      key={skillIndex}
                      skill={skill}
                      color={["blue", "pink", "purple", "yellow", "green", "peach"][skillIndex % 6]}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Tools Section */}
      <section id="tools" className="py-20 bg-pastel-yellow px-4 md:px-0">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Tools I <span className="text-primary">Know</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <ToolCard 
                key={index}
                name={tool.name}
                icon={tool.icon}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section id="experience" className="py-20 bg-pastel-pink px-4 md:px-0" ref={experienceRef}>
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Work <span className="text-primary">Experience</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                title={experience.title}
                company={experience.company}
                duration={experience.duration}
                description={experience.description}
                color={experience.color}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 md:px-0" ref={projectsRef}>
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Dive into some of my favorite projects, each one a little experiment in impact, design, and reaching real people.
          </p>
          
          {/* Fixed category selector for mobile view */}
          <div className="relative mb-12">  
            <div className="flex pb-6 overflow-x-auto scrollbar-hide px-2 md:justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-full font-medium transition-all whitespace-nowrap flex-shrink-0 mx-1 ${
                    activeTab === category.id
                      ? "bg-primary text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                  onClick={() => setActiveTab(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.link}
                color={project.color}
                imageLoading="eager"
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Education Section */}
      <section id="education" className="py-20 bg-pastel-purple px-4 md:px-0" ref={educationRef}>
        <div className={`container mx-auto transition-all duration-1000 ${educationVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-primary">Education</span>
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="sticker-card p-6">
              <h3 className="text-xl font-bold">Institute of Venture Building (IVB), Chennai</h3>
              <p className="text-gray-600">Entrepreneurship and Business Development (2024–2027)</p>
            </div>
            
            <div className="sticker-card p-6">
              <h3 className="text-xl font-bold">SRM Institute of Science and Technology (SRM IST), Chennai</h3>
              <p className="text-gray-600">Bachelor of Computer Application (2024–2027)</p>
            </div>
            
            <div className="sticker-card p-6">
              <h3 className="text-xl font-bold">IIT (ISM) Dhanbad</h3>
              <p className="text-gray-600">Bachelor of Technology in Computer Science and Engineering (2021–2024)</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="sticker-card p-6">
                <h3 className="text-xl font-bold">Maharishi Dayanand Public School (CBSE)</h3>
                <p className="text-gray-600">12th Grade: 79.4% (2021)</p>
              </div>
              
              <div className="sticker-card p-6">
                <h3 className="text-xl font-bold">Central Academy Senior Secondary School (CBSE)</h3>
                <p className="text-gray-600">10th Grade: 90.4% (2019)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 md:px-0" ref={achievementsRef}>
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Awards & <span className="text-primary">Achievements</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="sticker-card p-6 hover-lift">
              <div className="flex items-center mb-4">
                <div className="bg-pastel-yellow p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">NTSE Scholar</h3>
              </div>
              <p className="text-gray-600">Top 2,000 in India, recognized for academic excellence and problem-solving.</p>
            </div>
            
            <div className="sticker-card p-6 hover-lift">
              <div className="flex items-center mb-4">
                <div className="bg-pastel-green p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">JEE Qualified</h3>
              </div>
              <p className="text-gray-600">Cleared both JEE Advanced (rank 109) and JEE Mains.</p>
            </div>
            
            <div className="sticker-card p-6 hover-lift">
              <div className="flex items-center mb-4">
                <div className="bg-pastel-blue p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0 3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Top 10% in NSEJS</h3>
              </div>
              <p className="text-gray-600">Demonstrated excellence in STEM.</p>
            </div>
            
            <div className="sticker-card p-6 hover-lift">
              <div className="flex items-center mb-4">
                <div className="bg-pastel-pink p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Google Pathways Participant</h3>
              </div>
              <p className="text-gray-600">Selected for mentorship and advanced technical training (2023).</p>
            </div>
            
            <div className="sticker-card p-6 hover-lift">
              <div className="flex items-center mb-4">
                <div className="bg-pastel-purple p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">SDG Hackathon Winner</h3>
              </div>
              <p className="text-gray-600">Led team to victory with sustainable business solution (2024).</p>
            </div>
            
            <div className="sticker-card p-6 hover-lift">
              <div className="flex items-center mb-4">
                <div className="bg-pastel-yellow p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Brand Craft Fusion Winner</h3>
              </div>
              <p className="text-gray-600">1st place for creative video production and digital storytelling.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-pastel-green px-4 md:px-0" ref={contactRef}>
        <div className={`container mx-auto transition-all duration-1000 ${contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Get In <span className="text-primary">Touch</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <a href="mailto:adnanahmedfarooqui@gmail.com" className="sticker-card p-6 flex flex-col items-center text-center hover-lift">
              <div className="bg-primary p-4 rounded-full text-white mb-4">
                <Mail size={20} />
              </div>
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-gray-600">adnanahmedfarooqui@gmail.com</p>
            </a>
            
            <a href="tel:+918690727572" className="sticker-card p-6 flex flex-col items-center text-center hover-lift">
              <div className="bg-primary p-4 rounded-full text-white mb-4">
                <Phone size={20} />
              </div>
              <h3 className="font-bold mb-2">Phone</h3>
              <p className="text-gray-600">+91-8690727572</p>
            </a>
            
            <a href="https://linkedin.com/in/adnan-ahamed-farooqui/" target="_blank" rel="noopener noreferrer" className="sticker-card p-6 flex flex-col items-center text-center hover-lift">
              <div className="bg-primary p-4 rounded-full text-white mb-4">
                <Linkedin size={20} />
              </div>
              <h3 className="font-bold mb-2">LinkedIn</h3>
              <p className="text-gray-600">adnan-ahamed-farooqui</p>
            </a>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">© {new Date().getFullYear()} Adnan Ahamed Farooqui. All rights reserved.</p>
          <div className="flex justify-center space-x-4">

            <a href="mailto:adnanahmedfarooqui@gmail.com" className="hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
            <a href="https://linkedin.com/in/adnan-ahamed-farooqui/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
