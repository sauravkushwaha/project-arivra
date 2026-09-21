import { useId, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Globe2,
  Cpu,
  Sparkles,
  Workflow,
  Gauge,
  ShieldCheck,
  Compass,
  ClipboardList,
  PenTool,
  Code2,
  FlaskConical,
  Rocket,
  LifeBuoy,
  Atom,
  Hexagon,
  Server,
  Route,
  Database,
  Palette,
  Move,
  Box,
  Cloud,
  GitBranch,
  Workflow as WorkflowIcon,
  HeartPulse,
  GraduationCap,
  Landmark,
  Building2,
  ShoppingCart,
  CloudCog,
  Layers,
  Handshake,
  Plus,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data — swap any array for an API response with no other changes.  */
/* ------------------------------------------------------------------ */

const services = [
  {
    slug: "website-development",
    icon: Globe2,
    name: "Website Development",
    description:
      "Fast, responsive websites built on modern frameworks — engineered to convert and scale with your business.",
    features: ["Responsive UI", "SEO-Ready", "Fast Performance", "CMS Ready"],
  },
  {
    slug: "custom-software",
    icon: Cpu,
    name: "Custom Software Development",
    description:
      "Tailored applications built around your exact business logic — secure, scalable and production-grade.",
    features: ["Scalable Architecture", "Secure Auth", "API Integrations", "Cloud-Ready"],
  },
  {
    slug: "ai-solutions",
    icon: Sparkles,
    name: "AI Solutions",
    description:
      "AI assistants and intelligent tools built on production-grade LLM integrations, tailored to your workflow.",
    features: ["AI Assistants", "LLM Integration", "Smart Chatbots", "Data Insights"],
  },
  {
    slug: "automation",
    icon: Workflow,
    name: "Business Automation",
    description:
      "Automated workflows that remove manual, repetitive work — connecting your tools so your team can focus on growth.",
    features: ["Workflow Automation", "Tool Integrations", "Real-Time Alerts", "Custom Logic"],
  },
  {
    slug: "performance-seo",
    icon: Gauge,
    name: "Performance & SEO",
    description:
      "Technical performance and search optimization that gets your product found faster and felt as faster.",
    features: ["Core Web Vitals", "Technical SEO", "Asset Optimization", "Analytics Setup"],
  },
  {
    slug: "maintenance",
    icon: ShieldCheck,
    name: "Maintenance & Support",
    description:
      "Long-term technical support that keeps your product secure, stable and improving well after launch.",
    features: ["Regular Updates", "Security Monitoring", "Bug Fixes", "Priority Support"],
  },
];

const whyChoose = [
  {
    icon: Layers,
    title: "Modern Engineering",
    description:
      "Clean, scalable architecture built with current best practices — code that's built to last, not just to ship.",
  },
  {
    icon: Sparkles,
    title: "AI First",
    description:
      "Every solution is designed with intelligent automation in mind, so your product is ready for what's next.",
  },
  {
    icon: Handshake,
    title: "Long Term Partnership",
    description:
      "We stay involved after launch — with ongoing support, monitoring and continuous improvement.",
  },
];

const processSteps = [
  { icon: Compass, title: "Discovery", description: "Understanding your goals and requirements." },
  { icon: ClipboardList, title: "Planning", description: "Scoping architecture and timelines." },
  { icon: PenTool, title: "Design", description: "Crafting premium, on-brand interfaces." },
  { icon: Code2, title: "Development", description: "Building with clean, scalable code." },
  { icon: FlaskConical, title: "Testing", description: "Rigorous QA across devices and cases." },
  { icon: Rocket, title: "Deployment", description: "Shipping with zero-downtime releases." },
  { icon: LifeBuoy, title: "Support", description: "Ongoing maintenance and long-term care." },
];

const techStack = [
  { name: "React", icon: Atom },
  { name: "Next.js", icon: Hexagon },
  { name: "Node.js", icon: Server },
  { name: "Express", icon: Route },
  { name: "MongoDB", icon: Database },
  { name: "Tailwind", icon: Palette },
  { name: "Framer Motion", icon: Move },
  { name: "Docker", icon: Box },
  { name: "AWS", icon: Cloud },
  { name: "GitHub", icon: GitBranch },
  { name: "OpenAI", icon: Sparkles },
  { name: "n8n", icon: WorkflowIcon },
];

const industries = [
  { name: "Startups", icon: Rocket },
  { name: "Healthcare", icon: HeartPulse },
  { name: "Finance", icon: Landmark },
  { name: "Education", icon: GraduationCap },
  { name: "Real Estate", icon: Building2 },
  { name: "E-commerce", icon: ShoppingCart },
  { name: "SaaS", icon: CloudCog },
  { name: "Enterprise", icon: Building2 },
];

const faqs = [
  {
    question: "What is the typical process for starting a project?",
    answer:
      "Every engagement starts with a discovery call to understand your goals, followed by a scoped proposal covering timeline, deliverables and pricing before any development begins.",
  },
  {
    question: "Do you offer fixed-price or hourly billing?",
    answer:
      "Both. Well-defined projects are typically fixed-price, while ongoing work, automation and maintenance are often billed hourly or on a retainer basis.",
  },
  {
    question: "Can you work with our existing development team?",
    answer:
      "Yes. We regularly collaborate alongside in-house teams, integrating into existing repositories, workflows and communication tools without disrupting your process.",
  },
  {
    question: "Do you sign NDAs before starting a project?",
    answer:
      "Absolutely. We're happy to sign an NDA before any detailed discussion so your product, data and business plans stay fully protected.",
  },
  {
    question: "What happens after the project is delivered?",
    answer:
      "We offer ongoing maintenance and support plans covering updates, monitoring and priority fixes, so your product stays secure and stable long after launch.",
  },
  {
    question: "Do you build AI features into existing products?",
    answer:
      "Yes. We integrate AI assistants, automation and LLM-powered features directly into existing applications, without requiring a full rebuild.",
  },
];

/* ------------------------------------------------------------------ */
/*  Shared motion presets                                             */
/* ------------------------------------------------------------------ */

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.08 } },
  viewport: { once: true, margin: "-80px" },
};

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
};

/* ------------------------------------------------------------------ */
/*  Shared building blocks                                            */
/* ------------------------------------------------------------------ */

function Eyebrow({ children }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full border border-blue-400/30
        bg-blue-500/5 dark:bg-blue-500/10 px-4 py-1.5 text-sm font-medium
        text-blue-700 dark:text-blue-300 backdrop-blur-sm"
    >
      {children}
    </span>
  );
}

function SectionHeading({ eyebrow, icon: Icon, title, highlight, description }) {
  return (
    <motion.div {...fadeUp} className="flex flex-col items-center text-center mx-auto max-w-2xl motion-reduce:transform-none">
      <Eyebrow>
        {Icon && <Icon className="h-4 w-4" strokeWidth={2} />}
        {eyebrow}
      </Eyebrow>
      <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white">
        {title}{" "}
        {highlight && (
          <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </h2>
      {description && (
        <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-400">
          {description}
        </p>
      )}
    </motion.div>
  );
}

function GridBackdrop() {
  return (
    <>
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
    </>
  );
}

function GlowAccent({ className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full bg-blue-500/10 blur-[120px] ${className}`}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <GridBackdrop />
      <GlowAccent className="left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div {...fadeUp}>
          <Eyebrow>
            <Sparkles className="h-4 w-4" strokeWidth={2} />
            Our Services
          </Eyebrow>
        </motion.div>

        <motion.h1
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.05 }}
          className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-slate-900 dark:text-white motion-reduce:transform-none"
        >
          Engineering Solutions
          <br />
          For{" "}
          <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Modern Businesses.
          </span>
        </motion.h1>

        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-400 motion-reduce:transform-none"
        >
          Arivra builds premium websites, custom software, AI-powered solutions and
          intelligent automation — engineered to help modern businesses grow faster.
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.15 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 motion-reduce:transform-none"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500
              px-7 py-3.5 text-sm font-medium text-white shadow-lg shadow-blue-500/25
              transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-blue-500/40
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
              focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950 motion-reduce:hover:translate-y-0"
          >
            Book a Strategy Call
            <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
          </Link>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-white/15
              bg-white/60 dark:bg-white/[0.03] backdrop-blur-xl px-7 py-3.5 text-sm font-medium
              text-slate-700 dark:text-slate-200 transition-colors duration-300
              hover:border-blue-400/50 hover:text-slate-900 dark:hover:text-white
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
              focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950"
          >
            View Case Studies
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Services Grid                                                      */
/* ------------------------------------------------------------------ */

function ServiceCard({ service }) {
  const Icon = service.icon;
  return (
    <motion.div
      variants={staggerItem}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className="group relative flex flex-col rounded-3xl border border-slate-200 dark:border-white/10
        bg-white/60 dark:bg-white/[0.03] backdrop-blur-xl p-8 shadow-sm
        transition-colors duration-300 hover:border-blue-400/40 motion-reduce:hover:translate-y-0"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500
          bg-[radial-gradient(500px_100px_at_50%_0%,rgba(59,130,246,0.12),transparent_70%)]
          group-hover:opacity-100"
      />

      <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 border border-blue-400/30">
        <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" strokeWidth={1.75} />
      </div>

      <h3 className="relative mt-5 text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
        {service.name}
      </h3>
      <p className="relative mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        {service.description}
      </p>

      <div className="relative mt-5 flex flex-wrap gap-2">
        {service.features.map((feature) => (
          <span
            key={feature}
            className="rounded-full border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5
              px-3 py-1 text-xs font-medium text-slate-600 dark:text-slate-300"
          >
            {feature}
          </span>
        ))}
      </div>

      <Link
        to={`/services/${service.slug}`}
        className="relative mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 dark:text-blue-400
          transition-colors duration-300 hover:text-blue-700 dark:hover:text-blue-300
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
          focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950 rounded-md w-fit"
      >
        Learn More
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0" />
      </Link>
    </motion.div>
  );
}

function ServicesGrid() {
  return (
    <section id="services" aria-labelledby="services-heading" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 id="services-heading" className="sr-only">
          Our Services
        </h2>
        <motion.div
          {...staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Why Choose Arivra                                                  */
/* ------------------------------------------------------------------ */

function WhyChoose() {
  return (
    <section
      id="why-choose-arivra"
      aria-labelledby="why-choose-heading"
      className="relative scroll-mt-24 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Arivra"
          icon={ShieldCheck}
          title="Built On"
          highlight="Trust & Craft."
          description="Three principles guide every project we take on, from the first line of code to long after launch."
        />

        <motion.div
          {...staggerContainer}
          className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {whyChoose.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={staggerItem}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/[0.03]
                  backdrop-blur-xl p-8 text-center shadow-sm transition-colors duration-300
                  hover:border-blue-400/40 motion-reduce:hover:translate-y-0"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 border border-blue-400/30">
                  <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Development Process — horizontal timeline                         */
/* ------------------------------------------------------------------ */

function ProcessTimeline() {
  return (
    <section id="process" aria-labelledby="process-heading" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Process"
          icon={Compass}
          title="A Clear Path,"
          highlight="Start to Finish."
          description="Every project follows the same disciplined process — so you always know what's next."
        />

        <motion.div {...staggerContainer} className="mt-16 relative">
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-white/15 to-transparent"
          />
          <ol className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-8 lg:gap-4">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.li
                  key={step.title}
                  variants={staggerItem}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="relative flex flex-col items-center text-center motion-reduce:transform-none"
                >
                  <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-blue-400/40 bg-white dark:bg-slate-950 shadow-sm">
                    <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" strokeWidth={1.75} />
                  </span>
                  <span className="mt-4 text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">{step.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                    {step.description}
                  </p>
                </motion.li>
              );
            })}
          </ol>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Technology Stack                                                   */
/* ------------------------------------------------------------------ */

function TechStack() {
  return (
    <section id="tech-stack" aria-labelledby="tech-stack-heading" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Technology Stack"
          icon={Code2}
          title="Built With Tools"
          highlight="We Trust."
          description="A modern, production-grade stack chosen for performance, reliability and long-term maintainability."
        />

        <motion.div
          {...staggerContainer}
          className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          {techStack.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.name}
                variants={staggerItem}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 dark:border-white/10
                  bg-white/60 dark:bg-white/[0.03] backdrop-blur-xl px-5 py-4 shadow-sm
                  transition-colors duration-300 hover:border-blue-400/40 motion-reduce:hover:translate-y-0"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-400/20">
                  <Icon className="h-4 w-4 text-blue-600 dark:text-blue-400" strokeWidth={1.75} />
                </span>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{item.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Industries We Serve                                                */
/* ------------------------------------------------------------------ */

function Industries() {
  return (
    <section id="industries" aria-labelledby="industries-heading" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industries We Serve"
          icon={Building2}
          title="Solutions Built For"
          highlight="Every Sector."
          description="From early-stage startups to established enterprises, we adapt our approach to your industry's needs."
        />

        <motion.div
          {...staggerContainer}
          className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.name}
                variants={staggerItem}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className="flex flex-col items-center gap-3 rounded-2xl border border-slate-200 dark:border-white/10
                  bg-white/60 dark:bg-white/[0.03] backdrop-blur-xl px-5 py-8 text-center shadow-sm
                  transition-colors duration-300 hover:border-blue-400/40 motion-reduce:hover:translate-y-0"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 border border-blue-400/20">
                  <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" strokeWidth={1.75} />
                </span>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{industry.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FAQ accordion                                                      */
/* ------------------------------------------------------------------ */

function FAQAccordionItem({ item, isOpen, onToggle }) {
  const panelId = useId();
  const buttonId = useId();

  return (
    <div
      className={`group relative rounded-2xl border transition-colors duration-300
        bg-white/60 dark:bg-white/[0.03] backdrop-blur-xl
        border-slate-200 dark:border-white/10
        ${isOpen ? "border-blue-400/60 dark:border-blue-400/40" : "hover:border-blue-400/40 dark:hover:border-blue-400/30"}`}
    >
      <h3 className="relative">
        <button
          id={buttonId}
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="flex w-full items-center justify-between gap-6 rounded-2xl px-6 py-5 sm:px-8 sm:py-6 text-left
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
            focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950"
        >
          <span
            className={`text-base sm:text-lg font-medium tracking-tight transition-colors duration-300
              ${isOpen ? "text-slate-900 dark:text-white" : "text-slate-700 dark:text-slate-200"}`}
          >
            {item.question}
          </span>
          <span
            className={`relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-300
              ${
                isOpen
                  ? "border-blue-400/60 bg-blue-500/10 text-blue-500 dark:text-blue-400"
                  : "border-slate-300 dark:border-white/15 text-slate-500 dark:text-slate-400"
              }`}
          >
            <motion.span
              animate={{ rotate: isOpen ? 135 : 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex motion-reduce:transition-none"
            >
              <Plus className="h-4 w-4" strokeWidth={2.25} />
            </motion.span>
          </span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden motion-reduce:transition-none"
          >
            <div className="px-6 pb-6 sm:px-8 sm:pb-7 -mt-1">
              <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-400">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" aria-labelledby="faq-heading" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          icon={Sparkles}
          title="Questions About"
          highlight="Our Services."
          description="Everything you need to know before starting a project with Arivra."
        />

        <div className="mt-12 sm:mt-16 space-y-4">
          {faqs.map((item, index) => (
            <motion.div
              key={item.question}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.04 * index }}
              className="motion-reduce:transform-none"
            >
              <FAQAccordionItem
                item={item}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex((current) => (current === index ? null : index))}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function ServicesLanding() {
  return (
    <main className="relative bg-white dark:bg-slate-950">
      <Hero />

      <div className="relative border-t border-slate-200/70 dark:border-white/5">
        <ServicesGrid />
      </div>

      <div className="relative border-t border-slate-200/70 dark:border-white/5">
        <WhyChoose />
      </div>

      <div className="relative border-t border-slate-200/70 dark:border-white/5">
        <ProcessTimeline />
      </div>

      <div className="relative border-t border-slate-200/70 dark:border-white/5">
        <TechStack />
      </div>

      <div className="relative border-t border-slate-200/70 dark:border-white/5">
        <Industries />
      </div>

      <div className="relative border-t border-slate-200/70 dark:border-white/5">
        <FAQSection />
      </div>
    </main>
  );
}