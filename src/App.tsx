
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Mail,
  Menu,
  X,
  BarChart3,
  MousePointerClick,
  Send,
  Target,
  TrendingUp,
  Users,
  Megaphone,
  FileDown,
  Award,
  BriefcaseBusiness,
} from "lucide-react";
import "./index.css";

const projects = [
  {
    number: "01",
    name: "DigitalBizGuru",
    type: "EMAIL MARKETING",
    description:
    "Newsletter campaigns designed to maintain audience engagement and promote offers and content.",
    details: ["20k+ emails sent", "5k+ contacts", "100% click/open rate*"],
    tool: "Groundhogg",
    image:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85",
  },
{
  number: "02",
  name: "SkillHaus Africa",
  type: "EMAIL COPYWRITING",
  description:
  "Audience-focused newsletter content created to communicate brand offers clearly and encourage engagement.",
  details: ["Newsletter writing", "Audience-focused messaging"],
  tool: "Email Campaigns",
  image:
  "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=85",
},
{
  number: "03",
  name: "Premium-X Labs",
  type: "MARKETING STRATEGY",
  description:
  "A six-month marketing strategy spanning awareness, engagement, conversion and promotion.",
  details: ["6-month strategy", "Customer journey planning"],
  tool: "Campaign Strategy",
  image:
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=85",
},
{
  number: "04",
  name: "Let's Talk Women Magazine",
  type: "EMAIL NEWSLETTER",
  description:
  "Welcoming introductory newsletter copy designed to introduce a publication and connect with its audience.",
  details: ["Brand introduction", "Newsletter copywriting"],
  tool: "Email Content",
  image:
  "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1000&q=85",
},
{
  number: "05",
  name: "Blackrock Furniture & Interior",
  type: "MARKETING STRATEGY",
  description:
  "A six-month marketing direction focused on brand positioning, customer engagement and promotional activities.",
  details: ["Brand positioning", "Customer growth planning"],
  tool: "Marketing Strategy",
  image:
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85",
},
{
  number: "06",
  name: "Social Tech Girl",
  type: "EMAIL COPYWRITING",
  description:
  "Newsletter content tailored to the brand's voice, message and target audience.",
  details: ["Brand voice", "Audience relevance"],
  tool: "Newsletter Writing",
  image:
  "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1000&q=85",
},
];

const services = [
  {
    icon: Send,
    number: "01",
    title: "Email Marketing",
    description:
    "Thoughtful email campaigns, newsletters and audience communication that keep your brand connected.",
  },
{
  icon: Megaphone,
  number: "02",
  title: "Paid Advertising",
  description:
  "Campaign planning and audience targeting designed around your business objectives.",
},
{
  icon: Target,
  number: "03",
  title: "Campaign Strategy",
  description:
  "A clear marketing direction connecting awareness, engagement and conversion.",
},
{
  icon: MousePointerClick,
  number: "04",
  title: "Copywriting & Analysis",
  description:
  "Clear, persuasive messaging and performance monitoring to inform better campaign decisions.",
},
];

const tools = [
  "Groundhogg",
"Brevo",
"WordPress",
"Canva",
"Google Workspace",
"Trello",
"Microsoft Office",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
    <header className="navbar">
    <a className="wordmark" href="#home" onClick={closeMenu}>
    BERNICE<span>.</span>
    </a>

    <button
    className="mobile-toggle"
    onClick={() => setMenuOpen(!menuOpen)}
    aria-label={menuOpen ? "Close navigation" : "Open navigation"}
    aria-expanded={menuOpen}
    >
    {menuOpen ? <X /> : <Menu />}
    </button>

    <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
    {[
        ["About", "#about"],
        ["Experience", "#experience"],
        ["Services", "#services"],
        ["Selected Work", "#work"],
        ["Certificates", "#certificates"],
        ["Contact", "#contact"],
    ].map(([label, href]) => (
      <a key={href} href={href} onClick={closeMenu}>
      {label}
      </a>
    ))}
    <a
    className="nav-cta"
    href="mailto:victorbernice84@gmail.com"
    onClick={closeMenu}
    >
    Let's Talk <ArrowUpRight size={16} />
    </a>
    </nav>
    </header>

    <main>
    <section className="hero section-pad" id="home">
    <div className="hero-copy">
    <motion.div
    className="eyebrow"
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    >
    <span className="status-dot" />
    EMAIL MARKETING & PAID ADS SPECIALIST
    </motion.div>

    <motion.h1
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.75, delay: 0.1 }}
    >
    Good marketing
    <br />
    starts with <em>people.</em>
    </motion.h1>

    <motion.p
    className="hero-description"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.7, delay: 0.3 }}
    >
    I help growing businesses connect with their audiences through
    thoughtful emails, strategic advertising and messaging that
    inspires action.
    </motion.p>

    <motion.div
    className="hero-actions"
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.4 }}
    >
    <a className="button button-dark" href="#work">
    Explore my work <ArrowRight size={17} />
    </a>

    <a
    className="text-link"
    href="/Bernice-Adamilo-Victor-CV.pdf"
    download="Bernice-Adamilo-Victor-CV.pdf"
    >
    Download CV <FileDown size={16} />
    </a>
    </motion.div>

    <div className="hero-bottom-note">
    <span>STRATEGY</span>
    <span>·</span>
    <span>CREATIVITY</span>
    <span>·</span>
    <span>CONNECTION</span>
    </div>
    </div>

    <motion.div
    className="hero-visual"
    initial={{ opacity: 0, scale: 0.97 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.9, delay: 0.2 }}
    >
    <img
    src="/certificates/Bernice.jpg"
    alt="Marketing professionals working together"
    />
    <div className="visual-label">
    <span className="visual-label-icon">
    <TrendingUp size={20} />
    </span>
    <div>
    <strong>Marketing with purpose.</strong>
    <span>Every message has a reason.</span>
    </div>
    </div>
    <div className="visual-index">01 / CREATIVE THINKING</div>
    </motion.div>

    <div className="hero-side-note">BUILT AROUND YOUR AUDIENCE</div>
    </section>

    <section className="metrics-strip" aria-label="Portfolio highlights">
    <div>
    <span className="metric-number">20k+</span>
    <span className="metric-label">Emails sent</span>
    </div>
    <div>
    <span className="metric-number">5k+</span>
    <span className="metric-label">Contacts reached</span>
    </div>
    <div>
    <span className="metric-number">6 mo.</span>
    <span className="metric-label">Strategy planning</span>
    </div>
    <div>
    <span className="metric-number">01</span>
    <span className="metric-label">Audience-first mindset</span>
    </div>
    </section>

    <section className="about section-pad" id="about">
    <div className="section-kicker">
    <span>01 — A LITTLE ABOUT ME</span>
    <span>THE PERSON BEHIND THE STRATEGY</span>
    </div>

    <div className="about-layout">
    <div className="about-heading">
    <h2>
    Connecting you
    <br />
    with your audience
    <br />
    <em>effectively.</em>
    </h2>
    <div className="about-symbol">B.</div>
    </div>

    <div className="about-copy">
    <p className="large-copy">
    Hi, I'm Bernice — a digital marketer specializing in email
    marketing and paid advertising, helping startups and small-to-
    medium-sized businesses grow through practical, customer-focused
    marketing.
    </p>

    <p>
    I believe effective marketing starts with understanding people:
    what they need, what catches their attention, what makes them
    trust a brand, and what motivates them to take action.
    </p>

    <p>
    My strongest area is email marketing, where I combine audience
    understanding with engaging copy to create emails that feel
    relevant rather than overly promotional.
    </p>

    <p>
    I've worked on live email campaigns, content planning and
    marketing strategies for businesses, while continuing to develop
    my expertise in paid advertising.
    </p>

    <p>
    Whether you need to make better use of an existing email list or
    reach new customers through paid advertising, my goal is simple:
    create marketing that makes sense for your business and the
    people you're trying to reach.
    </p>

    <a href="#services" className="underlined-link">
    Discover what I do <ArrowRight size={16} />
    </a>
    </div>
    </div>
    </section>

    <section className="services section-pad" id="services">
    <div className="section-kicker">
    <span>02 — WHAT I DO</span>
    <span>FROM THE FIRST CLICK TO THE NEXT STEP</span>
    </div>

    <div className="section-heading-row">
    <h2>
    Thoughtful work.
    <br />
    <em>Purposeful results.</em>
    </h2>
    <p>
    The right message, in the right place, with a clear purpose
    behind every campaign.
    </p>
    </div>

    <div className="services-grid">
    {services.map((service) => {
      const Icon = service.icon;

      return (
        <article className="service-card" key={service.number}>
        <div className="service-top">
        <span>{service.number}</span>
        <Icon size={23} strokeWidth={1.5} />
        </div>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <a href="#contact" aria-label={`Discuss ${service.title}`}>
        <ArrowUpRight size={19} />
        </a>
        </article>
      );
    })}
    </div>
    </section>

    <section className="packages section-pad" id="packages">
    <div className="section-kicker">
    <span>06 — SERVICES & PACKAGES</span>
    <span>SUPPORT BUILT AROUND YOUR GOALS</span>
    </div>

    <div className="section-heading-row">
    <h2>
    Find your
    <br />
    <em>starting point.</em>
    </h2>
    <p>
    From consistent email communication to structured paid
    campaigns, choose the kind of support your business needs.
    </p>
    </div>

    <div className="packages-grid">
    <article className="package-card">
    <span className="project-type">EMAIL MARKETING</span>
    <h3>Email Starter</h3>
    <p>
    For small businesses that want to communicate consistently
    with their audience.
    </p>
    <ul>
    <li>Newsletter writing</li>
    <li>Campaign planning</li>
    <li>Email scheduling</li>
    <li>Basic performance review</li>
    </ul>
    <a href="mailto:victorbernice84@gmail.com?subject=Email%20Starter%20Package">
    Get started <ArrowUpRight size={16} />
    </a>
    </article>

    <article className="package-card package-featured">
    <span className="project-type">EMAIL MARKETING</span>
    <h3>Email Growth</h3>
    <p>
    For businesses with an existing email list that want to
    get more value from it.
    </p>
    <ul>
    <li>Multiple newsletter campaigns</li>
    <li>Email strategy and copywriting</li>
    <li>A/B testing</li>
    <li>Campaign scheduling</li>
    <li>Performance analysis</li>
    <li>Optimization recommendations</li>
    </ul>
    <a href="mailto:victorbernice84@gmail.com?subject=Email%20Growth%20Package">
    Get started <ArrowUpRight size={16} />
    </a>
    </article>

    <article className="package-card">
    <span className="project-type">PAID ADVERTISING</span>
    <h3>Ads Starter</h3>
    <p>
    For businesses preparing to launch a structured paid
    advertising campaign.
    </p>
    <ul>
    <li>Campaign strategy</li>
    <li>Audience research</li>
    <li>Ad copy</li>
    <li>Campaign planning and setup</li>
    <li>Lead-generation strategy</li>
    <li>Basic performance analysis</li>
    </ul>
    <a href="mailto:victorbernice84@gmail.com?subject=Ads%20Starter%20Package">
    Get started <ArrowUpRight size={16} />
    </a>
    </article>

    <article className="package-card">
    <span className="project-type">PAID ADVERTISING</span>
    <h3>Ads Growth</h3>
    <p>
    For businesses looking to build a more structured paid
    advertising strategy.
    </p>
    <ul>
    <li>Campaign strategy and audience targeting</li>
    <li>Ad copywriting and campaign setup</li>
    <li>Retargeting strategy</li>
    <li>Lead generation</li>
    <li>Performance analysis</li>
    <li>Optimization recommendations</li>
    </ul>
    <a href="mailto:victorbernice84@gmail.com?subject=Ads%20Growth%20Package">
    Get started <ArrowUpRight size={16} />
    </a>
    </article>

    <article className="package-card package-custom">
    <span className="project-type">TAILORED SUPPORT</span>
    <h3>Custom Package</h3>
    <p>
    Not every business needs the same thing. Bernice can discuss
    a combination of email marketing, paid advertising and
    marketing strategy based on your specific goals.
    </p>
    <a href="mailto:victorbernice84@gmail.com?subject=Custom%20Marketing%20Package">
    Build my package <ArrowUpRight size={16} />
    </a>
    </article>
    </div>

    <p className="packages-note">
    Pricing can be discussed directly based on the scope and needs
    of each project.
    </p>
    </section>

    <section className="work section-pad" id="work">
    <div className="section-kicker">
    <span>03 — SELECTED WORK</span>
    <span>A LOOK AT MY PROJECTS</span>
    </div>

    <div className="section-heading-row">
    <h2>
    Work with
    <br />
    <em>intention.</em>
    </h2>
    <p>
    A selection of email marketing, copywriting and strategy projects
    from my portfolio.
    </p>
    </div>

    <div className="project-grid">
    {projects.map((project) => (
      <article className="project-card" key={project.number}>
      <div className="project-image">
      <img src={project.image} alt="" loading="lazy" />
      <span className="project-number">{project.number}</span>
      <span className="project-tool">{project.tool}</span>
      </div>
      <div className="project-content">
      <span className="project-type">{project.type}</span>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <ul className="project-details">
      {project.details.map((detail) => (
        <li key={detail}>
        <Check size={14} /> {detail}
        </li>
      ))}
      </ul>
      </div>
      </article>
    ))}
    </div>

    <p className="metric-disclaimer">
    *The 100% click/open rate figure is reproduced from the original
    portfolio and has not been independently verified.
    </p>
    </section>

    <section className="experience section-pad" id="experience">
    <div className="section-kicker">
    <span>04 — EXPERIENCE</span>
    <span>REAL PROJECTS. PRACTICAL EXPERIENCE.</span>
    </div>

    <div className="section-heading-row">
    <h2>
    Experience that
    <br />
    <em>shapes the strategy.</em>
    </h2>
    <p>
    Email marketing, content planning and marketing strategy
    developed around real business needs.
    </p>
    </div>

    <article className="experience-card">
    <div className="experience-card-heading">
    <div>
    <span className="project-type">EMAIL MARKETING INTERN</span>
    <h3>DigitalBizGuru</h3>
    <p>Six-month internship</p>
    </div>
    <BriefcaseBusiness size={26} />
    </div>

    <p>
    I support email marketing activities using Groundhogg on
    WordPress, working on campaigns from copywriting through
    scheduling and broadcast.
    </p>

    <ul className="experience-list">
    <li>Writing newsletter and campaign copy</li>
    <li>Planning email content and automated email flows</li>
    <li>Scheduling and broadcasting campaigns</li>
    <li>Monitoring campaign performance and audience engagement</li>
    <li>Reviewing campaign data to identify opportunities</li>
    </ul>

    <div className="experience-stats">
    <div>
    <strong>23,216+</strong>
    <span>Emails sent</span>
    </div>
    <div>
    <strong>432</strong>
    <span>New contacts</span>
    </div>
    <div>
    <strong>125</strong>
    <span>Engaged contacts</span>
    </div>
    <div>
    <strong>0</strong>
    <span>Unsubscribed contacts</span>
    </div>
    </div>

    <p className="metric-disclaimer">
    Figures reported for one campaign reporting period in Bernice's
    portfolio. They are not presented as lifetime totals.
    </p>

    <span className="experience-tools">
    Tools: Groundhogg · WordPress
    </span>
    </article>

    <div className="experience-projects">
    <article>
    <span className="project-type">CONTENT STRATEGY</span>
    <h3>DigitalBizGuru</h3>
    <p>
    A two-month content calendar with captions, carousel and
    reel scripts covering content strategy, copywriting and
    paid advertising.
    </p>
    </article>

    <article>
    <span className="project-type">CONTENT STRATEGY</span>
    <h3>AldoraWoman</h3>
    <p>
    A two-month content calendar for a fashion business,
    covering product promotion, brand awareness, customer
    engagement and consistent publishing.
    </p>
    </article>

    <article>
    <span className="project-type">MARKETING STRATEGY</span>
    <h3>Premium-X Labs</h3>
    <p>
    A six-month marketing strategy covering awareness,
    engagement, conversion, promotion and customer growth.
    </p>
    </article>

    <article>
    <span className="project-type">MARKETING STRATEGY</span>
    <h3>Blackrock Furniture</h3>
    <p>
    A marketing strategy focused on brand positioning,
    customer engagement and a clearer marketing direction.
    </p>
    </article>

    <article>
    <span className="project-type">EMAIL MARKETING</span>
    <h3>TaskManna</h3>
    <p>
    Welcome and product-introduction newsletters, monthly
    check-ins and B2B email content.
    </p>
    </article>

    <article>
    <span className="project-type">EMAIL COPYWRITING</span>
    <h3>SkillHaus Africa & Social Tech Girl</h3>
    <p>
    Welcome emails, cohort announcements, service introductions
    and account-recovery email copy.
    </p>
    </article>
    </div>
    </section>

    <section className="process section-pad" id="process">
    <div className="section-kicker">
    <span>05 — MY PROCESS</span>
    <span>FROM IDEA TO EXECUTION</span>
    </div>

    <div className="section-heading-row">
    <h2>
    A clear plan.
    <br />
    <em>Purposeful execution.</em>
    </h2>
    <p>
    Every campaign starts with understanding the business and
    ends with learning what can be improved.
    </p>
    </div>

    <div className="process-grid">
    {[
      {
        number: "01",
        title: "Discover",
        description:
        "I learn about your business, audience, offer, competitors and goals.",
      },
      {
        number: "02",
        title: "Strategize",
        description:
        "I identify the campaign direction, messaging and approach that fit your objectives.",
      },
      {
        number: "03",
        title: "Create",
        description:
        "I develop the email copy, ad copy and campaign assets needed to communicate clearly.",
      },
      {
        number: "04",
        title: "Launch",
        description:
        "I set up, schedule and launch the campaign according to the agreed strategy.",
      },
      {
        number: "05",
        title: "Analyse",
        description:
        "I review performance, identify opportunities and use insights to improve future campaigns.",
      },
    ].map((step) => (
      <article className="process-card" key={step.number}>
      <span>{step.number}</span>
      <h3>{step.title}</h3>
      <p>{step.description}</p>
      </article>
    ))}
    </div>
    </section>

    <section className="approach section-pad">
    <div className="section-kicker">
    <span>04 — WHY WORK WITH ME</span>
    <span>THE THINKING BEHIND THE WORK</span>
    </div>

    <div className="approach-layout">
    <h2>
    More than
    <br />
    a message.
    <br />
    <em>A connection.</em>
    </h2>

    <div className="approach-list">
    <article>
    <span>01</span>
    <div>
    <h3>I start with the customer.</h3>
    <p>
    I take time to understand who we're speaking to before
    creating the campaign.
    </p>
    </div>
    <Users size={23} />
    </article>
    <article>
    <span>02</span>
    <div>
    <h3>I care about the message.</h3>
    <p>
    Good marketing isn't just about being seen. It's about
    being understood.
    </p>
    </div>
    <Mail size={23} />
    </article>
    <article>
    <span>03</span>
    <div>
    <h3>I think beyond one campaign.</h3>
    <p>
    Every email or ad should contribute to a bigger business
    goal.
    </p>
    </div>
    <BarChart3 size={23} />
    </article>
    </div>
    </div>
    </section>

    <section className="certificates section-pad" id="certificates">
    <div className="section-kicker">
    <span>07 — CERTIFICATIONS</span>
    <span>LEARNING & PROFESSIONAL DEVELOPMENT</span>
    </div>

    <div className="section-heading-row">
    <h2>
    Learning that
    <br />
    <em>keeps me growing.</em>
    </h2>
    <p>
    Certifications that form part of my ongoing development
    in digital and social media marketing.
    </p>
    </div>

    <div className="certificates-grid">
    <article className="certificate-card">
    <img
    src="/certificates/bernice1.jpg"
    alt="Digital Marketing Certificate from BeTechified"
    loading="lazy"
    />
    <div className="certificate-info">
    <span className="project-type">2026</span>
    <h3>Digital Marketing Certificate</h3>
    <p>BeTechified</p>
    </div>
    </article>

    <article className="certificate-card">
    <img
    src="/certificates/bernice2.jpg"
    alt="Social Media Marketing Certificate from HP LIFE and HP Foundation"
    loading="lazy"
    />
    <div className="certificate-info">
    <span className="project-type">2026</span>
    <h3>Social Media Marketing Certificate</h3>
    <p>HP LIFE & HP Foundation</p>
    </div>
    </article>
    </div>
    </section>

    <section className="toolkit section-pad">
    <div>
    <span className="eyebrow">MY TOOLKIT</span>
    <h2>Tools that bring ideas to life.</h2>
    </div>
    <div className="tool-list">
    {tools.map((tool) => (
      <span key={tool}>{tool}</span>
    ))}
    </div>
    </section>

    <section className="brands section-pad">
    <span className="eyebrow">BRANDS & PROJECTS FEATURED</span>
    <div className="brand-list">
    <span>DigitalBizGuru</span>
    <span>SkillHaus Africa</span>
    <span>PREMIUM-X LABS</span>
    <span>Let's Talk Women</span>
    <span>BLACKROCK</span>
    <span>Social Tech Girl</span>
    </div>
    </section>

    <section className="contact section-pad" id="contact">
    <div className="contact-inner">
    <span className="eyebrow">HAVE A PROJECT IN MIND?</span>
    <h2>
    Ready to make your
    <br />
    marketing <em>work harder?</em>
    </h2>
    <p>
    Let's talk about your business, your goals and how I can help you
    connect with the right people.
    </p>
    <a
    className="button button-light"
    href="mailto:victorbernice84@gmail.com?subject=Let's%20Work%20Together"
    >
    Let's work together <ArrowUpRight size={18} />
    </a>
    <a
    className="contact-email"
    href="mailto:victorbernice84@gmail.com"
    >
    victorbernice84@gmail.com
    </a>
    </div>
    <span className="contact-decoration">B.</span>
    </section>
    </main>

    <footer className="footer">
    <a href="#home" className="wordmark">
    BERNICE<span>.</span>
    </a>
    <span>Email Marketing & Paid Ads Specialist</span>
    <a href="#home" className="back-top">
    Back to top ↑
    </a>
    <span className="copyright">
    © {new Date().getFullYear()} Bernice Adamilо Victor
    </span>
    </footer>
    </>
  );
}

export default App;
