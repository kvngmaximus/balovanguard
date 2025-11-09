import { FlareCursor, Footer, Header, Providers, TopButton } from "@/components";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import "@mantine/core/styles.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import Head from "./head";

const font = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={cn(
            'antialiased min-h-screen transition !bg-[#080809] text-neutral-50 aeonikFont',
            font.className,
        )}>

            <head>
                <ColorSchemeScript />
                <Head />
            </head>

            <body className="h-full bg-[#080809] text-neutral-50">

                <Providers>
                    <MantineProvider>
                        <Header />
                        <FlareCursor />
                        {children}
                        <TopButton />
                        <Footer />
                    </MantineProvider>
                </Providers>

                {/* Vercel Analytics for privacy-friendly usage insights */}
                <Analytics />

            </body>
        </html>
    );
};

export const metadata: Metadata = {
  metadataBase: new URL("https://abdulmajeed.site"),
  title: {
    default: "Abdulmajeed Balogun",
    template: "%s • Abdulmajeed Balogun",
  },
  description:
    "I'm a software engineer and web developer, building for web and mobile with a focus on performance, accessibility, and clean UX.",
  keywords: [
    "Abdulmajeed Balogun",
    "Web Developer",
    "Software Engineer",
    "Full Stack",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Prisma",
    "PostgreSQL",
  ],
  applicationName: "Portfolio",
  authors: [{ name: "Abdulmajeed Balogun" }],
  creator: "Abdulmajeed Balogun",
  openGraph: {
    type: "website",
    siteName: "Abdulmajeed Balogun",
    url: "https://abdulmajeed.site",
    title: "Abdulmajeed Balogun",
    description:
      "Software engineer and web developer crafting performant, accessible experiences.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@balovanguard",
    title: "Abdulmajeed Balogun",
    description:
      "Software engineer and web developer crafting performant, accessible experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.png",
  },
};
