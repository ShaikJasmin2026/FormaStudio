import { motion } from "motion/react";
import {
  ArrowUpRight,
  ArrowRight,
  CalendarDays,
} from "lucide-react";

import "./css/Blog.css";

const featuredPost = {
  id: 1,
  category: "Company Updates",
  date: "December 04, 2025",
  title: "Becoming a climate action workforce",
  description:
    "We've partnered with Ecologi to become a climate action workforce. Discover how we're taking steps towards a more sustainable future.",
  image:
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1400&q=85",
  link: "#",
};

const blogPosts = [
  {
    id: 2,
    category: "Company Updates",
    date: "October 16, 2024",
    title: "Support Coverage 2025: Christmas & New Year Office Closures",
    description:
      "Important information about our support availability during the Christmas and New Year holiday period.",
    image:
      "https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=900&q=85",
    link: "#",
  },
  {
    id: 3,
    category: "Partnerships",
    date: "March 17, 2024",
    title: "Embracing an inclusive team culture at ED Fest '24",
    description:
      "A look back at our team culture, collaboration, and the experiences that bring our people together.",
    image:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=900&q=85",
    link: "#",
  },
  {
    id: 4,
    category: "Company Updates",
    date: "October 05, 2023",
    title: "WP Engine's DE{CODE} 2024",
    description:
      "Exploring new ideas, technologies, and opportunities within the WordPress development community.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=85",
    link: "#",
  },
  {
    id: 5,
    category: "Education",
    date: "May 26, 2023",
    title: "New Website Launch: A Journey into Headless WordPress",
    description:
      "Discover our journey into headless WordPress and the possibilities of WP Engine's Atlas platform.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85",
    link: "#",
  },
  {
    id: 6,
    category: "Education",
    date: "May 26, 2023",
    title: "Elementary Digital collaborates with York Learning coding bootcamp",
    description:
      "Supporting the next generation of digital talent through collaboration, learning, and technology.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=85",
    link: "#",
  },
];

function FeaturedBlog({ post }) {
  return (
    <motion.article
      className="blog-featured-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <a href={post.link} className="blog-featured-image">
        <motion.img
          src={post.image}
          alt={post.title}
          loading="lazy"
          initial={{ scale: 1.15 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.07 }}
          transition={{ duration: 0.8 }}
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />

        <motion.span
          className="blog-featured-tag"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Featured Article
        </motion.span>

        <motion.span
          className="blog-image-arrow"
          whileHover={{ rotate: 45, scale: 1.15 }}
        >
          <ArrowUpRight size={25} />
        </motion.span>
      </a>

      <motion.div
        className="blog-featured-content"
        initial={{ opacity: 0, x: 35 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="blog-post-meta">
          <span>{post.category}</span>
          <span className="blog-meta-dot" />
          <span>{post.date}</span>
        </div>

        <h2>{post.title}</h2>

        <p>{post.description}</p>

        <motion.a
          href={post.link}
          className="blog-read-link"
          whileHover={{ x: 8 }}
        >
          Read article
          <ArrowRight size={19} />
        </motion.a>
      </motion.div>
    </motion.article>
  );
}

function BlogCard({ post, index }) {
  return (
    <motion.article
      className="blog-card"
      initial={{
        opacity: 0,
        y: 50,
        rotateX: 8,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotateX: 0,
      }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: "easeOut",
      }}
      whileHover={{ y: -10 }}
    >
      <a href={post.link} className="blog-card-image">
        <motion.img
          src={post.image}
          alt={post.title}
          loading="lazy"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.7 }}
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />

        <motion.span
          className="blog-card-arrow"
          whileHover={{ rotate: 45, scale: 1.15 }}
        >
          <ArrowUpRight size={21} />
        </motion.span>
      </a>

      <div className="blog-card-content">
        <div className="blog-post-meta">
          <span>{post.category}</span>
        </div>

        <div className="blog-card-date">
          <CalendarDays size={14} />
          <span>{post.date}</span>
        </div>

        <h3>{post.title}</h3>

        <p>{post.description}</p>

        <motion.a
          href={post.link}
          className="blog-read-link"
          whileHover={{ x: 8 }}
        >
          Read more
          <ArrowRight size={18} />
        </motion.a>
      </div>
    </motion.article>
  );
}

export default function BlogPage() {
  return (
    <main className="blog-page">

      {/* HERO SECTION */}

      <section className="blog-hero">
        <div className="blog-hero-container">

          <motion.span
            className="blog-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span />
            IDEAS, INSIGHTS & UPDATES
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 60, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Thoughts
            <br />
            worth <span>sharing.</span>
          </motion.h1>

          <div className="blog-hero-bottom">
            <p>
              A collection of thoughts, ideas, stories, and
              insights from our team. Explore what we're
              learning, creating, and discovering.
            </p>

            <a href="#latest-articles" className="blog-explore-link">
              Explore articles
              <ArrowRight size={20} />
            </a>
          </div>

          <div className="blog-hero-decoration">
            <span className="blog-decoration-circle" />
            <span className="blog-decoration-square" />
            <span className="blog-decoration-triangle" />
          </div>

        </div>
      </section>

      {/* FEATURED ARTICLE */}

      <section className="blog-featured-section">

        <div className="blog-section-heading">
          <div>
            <span className="blog-label">IN THE SPOTLIGHT</span>
            <h2>Featured story.</h2>
          </div>

          <span className="blog-section-number">01 / 01</span>
        </div>

        <FeaturedBlog post={featuredPost} />

      </section>

      {/* LATEST ARTICLES */}

      <section
        className="blog-latest-section"
        id="latest-articles"
      >

        <div className="blog-section-heading">
          <div>
            <span className="blog-label">FROM OUR JOURNAL</span>
            <h2>Latest articles.</h2>
          </div>

          <span className="blog-section-number">
            05 ARTICLES
          </span>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={post.id}
              post={post}
              index={index}
            />
          ))}
        </div>

      </section>

      {/* CONTACT SECTION */}

      <section className="blog-contact" id="blog-contact">

        <span className="blog-label">
          HAVE SOMETHING TO DISCUSS?
        </span>

        <h2>
          Let's start a
          <br />
          <span>conversation.</span>
        </h2>

        <p>
          Have a question, an idea, or a project you'd
          like to discuss? We'd love to hear from you.
        </p>

        <a href="/#contact" className="blog-contact-button">
          Get in touch
          <ArrowUpRight size={21} />
        </a>

      </section>

    </main>
  );
}