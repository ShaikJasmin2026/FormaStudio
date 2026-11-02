import { motion } from "motion/react";

export default function About() {
  return (
    <>
      {/* ABOUT SECTION */}
      <section className="about-section" id="about">
        <div className="about-container">
          {/* LEFT: IMAGE AND DECORATIVE SHAPES */}
          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-shape about-hexagon"></div>
            <div className="about-shape about-small-hexagon"></div>
            <div className="about-shape about-yellow-diamond"></div>
            <div className="about-shape about-mint-triangle"></div>
            <div className="about-shape about-pink-circle"></div>
            <div className="about-shape about-yellow-square"></div>
            <div className="about-shape about-pink-semicircle"></div>
            <div className="about-shape about-mint-play"></div>

            <div className="about-team-image">
              <img
                src="/images/gettyimages.jpg"
                alt="Our creative team collaborating on digital ideas"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* RIGHT: ABOUT CONTENT */}
          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <span className="about-eyebrow">Who we are</span>

            <h2>
              Good ideas deserve
              <br />
              great experiences.
            </h2>

            <p>
              We are a creative digital agency bringing strategy, design,
              and technology together to help brands move forward. From
              shaping your identity to building meaningful digital
              experiences, we turn ambitious ideas into thoughtful,
              user-focused solutions. We believe the best work happens
              through open collaboration, purposeful creativity, and a
              commitment to getting the details right.
            </p>

            <div className="about-buttons">
              <a href="#services" className="about-primary-button">
                Discover our services
              </a>

              <a href="#work" className="about-secondary-button">
                Explore our work
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section className="about-testimonial">
        <motion.div
          className="testimonial-content"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <blockquote>
            “Great digital experiences begin with understanding people.
            The right mix of creativity, clarity, and collaboration can
            turn even the most ambitious ideas into something meaningful.”
          </blockquote>

          <p className="testimonial-author">
            Thoughtful strategy. Meaningful design. Lasting impact.
          </p>
        </motion.div>
      </section>
    </>
  );
}