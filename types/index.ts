// ─── Contact Form ───
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactSubmission extends ContactFormData {
  id: string;
  created_at: string;
}

// ─── Projects ───
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  category: "web" | "mobile" | "design" | "fullstack";
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

// ─── Testimonials ───
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  text: string;
}

// ─── Services ───
export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

// ─── Experience ───
export interface Experience {
  id: number;
  year: string;
  role: string;
  company: string;
  description: string;
  type: "work" | "education";
}

// ─── Skill ───
export interface Skill {
  name: string;
  level: number;
  color?: string;
}

// ─── Stat Counter ───
export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

// ─── API Responses ───
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
