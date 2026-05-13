"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code2, Palette, Server, Smartphone, ShoppingCart,
  Zap, BarChart3, Shield, CheckCircle2
} from "lucide-react";

const services = [
  {
    id: 1,
    icon: Code2,
    title: "Full Stack Development",
    description: "End-to-end web applications built with modern frameworks. From database design to polished UI, I deliver complete solutions.",
    features: ["React & Next.js", "Node.js & APIs", "Database Design", "CI/CD Pipelines"],
    color: "amber",
  },
  {
    id: 2,
    icon: Palette,
    title: "UI/UX Design",
    description: "Intuitive interfaces that delight users. I craft experiences grounded in design principles and real user research.",
    features: ["Figma Design", "Design Systems", "Prototyping", "User Research"],
    color: "orange",
  },
  {
    id: 3,
    icon: Server,
    title: "Backend & API Development",
    description: "Scalable, secure backend systems with well-documented RESTful and GraphQL APIs for any application.",
    features: ["REST & GraphQL", "Microservices", "Auth & Security", "Cloud Deploy"],
    color: "yellow",
  },
  {
    id: 4,
    icon: Smartphone,
    title: "Mobile Development",
    description: "Cross-platform mobile apps with React Native that feel native, run fast, and look beautiful on any device.",
    features: ["React Native", "iOS & Android", "App Store Deploy", "Push Notifications"],
    color: "amber",
  },
  {
    id: 5,
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description: "High-converting online stores with secure payment gateways, inventory management, and analytics dashboards.",
    features: ["Shopify / Custom", "Payment Integration", "Inventory System", "Analytics"],
    color: "orange",
  },
  {
    id: 6,
    icon: BarChart3,
    title: "Performance Optimization",
    description: "Make your existing site blazing fast. I audit, optimize, and refactor for top Lighthouse scores and Core Web Vitals.",
    features: ["Lighthouse Audit", "Code Splitting", "Image Optimization", "CDN Setup"],
    color: "yellow",
  },
];

const colorMap = {
  amber: {
    icon: "bg-amber-500/10 text-amber-500 border-amber-500/20",
    hover: "group-hover:border-amber-500/40 group-hover:shadow-amber-500/10",
    glow: "group-hover:bg-amber-500/5",
  },
  orange: {
    icon: "bg-orange-500/10 text-orange-500 border-orange-500/20",
    hover: "group-hover:border-orange-500/40 group-hover:shadow-orange-500/10",
    glow: "group-hover:bg-orange-500/5",
  },
  yellow: {
    icon: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20",
    hover: "group-hover:border-yellow-500/40 group-hover:shadow-yellow-500/10",
    glow: "group-hover:bg-yellow-500/5",
  },
};

export function Services() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      id="services"
      ref={ref}
      className="section-padding bg-secondary/30 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-amber-500 text-sm font-semibold uppercase tracking-widest mb-4">
            Services
          </span>
          <h2 className="display-md text-foreground mb-4">
            What I{" "}
            <span className="text-gradient-amber italic" style={{ fontFamily: "'Playfair Display', serif" }}>
              Offer
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A complete range of digital services to bring your vision to life — from concept to deployment and beyond.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const colors = colorMap[service.color as keyof typeof colorMap];
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className={`group relative p-6 rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-2xl ${colors.hover} cursor-default overflow-hidden`}
              >
                {/* Hover glow background */}
                <div className={`absolute inset-0 rounded-2xl transition-all duration-300 ${colors.glow}`} />

                {/* Icon */}
                <div className={`relative w-12 h-12 rounded-xl border flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 ${colors.icon}`}>
                  <Icon className="w-5 h-5" />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-amber-500 transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-1.5">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-400 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground text-sm mb-4">
            Need something custom? Let&apos;s talk about your project.
          </p>
          <motion.button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded-xl transition-all duration-200 glow-amber"
          >
            <Zap className="w-4 h-4" />
            Start a Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
