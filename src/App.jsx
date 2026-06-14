import { motion } from 'framer-motion';
import {
  Award,
  Briefcase,
  Code2,
  Globe,
  Mail,
  Sparkles,
  Star,
} from 'lucide-react';
import profileImage from './assets/profile.jpg';

const skills = [
  'React', 'JavaScript', 'UI Design', 'Animation', 'TypeScript', 'Node.js', 'CSS', 'Figma'
];

const experiences = [
  {
    role: 'Frontend Developer',
    company: 'Creative Studio',
    period: '2022 — Present',
    summary: 'Crafted elegant user experiences, polished interfaces, and high-converting landing pages for brands and startups.',
  },
  {
    role: 'UI Engineer',
    company: 'Digital Agency',
    period: '2019 — 2022',
    summary: 'Built responsive design systems, component libraries, and interactive visuals that improved user engagement.',
  },
  {
    role: 'Web Designer',
    company: 'Freelance',
    period: '2016 — 2019',
    summary: 'Delivered modern websites with thoughtful storytelling, motion, and a refined visual identity.',
  },
];

const achievements = [
  { value: '12+', label: 'Years of creative work' },
  { value: '50+', label: 'Projects shipped' },
  { value: '95%', label: 'Client satisfaction' },
  { value: '4x', label: 'Faster launch cycles' },
];

export default function App() {
  return (
    <div className="page-shell">
      <header className="topbar container">
        <a className="brand" href="#home">Aster Portfolio</a>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="home" className="container hero-grid">
        <motion.section
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <p className="eyebrow">Modern portfolio • Elegant UI • React</p>
          <h1>Designing thoughtful digital experiences with a refined, modern aesthetic.</h1>
          <p className="lede">
            This portfolio app captures the same elevated, minimalist feel as the reference site while showcasing your work, skills, and achievements in a visually polished way.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href="#contact">Let’s connect</a>
            <a className="btn btn-secondary" href="#experience">View experience</a>
          </div>
          <ul className="mini-highlights">
            <li><Sparkles size={16} /> Creative direction</li>
            <li><Code2 size={16} /> Frontend excellence</li>
            <li><Award size={16} /> Measurable impact</li>
          </ul>
        </motion.section>

        <motion.aside
          className="profile-card"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <img src={profileImage} alt="Profile" className="profile-photo" />
          <div className="profile-meta">
            <p className="eyebrow">Featured profile</p>
            <h2>Professional portfolio</h2>
            <p>Built with React, motion, and a soft glassmorphism interface inspired by modern creative websites.</p>
          </div>
        </motion.aside>
      </main>

      <section id="about" className="container cards-grid">
        <article className="panel large-panel">
          <p className="eyebrow">About</p>
          <h3>Elegant, fast, and human-centered</h3>
          <p>
            The interface blends bold typography, subtle gradients, and carefully spaced sections to create a polished digital story. It is built to feel premium, easy to navigate, and ready for Netlify deployment.
          </p>
        </article>
        <article className="panel stat-card">
          <Briefcase size={18} />
          <h4>Experience</h4>
          <p>Designing and building high-impact digital products, interfaces, and launch-ready experiences.</p>
        </article>
        <article className="panel stat-card">
          <Globe size={18} />
          <h4>Reach</h4>
          <p>From product teams to creative brands, the portfolio is structured for clarity and storytelling.</p>
        </article>
      </section>

      <section id="experience" className="container section-block">
        <div className="section-heading">
          <p className="eyebrow">Work experience</p>
          <h3>Career highlights</h3>
        </div>
        <div className="timeline-grid">
          {experiences.map((item, index) => (
            <motion.article
              key={item.role}
              className="panel timeline-card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <p className="timeline-period">{item.period}</p>
              <h4>{item.role}</h4>
              <p className="muted">{item.company}</p>
              <p>{item.summary}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="skills" className="container section-block">
        <div className="section-heading">
          <p className="eyebrow">Skills</p>
          <h3>Core strengths</h3>
        </div>
        <div className="chips-grid">
          {skills.map((skill) => (
            <span key={skill} className="chip">{skill}</span>
          ))}
        </div>
      </section>

      <section className="container section-block">
        <div className="section-heading">
          <p className="eyebrow">Achievements</p>
          <h3>Impact in numbers</h3>
        </div>
        <div className="achievement-grid">
          {achievements.map((item) => (
            <article key={item.label} className="panel achievement-card">
              <Star size={18} />
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="container section-block contact-panel">
        <div>
          <p className="eyebrow">Contact</p>
          <h3>Let’s build something remarkable together.</h3>
          <p className="lede">If you want this portfolio customized with your real resume details, replace the content in this app and deploy to Netlify.</p>
        </div>
        <a className="btn btn-primary" href="mailto:hello@example.com"><Mail size={16} /> hello@example.com</a>
      </section>
    </div>
  );
}
