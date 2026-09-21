import { motion, useReducedMotion } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description:
      "We understand your business, goals, audience and project requirements before writing a single line of code.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Strategy & Design",
    description:
      "We define the roadmap, user experience, technical architecture and project milestones.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Development",
    description:
      "We build scalable, high-performance digital solutions using modern technologies and engineering best practices.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Growth",
    description:
      "After launch we continue optimizing, maintaining and supporting your digital product for long-term success.",
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

export default function Process() {
  const shouldReduceMotion = useReducedMotion();

  const stepVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  const connectorVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.3 },
    },
  };

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
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
            <span aria-hidden="true">⚙</span> Our Process
          </motion.span>

          <motion.h2
            id="process-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0.1}
            variants={fadeUp}
            className="text-3xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl"
          >
            A Simple Process.{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Exceptional Results.
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
            From discovery to deployment, every project follows a structured
            process designed to deliver high-quality digital solutions on
            time.
          </motion.p>
        </div>

        {/* Timeline */}
        <div
          role="list"
          aria-label="Our four-step process"
          className="relative mt-20"
        >
          {/* Desktop connector line (track + animated fill) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-slate-200 dark:bg-gray-800 lg:block"
            style={{ marginInline: "calc(100% / 8)" }}
          />
          <motion.div
            aria-hidden="true"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={connectorVariants}
            className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px origin-left bg-gradient-to-r from-blue-600 to-blue-400 lg:block"
            style={{ marginInline: "calc(100% / 8)" }}
          />

          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-14 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-0">
            {STEPS.map(({ number, icon: Icon, title, description }, index) => (
              <motion.div
                key={number}
                role="listitem"
                tabIndex={0}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={index * 0.15}
                variants={stepVariants}
                whileHover={shouldReduceMotion ? {} : { y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative flex flex-col items-center rounded-2xl px-4 py-2 text-center outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#030712] lg:items-center"
              >
                {/* Vertical connector for mobile/tablet */}
                {index !== STEPS.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute left-1/2 top-14 h-[calc(100%+2.5rem)] w-px -translate-x-1/2 bg-gradient-to-b from-blue-500/40 to-transparent sm:hidden"
                  />
                )}

                {/* Icon node */}
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-blue-500/30 bg-white shadow-md shadow-blue-600/10 transition-transform duration-300 group-hover:scale-110 dark:border-blue-400/30 dark:bg-[#0b1220]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-500 shadow-inner shadow-blue-900/10">
                    <Icon
                      className="h-5 w-5 text-white"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <span
                  aria-hidden="true"
                  className="mt-4 text-sm font-semibold tracking-widest text-blue-600 dark:text-blue-400"
                >
                  STEP {number}
                </span>

                <h3 className="mt-2 text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
                  {title}
                </h3>

                <p className="mt-2.5 max-w-xs text-sm leading-relaxed text-slate-600 dark:text-gray-400">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing statement */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0.1}
          variants={fadeUp}
          className="mx-auto mt-20 max-w-2xl text-center text-base leading-relaxed text-slate-600 dark:text-gray-400 sm:text-lg"
        >
          Every successful project starts with a clear process. Our
          structured approach ensures faster delivery, better collaboration
          and long-term success.
        </motion.p>
      </div>
    </section>
  );
}