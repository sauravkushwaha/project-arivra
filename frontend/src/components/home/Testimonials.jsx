import { motion, useReducedMotion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Ananya Sharma",
    designation: "Founder",
    company: "Northwind Retail",
    initials: "AS",
    rating: 5,
    review:
      "Working with Arivra was smooth, professional and highly collaborative. The final product exceeded our expectations.",
    projectType: "Website Development",
  },
  {
    name: "Daniel Reyes",
    designation: "Co-Founder",
    company: "Verve Logistics",
    initials: "DR",
    rating: 5,
    review:
      "The team understood our operational challenges instantly and shipped a custom platform that our staff actually enjoys using every day.",
    projectType: "Custom Software",
  },
  {
    name: "Priya Menon",
    designation: "Head of Growth",
    company: "Loopwave Media",
    initials: "PM",
    rating: 5,
    review:
      "Arivra's AI automation cut our manual workload dramatically. Clear communication, fast delivery, and genuinely thoughtful engineering throughout.",
    projectType: "AI Solutions",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Testimonials() {
  const shouldReduceMotion = useReducedMotion();

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative w-full overflow-hidden bg-white py-24 transition-colors duration-300 dark:bg-[#030712] sm:py-32"
    >
      {/* Grid texture — light mode */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04] dark:hidden"
        style={{
          backgroundImage:
            "linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 70% 50% at 50% 20%, black 40%, transparent 90%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 50% at 50% 20%, black 40%, transparent 90%)",
        }}
      />
      {/* Grid texture — dark mode */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden opacity-[0.06] dark:block"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 70% 50% at 50% 20%, black 40%, transparent 90%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 50% at 50% 20%, black 40%, transparent 90%)",
        }}
      />
      {/* Radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[28rem] w-[56rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-blue-500/10 blur-[140px] dark:bg-blue-600/20"
      />

      <div className="relative mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-12 xl:px-16">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto flex max-w-2xl flex-col items-center text-center"
        >
          <motion.span
            custom={0}
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-900/5 px-4 py-1.5 text-sm text-slate-600 backdrop-blur-md dark:border-gray-800 dark:bg-white/5 dark:text-gray-300"
          >
            <span aria-hidden="true">💬</span> Testimonials
          </motion.span>

          <motion.h2
            id="testimonials-heading"
            custom={0.1}
            variants={fadeUp}
            className="text-3xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl"
          >
            Trusted by Businesses.
            <br />
            Built for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Long-Term Partnerships
            </span>
            .
          </motion.h2>

          <motion.p
            custom={0.2}
            variants={fadeUp}
            className="mx-auto mt-6 max-w-[700px] text-base leading-relaxed text-slate-600 dark:text-gray-400 sm:text-lg"
          >
            We believe successful projects are built on trust, transparency and long-term
            collaboration. Every partnership helps us create better digital experiences.
          </motion.p>
        </motion.div>

        {/* Testimonials grid / mobile scroll */}
        <div className="mt-16 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-3">
          {TESTIMONIALS.map(({ name, designation, company, initials, rating, review, projectType }, index) => (
            <motion.article
              key={name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={index * 0.12}
              variants={cardVariants}
              whileHover={shouldReduceMotion ? {} : { y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group relative flex w-[85%] shrink-0 snap-start flex-col rounded-2xl border border-slate-200 bg-white/60 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 dark:border-gray-800 dark:bg-white/[0.03] dark:hover:shadow-blue-500/10 sm:w-auto sm:shrink sm:p-7"
            >
              <Quote
                aria-hidden="true"
                className="h-8 w-8 text-blue-500/20 dark:text-blue-400/20"
              />

              <div
                className="mt-3 flex items-center gap-1"
                role="img"
                aria-label={`${rating} out of 5 stars`}
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < rating
                        ? "fill-blue-500 text-blue-500 dark:fill-blue-400 dark:text-blue-400"
                        : "fill-slate-200 text-slate-200 dark:fill-gray-800 dark:text-gray-800"
                    }`}
                  />
                ))}
              </div>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600 dark:text-gray-300">
                "{review}"
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-slate-200 pt-5 dark:border-gray-800">
                <div
                  aria-hidden="true"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-500 text-sm font-semibold text-white shadow-md shadow-blue-600/20"
                >
                  {initials}
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-slate-900 dark:text-white">
                    {name}
                  </p>
                  <p className="truncate text-xs text-slate-500 dark:text-gray-400">
                    {designation} · {company}
                  </p>
                </div>
              </div>

              <span className="mt-5 inline-flex w-fit items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-600 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-400">
                {projectType}
              </span>
            </motion.article>
          ))}
        </div>

        {/* Trust statement */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          custom={0.1}
          variants={fadeUp}
          className="mx-auto mt-16 max-w-2xl text-center text-base leading-relaxed text-slate-600 dark:text-gray-400 sm:text-lg"
        >
          Your success is our strongest testimonial. We look forward to building long-term
          partnerships with businesses that value quality, innovation and trust.
        </motion.p>
      </div>
    </section>
  );
}