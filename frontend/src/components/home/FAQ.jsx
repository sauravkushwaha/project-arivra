import { useState, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, Plus } from "lucide-react";

/**
 * FAQ data source.
 * Replace this array with an API response (e.g. `const faqs = await fetchFAQs()`)
 * to wire this section up to a backend — no other changes required.
 */
const faqs = [
  {
    question: "What services does Arivra provide?",
    answer:
      "We build modern websites, web applications, AI-powered solutions, workflow automation, custom software and scalable digital products.",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "Project timelines depend on complexity. Simple websites typically take 2–4 weeks, while custom platforms and AI solutions require additional planning and development time.",
  },
  {
    question: "Do you provide ongoing maintenance?",
    answer:
      "Yes. We offer maintenance, monitoring, security updates and long-term technical support after project delivery.",
  },
  {
    question: "Can you improve an existing website?",
    answer:
      "Absolutely. We can redesign, optimize performance, improve SEO, modernize UI/UX and integrate new features into existing systems.",
  },
  {
    question: "Do you build AI-powered solutions?",
    answer:
      "Yes. We develop AI assistants, workflow automation, intelligent business tools and AI integrations tailored to business requirements.",
  },
  {
    question: "How do we get started?",
    answer:
      "Simply book a discovery call through our website. We'll understand your requirements, discuss possible solutions and provide the next steps.",
  },
];

function FAQItem({ item, isOpen, onToggle }) {
  const panelId = useId();
  const buttonId = useId();

  return (
    <div
      className={`group relative rounded-2xl border transition-colors duration-300
        bg-white/60 dark:bg-white/[0.03]
        backdrop-blur-xl
        border-slate-200 dark:border-white/10
        ${isOpen ? "border-blue-400/60 dark:border-blue-400/40" : "hover:border-blue-400/40 dark:hover:border-blue-400/30"}
      `}
    >
      {/* Hover / active glow */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500
          bg-[radial-gradient(600px_120px_at_var(--x,50%)_0%,rgba(59,130,246,0.12),transparent_70%)]
          group-hover:opacity-100
          ${isOpen ? "opacity-100" : ""}
        `}
      />

      <h3 className="relative">
        <button
          id={buttonId}
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="flex w-full items-center justify-between gap-6 rounded-2xl px-6 py-5 sm:px-8 sm:py-6
            text-left
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
            focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950
            rounded-2xl"
        >
          <span
            className={`text-base sm:text-lg font-medium tracking-tight transition-colors duration-300
              ${isOpen ? "text-slate-900 dark:text-white" : "text-slate-700 dark:text-slate-200"}
            `}
          >
            {item.question}
          </span>

          <span
            className={`relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border
              transition-colors duration-300
              ${
                isOpen
                  ? "border-blue-400/60 bg-blue-500/10 text-blue-500 dark:text-blue-400"
                  : "border-slate-300 dark:border-white/15 text-slate-500 dark:text-slate-400"
              }
            `}
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

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative py-24 sm:py-32 bg-white dark:bg-slate-950 overflow-hidden"
    >
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

      {/* Ambient glow accent, matching the rest of the site */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]"
      >
        <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-blue-500/10 dark:bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center motion-reduce:transform-none"
        >
          <span
            className="inline-flex items-center gap-2 rounded-full border border-blue-400/30
              bg-blue-500/5 dark:bg-blue-500/10 px-4 py-1.5 text-sm font-medium
              text-blue-700 dark:text-blue-300 backdrop-blur-sm"
          >
            <HelpCircle className="h-4 w-4" strokeWidth={2} />
            Frequently Asked Questions
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          id="faq-heading"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-center text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white motion-reduce:transform-none"
        >
          Everything You{" "}
          <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Need To Know.
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-5 max-w-[700px] text-center text-base sm:text-lg leading-relaxed
            text-slate-600 dark:text-slate-400 motion-reduce:transform-none"
        >
          Find answers to the most common questions about our services, development
          process, pricing, AI solutions and support.
        </motion.p>

        {/* Accordion */}
        <div className="mt-12 sm:mt-16 space-y-4">
          {faqs.map((item, index) => (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: 0.05 * index,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="motion-reduce:transform-none"
            >
              <FAQItem
                item={item}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}