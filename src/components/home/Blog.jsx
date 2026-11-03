import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useSpring,
} from "motion/react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { ArrowRight, MoveUpRight, Sparkles } from "lucide-react";

const MotionLink = motion(Link);
const blogPosts = [
  {
    id: 1,
    date: "Dec 04, 2025",
    category: "Company Updates",
    title: "Support Coverage 2025: Christmas & New Year Office Closures",
    image: null,
    featured: true,
  },
  {
    id: 2,
    date: "Oct 16, 2024",
    category: "Uncategorised",
    title: "Embracing an inclusive team culture at ED Fest ‘24",
  },
  {
    id: 3,
    date: "Mar 17, 2024",
    category: "Partnerships",
    title: "WP Engine’s DE{CODE} 2024",
  },
  {
    id: 4,
    date: "Oct 05, 2023",
    category: "Company Updates",
    title:
      "New Website Launch: a Journey into Headless WordPress and WP Engine’s Atlas platform",
  },
];

const reveal = {
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

// READ MORE BUTTON
function ReadMore({ href = "#contact" }) {
  return (
    <motion.a
      href={href}
      className="blog-read-more group inline-flex items-center gap-4"
      whileHover={{ x: 6 }}
      whileTap={{ scale: 0.96 }}
    >
      <span className="relative">
        Read more

        <motion.span
          className="absolute bottom-0 left-0 h-px w-full origin-left bg-[#bd705a]"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.35 }}
        />
      </span>

      <motion.span
        className="blog-read-arrow flex h-10 w-10 items-center justify-center rounded-full border border-[#203d33]/20"
        whileHover={{
          rotate: -45,
          backgroundColor: "#203d33",
          color: "#ffffff",
          borderColor: "#203d33",
        }}
        transition={{ type: "spring", stiffness: 250 }}
      >
        <ArrowRight size={19} />
      </motion.span>
    </motion.a>
  );
}

// FEATURED BLOG
function FeaturedBlog({ post, reduceMotion }) {
  const imageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? ["0%", "0%"] : ["-8%", "8%"]
  );

  const smoothImageY = useSpring(imageY, {
    stiffness: 80,
    damping: 25,
  });

  return (
    <motion.article
      className="blog-featured group"
      initial={{
        opacity: 0,
        rotateX: 12,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        rotateX: 0,
        y: 0,
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ transformPerspective: 1000 }}
    >
      {/* Parallax image */}
      <motion.a
        ref={imageRef}
        href="#featured-post"
        className="blog-featured-image relative block overflow-hidden"
        aria-label={post.title}
      >
        <motion.img
          src="/images/blog.webp"
          alt="Creative agency team"
          loading="lazy"
          style={{
            y: smoothImageY,
            scale: 1.2,
          }}
          className="h-full w-full object-cover"
        />

        <motion.div
          className="absolute inset-0 bg-[#203d33]/30"
          initial={{ opacity: 0.5 }}
          whileHover={{ opacity: 0.1 }}
          transition={{ duration: 0.5 }}
        />

        <motion.span
          className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#f8f7f2] text-[#203d33]"
          initial={{ scale: 0, rotate: 90 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 180,
            delay: 0.5,
          }}
        >
          <MoveUpRight size={21} />
        </motion.span>
      </motion.a>

      <motion.div
        className="blog-featured-details"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p className="blog-meta">
          <span>{post.date}</span>
          <span className="blog-meta-divider">|</span>
          <span>
            Posted in <a href="#blog">{post.category}</a>
          </span>
        </p>

        <h3>{post.title}</h3>

        <ReadMore href="#featured-post" />
      </motion.div>
    </motion.article>
  );
}

// INDIVIDUAL BLOG POST
function BlogPost({ post, index }) {
  return (
    <motion.article
      className="blog-post group relative"
      initial={{
        opacity: 0,
        rotateX: 15,
        y: 45,
      }}
      whileInView={{
        opacity: 1,
        rotateX: 0,
        y: 0,
      }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.85,
        delay: index * 0.18,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        x: 8,
        transition: { duration: 0.3 },
      }}
      style={{ transformPerspective: 900 }}
    >
      {/* Animated top border */}
      <motion.span
        className="absolute left-0 top-0 h-px w-full origin-left bg-[#bd705a]"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          delay: index * 0.2 + 0.3,
        }}
      />

      <motion.p
        className="blog-meta"
        initial={{ opacity: 0, x: -15 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.18 + 0.2 }}
      >
        <span>{post.date}</span>
        <span className="blog-meta-divider">|</span>
        <span>
          Posted in <a href="#blog">{post.category}</a>
        </span>
      </motion.p>

      <motion.h3
        whileHover={{
          x: 5,
          color: "#bd705a",
        }}
        transition={{ duration: 0.3 }}
      >
        {post.title}
      </motion.h3>

      <ReadMore />
    </motion.article>
  );
}

// ANIMATED DECORATIVE SHAPES
function DecorativeShapes() {
  const reduceMotion = useReducedMotion();

  const floatingAnimation = (duration, delay = 0) =>
    reduceMotion
      ? {}
      : {
          y: [0, -22, 0],
          rotate: [0, 15, 0],
          transition: {
            duration,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          },
        };

  return (
    <div className="blog-decoration pointer-events-none" aria-hidden="true">

      <motion.span
        className="blog-shape blog-diamond blog-diamond-one"
        animate={floatingAnimation(6)}
      />

      <motion.span
        className="blog-shape blog-circle blog-circle-one"
        animate={floatingAnimation(8, 1)}
      />

      <motion.span
        className="blog-shape blog-hexagon blog-hexagon-one"
        animate={floatingAnimation(7, 0.5)}
      />

      <motion.span
        className="blog-shape blog-triangle blog-triangle-one"
        animate={floatingAnimation(9, 1.5)}
      />

      <motion.span
        className="blog-shape blog-diamond blog-diamond-two"
        animate={floatingAnimation(7, 2)}
      />

      <motion.span
        className="blog-shape blog-circle blog-circle-two"
        animate={floatingAnimation(6, 1)}
      />

      <motion.span
        className="blog-shape blog-hexagon blog-hexagon-two"
        animate={floatingAnimation(8, 2)}
      />

      <motion.span
        className="blog-shape blog-triangle blog-triangle-two"
        animate={floatingAnimation(7, 0.8)}
      />
    </div>
  );
}

// CONTACT CTA
function BlogContact() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="blog-contact relative isolate overflow-hidden"
      id="contact"
    >
      <DecorativeShapes />

      {!reduceMotion && (
        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d9b765]/50"
          animate={{
            scale: [1, 2.5, 1],
            opacity: [0.7, 0, 0.7],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}

      <MotionLink
        to="/contact-us"
        href="mailto:hello@elementarydigital.co.uk"
        className="blog-contact-link group relative z-10"
        initial={{
          opacity: 0,
          scale: 0.85,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={reduceMotion ? {} : { scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
      >
        <motion.span
          className="blog-contact-icon inline-flex"
          animate={
            reduceMotion
              ? {}
              : {
                  rotate: [0, 20, -15, 10, 0],
                  y: [0, -5, 0],
                }
          }
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        >
          👋
        </motion.span>

        <span className="blog-contact-text">
          Ready for the next step? Get in touch.
        </span>

        <motion.span
          className="ml-4 inline-flex"
          animate={reduceMotion ? {} : { x: [0, 5, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <MoveUpRight size={22} />
        </motion.span>
      </MotionLink>
    </section>
  );
}

// MAIN BLOG SECTION
export default function Blog() {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);
  const reduceMotion = useReducedMotion();

  return (
    <>
      <section className="blog-section relative overflow-hidden" id="blog">

        {/* Decorative background glow */}
        {!reduceMotion && (
          <>
            <motion.div
              className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#91a894]/15 blur-3xl"
              animate={{
                x: [0, 40, 0],
                y: [0, 30, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#bd705a]/10 blur-3xl"
              animate={{
                x: [0, -30, 0],
                y: [0, -25, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </>
        )}

        <div className="blog-container relative z-10">

          {/* HEADER */}
          <header className="blog-header">

            <div>
              <motion.span
                className="mb-5 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#bd705a]"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <span className="h-px w-9 bg-[#bd705a]" />
                Stories & Insights
                <Sparkles size={15} />
              </motion.span>

              <motion.h2
                className="flex flex-wrap gap-x-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.12,
                    },
                  },
                }}
              >
                {["From", "the", "blog."].map((word, index) => (
                  <motion.span
                    key={index}
                    className="inline-block"
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 70,
                        rotateX: -70,
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                        rotateX: 0,
                        transition: {
                          duration: 0.8,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      },
                    }}
                    style={{
                      transformOrigin: "bottom",
                      color: index === 2 ? "#bd705a" : "inherit",
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h2>
            </div>

            <motion.a
              href="#all-posts"
              className="blog-all-button"
              whileHover={{
                scale: 1.05,
                y: -4,
              }}
              whileTap={{ scale: 0.96 }}
            >
              View all posts
              <MoveUpRight size={18} className="ml-2" />
            </motion.a>
          </header>

          {/* BLOG CONTENT */}
          <div className="blog-grid">

            <FeaturedBlog
              post={featuredPost}
              reduceMotion={reduceMotion}
            />

            <div className="blog-posts" id="all-posts">
              {otherPosts.map((post, index) => (
                <BlogPost
                  key={post.id}
                  post={post}
                  index={index}
                />
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <BlogContact />
    </>
  );
}