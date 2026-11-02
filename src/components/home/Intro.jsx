import { motion } from "motion/react";

const clients = [
  {
    name: "Creative Design",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=500&q=85",
  },
  {
    name: "Digital Innovation",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=500&q=85",
  },
  {
    name: "Creative Workspace",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=500&q=85",
  },
  {
    name: "Brand Identity",
    image: "https://images.unsplash.com/photo-1634942536790-2533f9d7ee7b?w=500&q=85",
  },
  {
    name: "Modern Architecture",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=500&q=85",
  },
  {
    name: "Technology",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&q=85",
  },
  {
    name: "Creative Studio",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500&q=85",
  },
  {
    name: "Digital Art",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=500&q=85",
  },
  {
    name: "Workspace",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&q=85",
  },
  {
    name: "Photography",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&q=85",
  },
];

const galleryImages = [
  {
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=700&q=85",
    title: "Creative Spaces",
    category: "Our Environment",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&q=85",
    title: "Visual Thinking",
    category: "Design",
    className: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=600&q=85",
    title: "Digital Ideas",
    category: "Technology",
    className: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=85",
    title: "Collaborative Work",
    category: "Teamwork",
    className: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?w=600&q=85",
    title: "Creative Process",
    category: "Innovation",
    className: "",
  },
];

const imageVariants = {
  hidden: {
    opacity: 0,
    y: 70,
    scale: 0.9,
    rotate: -3,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Intro() {
  return (
    <section
      id="introduction"
      className="relative overflow-hidden bg-[#f8f7f2] px-5 pt-24 pb-10 text-[#203d33] sm:px-10 md:px-16 lg:px-24"
    >
      {/* Decorative background circle */}
      <motion.div
        className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-[#d9b765]/20 blur-3xl"
        animate={{
          y: [0, 35, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Introduction text */}
      <div className="relative z-10 mx-auto max-w-6xl text-center">

        <motion.p
          className="mb-8 inline-flex items-center gap-3 text-[10px] font-bold tracking-[0.3em] text-[#bd705a] sm:text-xs"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="h-px w-8 bg-[#bd705a]" />
          GOOD IDEAS. THOUGHTFUL DESIGN. MEANINGFUL IMPACT.
          <span className="h-px w-8 bg-[#bd705a]" />
        </motion.p>

        <motion.h2
          className="font-serif text-3xl font-normal leading-[1.3] tracking-tight sm:text-4xl md:text-5xl lg:text-[62px]"
          initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          We're a creative digital agency building experiences that{" "}
          <span className="italic text-[#bd705a]">
            connect people and brands.
          </span>{" "}
          Through thoughtful design, innovative technology, and purposeful
          ideas, we turn ambitious visions into reality.
        </motion.h2>

        <motion.p
          className="mx-auto mt-8 max-w-3xl text-sm leading-8 text-[#203d33]/65 sm:text-base md:text-lg"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We partner with forward-thinking organisations to create distinctive
          digital experiences that inspire audiences, solve real challenges,
          and support lasting growth.
        </motion.p>
      </div>

      {/* Creative image gallery */}
      <div className="relative z-10 mx-auto mt-20 grid max-w-7xl grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-2 md:gap-5">

        {galleryImages.map((item, index) => (
          <motion.div
            key={item.title}
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              delay: index * 0.12,
            }}
            whileHover={{
              y: -8,
              rotate: index % 2 === 0 ? 1 : -1,
            }}
            className={`group relative min-h-[180px] overflow-hidden rounded-2xl bg-[#203d33] ${
              index === 0
                ? "col-span-2 row-span-2 min-h-[350px] md:min-h-[500px]"
                : "min-h-[190px] md:min-h-0"
            } ${item.className}`}
          >
            <motion.img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#152d25]/80 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Image content */}
            <div className="absolute bottom-0 left-0 p-5 text-white md:p-7">
              <p className="mb-2 text-[9px] font-semibold tracking-[0.25em] text-[#d9b765] sm:text-xs">
                {item.category}
              </p>

              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl">
                {item.title}
              </h3>
            </div>

            {/* Hover arrow */}
            <motion.span
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg text-[#203d33] opacity-0 transition-all duration-300 group-hover:opacity-100"
              whileHover={{ rotate: 45 }}
            >
              ↗
            </motion.span>
          </motion.div>
        ))}
      </div>

      {/* Client section AUTOMATIC IMAGE SCROLLING */}
      <section className="relative mt-24 overflow-hidden">

        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-bold tracking-[0.3em] text-[#bd705a]">
            OUR CREATIVE WORLD
          </p>

          <h3 className="font-serif text-3xl text-[#203d33] md:text-5xl">
            Ideas in motion.
          </h3>
        </div>

        {/* First scrolling row - left to right */}
        <div className="relative mb-6 overflow-hidden">

          <motion.div
            className="flex w-max gap-5"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...clients, ...clients].map((client, index) => (
              <motion.div
                key={`first-${index}`}
                whileHover={{ scale: 1.04, y: -5 }}
                className="group relative h-48 w-64 shrink-0 overflow-hidden rounded-2xl md:h-60 md:w-80"
              >
                <img
                  src={client.image}
                  alt={client.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#203d33]/80 via-transparent to-transparent" />

                <h4 className="absolute bottom-5 left-5 font-serif text-xl text-white">
                  {client.name}
                </h4>
              </motion.div>
            ))}
          </motion.div>

        </div>

        {/* Second scrolling row - opposite direction */}
        <div className="relative overflow-hidden">

          <motion.div
            className="flex w-max gap-5"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...clients].reverse().concat([...clients].reverse()).map(
              (client, index) => (
                <motion.div
                  key={`second-${index}`}
                  whileHover={{ scale: 1.04, y: -5 }}
                  className="group relative h-48 w-64 shrink-0 overflow-hidden rounded-2xl md:h-60 md:w-80"
                >
                  <img
                    src={client.image}
                    alt={client.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#203d33]/80 via-transparent to-transparent" />

                  <h4 className="absolute bottom-5 left-5 font-serif text-xl text-white">
                    {client.name}
                  </h4>
                </motion.div>
              )
            )}
          </motion.div>

        </div>

      </section>

      {/* Bottom decorative text */}
      <motion.div
        className="relative z-10 mt-24 flex flex-wrap items-center justify-center gap-4 text-center text-[9px] font-semibold tracking-[0.25em] text-[#203d33]/45 sm:text-xs"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <span>CREATIVITY</span>
        <span className="h-1 w-1 rounded-full bg-[#bd705a]" />
        <span>STRATEGY</span>
        <span className="h-1 w-1 rounded-full bg-[#bd705a]" />
        <span>TECHNOLOGY</span>
        <span className="h-1 w-1 rounded-full bg-[#bd705a]" />
        <span>IMPACT</span>
      </motion.div>
    </section>
  );
}