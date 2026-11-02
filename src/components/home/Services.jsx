import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  Sparkles,
  MoveUpRight,
  Plus,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Digital strategy",
    short: "Think beyond the ordinary.",
    description:
      "Every successful digital experience begins with a clear vision. We help brands define their goals, understand their audience, and build thoughtful digital strategies that turn ideas into meaningful results.",
    category: "01 — Strategy",
    color: "#d9b765",
  },
  {
    id: 2,
    title: "Branding and identity",
    short: "Make your brand unforgettable.",
    description:
      "Your brand deserves to stand out. We create distinctive brand identities through thoughtful visual design, meaningful storytelling, and consistent brand experiences that connect with your audience.",
    category: "02 — Identity",
    color: "#bd705a",
  },
  {
    id: 3,
    title: "UI and UX design",
    short: "Design that feels right.",
    description:
      "We design intuitive, engaging, and user-friendly digital experiences. By combining research, creativity, and usability, we make every interaction feel natural while helping users achieve their goals.",
    category: "03 — Experience",
    color: "#91a894",
  },
  {
    id: 4,
    title: "Web development",
    short: "Ideas brought to life.",
    description:
      "We turn creative ideas into responsive, high-performing websites. Using modern technologies and clean development practices, we build digital experiences that look beautiful, work seamlessly, and grow with your business.",
    category: "04 — Development",
    color: "#d9b765",
  },
  {
    id: 5,
    title: "Creative campaigns",
    short: "Creativity with purpose.",
    description:
      "Great ideas deserve to be seen. We develop creative digital campaigns that communicate your message, capture attention, and help your brand build meaningful connections with the right audience.",
    category: "05 — Campaigns",
    color: "#bd705a",
  },
  {
    id: 6,
    title: "Digital experiences",
    short: "Create something remarkable.",
    description:
      "We bring design, technology, and storytelling together to create memorable digital experiences. From interactive websites to engaging digital platforms, we help brands turn ordinary interactions into something remarkable.",
    category: "06 — Digital",
    color: "#91a894",
  },
  {
    id: 7,
    title: "E-commerce solutions",
    short: "Turn visitors into customers.",
    description:
      "We create seamless online shopping experiences that make it easier for customers to discover products and complete purchases. Our e-commerce solutions focus on usability, performance, and sustainable business growth.",
    category: "07 — Commerce",
    color: "#d9b765",
  },
  {
    id: 8,
    title: "Technology and integrations",
    short: "Connect everything seamlessly.",
    description:
      "We connect your digital platforms with the tools and services your business depends on. Through thoughtful integrations and modern technology, we simplify workflows and create more connected digital experiences.",
    category: "08 — Technology",
    color: "#bd705a",
  },
  {
    id: 9,
    title: "Growth and optimisation",
    short: "Better every single day.",
    description:
      "A great website is never truly finished. We use performance insights, user feedback, and continuous improvement to refine your digital presence, improve engagement, and help your business move forward.",
    category: "09 — Growth",
    color: "#91a894",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Services() {
  const [activeService, setActiveService] = useState(0);

  const selectedService = services[activeService];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#f8f7f2] px-5 pt-12 pb-20 sm:px-8 sm:pt-16 md:pb-24 lg:px-16"
    >
      {/* Background decoration */}
      <motion.div
        className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#91a894]/20 blur-3xl"
        animate={{
          y: [0, 40, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 10,
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
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-end">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-[#bd705a]" />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#bd705a]">
                What we do
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="max-w-xl text-5xl font-medium leading-[1.05] tracking-tight text-[#203d33] sm:text-6xl lg:text-7xl"
              style={{
                fontFamily: "Playfair Display, serif",
              }}
            >
              Ideas into
              <br />
              <span className="italic text-[#bd705a]">
                impact.
              </span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:justify-self-end md:max-w-md"
          >
            <p className="text-base leading-8 text-[#65746b] sm:text-lg">
              We combine creative thinking, thoughtful design, and
              purposeful technology to create digital experiences
              that move brands forward.
            </p>

            <div className="mt-7 flex items-center gap-3 text-sm font-semibold text-[#203d33]">
              <Sparkles size={17} className="text-[#bd705a]" />
              <span>Creative minds. Meaningful solutions.</span>
            </div>
          </motion.div>
        </div>

        {/* SERVICES MAIN AREA */}
        <div className="grid overflow-hidden rounded-3xl bg-[#203d33] lg:grid-cols-[1.05fr_0.95fr]">

          {/* LEFT SERVICE LIST */}
          <div className="relative px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14">

            <div className="mb-8 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#91a894]">
                Explore our expertise
              </span>

              <span className="text-xs text-[#91a894]">
                01 — 09
              </span>
            </div>

            <div className="space-y-1">
              {services.map((service, index) => {
                const isActive = activeService === index;

                return (
                  <motion.button
                    key={service.id}
                    type="button"
                    onClick={() => setActiveService(index)}
                    onMouseEnter={() => setActiveService(index)}
                    aria-pressed={isActive}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.25 }}
                    className={`group relative flex w-full items-center justify-between gap-3 border-b border-white/10 py-5 text-left transition-colors duration-300 ${
                      isActive
                        ? "text-[#f8f7f2]"
                        : "text-[#91a894] hover:text-[#f8f7f2]"
                    }`}
                  >
                    {/* Active indicator */}
                    <motion.span
                      className="absolute -left-6 h-8 w-1 rounded-full bg-[#d9b765] sm:-left-10 lg:-left-12"
                      initial={false}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        scaleY: isActive ? 1 : 0.3,
                      }}
                      transition={{ duration: 0.3 }}
                    />

                    <div className="flex items-center gap-5">

                      <span
                        className={`text-xs transition-colors ${
                          isActive
                            ? "text-[#d9b765]"
                            : "text-[#91a894]/60"
                        }`}
                      >
                        0{service.id}
                      </span>

                      <span className="text-lg font-medium tracking-tight sm:text-xl">
                        {service.title}
                      </span>
                    </div>

                    <motion.span
                      animate={{
                        x: isActive ? 5 : 0,
                        rotate: isActive ? 0 : -45,
                      }}
                      transition={{ duration: 0.3 }}
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                        isActive
                          ? "bg-[#d9b765] text-[#203d33]"
                          : "border border-white/20 text-[#91a894] group-hover:border-[#d9b765]"
                      }`}
                    >
                      <ArrowRight size={17} />
                    </motion.span>
                  </motion.button>
                );
              })}
            </div>

            <div className="mt-9 flex items-center gap-3 text-xs text-[#91a894]">
              <Plus size={15} className="text-[#d9b765]" />
              <span>Discover what we can create together</span>
            </div>
          </div>

          {/* RIGHT DESCRIPTION PANEL */}
          <div className="relative flex min-h-[500px] flex-col justify-between overflow-hidden bg-[#29483d] px-7 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14">

            {/* Decorative circle */}
            <motion.div
              className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/10"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.div
              className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full border border-white/10"
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Service details */}
            <div className="relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedService.id}
                  initial={{
                    opacity: 0,
                    y: 25,
                    filter: "blur(8px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    y: -15,
                    filter: "blur(5px)",
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                >
                  <div className="mb-12 flex items-center justify-between">
                    <span className="rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-widest text-[#d9b765]">
                      {selectedService.category}
                    </span>

                    <span className="text-sm text-[#91a894]">
                      0{selectedService.id} / 09
                    </span>
                  </div>

                  <motion.div
                    key={`icon-${selectedService.id}`}
                    initial={{ scale: 0.5, rotate: -25, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      type: "spring",
                    }}
                    className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl"
                    style={{
                      backgroundColor: selectedService.color,
                    }}
                  >
                    <Sparkles
                      size={29}
                      className="text-[#203d33]"
                    />
                  </motion.div>

                  <h3
                    className="mb-4 max-w-md text-3xl font-medium leading-tight text-[#f8f7f2] sm:text-4xl lg:text-5xl"
                    style={{
                      fontFamily: "Playfair Display, serif",
                    }}
                  >
                    {selectedService.title}
                  </h3>

                  <p className="mb-6 text-sm font-medium text-[#d9b765] sm:text-base">
                    {selectedService.short}
                  </p>

                  <p className="max-w-lg text-sm leading-8 text-[#c3d0c7] sm:text-base">
                    {selectedService.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom CTA */}
            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.02,
                backgroundColor: "#d9b765",
              }}
              whileTap={{ scale: 0.97 }}
              className="relative z-10 mt-14 flex w-fit items-center gap-5 rounded-full bg-[#f8f7f2] px-7 py-4 text-sm font-semibold text-[#203d33] transition-colors duration-300"
            >
              Let's work together

              <MoveUpRight size={18} />
            </motion.a>

          </div>
        </div>

        {/* BOTTOM TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-10 flex flex-col justify-between gap-4 border-t border-[#203d33]/15 pt-6 sm:flex-row sm:items-center"
        >
          <p className="text-sm text-[#65746b]">
            From the first idea to the final experience.
          </p>

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#bd705a]">
            Strategy · Design · Development
          </p>
        </motion.div>

      </div>
    </section>
  );
}