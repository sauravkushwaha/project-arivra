import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck, Zap, Bot, Gauge, Users, Sparkles } from "lucide-react";

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Quality First",
    description:
      "Clean architecture, maintainable code and scalable engineering practices.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Rapid execution without compromising quality.",
  },
  {
    icon: Bot,
    title: "AI Ready",
    description:
      "Every solution is designed with AI integration and automation in mind.",
  },
  {
    icon: Gauge,
    title: "Performance Focused",
    description: "Optimized for Core Web Vitals, SEO and speed.",
  },
  {
    icon: Users,
    title: "Long-Term Partnership",
    description:
      "Continuous support, maintenance and future improvements after launch.",
  },
  {
    icon: Sparkles,
    title: "Premium Experience",
    description: "Modern UI, smooth interactions and exceptional user experience.",
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

export default function WhyChooseArivra() {
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
      id="why-choose-arivra"
      aria-labelledby="why-choose-heading"
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
          maskImage:
            "radial-gradient(ellipse 70% 50% at 50% 20%, black 40%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 50% at 50% 20%, black 40%, transparent 90%)",
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
          maskImage:
            "radial-gradient(ellipse 70% 50% at 50% 20%, black 40%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 50% at 50% 20%, black 40%, transparent 90%)",
        }}
      />
      {/* Radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[30rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[140px] dark:bg-blue-600/20"
      />

      <div className="relative mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-900/5 px-4 py-1.5 text-sm text-slate-600 backdrop-blur-md dark:border-gray-800 dark:bg-white/5 dark:text-gray-300"
          >
            <span aria-hidden="true">✨</span> Why Choose Arivra
          </motion.span>

          <motion.h2
            id="why-choose-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0.1}
            variants={fadeUp}
            className="text-3xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl"
          >
            Why Businesses Choose{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Arivra
            </span>
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0.2}
            variants={fadeUp}
            className="mt-6 max-w-[700px] text-base leading-relaxed text-slate-600 dark:text-gray-400 sm:text-lg"
          >
            We focus on scalable engineering, AI-driven automation and
            long-term partnerships, not just shipping websites. Every project
            is built to grow with your business.
          </motion.p>
        </div>

        {/* Feature grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, description }, index) => (
            <motion.article
              key={title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={index * 0.08}
              variants={cardVariants}
              whileHover={shouldReduceMotion ? {} : { y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              tabIndex={0}
              className="group relative flex flex-col rounded-[24px] border border-slate-200 bg-white/60 p-6 shadow-sm outline-none transition-all duration-300 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-gray-800 dark:bg-white/[0.03] dark:hover:shadow-blue-500/10 dark:focus-visible:ring-offset-[#030712] sm:p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 shadow-md shadow-blue-600/20 transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>

              <h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
                {title}
              </h3>

              <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-gray-400">
                {description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}