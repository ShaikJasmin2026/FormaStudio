import { motion } from "motion/react";
import { ArrowRight, MoveUpRight, Sparkles } from "lucide-react";

const projects = [
  {
    id: 1,
    client: "Lumora",
    title: "Building a distinctive digital identity for a modern lifestyle brand",
    description:
      "A complete brand refresh, intuitive e-commerce experience, and responsive website designed to turn visitors into loyal customers.",
    image: "/images/unitedcarpets-hexhero.webp",
    logo: "lumora",
    logoSub: "LIVE BEAUTIFULLY",
    featured: true,
  },
  {
    id: 2,
    client: "Vita Living",
    title: "Creating a digital experience that feels like home",
    description:
      "A refined website experience with thoughtful layouts, engaging visuals, and a seamless journey across devices.",
    image: "/images/vita-china-hexhero.webp",
    logo: "VITA LIVING",
  },
  {
    id: 3,
    client: "Greenline",
    title: "Making sustainable choices easier through thoughtful design",
    description:
      "A clean digital platform that communicates sustainability, builds trust, and makes information easier to discover.",
    image: "/images/michal-biernat.webp",
    logo: "greenline",
  },
  {
    id: 4,
    client: "Wanderwell",
    title: "Turning travel inspiration into memorable digital journeys",
    description:
      "A responsive website with immersive imagery, clear navigation, and a smoother experience for discovering destinations.",
    image: "/images/travelodge-hero.jpg",
    logo: "WANDERWELL",
  },
];

// Animation settings
const revealUp = {
  hidden: {
    opacity: 0,
    y: 45,
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

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// PROJECT IMAGE
function ProjectImage({ project }) {
  return (
    <div className="work-project-image group relative overflow-hidden">
      <motion.img
        src={project.image}
        alt={project.client}
        loading="lazy"
        className="h-full w-full object-cover"
        whileHover={{ scale: 1.09 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Image overlay */}
      <motion.div
        className="absolute inset-0 bg-[#173f35]/20"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      />

      {/* Client logo */}
      <motion.div
        className="work-client-logo"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {project.featured ? (
          <motion.div
            className="united-logo"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.3 }}
          >
            <span>{project.logo}</span>
            <strong>{project.logoSub}</strong>
          </motion.div>
        ) : (
          <motion.span
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.3 }}
          >
            {project.logo}
          </motion.span>
        )}
      </motion.div>

      {/* Floating corner icon */}
      <motion.div
        className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#f8f7f2] text-[#203d33]"
        initial={{ opacity: 0, rotate: -45, scale: 0.5 }}
        whileHover={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <MoveUpRight size={20} />
      </motion.div>
    </div>
  );
}

// PROJECT LINK
function ProjectLink() {
  return (
    <motion.a
      href="#contact"
      className="work-read-more group inline-flex items-center gap-3"
      whileHover={{ x: 5 }}
      whileTap={{ scale: 0.97 }}
    >
      Explore project

      <motion.span
        className="work-read-arrow inline-flex items-center justify-center rounded-full"
        whileHover={{
          rotate: -45,
          backgroundColor: "#203d33",
          color: "#ffffff",
        }}
        transition={{ duration: 0.3 }}
      >
        <ArrowRight size={21} />
      </motion.span>
    </motion.a>
  );
}

// FEATURED PROJECT
function FeaturedProject({ project }) {
  return (
    <motion.article
      className="work-featured group"
      variants={revealUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      whileHover={{
        y: -6,
        boxShadow: "0px 25px 55px rgba(23, 63, 53, 0.10)",
      }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className="work-featured-content"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.span
          variants={revealUp}
          className="work-project-category"
        >
          Branding · E-commerce · Web
        </motion.span>

        <motion.h3 variants={revealUp}>
          {project.title}
        </motion.h3>

        <motion.p variants={revealUp}>
          {project.description}
        </motion.p>

        <motion.div variants={revealUp}>
          <ProjectLink />
        </motion.div>
      </motion.div>

      <ProjectImage project={project} />
    </motion.article>
  );
}

// PROJECT CARD
function ProjectCard({ project, index }) {
  return (
    <motion.article
      className="work-card group"
      initial={{
        opacity: 0,
        y: 70,
        rotate: index % 2 === 0 ? -2 : 2,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotate: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -10,
        transition: { duration: 0.3 },
      }}
    >
      <ProjectImage project={project} />

      <motion.div className="work-card-content">
        <motion.span
          className="work-project-client"
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
        >
          {project.client}
        </motion.span>

        <h3>{project.title}</h3>

        <ProjectLink />
      </motion.div>
    </motion.article>
  );
}

// MAIN WORK SECTION
export default function Work() {
  const featuredProject = projects[0];
  const remainingProjects = projects.slice(1);

  return (
    <section
      className="our-work-section relative overflow-hidden"
      id="work"
    >
      {/* Decorative background circles */}
      <motion.div
        className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-[#91a894]/15 blur-3xl"
        animate={{
          y: [0, 35, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#bd705a]/10 blur-3xl"
        animate={{
          y: [0, -35, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="our-work-container relative z-10">

        {/* SECTION HEADER */}
        <motion.header
          className="our-work-header"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div>
            <motion.span
              variants={revealUp}
              className="work-section-eyebrow inline-flex items-center gap-3"
            >
              <span className="h-px w-9 bg-[#bd705a]" />
              A selection of our work
              <Sparkles size={15} className="text-[#bd705a]" />
            </motion.span>

            <motion.h2
              variants={revealUp}
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Ideas made tangible.
            </motion.h2>
          </div>

          <motion.a
            href="#all-projects"
            className="work-all-button"
            whileHover={{
              scale: 1.04,
              y: -4,
              boxShadow: "0px 12px 25px rgba(32, 61, 51, 0.12)",
            }}
            whileTap={{ scale: 0.96 }}
          >
            View all projects
            <MoveUpRight size={19} className="ml-3" />
          </motion.a>
        </motion.header>

        {/* FEATURED PROJECT */}
        <FeaturedProject project={featuredProject} />

        {/* PROJECT GRID */}
        <motion.div
          className="work-grid"
          id="all-projects"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {remainingProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </motion.div>

        {/* BOTTOM DECORATIVE TEXT */}
        <motion.div
          className="mt-20 flex flex-wrap items-center justify-center gap-4 text-center text-xs font-semibold uppercase tracking-[0.25em] text-[#203d33]/50"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span>Strategy</span>
          <span className="h-1 w-1 rounded-full bg-[#bd705a]" />
          <span>Creativity</span>
          <span className="h-1 w-1 rounded-full bg-[#bd705a]" />
          <span>Technology</span>
          <span className="h-1 w-1 rounded-full bg-[#bd705a]" />
          <span>Impact</span>
        </motion.div>

      </div>
    </section>
  );
}