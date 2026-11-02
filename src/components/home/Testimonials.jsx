import { motion } from "motion/react";

const testimonials = [
  {
    quote:
      "The team understood our challenges from the beginning and delivered a thoughtful, effective digital experience.",
    role: "Marketing Director",
    company: "Digital Business",
  },
  {
    quote:
      "Their combination of technical expertise, clear communication, and attention to detail made the entire process easier.",
    role: "Head of Digital",
    company: "Growing Enterprise",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#f7f6f2] px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1440px]">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-black/50">
          Client feedback
        </p>

        <h2 className="mb-12 text-4xl font-medium tracking-tight md:text-6xl">
          Good work. Good relationships.
        </h2>

        <div className="grid gap-5 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <motion.blockquote
              key={item.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="rounded-2xl border border-black/10 bg-white p-7 md:p-10"
            >
              <span className="text-5xl text-lime-600">“</span>

              <p className="mt-4 text-xl leading-relaxed md:text-2xl">
                {item.quote}
              </p>

              <footer className="mt-8 border-t border-black/10 pt-5">
                <p className="font-semibold">{item.role}</p>
                <p className="mt-1 text-sm text-black/50">{item.company}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}