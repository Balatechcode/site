import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Toaster } from "react-hot-toast"
import { PageTransition } from "@/components/ui/page-transition"
import Script from "next/script"



const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.webcrafty.in"),
  title: "WebCrafty Solution - Digital Marketing & Development Agency",
  description:
    "Full-service digital marketing and development agency specializing in website development, app development, digital marketing, graphics design, and more.",
  keywords: [
    "web development",
    "app development",
    "digital marketing",
    "graphics design",
    "software development",
    "video editing",
    "SEO agency",
    "PPC services",
    "branding agency"
  ],
  generator: "Balakrishna kolla",
  authors: [{ name: "WebCrafty Solution", url: "https://www.webcrafty.in" }],

  // ✅ Facebook, LinkedIn, etc.
  openGraph: {
    title: "WebCrafty Solution - Digital Marketing & Development Agency",
    description:
      "We help brands grow with expert web design, SEO, PPC, and social media marketing. Your digital success partner.",
    url: "https://www.webcrafty.in",
    siteName: "WebCrafty Solution",
    images: [
      {
        url: "https://www.webcrafty.in/_next/static/media/logo.fad4940c.png", // replace with your actual OG image path
        width: 1200,
        height: 630,
        alt: "WebCrafty Solution - Digital Marketing Agency logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // ✅ Twitter (X) card setup
  twitter: {
    card: "summary_large_image",
    site: "@AdvoraTECH63493", // your verified handle
    creator: "@AdvoraTECH63493",
    title: "WebCrafty Solution - Digital Marketing & Development Agency",
    description:
      "Your digital growth partner for SEO, PPC, Social Media & Web Development. Let's elevate your brand together!",
    images: ["https://pbs.twimg.com/profile_banners/1824309649245646848/1737472726/600x200"], // replace with your image
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Y84VXKXNFP"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Y84VXKXNFP');
          `
        }} />
      </head>
      <body className={inter.className}>

        <Header />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <Footer />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: "#3282B8",
              color: "#fff",
            },
            success: {
              style: {
                background: "#10B981",
              },
            },
            error: {
              style: {
                background: "#EF4444",
              },
            },
          }}
        />
      </body>
    </html>
  )
}
