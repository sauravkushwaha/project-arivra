import { motion, useReducedMotion } from "framer-motion";
import {
  Globe,
  Code2,
  Bot,
  Workflow,
  Gauge,
  LifeBuoy,
  ArrowRight,
} from "lucide-react";

const SERVICES = [
  {
    icon: Globe,
    title: "Modern Website Development",
    description:
      "Fast, responsive, and SEO-friendly websites designed to build trust and convert visitors into customers.",
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Scalable web applications tailored to your business processes, operations, and future growth.",
  },
  {
    icon: Bot,
    title: "AI Solutions",
    description:
      "Integrate AI-powered features, assistants, and intelligent workflows that improve efficiency and customer experience.",
  },
  {
    icon: Workflow,
    title: "Business Automation",
    description:
      "Automate repetitive tasks and streamline operations using APIs, AI and workflow automation.",
  },
  {
    icon: Gauge,
    title: "Performance & SEO Optimization",
    description:
      "Improve website speed, technical SEO and overall user experience for better search visibility.",
  },
  {
    icon: LifeBuoy,
    title: "Maintenance & Support",
    description:
      "Reliable updates, monitoring, security improvements and ongoing technical support after launch.",
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

export default function Services() {
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
      id="services"
      aria-labelledby="services-heading"
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
            <span aria-hidden="true">⚡</span> What We Build
          </motion.span>

          <motion.h2
            id="services-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0.1}
            variants={fadeUp}
            className="text-3xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl"
          >
            Digital Solutions Built to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Scale
            </span>{" "}
            Businesses
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0.2}
            variants={fadeUp}
            className="mt-6 text-base leading-relaxed text-slate-600 dark:text-gray-400 sm:text-lg"
          >
            We help businesses build modern websites, custom software, AI-powered solutions, and
            intelligent automation designed for long-term growth.
          </motion.p>
        </div>

        {/* Service cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, description }, index) => (
            <motion.article
              key={title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={index * 0.08}
              variants={cardVariants}
              whileHover={shouldReduceMotion ? {} : { y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white/60 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 dark:border-gray-800 dark:bg-white/[0.03] dark:hover:shadow-blue-500/10 sm:p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 shadow-md shadow-blue-600/20 transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>

              <h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
                {title}
              </h3>

              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-600 dark:text-gray-400">
                {description}
              </p>

              <a
                href="#services"
                className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-md text-sm font-semibold text-blue-600 transition-all duration-300 hover:gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-blue-400 dark:focus-visible:ring-offset-[#030712]"
              >
                Learn More
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.article>
          ))}
        </div>

        {/* CTA banner */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0.1}
          variants={fadeUp}
          className="relative mt-20 overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-14 text-center shadow-xl shadow-blue-600/20 dark:shadow-black/40 sm:px-16"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, white 0%, transparent 50%), radial-gradient(circle at 80% 80%, white 0%, transparent 50%)",
            }}
          />
          <div className="relative">
            <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Ready to Build Your Next Digital Product?
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-blue-50 sm:text-lg">
              Let's discuss your idea and create a solution tailored to your business goals.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#book-call"
                className="inline-flex w-full items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-blue-600 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600 sm:w-auto"
              >
                Book a Free Call
              </a>
              <a
                href="#case-studies"
                className="group inline-flex w-full items-center justify-center gap-1.5 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600 sm:w-auto"
              >
                View Case Studies
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}