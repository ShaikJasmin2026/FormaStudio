import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import "./css/Work.css";

const categories = [
  "All",
  "Websites",
  "E-commerce",
  "Branding",
  "Digital Experiences",
];

const projects = [
  {
    id: 1,
    name: "Lumora",
    category: "Websites",
    type: "Branding & Website",
    title: "A fresh digital identity for modern living.",
    description:
      "A complete brand refresh and digital experience designed to connect with a modern lifestyle audience.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=85",
    color: "#d9b765",
    featured: true,
  },
  {
    id: 2,
    name: "Vita Living",
    category: "Websites",
    type: "Website Design",
    title: "Creating digital experiences that feel like home.",
    description:
      "A refined digital platform with thoughtful layouts and engaging visual storytelling.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
    color: "#91a894",
  },
  {
    id: 3,
    name: "Greenline",
    category: "Branding",
    type: "Brand Identity",
    title: "A digital identity inspired by a greener future.",
    description:
      "A distinctive visual identity communicating sustainability and building customer trust.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85",
    color: "#a8b99e",
  },
  {
    id: 4,
    name: "Wanderwell",
    category: "Digital Experiences",
    type: "Digital Experience",
    title: "Turning travel inspiration into digital journeys.",
    description:
      "An immersive digital experience designed to make destination discovery simple and engaging.",
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=85",
    color: "#d9a28f",
  },
  {
    id: 5,
    name: "United Carpets",
    category: "E-commerce",
    type: "E-commerce Development",
    title: "Making online shopping simpler and smarter.",
    description:
      "A modern shopping experience designed around intuitive navigation and product discovery.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85",
    color: "#d9b765",
  },
];

function ProjectCard({ project, index }) {
  return (
    <motion.article
      layout
      className="work-page-card"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -7 }}
    >
      <div
        className="work-page-card-image"
        style={{ backgroundColor: project.color }}
      >
        <img
          src={project.image}
          alt={project.name}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />

        <span className="work-page-image-number">
          {String(project.id).padStart(2, "0")}
        </span>

        <a
          href="#work-contact"
          className="work-page-image-arrow"
          aria-label={`Enquire about ${project.name}`}
        >
          <ArrowUpRight size={23} />
        </a>
      </div>

      <div className="work-page-card-info">
        <div className="work-page-card-meta">
          <span>{project.category}</span>
          <span>{project.type}</span>
        </div>

        <h3>{project.name}</h3>

        <p>{project.title}</p>

        <div className="work-page-card-footer">
          <span>{project.description}</span>
          <ArrowRight size={21} />
        </div>
      </div>
    </motion.article>
  );
}

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <main className="work-page">

      {/* HERO SECTION */}

      <section className="work-page-hero">
        <div className="work-page-hero-content">
          <span className="work-page-eyebrow">
            Our portfolio / Selected projects
          </span>

          <motion.h1
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Work that
            <br />
            makes an <span>impact.</span>
          </motion.h1>

          <div className="work-page-hero-bottom">
            <p>
              A collection of ideas brought to life through
              thoughtful strategy, creative design, and
              purposeful technology.
            </p>

            <a href="#selected-work" className="work-page-explore">
              Explore our work
              <ArrowRight size={20} />
            </a>
          </div>
        </div>

        <div className="work-page-decoration" aria-hidden="true">
          <span className="work-decoration-circle" />
          <span className="work-decoration-square" />
          <span className="work-decoration-triangle" />
        </div>
      </section>

      {/* INTRODUCTION */}

      <section className="work-page-intro">
        <div className="work-intro-image">
          <img
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=85"
            alt="Creative digital agency workspace"
          />
        </div>

        <div className="work-intro-content">
          <span className="work-page-label">
            A little creativity. A lot of purpose.
          </span>

          <h2>
            Different challenges.
            <br />
            <span>Meaningful solutions.</span>
          </h2>

          <p>
            Every project begins with an idea and a challenge.
            We bring the right people, creative thinking, and
            technology together to turn those ideas into
            meaningful digital experiences.
          </p>
        </div>
      </section>

      {/* PROJECTS */}

      <section className="work-page-projects" id="selected-work">
        <div className="work-page-section-heading">
          <div>
            <span className="work-page-label">Our portfolio</span>
            <h2>Selected work.</h2>
          </div>

          <span className="work-page-project-count">
            {filteredProjects.length} Projects
          </span>
        </div>

        {/* CATEGORY FILTERS */}

        <div className="work-page-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={
                activeCategory === category ? "active" : ""
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* PROJECT GRID */}

        <motion.div layout className="work-page-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* PROCESS SECTION */}

      <section className="work-page-process">
        <div className="work-process-heading">
          <span className="work-page-label">Behind every project</span>
          <h2>
            Good work starts
            <br />
            with <span>good thinking.</span>
          </h2>
        </div>

        <div className="work-process-grid">
          {[
            {
              number: "01",
              title: "Discover",
              text: "We understand your business, audience, goals, and challenges.",
            },
            {
              number: "02",
              title: "Strategise",
              text: "We develop a clear direction and plan for the right experience.",
            },
            {
              number: "03",
              title: "Create",
              text: "We bring the idea to life through design and development.",
            },
            {
              number: "04",
              title: "Deliver",
              text: "We launch, measure, refine, and continue improving.",
            },
          ].map((item) => (
            <div className="work-process-item" key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT CTA */}

      <section className="work-page-contact" id="work-contact">
        <span className="work-page-label">Have something in mind?</span>

        <h2>
          Your project could
          <br />
          be our next <span>story.</span>
        </h2>

        <p>
          Have an idea, a challenge, or something exciting
          you want to build? Let's talk.
        </p>

        <a
          href="mailto:hello@yourstudio.com"
          className="work-page-contact-button"
        >
          Start a conversation
          <ArrowUpRight size={20} />
        </a>
      </section>

    </main>
  );
}