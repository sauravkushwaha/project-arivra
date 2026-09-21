import { motion, useReducedMotion } from "framer-motion";
import {
  Lightbulb,
  Trophy,
  Eye,
  Shield,
  Zap,
  Users,
  BookOpen,
  Code2,
  Cpu,
  Cloud,
  GitBranch,
  Rocket,
  Brain,
  ArrowRight,
  Building,
  Server,
  Database,
  Palette,
  Package,
  MessageSquare,
} from "lucide-react";

const CORE_VALUES = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We continuously explore new technologies and approaches to solve complex problems.",
  },
  {
    icon: Trophy,
    title: "Quality",
    description: "Every line of code, every design decision is built to the highest standards.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Clear communication and honest partnerships form the foundation of our work.",
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "Your projects are built on solid engineering practices and best practices.",
  },
  {
    icon: Users,
    title: "Long-Term Partnership",
    description: "We invest in your success beyond launch with ongoing support and collaboration.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Our team stays ahead by learning new skills and industry trends constantly.",
  },
];

const WHY_ARIVRA = [
  {
    icon: Code2,
    title: "Modern Engineering",
    description:
      "Built on the latest technologies and best practices, our solutions are scalable, maintainable and future-proof.",
  },
  {
    icon: Brain,
    title: "AI-First Approach",
    description:
      "We integrate intelligent automation and AI-powered features to give your business a competitive edge.",
  },
  {
    icon: Rocket,
    title: "Business-Focused Solutions",
    description:
      "Every feature, every decision is tied to your business goals. We engineer for results, not complexity.",
  },
];

const TECHNOLOGY_STACK = [
  { name: "React", Icon: Code2 },
  { name: "Next.js", Icon: Rocket },
  { name: "Node.js", Icon: Server },
  { name: "Express.js", Icon: Server },
  { name: "MongoDB", Icon: Database },
  { name: "Tailwind CSS", Icon: Palette },
  { name: "Framer Motion", Icon: Zap },
  { name: "Docker", Icon: Package },
  { name: "AWS", Icon: Cloud },
  { name: "GitHub", Icon: GitBranch },
  { name: "OpenAI", Icon: Brain },
  { name: "n8n", Icon: MessageSquare },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function About() {
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
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-white py-24 transition-colors duration-300 dark:bg-[#030712] sm:py-32">
        {/* Grid texture — light mode */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.04] dark:hidden"
          style={{
            backgroundImage:
              "linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 90%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 90%)",
          }}
        />
        {/* Grid texture — dark mode */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden opacity-[0.07] dark:block"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 90%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 90%)",
          }}
        />
        {/* Radial glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-1/2 h-[36rem] w-[36rem] -translate-y-1/2 translate-x-1/4 rounded-full bg-blue-500/10 blur-[130px] dark:bg-blue-600/25 lg:right-[8%]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-0 h-[26rem] w-[26rem] rounded-full bg-blue-400/5 blur-[110px] dark:bg-blue-500/10"
        />

        <div className="relative mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-12 xl:px-16">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <motion.span
              initial="hidden"
              animate="visible"
              custom={0}
              variants={fadeUp}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-900/5 px-4 py-1.5 text-sm text-slate-600 backdrop-blur-md dark:border-gray-800 dark:bg-white/5 dark:text-gray-300"
            >
              <Building className="h-4 w-4" />
              About Arivra
            </motion.span>

            <motion.h1
              initial="hidden"
              animate="visible"
              custom={0.1}
              variants={fadeUp}
              className="text-4xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl"
            >
              Engineering{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Digital Excellence
              </span>
              .
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              custom={0.2}
              variants={fadeUp}
              className="mt-6 max-w-[720px] text-base leading-relaxed text-slate-600 dark:text-gray-400 sm:text-lg"
            >
              Arivra is a modern digital engineering company helping businesses build premium
              websites, scalable software, AI-powered solutions and intelligent automation for
              long-term growth.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="relative w-full bg-white py-20 transition-colors duration-300 dark:bg-[#030712] sm:py-28">
        <div className="relative mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-12 xl:px-16">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
            variants={fadeUp}
            className="text-3xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-4xl"
          >
            Built with Purpose.
            <br />
            Growing with Innovation.
          </motion.h2>

          <div className="mt-10 space-y-6 text-base leading-relaxed text-slate-600 dark:text-gray-400 sm:text-lg">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={0.1}
              variants={fadeUp}
            >
              Arivra was founded with one simple belief — technology should solve real business
              problems, not create unnecessary complexity.
            </motion.p>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={0.2}
              variants={fadeUp}
            >
              We focus on building scalable digital products, AI-powered solutions and business
              automation that help companies grow with confidence.
            </motion.p>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={0.3}
              variants={fadeUp}
            >
              Every project is approached with engineering excellence, transparency and long-term
              thinking.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="relative w-full bg-white py-20 transition-colors duration-300 dark:bg-[#030712] sm:py-28">
        <div className="relative mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {[
              {
                title: "Mission",
                description:
                  "Engineer reliable, scalable and intelligent digital solutions that empower businesses to grow faster.",
              },
              {
                title: "Vision",
                description:
                  "Become a globally trusted digital engineering company known for innovation, quality and long-term partnerships.",
              },
            ].map(({ title, description }, index) => (
              <motion.article
                key={title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={index * 0.1}
                variants={cardVariants}
                whileHover={shouldReduceMotion ? {} : { y: -6 }}
                className="rounded-2xl border border-slate-200 bg-white/60 p-8 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 dark:border-gray-800 dark:bg-white/[0.03] dark:hover:shadow-blue-500/10 sm:p-10"
              >
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                  {title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-gray-400">
                  {description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="relative w-full bg-white py-20 transition-colors duration-300 dark:bg-[#030712] sm:py-28">
        <div className="relative mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-12 xl:px-16">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
            variants={fadeUp}
            className="text-center text-3xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-4xl"
          >
            Our Core Values
          </motion.h2>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CORE_VALUES.map(({ icon: Icon, title, description }, index) => (
              <motion.article
                key={title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={index * 0.08}
                variants={cardVariants}
                whileHover={shouldReduceMotion ? {} : { y: -6 }}
                className="rounded-2xl border border-slate-200 bg-white/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 dark:border-gray-800 dark:bg-white/[0.03] dark:hover:shadow-blue-500/10 sm:p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 shadow-md shadow-blue-600/20">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-gray-400">
                  {description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Arivra Section */}
      <section className="relative w-full bg-white py-20 transition-colors duration-300 dark:bg-[#030712] sm:py-28">
        <div className="relative mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-12 xl:px-16">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
            variants={fadeUp}
            className="text-center text-3xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-4xl"
          >
            Why Choose Arivra
          </motion.h2>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_ARIVRA.map(({ icon: Icon, title, description }, index) => (
              <motion.article
                key={title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={index * 0.1}
                variants={cardVariants}
                whileHover={shouldReduceMotion ? {} : { y: -6 }}
                className="rounded-2xl border border-slate-200 bg-white/60 p-8 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 dark:border-gray-800 dark:bg-white/[0.03] dark:hover:shadow-blue-500/10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 shadow-md shadow-blue-600/20">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900 dark:text-white">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-gray-400">
                  {description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="relative w-full bg-white py-20 transition-colors duration-300 dark:bg-[#030712] sm:py-28">
        <div className="relative mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-12 xl:px-16">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
            variants={fadeUp}
            className="text-center text-3xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-4xl"
          >
            Technology Stack
          </motion.h2>

          <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {TECHNOLOGY_STACK.map(({ name, Icon }, index) => (
              <motion.div
                key={name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={index * 0.05}
                variants={cardVariants}
                whileHover={shouldReduceMotion ? {} : { y: -4 }}
                className="group rounded-xl border border-slate-200 bg-white/60 p-4 text-center backdrop-blur-xl transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 dark:border-gray-800 dark:bg-white/[0.03] dark:hover:shadow-blue-500/10"
              >
                <div className="flex justify-center">
                  <Icon className="h-8 w-8 text-blue-600 transition-transform duration-300 group-hover:scale-110 dark:text-blue-400" />
                </div>
                <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
                  {name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      {/* <section className="relative w-full overflow-hidden bg-white py-24 transition-colors duration-300 dark:bg-[#030712] sm:py-32">
        <div className="relative mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-12 xl:px-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mx-auto flex max-w-2xl flex-col items-center text-center"
          >
            <motion.h2
              custom={0}
              variants={fadeUp}
              className="text-3xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl"
            >
              Let's Build Your Next Digital Product.
            </motion.h2>

            <motion.p
              custom={0.1}
              variants={fadeUp}
              className="mt-6 text-base leading-relaxed text-slate-600 dark:text-gray-400 sm:text-lg"
            >
              Whether you're launching a startup, growing an existing business or adopting AI,
              Arivra is ready to engineer scalable digital solutions tailored to your goals.
            </motion.p>

            <motion.div
              custom={0.2}
              variants={fadeUp}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center"
            >
              <a
                href="#book-call"
                className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-500 hover:to-blue-400 hover:shadow-xl hover:shadow-blue-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#030712] sm:w-auto"
              >
                Book a Free Strategy Call
              </a>
              <a
                href="#services"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-transparent px-7 py-3.5 text-sm font-semibold text-slate-900 transition-all duration-300 hover:border-blue-500 hover:bg-blue-500/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-gray-700 dark:text-white dark:hover:bg-blue-500/10 dark:focus-visible:ring-offset-[#030712] sm:w-auto"
              >
                View Services
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section> */}
    </main>
  );
}