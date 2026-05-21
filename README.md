#  Luxury Styling Platform

Modern fashion styling platform combining luxury design, personalized style analysis, and premium consultation experiences.

Built with **Next.js 15**, **React 19**, **Tailwind CSS**, **Framer Motion**, and **Supabase**.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css)
![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3ECF8E?style=flat-square&logo=supabase)

---

## Features

- **Hero Section** — animated typing text, stat counters, gradient mesh background
- **About Section** — experience timeline, animated skill progress bars, tech stack marquee
- **Services Section** — hover lift cards with glow effects and feature lists
- **Projects Section** — filterable project grid with AnimatePresence transitions
- **Testimonials Section** — animated carousel with star ratings
- **Contact Section** — form with Zod validation → Supabase + Resend email
- **Dark/Light Mode** — smooth theme toggle with next-themes
- **Glassmorphism Navbar** — sticky, backdrop-blur with active section detection
- **Scroll Progress** — spring-animated progress bar
- **Fully Responsive** — mobile, tablet, desktop
- **SEO Optimized** — Open Graph, Twitter cards, semantic HTML
- **Accessibility** — ARIA labels, keyboard navigation, focus management

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| UI | React 19, Tailwind CSS 3.4 |
| Animations | Framer Motion 11 |
| Forms | React Hook Form + Zod |
| Database | Supabase PostgreSQL |
| Email | Resend |
| Theme | next-themes |
| Icons | Lucide React |
| Toasts | Sonner |
| Typing Effect | react-type-animation |
| Deploy | Vercel |

---

## Quick Start

### Prerequisites

- **Node.js** 18+ installed
- **npm** or **pnpm**
- A **Supabase** project ([supabase.com](https://supabase.com))
- A **Resend** account ([resend.com](https://resend.com)) — optional, for email notifications

### 1. Clone & Install

```bash
git clone https://github.com/Ghost-Make/luxury-styling-platform.git
cd luxury-styling-platform
npm install
```

### 2. Set Up Environment Variables

Copy the example file and fill in your values:

```bash
cp .env.local.example .env.local
```

Edit `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGci...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGci...
RESEND_API_KEY=re_...
CONTACT_EMAIL=you@example.com
```

### 3. Set Up Supabase Database

1. Go to your Supabase Dashboard → **SQL Editor**
2. Paste the contents of `supabase-schema.sql`
3. Click **Run**

This creates the `contact_submissions` table with RLS policies.

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## 🚢 Deploy to Vercel

### Option A: One-Click

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Option B: CLI

```bash
npm i -g vercel
vercel
```

### Environment Variables on Vercel

In your Vercel project dashboard → **Settings → Environment Variables**, add:

| Variable | Value |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anon key |
| `SUPABASE_SERVICE_ROLE_KEY` | Your Supabase service role key |
| `RESEND_API_KEY` | Your Resend API key |
| `CONTACT_EMAIL` | Your email address |

---

## Project Structure

```
├── app/
│   ├── api/contact/route.ts    # Contact form API
│   ├── globals.css             # Tailwind + custom styles
│   ├── layout.tsx              # Root layout + ThemeProvider
│   └── page.tsx                # Main page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Glassmorphism navbar
│   │   ├── Footer.tsx          # Footer
│   │   └── ScrollProgress.tsx  # Scroll bar
│   ├── providers/
│   │   └── ThemeProvider.tsx   # Theme wrapper
│   └── sections/
│       ├── Hero.tsx            # Hero with typing + stats
│       ├── About.tsx           # Bio + timeline + skills
│       ├── Services.tsx        # Service cards
│       ├── Projects.tsx        # Filterable projects
│       ├── Testimonials.tsx    # Carousel
│       └── Contact.tsx         # Form
├── lib/
│   ├── supabase.ts             # Supabase client
│   └── utils.ts                # Utilities
├── types/
│   └── index.ts                # TypeScript interfaces
├── .env.local.example          # Env template
├── supabase-schema.sql         # DB schema
├── tailwind.config.ts          # Tailwind config
└── tsconfig.json               # TypeScript config
```

---

## Customization

### Changing Colors

Edit the CSS custom properties in `app/globals.css` under `:root` and `.dark`.

### Changing Content

All content (projects, testimonials, skills, etc.) lives inside each component file under `components/sections/`. Edit the arrays at the top of each file.

### Adding Fonts

Fonts are loaded via Google Fonts CDN in `app/layout.tsx`. Swap the font URLs and update `tailwind.config.ts`.

---

## License

MIT License. Free to use for personal and commercial projects.

---

Built with ♥ using Next.js & Framer Motion
=======
# luxury-styling-platform
Modern fashion styling platform combining luxury design, personalized style analysis, and premium consultation experiences.
>>>>>>> 59a46068cd2a629059cc9fa8274e0f5fab18cd60
