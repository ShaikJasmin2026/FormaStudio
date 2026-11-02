import { motion } from "motion/react";
import {
  ArrowUpRight,
  ArrowRight,
  Heart,
  Lightbulb,
  Users,
  Leaf,
  Code2,
} from "lucide-react";

import "./css/AboutUs.css";

const values = [
  {
    number: "01",
    icon: <Users size={25} />,
    title: "People first",
    description:
      "We believe great digital experiences begin with understanding people. Every decision we make considers the people who use, build, and benefit from what we create.",
  },
  {
    number: "02",
    icon: <Lightbulb size={25} />,
    title: "Think differently",
    description:
      "We approach every challenge with curiosity and creativity, exploring new possibilities to find simple and meaningful solutions.",
  },
  {
    number: "03",
    icon: <Heart size={25} />,
    title: "Build relationships",
    description:
      "We believe the best results come from strong partnerships, honest conversations, and working together towards shared goals.",
  },
  {
    number: "04",
    icon: <Leaf size={25} />,
    title: "Make a difference",
    description:
      "We want our work to have a positive impact. We consider the bigger picture and aim to create digital experiences with purpose.",
  },
];

function AboutPage() {
  const sectionAnimation = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  return (
    <main className="about-page">

      {/* HERO SECTION */}

      <motion.section
        className="about-hero"
        variants={sectionAnimation}
        initial="hidden"
        animate="visible"
      >
        <div className="about-hero-container">

          <motion.span
            className="about-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="about-eyebrow-line" />
            GET TO KNOW US
          </motion.span>

          <motion.h1
            initial={{
              opacity: 0,
              y: 70,
              rotateX: -15,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotateX: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
          >
            We believe
            <br />
            great things
            <br />
            start with <span>people.</span>
          </motion.h1>

          <div className="about-hero-bottom">
            <p>
              We're a creative digital studio bringing strategy,
              design, and technology together to create meaningful
              digital experiences.
            </p>

            <a href="#our-story" className="about-explore">
              Discover our story
              <ArrowRight size={19} />
            </a>
          </div>

          <motion.div
            className="about-hero-decoration"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 8, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="about-circle" />
            <span className="about-square" />
            <span className="about-triangle" />
          </motion.div>

        </div>
      </motion.section>

      {/* INTRODUCTION */}

      <motion.section
        className="about-introduction"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >

        <div className="about-intro-left">
          <span className="about-label">ABOUT US</span>

          <h2>
            More than just
            <br />
            <span>a digital agency.</span>
          </h2>
        </div>

        <div className="about-intro-right">
          <p className="about-intro-large">
            We're a team of thinkers, designers, and developers
            who believe technology should make life better.
          </p>

          <p>
            We bring together creative thinking and technical
            expertise to help businesses turn ambitious ideas
            into successful digital experiences.
          </p>

          <p>
            From the first conversation to the final launch,
            we believe in collaboration, transparency, and
            building solutions that make a real difference.
          </p>
        </div>

      </motion.section>

      {/* MISSION */}

      <section className="about-mission">

        <div className="about-mission-content">
          <span className="about-label">WHAT DRIVES US</span>

          <h2>
            Our mission is to
            <br />
            make technology
            <br />
            <span>work for people.</span>
          </h2>

          <p>
            We turn complex challenges into simple, elegant
            solutions. By combining strategy, creativity,
            and technology, we help businesses move forward
            with confidence.
          </p>
        </div>

        <div className="about-mission-visual">
          <img
            className="about-mission-image"
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85"
            alt="Creative team working together"
          />
          <div className="mission-shape mission-shape-one" />
          <div className="mission-shape mission-shape-two" />
          <div className="mission-shape mission-shape-three" />

          <div className="mission-visual-text">
            <span>IDEAS</span>
            <span>INTO</span>
            <span className="mission-highlight">IMPACT.</span>
          </div>
        </div>

      </section>

      {/* EXPERTISE */}

      <motion.section
        className="about-expertise"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        <div className="about-expertise-heading">
          <span className="about-label">OUR EXPERTISE</span>

          <h2>
            Curious minds.
            <br />
            <span>Creative solutions.</span>
          </h2>
        </div>

        <div className="about-expertise-content">
          <img
            className="about-expertise-image"
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=85"
            alt="Developer working on a digital project"
            loading="lazy"
          />
          <div className="about-expertise-icon">
            <Code2 size={35} />
          </div>

          <h3>Digital expertise, built around you.</h3>

          <p>
            We love exploring what's possible with technology.
            Our approach combines thoughtful digital strategy,
            user-focused design, and reliable development to
            create experiences that are both beautiful and
            functional.
          </p>

          <p>
            We believe the best technology is the technology
            that works seamlessly for the people using it.
            That's why we focus on understanding your needs
            before creating the right solution.
          </p>

          <a href="/services" className="about-text-link">
            Explore our services
            <ArrowUpRight size={19} />
          </a>

        </div>

      </motion.section>

      {/* OUR STORY */}

      <section className="about-story" id="our-story">

        <motion.div
          className="about-story-image"
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
            alt="Creative team collaborating on a project"
            loading="lazy"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />

          <div className="about-image-caption">
            <span>OUR JOURNEY</span>
            <span>Built on ideas and collaboration.</span>
          </div>
        </motion.div>

        <div className="about-story-content">

          <span className="about-label">WHERE IT ALL BEGAN</span>

          <h2>
            Every great story
            <br />
            has a <span>beginning.</span>
          </h2>

          <p>
            We started with a simple idea: bring talented people
            together to create meaningful digital experiences.
          </p>

          <p>
            What began as a passion for creativity and technology
            grew into a shared ambition to help businesses solve
            problems, connect with people, and achieve more online.
          </p>

          <p>
            Today, we continue to learn, experiment, and challenge
            ourselves to make every project better than the last.
          </p>

        </div>

      </section>

      {/* CULTURE AND VALUES */}

      <section className="about-culture">

        <div className="about-culture-heading">

          {/* LEFT SIDE - TEXT */}
          <div className="about-culture-text">
            <span className="about-label">WHAT MATTERS TO US</span>

            <h2>
              Good people.
              <br />
              <span>Good thinking.</span>
              <br />
              Great outcomes.
            </h2>

            <p>
              Our values shape the way we think, work, and build
              relationships. They guide every project and every
              decision we make.
            </p>
          </div>

          {/* RIGHT SIDE - IMAGE */}
          <motion.div
            className="about-culture-image"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
              alt="Creative team collaborating and sharing ideas"
              loading="lazy"
            />
          </motion.div>

        </div>

        <div className="about-values-grid">

          {values.map((value, index) => (
            <motion.article
              className="about-value-card"
              key={value.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >
              <div className="about-value-top">
                <span>{value.number}</span>
                <div>{value.icon}</div>
              </div>

              <h3>{value.title}</h3>

              <p>{value.description}</p>

              <span className="about-value-line" />
            </motion.article>
          ))}

        </div>

      </section>

      {/* PARTNERS */}

      <motion.section
        className="about-partners"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

       <div className="about-partners-top">

          {/* LEFT SIDE - TEXT */}
          <div className="about-partners-heading">
            <span className="about-label">BETTER TOGETHER</span>

            <h2>
              Strong partnerships.
              <br />
              <span>Stronger possibilities.</span>
            </h2>

            <p>
              Great work doesn't happen in isolation. We believe
              in working alongside the right people, platforms,
              and partners to deliver the best possible outcomes.
            </p>
          </div>

          {/* RIGHT SIDE - IMAGE */}
          <motion.div
            className="about-partners-image"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85"
              alt="Team working together on a project"
              loading="lazy"
            />
          </motion.div>

        </div>

        <div className="about-partner-logos">

          <div className="partner-logo partner-wp">
            <span>W</span>
            <strong>WordPress</strong>
          </div>

          <div className="partner-logo partner-engine">
            <span>WP</span>
            <strong>ENGINE</strong>
          </div>

          <div className="partner-logo partner-tech">
            <span>✳</span>
            <strong>TECHNOLOGY</strong>
          </div>

        </div>

      </motion.section>

      {/* CONTACT */}

      <section className="about-contact">

        <span className="about-label">LET'S CREATE SOMETHING GREAT</span>

        <h2>
          Have a good idea?
          <br />
          Let's make it <span>happen.</span>
        </h2>

        <p>
          We'd love to hear what you're thinking about.
          Tell us about your next project and let's explore
          what's possible together.
        </p>

        <a
          href="/#contact"
          className="about-contact-button"
        >
          Get in touch
          <ArrowUpRight size={21} />
        </a>

      </section>

    </main>
  );
}

export default AboutPage;