import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.48 2 2 6.58 2 12.2c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49 0-.24-.01-1.03-.01-1.87-2.78.51-3.5-.7-3.72-1.34-.13-.33-.68-1.35-1.16-1.63-.4-.22-.97-.75-.01-.76.9-.02 1.54.84 1.76 1.19 1.03 1.75 2.67 1.25 3.32.96.1-.76.4-1.26.73-1.55-2.55-.29-5.23-1.29-5.23-5.72 0-1.26.44-2.3 1.16-3.11-.12-.29-.5-1.48.11-3.08 0 0 .96-.31 3.13 1.19a10.6 10.6 0 0 1 2.85-.39c.97 0 1.94.13 2.85.39 2.17-1.5 3.13-1.19 3.13-1.19.61 1.6.23 2.79.11 3.08.72.81 1.16 1.84 1.16 3.11 0 4.44-2.69 5.42-5.25 5.71.42.37.78 1.08.78 2.18 0 1.58-.01 2.85-.01 3.24 0 .27.18.6.69.49A10.2 10.2 0 0 0 22 12.2C22 6.58 17.52 2 12 2z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.24 3H21l-6.55 7.49L22.2 21h-6.2l-4.86-6.36L5.6 21H2.83l7.01-8.02L2 3h6.35l4.4 5.82L18.24 3zm-1.08 16.17h1.72L7.94 4.73H6.1l11.06 14.44z" />
    </svg>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const serviceLinks = [
  "Business Websites",
  "AI Automation",
  "Landing Pages",
  "Web Applications",
  "Website Maintenance",
];

const solutionLinks = [
  "AI Agents",
  "Workflow Automation",
  "Lead Generation",
  "CRM Automation",
  "Chatbots",
  "API Integrations",
];

const companyLinks = ["About", "Work", "Pricing", "Blog (Coming Soon)", "FAQs"];

const legalLinks = ["Privacy Policy", "Terms of Service", "Cookies"];

const socials = [
  { icon: LinkedinIcon, label: "LinkedIn", href: "#" },
  { icon: GithubIcon, label: "GitHub", href: "#" },
  { icon: InstagramIcon, label: "Instagram", href: "#" },
  { icon: XIcon, label: "X (Twitter)", href: "#" },
];

function FooterLink({ children, href = "#" }) {
  return (
    <li>
      <a
        href={href}
        className="group inline-flex items-center gap-1 text-[15px] text-slate-600 dark:text-zinc-300 transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:focus-visible:ring-offset-zinc-950 rounded-sm"
      >
        <span className="relative">
          {children}
          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-blue-600 to-blue-500 transition-all duration-300 group-hover:w-full" />
        </span>
      </a>
    </li>
  );
}

function ColumnHeading({ children }) {
  return (
    <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.14em] text-slate-900 dark:text-white">
      {children}
    </h3>
  );
}

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-white dark:bg-zinc-950 text-slate-600 dark:text-zinc-300 transition-colors duration-300">
      {/* Background Soft Glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 dark:bg-blue-600/10 blur-[140px] shadow-blue-500/20" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-24 sm:px-8 lg:px-12">
        {/* Call to Action Section Card */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-zinc-900 px-8 py-16 backdrop-blur-xl sm:px-16 sm:py-20 shadow-blue-500/20"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(37,99,235,0.08),transparent_60%)]"
          />
          <div className="relative flex flex-col items-center text-center">
            <span className="mb-5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-blue-600 dark:text-zinc-300">
              Let's talk
            </span>
            <h2 className="max-w-2xl text-balance text-3xl font-semibold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
              Ready to Build Something Amazing?
            </h2>
            <p className="mt-5 max-w-xl text-balance text-base leading-relaxed text-slate-600 dark:text-zinc-400">
              Let's build a modern website or AI solution that helps your business grow faster.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              {/* Primary Button */}
              <motion.a
                href="#"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 dark:hover:from-blue-500 dark:hover:to-blue-400 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 shadow-blue-500/30"
              >
                Start Your Project
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </motion.a>

              {/* Secondary Button */}
              <motion.a
                href="#"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-7 py-3.5 text-sm font-semibold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-white/10 transition-colors duration-300"
              >
                Book a Call
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-5 lg:gap-10">
          {/* Brand Info Column */}
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <a href="#" className="inline-flex items-baseline gap-0.5">
              <span className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                Arivra
              </span>
            </a>
            <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-blue-600">
              Engineering Digital excellence.
            </p>
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-slate-600 dark:text-zinc-400">
              We build high-performance websites, AI automations and digital experiences that help businesses scale.
            </p>

            <div className="mt-7 flex items-center gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.3 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-zinc-900 text-slate-500 dark:text-zinc-400 transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Icon className="h-[17px] w-[17px]" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Columns */}
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <ColumnHeading>Services</ColumnHeading>
            <ul className="space-y-3.5">
              {serviceLinks.map((link) => (
                <FooterLink key={link}>{link}</FooterLink>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <ColumnHeading>Solutions</ColumnHeading>
            <ul className="space-y-3.5">
              {solutionLinks.map((link) => (
                <FooterLink key={link}>{link}</FooterLink>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <ColumnHeading>Company</ColumnHeading>
            <ul className="space-y-3.5">
              {companyLinks.map((link) => (
                <FooterLink key={link}>{link}</FooterLink>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            variants={fadeUp}
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <ColumnHeading>Contact</ColumnHeading>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hello@arivra.com"
                  className="group inline-flex items-center gap-2.5 text-[15px] text-slate-600 dark:text-zinc-300 transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Mail size={16} className="shrink-0 text-blue-600 dark:text-blue-500" strokeWidth={1.75} />
                  hello@arivra.com
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group inline-flex items-center gap-2.5 text-[15px] text-slate-600 dark:text-zinc-300 transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Phone size={16} className="shrink-0 text-blue-600 dark:text-blue-500" strokeWidth={1.75} />
                  Book a Call
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group inline-flex items-center gap-2.5 text-[15px] text-slate-600 dark:text-zinc-300 transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <ArrowUpRight size={16} className="shrink-0 text-blue-600 dark:text-blue-500" strokeWidth={1.75} />
                  Contact Form
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-[15px] text-slate-600 dark:text-zinc-300">
                <MapPin size={16} className="shrink-0 text-blue-600 dark:text-blue-500" strokeWidth={1.75} />
                India
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar Divider */}
      <div className="relative border-t border-slate-200 dark:border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-8 text-center sm:flex-row sm:justify-between sm:px-8 sm:text-left lg:px-12">
          <p className="text-sm text-slate-500 dark:text-zinc-500">
            &copy; 2026 Arivra. All Rights Reserved.
          </p>

          {/* <p className="text-sm font-medium uppercase tracking-[0.14em] text-slate-500 dark:text-zinc-500">
            Engineering Digital excellence.
          </p> */}

          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:justify-end">
            {legalLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-sm text-slate-500 dark:text-zinc-500 transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}