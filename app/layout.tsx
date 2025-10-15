import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Toaster } from "react-hot-toast"
import { PageTransition } from "@/components/ui/page-transition"
import Script from "next/script";
import Analytics from "@/components/analytics"; // client component (below)

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
const GA_ID = process.env.NEXT_PUBLIC_GA_ID; // optional
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* If you want to add GA directly (not via GTM), include gtag script.
            But DO NOT use both GTM and direct GA simultaneously unless you know what you're doing. */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { send_page_view: false }); // we'll push pageviews manually
              `}
            </Script>
          </>
        )}
      </head>
      <body className={inter.className}>
                {/* GTM Head script (recommended inside head, but placing right after body open is fine too) */}
        {GTM_ID && (
          <Script id="gtm-init" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0], j=d.createElement(s);
                j.async=true; j.src='https://www.googletagmanager.com/gtm.js?id='+i;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `}
          </Script>
        )}

        {/* noscript iframe for GTM (put immediately after opening <body>) */}
        {GTM_ID && (
          <noscript
            // React needs dangerouslySetInnerHTML to render raw iframe inside noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
        )}
        <Header />
        <Analytics />
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
