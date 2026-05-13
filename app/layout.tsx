import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gayathri Sreekumar — Personal Stylist & Image Consultant | India",
  description:
    "India's leading personal stylist with 10+ years of experience. Expert wardrobe styling, personal shopping, and fashion consulting. Book a session today.",
  keywords: [
    "Personal Stylist India",
    "Image Consultant",
    "Wardrobe Styling",
    "Wedding Styling",
    "Fashion Consultant",
    "Lookbook Creation",
    "Gayathri Sreekumar",
    "Style Coach Mumbai",
  ],
  authors: [{ name: "Gayathri Sreekumar" }],
  creator: "Gayathri Sreekumar",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.gayathrisreekumar.com",
    title: "Gayathri Sreekumar — Personal Stylist & Image Consultant",
    description:
      "India's leading personal stylist. Expert wardrobe styling, personal shopping, and image consulting. One-on-one sessions pan-India.",
    siteName: "Gayathri Sreekumar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gayathri Sreekumar — Personal Stylist & Image Consultant",
    description:
      "India's leading personal stylist with 10+ years of experience. Book your styling session today.",
    creator: "@gayathrisreekumar",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden w-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,700&family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground overflow-x-hidden w-full`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {/* Global Cinematic Noise Overlay */}
          <svg className="pointer-events-none fixed inset-0 z-[9999] opacity-[0.05] mix-blend-overlay">
            <filter id="noiseFilter">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
          </svg>

          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: "hsl(var(--card))",
                color: "hsl(var(--card-foreground))",
                border: "1px solid hsl(var(--border))",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
