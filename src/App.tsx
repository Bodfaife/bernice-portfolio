
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
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
      ["Services", "#services"],
      ["Selected Work", "#work"],
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
    <a className="text-link" href="#about">
    Get to know me <ArrowDown size={15} />
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
    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1100&q=85"
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
    Hi, I'm Bernice — an email marketer and paid ads specialist who
    loves figuring out what makes people pay attention, click and
    take action.
    </p>
    <p>
    I help growing businesses communicate better with their
    audiences through emails and ads that feel clear, useful and
    worth engaging with.
    </p>
    <p>
    I'm big on understanding the audience first, then creating
    marketing that makes sense for both the business and its
    customers.
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
