import { motion, useReducedMotion } from "framer-motion";
import {
  CheckCircle2,
  ChevronDown,
  Zap,
  Rocket,
  TrendingUp,
  ShieldCheck,
  BarChart3,
  Gauge,
  Bot,
  Code2,
  ThumbsUp,
  ArrowUpRight,
} from "lucide-react";

const TRUST_ITEMS = ["Custom Software Development", "AI-Powered Solutions", "Long-Term Technical Support"];

const FLOATING_CARDS = [
  { icon: Zap, label: "AI Powered", className: "-top-3 -left-3", duration: 4.2, delay: 0 },
  { icon: TrendingUp, label: "Growth Focused", className: "-top-3 -right-3", duration: 4.8, delay: 0.4 },
  { icon: ShieldCheck, label: "Secure", className: "-bottom-3 -left-3", duration: 4.5, delay: 0.8 },
  { icon: Rocket, label: "Fast Performance", className: "-bottom-3 -right-3", duration: 4.0, delay: 1.2 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const floatAnimation = (duration, delay) =>
    shouldReduceMotion
      ? {}
      : {
          animate: { y: [0, -10, 0] },
          transition: { duration, repeat: Infinity, ease: "easeInOut", delay },
        };

  return (
    <section className="relative flex min-h-screen w-full items-center overflow-x-clip overflow-y-hidden bg-white dark:bg-[#030712] transition-colors duration-300">
      {/* Grid texture — light mode */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.08] dark:hidden"
        style={{
          backgroundImage:
            "linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 90%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 90%)",
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
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 90%)",
        }}
      />

      {/* Radial glow behind dashboard */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 h-[36rem] w-[36rem] -translate-y-1/2 translate-x-1/4 rounded-full bg-blue-500/10 dark:bg-blue-600/25 blur-[130px] lg:right-[8%]"
      />
      {/* Secondary soft glow, top-left, for balance */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-0 h-[26rem] w-[26rem] rounded-full bg-blue-400/5 dark:bg-blue-500/10 blur-[110px]"
      />

      <div className="relative mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-16 px-6 py-32 sm:px-10 lg:grid-cols-[60%_40%] lg:gap-8 lg:px-12 lg:py-24 xl:px-16">
        {/* Left column — content */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          

          <motion.h1
            custom={0.1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl"
          >
             Websites,{" "}
            <br/>
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              AI Solutions
            </span>{" "}
            &
            <br />
            Scalable Software.
          </motion.h1>

          <motion.p
            custom={0.25}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-6 max-w-[560px] text-base leading-relaxed text-slate-600 dark:text-gray-400 sm:text-lg"
          >
            Arivra partners with startups and enterprises to design and ship exceptional digital experiences, intelligent automations, and scalable engineering systems — built to perform, engineered to scale.
          </motion.p>

          <motion.div
            custom={0.4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row"
          >
            <a
              href="#start-project"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-500 hover:to-blue-400 hover:shadow-xl hover:shadow-blue-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#030712] sm:w-auto"
            >
              Start Your Project
            </a>
            <a
              href="#case-studies"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-transparent px-7 py-3.5 text-sm font-semibold text-slate-900 transition-all duration-300 hover:border-blue-500 hover:bg-blue-500/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-gray-700 dark:text-white dark:hover:bg-blue-500/10 dark:focus-visible:ring-offset-[#030712] sm:w-auto"
            >
              View Case Studies
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          <motion.ul
            custom={0.55}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-10 flex flex-col flex-wrap items-center gap-x-8 gap-y-3 text-sm text-slate-500 dark:text-gray-400 sm:flex-row"
          >
            {TRUST_ITEMS.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" />
                {item}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Right column — dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-[480px] lg:max-w-none lg:-mt-8"
        >
          <div
            aria-hidden="true"
            className="relative overflow-hidden rounded-2xl border border-gray-800 bg-[#0b1220] shadow-2xl shadow-black/50 backdrop-blur-xl"
          >
            {/* Glass sheen */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/[0.06] to-transparent" />

            {/* Browser chrome */}
            <div className="relative flex items-center gap-1.5 border-b border-gray-800 bg-white/[0.02] px-5 py-3.5">
              <span className="h-2.5 w-2.5 rounded-full bg-gray-600" />
              <span className="h-2.5 w-2.5 rounded-full bg-gray-600" />
              <span className="h-2.5 w-2.5 rounded-full bg-gray-600" />
              <span className="ml-3 rounded-md bg-white/5 px-3 py-1 text-xs text-gray-300">
                app.arivra.com
              </span>
            </div>

            {/* Dashboard body */}
            <div className="relative grid grid-cols-2 gap-4 p-5">
              <div className="col-span-2 rounded-xl border border-gray-800 bg-white/[0.03] p-5">
                <div className="mb-3 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-sm font-medium text-gray-300">
                    <BarChart3 className="h-4 w-4 text-blue-400" />
                    Project Pipeline
                  </span>
                  <span className="text-xs text-blue-400">6 Active</span>
                </div>
                <div className="flex h-20 items-end gap-1.5">
                  {[40, 65, 45, 80, 60, 95, 70].map((h, i) => (
                    <span
                      key={i}
                      className="flex-1 rounded-t-sm bg-gradient-to-t from-blue-600 to-blue-400/70"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-gray-800 bg-white/[0.03] p-5">
                <span className="flex items-center gap-1.5 text-sm font-medium text-gray-300">
                  <Bot className="h-4 w-4 text-blue-400" />
                  AI Automation
                </span>
                <p className="mt-2 text-3xl font-bold text-white">12 Tasks</p>
              </div>

              <div className="rounded-xl border border-gray-800 bg-white/[0.03] p-5">
                <span className="flex items-center gap-1.5 text-sm font-medium text-gray-300">
                  <Gauge className="h-4 w-4 text-blue-400" />
                  Performance
                </span>
                <p className="mt-2 text-3xl font-bold text-white">98%</p>
              </div>

              <div className="col-span-2 rounded-xl border border-gray-800 bg-white/[0.03] p-5">
                <span className="flex items-center gap-1.5 text-sm font-medium text-gray-300">
                  <Code2 className="h-4 w-4 text-blue-400" />
                  Website Development
                </span>
                <div className="mt-2.5 h-1.5 w-full rounded-full bg-white/5">
                  <div className="h-1.5 w-4/5 rounded-full bg-gradient-to-r from-blue-600 to-blue-400" />
                </div>
                <p className="mt-1.5 text-xs text-gray-500">In Development · 80%</p>
              </div>

              <div className="col-span-2 flex items-center gap-2.5 rounded-xl border border-gray-800 bg-white/[0.03] p-3.5">
                <ThumbsUp className="h-4 w-4 shrink-0 text-blue-400" />
                <p className="truncate text-xs text-gray-400">
                  Client approved: "Exceeded expectations!"
                </p>
              </div>
            </div>
          </div>

          {/* Floating cards */}
          {FLOATING_CARDS.map(({ icon: Icon, label, className, duration, delay }) => (
            <motion.div
              key={label}
              {...floatAnimation(duration, delay)}
              className={`absolute z-20 hidden items-center gap-2 rounded-xl border border-gray-800 bg-[#0b1220] px-3 py-2 text-xs font-medium text-white shadow-lg shadow-black/40 backdrop-blur-md sm:flex ${className}`}
            >
              <Icon className="h-3.5 w-3.5 text-blue-400" />
              {label}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        {...(shouldReduceMotion
          ? {}
          : { animate: { y: [0, 6, 0] }, transition: { duration: 1.8, repeat: Infinity, ease: "easeInOut" } })}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-slate-400 dark:text-gray-500"
      >
        <span className="text-xs">Scroll to Explore</span>
        <ChevronDown className="h-4 w-4" />
      </motion.div>
    </section>
  );
}