import { motion, useReducedMotion } from "motion/react";

const headingContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const headingLine = {
  hidden: {
    opacity: 0,
    y: 70,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 25 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduceMotion ? 0 : 0.8,
      delay: reduceMotion ? 0 : delay,
      ease: "easeOut",
    },
  });

  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#203d33] px-6 pb-28 pt-36 text-[#f8f7f2] md:px-12 lg:px-20"
    >
      {/* Animated background orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#bd705a]/30 blur-[100px] md:h-[450px] md:w-[450px]"
          animate={
            reduceMotion
              ? {}
              : {
                  x: [0, 40, -20, 0],
                  y: [0, -30, 25, 0],
                  scale: [1, 1.15, 0.95, 1],
                }
          }
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#91a894]/25 blur-[100px] md:h-[400px] md:w-[400px]"
          animate={
            reduceMotion
              ? {}
              : {
                  x: [0, -35, 25, 0],
                  y: [0, 30, -25, 0],
                }
          }
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* Rotating decorative circle */}
      <motion.div
        className="pointer-events-none absolute right-[8%] top-[18%] hidden h-64 w-64 rounded-full border border-white/15 md:block lg:h-72 lg:w-72"
        animate={reduceMotion ? {} : { rotate: 360 }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="absolute inset-7 rounded-full border border-white/10" />
        <div className="absolute inset-14 rounded-full border border-white/10" />
        <span className="absolute left-1/2 top-6 h-3 w-3 rounded-full bg-[#d9b765] shadow-[0_0_20px_#d9b765]" />
      </motion.div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* Heading */}
        <motion.h1
          className="max-w-5xl text-5xl font-medium leading-[1.08] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[105px]"
          variants={headingContainer}
          initial="hidden"
          animate="visible"
        >
          <span className="block overflow-hidden pb-2">
            <motion.span className="inline-block" variants={headingLine}>
              We build digital
            </motion.span>
          </span>

          <span className="block overflow-hidden pb-2">
            <motion.span className="inline-block" variants={headingLine}>
              experiences that
            </motion.span>
          </span>

          <span className="block overflow-hidden pb-2">
            <motion.span className="inline-block" variants={headingLine}>
              inspire{" "}
              <em className="font-serif font-normal text-[#d9b765]">
                change.
              </em>
            </motion.span>
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="mt-8 max-w-xl text-sm leading-8 text-[#f8f7f2]/70 sm:text-base md:text-lg"
          {...reveal(1.1)}
        >
          From thoughtful design to powerful development, we help ambitious
          brands turn bold ideas into meaningful digital experiences.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="mt-10 flex flex-wrap items-center gap-5"
          {...reveal(1.3)}
        >
          <motion.a
            href="#services"
            className="group inline-flex items-center gap-5 rounded-full bg-[#d9b765] px-7 py-4 text-sm font-semibold text-[#203d33] shadow-lg shadow-black/10 transition-colors duration-300 hover:bg-[#f0d58e] sm:px-9"
            whileHover={reduceMotion ? {} : { scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.96 }}
          >
            Explore our services
            <motion.span
              className="text-lg"
              animate={reduceMotion ? {} : { x: [0, 4, 0], y: [0, -3, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              ↗
            </motion.span>
          </motion.a>

          <motion.a
            href="#contact"
            className="group inline-flex items-center gap-3 border-b border-white/40 pb-2 text-sm font-medium text-white transition-colors duration-300 hover:border-[#d9b765] hover:text-[#d9b765]"
            whileHover={reduceMotion ? {} : { y: -4 }}
          >
            Let's talk
            <span className="transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </motion.a>
        </motion.div>

        {/* Agency highlights */}
        <motion.div
          className="mt-20 border-t border-white/15 pt-6"
          {...reveal(1.5)}
        >
          <p className="text-[9px] font-medium tracking-[0.25em] text-white/50 sm:text-xs">
            DESIGN-LED. PURPOSE-DRIVEN. RESULTS-FOCUSED.
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 right-10 hidden items-center gap-4 text-[9px] tracking-[0.2em] text-white/50 md:flex"
        {...reveal(1.8)}
      >
        SCROLL TO EXPLORE

        <div className="h-12 w-px overflow-hidden bg-white/20">
          <motion.div
            className="h-full w-full origin-top bg-[#d9b765]"
            animate={
              reduceMotion
                ? {}
                : { scaleY: [0, 1, 0], opacity: [0, 1, 0] }
            }
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}