"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, Filter } from "lucide-react";
import type { Project } from "@/types";

const projects: Project[] = [
  {
    id: 1,
    title: "NexaCommerce Platform",
    description: "Full-featured e-commerce platform with AI-powered product recommendations, real-time inventory, and multi-vendor support.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    techStack: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Redis", "AWS"],
    category: "fullstack",
    liveUrl: "https://nexacommerce.demo",
    githubUrl: "https://github.com/alexmorgan/nexacommerce",
    featured: true,
  },
  {
    id: 2,
    title: "TaskFlow SaaS Dashboard",
    description: "Project management SaaS with real-time collaboration, kanban boards, time tracking, and team analytics.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
    techStack: ["React", "Node.js", "Socket.io", "MongoDB", "Chart.js"],
    category: "web",
    liveUrl: "https://taskflow.demo",
    githubUrl: "https://github.com/alexmorgan/taskflow",
    featured: true,
  },
  {
    id: 3,
    title: "HealthTrack Mobile App",
    description: "Cross-platform health and fitness tracking app with workout plans, nutrition logging, and wearable device sync.",
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=80",
    techStack: ["React Native", "Expo", "Firebase", "HealthKit"],
    category: "mobile",
    liveUrl: "https://healthtrack.demo",
    githubUrl: "https://github.com/alexmorgan/healthtrack",
  },
  {
    id: 4,
    title: "Arcadia Design System",
    description: "Comprehensive design system with 200+ components, dark mode, accessibility compliance, and Figma integration.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    techStack: ["Figma", "Storybook", "React", "TypeScript", "Tailwind"],
    category: "design",
    liveUrl: "https://arcadia.demo",
    githubUrl: "https://github.com/alexmorgan/arcadia",
  },
  {
    id: 5,
    title: "CryptoVault Portfolio Tracker",
    description: "Real-time crypto portfolio tracker with price alerts, P&L analysis, DeFi integration, and tax reporting.",
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&q=80",
    techStack: ["Next.js", "Python", "FastAPI", "PostgreSQL", "WebSockets"],
    category: "fullstack",
    liveUrl: "https://cryptovault.demo",
    githubUrl: "https://github.com/alexmorgan/cryptovault",
  },
  {
    id: 6,
    title: "LumenAI Content Studio",
    description: "AI-powered content creation platform for marketers. Generate, edit, and publish SEO-optimized content at scale.",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
    techStack: ["Next.js", "OpenAI API", "Supabase", "Vercel AI SDK"],
    category: "web",
    liveUrl: "https://lumenai.demo",
    githubUrl: "https://github.com/alexmorgan/lumenai",
    featured: true,
  },
];

const filters = [
  { label: "All", value: "all" },
  { label: "Full Stack", value: "fullstack" },
  { label: "Web", value: "web" },
  { label: "Mobile", value: "mobile" },
  { label: "Design", value: "design" },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group relative rounded-2xl border border-border bg-card overflow-hidden hover:border-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/5 transition-all duration-300"
    >
      {project.featured && (
        <div className="absolute top-3 right-3 z-20 px-2 py-1 rounded-full bg-amber-500 text-black text-xs font-semibold">
          Featured
        </div>
      )}

      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

        {/* Overlay Buttons */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 backdrop-blur-sm">
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-black text-sm font-semibold rounded-xl"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Demo
            </motion.a>
          )}
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-foreground text-background text-sm font-semibold rounded-xl"
            >
              <Github className="w-3.5 h-3.5" />
              Code
            </motion.a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-foreground mb-2 group-hover:text-amber-500 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md bg-secondary text-xs font-medium text-foreground/70 border border-border"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-2 py-0.5 rounded-md bg-amber-500/10 text-xs font-medium text-amber-500 border border-amber-500/20">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = projects.filter(
    (p) => activeFilter === "all" || p.category === activeFilter
  );

  return (
    <section id="projects" ref={ref} className="section-padding bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-amber-500 text-sm font-semibold uppercase tracking-widest mb-4">
            Portfolio
          </span>
          <h2 className="display-md text-foreground mb-4">
            Selected{" "}
            <span className="text-gradient-amber italic" style={{ fontFamily: "'Playfair Display', serif" }}>
              Work
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects I&apos;m proud of — from complex SaaS platforms to elegant design systems.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
        >
          <Filter className="w-4 h-4 text-muted-foreground mr-1" />
          {filters.map((filter) => (
            <motion.button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeFilter === filter.value
                  ? "bg-amber-500 text-black"
                  : "border border-border text-muted-foreground hover:text-foreground hover:border-amber-500/40"
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/alexmorgan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-amber-500/50 text-foreground/70 hover:text-foreground text-sm font-medium rounded-xl transition-all duration-200"
          >
            <Github className="w-4 h-4" />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
