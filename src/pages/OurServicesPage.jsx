import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./css/Services.css";
const MotionLink = motion(Link);
const services = [
  {
    number: "01",
    title: "UX and UI Design",
    description:
      "We create thoughtful digital experiences by understanding your audience, researching user behaviour, and designing intuitive interfaces that make every interaction meaningful.",
    tags: ["User Research", "Wireframing", "UI Design", "Prototyping"],
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "02",
    title: "Web Design",
    description:
      "We design beautiful, modern websites that communicate your brand identity, engage your audience, and turn visitors into customers.",
    tags: ["Website Design", "Responsive Design", "Visual Identity"],
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "03",
    title: "Web Development",
    description:
      "From simple websites to complex digital platforms, we build scalable, responsive, and high-performing web experiences using modern technologies.",
    tags: ["React", "Next.js", "JavaScript", "Frontend Development"],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "04",
    title: "E-commerce Development",
    description:
      "We create seamless online shopping experiences with intuitive product discovery, smooth checkout journeys, and scalable e-commerce solutions.",
    tags: ["E-commerce", "Shopping Experience", "Payment Integration"],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "05",
    title: "WordPress Development",
    description:
      "We develop flexible, customised WordPress websites that make content management easier while giving your business room to grow.",
    tags: ["WordPress", "Custom Themes", "CMS Development"],
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "06",
    title: "Integrations and APIs",
    description:
      "We connect your digital platforms with the tools and services you rely on, creating smooth data flows and reducing manual work.",
    tags: ["REST APIs", "Third-party APIs", "System Integration"],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "07",
    title: "Digital Strategy",
    description:
      "We help businesses define their digital direction, identify opportunities, and create a practical roadmap for long-term growth.",
    tags: ["Research", "Planning", "Digital Strategy"],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "08",
    title: "Website Maintenance",
    description:
      "We keep your website secure, updated, and performing at its best through proactive maintenance and ongoing technical support.",
    tags: ["Maintenance", "Security", "Performance"],
    image:
      "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "09",
    title: "Continuous Improvement",
    description:
      "We analyse website performance and user behaviour to identify improvements that increase engagement, usability, and conversions.",
    tags: ["Analytics", "Optimisation", "Performance"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 45 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

function ServiceCard({ service, index, reducedMotion }) {
  return (
    <motion.article
      className="service-page-card"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reducedMotion ? 0 : 0.7,
        delay: reducedMotion ? 0 : (index % 3) * 0.12,
      }}
      whileHover={reducedMotion ? {} : { y: -10 }}
    >
      <div className="service-card-image">
        <motion.img
          src={service.image}
          alt={service.title}
          loading="lazy"
          whileHover={reducedMotion ? {} : { scale: 1.09 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />

        <span className="service-image-number">
          {service.number}
        </span>
      </div>

      <div className="service-card-body">
        <div className="service-card-content">
          <h2>{service.title}</h2>

          <p>{service.description}</p>

          <div className="service-tags">
            {service.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <a
          href="#contact"
          className="service-card-arrow"
          aria-label={`Enquire about ${service.title}`}
        >
          <ArrowUpRight size={23} />
        </a>
      </div>
    </motion.article>
  );
}

export default function Services() {
  const reducedMotion = useReducedMotion();

  return (
    <main className="services-page">

      {/* HERO SECTION */}
      <section className="services-page-hero">
        <div className="services-hero-background">
          <motion.div
            className="services-hero-image"
            initial={{ scale: reducedMotion ? 1 : 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
          />

          <div className="services-hero-overlay" />
        </div>

        <div className="services-page-hero-inner">

          <motion.span
            className="services-page-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            What we do · How we help
          </motion.span>

          <motion.h1
            initial={{
              opacity: 0,
              y: reducedMotion ? 0 : 70,
              rotateX: reducedMotion ? 0 : -15,
            }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Our services<span>.</span>
          </motion.h1>

          <div className="services-hero-bottom">
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
            >
              We bring strategy, creativity, and technology
              together to create digital experiences that help
              businesses move forward.
            </motion.p>

            <motion.a
              href="#service-list"
              className="services-explore-link"
              whileHover={reducedMotion ? {} : { x: 8 }}
            >
              Explore our services
              <ArrowRight size={20} />
            </motion.a>
          </div>
        </div>

        <motion.div
          className="services-hero-floating"
          animate={
            reducedMotion
              ? {}
              : {
                  y: [0, -18, 0],
                  rotate: [0, 8, 0],
                }
          }
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Sparkles size={35} />
        </motion.div>

        <div className="services-hero-shapes" aria-hidden="true">
          <span className="services-shape shape-one" />
          <span className="services-shape shape-two" />
          <span className="services-shape shape-three" />
          <span className="services-shape shape-four" />
        </div>

        <motion.div
          className="services-hero-scroll"
          animate={reducedMotion ? {} : { y: [0, 9, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          SCROLL TO EXPLORE
          <span />
        </motion.div>
      </section>

      {/* INTRODUCTION */}
      <section className="services-introduction">

        <motion.div
          className="services-intro-image"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <img
            src="https://images.unsplash.com/photo-1523726491678-bf852e717f6a?auto=format&fit=crop&w=1400&q=85"
            alt="Creative team working on digital design"
          />

          <motion.div
            className="services-intro-image-label"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            Ideas into experiences.
          </motion.div>
        </motion.div>

        <motion.div
          className="services-intro-text"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="services-intro-label">
            Our expertise
          </div>

          <h2>
            Good digital experiences
            <br />
            start with the <span>right ideas.</span>
          </h2>

          <p>
            Whether you are building something new, improving an
            existing website, or looking to grow your digital
            presence, we have the skills and experience to help
            bring your vision to life.
          </p>

          <div className="services-intro-decoration">
            <span />
            Creative thinking. Meaningful results.
          </div>
        </motion.div>
      </section>

      {/* SERVICE LIST */}
      <section className="services-page-list" id="service-list">

        <motion.div
          className="services-list-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <span className="services-page-eyebrow">
              What we offer
            </span>

            <h2>How we can help<span>.</span></h2>
          </div>

          <span className="services-count">
            09 Services
          </span>
        </motion.div>

        <motion.div
          className="service-page-cards"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.number}
              service={service}
              index={index}
              reducedMotion={reducedMotion}
            />
          ))}
        </motion.div>
      </section>

      {/* ABOUT CTA */}
      <section className="services-about">

        <motion.div
          className="services-about-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="services-page-eyebrow">
            A little about us
          </span>

          <h2>
            Your digital future.
            <br />
            <span>It's elementary.</span>
          </h2>

          <p>
            We believe great digital experiences come from
            combining creative thinking, smart technology,
            and meaningful collaboration.
          </p>

          <Link to="/#about" className="services-about-button">
            Discover our story
            <ArrowUpRight size={20} />
          </Link>
        </motion.div>

        <motion.div
          className="services-about-decoration"
          animate={
            reducedMotion
              ? {}
              : { rotate: 360 }
          }
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <span>CREATIVITY · STRATEGY · TECHNOLOGY ·</span>
        </motion.div>
      </section>

      {/* CONTACT */}
      <section className="services-contact" id="contact">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="services-page-eyebrow">
            Have a project in mind?
          </span>

          <h2>
            Let's create something
            <br />
            <span>extraordinary.</span>
          </h2>

          <MotionLink
            to="/contact-us"
            className="services-contact-button"
            whileHover={
              reducedMotion
                ? {}
                : { scale: 1.05, y: -5 }
            }
            whileTap={{ scale: 0.96 }}
          >
            Start a conversation
            <ArrowUpRight size={21} />
          </MotionLink>
        </motion.div>

      </section>
    </main>
  );
}