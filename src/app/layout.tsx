import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import StructuredData from "@/components/StructuredData";
import {
  COMPANY_NAME,
  COMPANY_URL,
  COMPANY_DESCRIPTION,
  COMPANY_LOGO_URL,
  COMPANY_SOCIAL_LINKS,
  SITE_PAGES,
} from "./constants";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${COMPANY_NAME} | AI-Driven Digital Solutions & Marketing Services`,
    template: `%s | ${COMPANY_NAME}`,
  },
  description: COMPANY_DESCRIPTION,
  keywords: [
    "AI digital marketing",
    "best software house in usa",
    "SEO services USA",
    "AI services USA",
    "WEB services USA",
    "MOBILE services USA",
    "chatgpt services USA",
    "AI-powered tools",
    "ChatGPT integration",
    "The AIO TECH US",
    "The AIO TECH ",
    "web development AI",
    "mobile app AI solutions",
    COMPANY_NAME,
    "AI marketing agency",
    "automated SEO tools",
    "AI business solutions",
  ],
  metadataBase: new URL(COMPANY_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${COMPANY_NAME} | AI-Driven Digital Solutions`,
    description: COMPANY_DESCRIPTION,
    url: COMPANY_URL,
    siteName: COMPANY_NAME,
    images: [
      {
        url: COMPANY_LOGO_URL,
        width: 1200,
        height: 630,
        alt: `${COMPANY_NAME} - AI Digital Services`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_NAME} | AI-Driven Digital Solutions`,
    description: COMPANY_DESCRIPTION,
    images: [COMPANY_LOGO_URL],
    site:
      COMPANY_SOCIAL_LINKS.find((link) => link.name === "Twitter")?.url.replace(
        "https://twitter.com/",
        "@"
      ) || "",
    creator:
      COMPANY_SOCIAL_LINKS.find((link) => link.name === "Twitter")?.url.replace(
        "https://twitter.com/",
        "@"
      ) || "",
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
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="bg-white text-gray-900 font-poppins">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
