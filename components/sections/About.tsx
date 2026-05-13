"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Briefcase, GraduationCap, MapPin } from "lucide-react";
import type { Experience, Skill } from "@/types";

const experiences: Experience[] = [
  {
    id: 1,
    year: "2022 – Present",
    role: "Senior Full Stack Developer",
    company: "TechVision Labs",
    description: "Leading development of enterprise SaaS platform serving 50K+ users. Architected microservices with Node.js, React, and AWS.",
    type: "work",
  },
  {
    id: 2,
    year: "2020 – 2022",
    role: "Full Stack Developer",
    company: "CreativeBytes Agency",
    description: "Built 20+ client websites and web apps. Specialized in Next.js, TypeScript, and headless CMS integrations.",
    type: "work",
  },
  {
    id: 3,
    year: "2019 – 2020",
    role: "Frontend Developer",
    company: "StartupHub Inc.",
    description: "Developed responsive React applications, improved performance by 40%, and implemented design system from scratch.",
    type: "work",
  },
  {
    id: 4,
    year: "2015 – 2019",
    role: "B.S. Computer Science",
    company: "State University of Technology",
    description: "Major in Computer Science with a minor in Design. Graduated Magna Cum Laude. Active member of the Dev Club.",
    type: "education",
  },
];

const skills: Skill[] = [
  { name: "React / Next.js", level: 96 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js / Express", level: 88 },
  { name: "UI/UX Design", level: 85 },
  { name: "PostgreSQL / Supabase", level: 82 },
  { name: "AWS / Vercel / Docker", level: 78 },
  { name: "Python / FastAPI", level: 75 },
  { name: "React Native", level: 70 },
];

const techStack = [
  "React", "Next.js", "TypeScript", "Node.js", "Python",
  "PostgreSQL", "MongoDB", "Redis", "AWS", "Docker",
  "Figma", "Tailwind CSS", "GraphQL", "Prisma", "Supabase",
];

function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <span className="text-sm text-amber-500 font-semibold">{skill.level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-amber-500 to-amber-400"
        />
      </div>
    </div>
  );
}

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-amber-500 text-sm font-semibold uppercase tracking-widest mb-4">
            About Me
          </span>
          <h2 className="display-md text-foreground mb-4">
            Building with{" "}
            <span className="text-gradient-amber italic" style={{ fontFamily: "'Playfair Display', serif" }}>
              Passion
            </span>{" "}
            & Precision
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I&apos;m a detail-obsessed developer who loves turning complex ideas into clean, scalable code and beautiful interfaces.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left — Bio + Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-10"
          >
            {/* Bio Card */}
            <motion.div
              variants={itemVariants}
              className="p-6 rounded-2xl border border-border bg-card hover:border-amber-500/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-2xl font-black text-black shrink-0">
                  AM
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground">Alex Morgan</h3>
                  <p className="text-amber-500 text-sm font-medium">Full Stack Developer & UI/UX Designer</p>
                  <div className="flex items-center gap-1 text-muted-foreground text-xs mt-1">
                    <MapPin className="w-3 h-3" />
                    San Francisco, CA • Remote Available
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                With over 5 years in the industry, I&apos;ve had the privilege of working with startups, agencies, and Fortune 500 companies.
                My work spans from pixel-perfect frontend interfaces to robust backend architectures — always with a focus on performance,
                accessibility, and developer experience.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mt-3">
                When I&apos;m not coding, you&apos;ll find me exploring new design trends, contributing to open-source, or enjoying a good
                cup of coffee while reading about the latest in web tech.
              </p>
            </motion.div>

            {/* Tech Stack Marquee */}
            <motion.div variants={itemVariants}>
              <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-widest">Tech Stack</h4>
              <div className="overflow-hidden">
                <div className="marquee-track">
                  {[...techStack, ...techStack].map((tech, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center px-3 py-1.5 mx-2 rounded-full border border-border bg-card text-xs font-medium text-foreground/80 whitespace-nowrap hover:border-amber-500/50 hover:text-amber-500 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-widest">Core Skills</h4>
              {skills.map((skill, i) => (
                <SkillBar key={skill.name} skill={skill} index={i} />
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-widest mb-8">Experience & Education</h4>
            <div className="relative space-y-0">
              {/* Vertical line */}
              <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500 via-border to-transparent" />

              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className="relative pl-14 pb-8 last:pb-0"
                >
                  {/* Icon bubble */}
                  <div className={`absolute left-0 w-10 h-10 rounded-xl flex items-center justify-center border-2 ${
                    exp.type === "work"
                      ? "bg-amber-500/10 border-amber-500/50"
                      : "bg-secondary border-border"
                  }`}>
                    {exp.type === "work" ? (
                      <Briefcase className="w-4 h-4 text-amber-500" />
                    ) : (
                      <GraduationCap className="w-4 h-4 text-muted-foreground" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-4 rounded-2xl border border-border bg-card hover:border-amber-500/30 hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="w-3 h-3 text-amber-500/70" />
                      <span className="text-xs text-amber-500 font-semibold">{exp.year}</span>
                    </div>
                    <h4 className="font-bold text-foreground">{exp.role}</h4>
                    <p className="text-amber-600 dark:text-amber-400 text-sm font-medium mb-2">{exp.company}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
