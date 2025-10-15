// components/analytics.tsx
"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

export default function Analytics() {
  const pathname = usePathname();
  const search = useSearchParams();

  useEffect(() => {
    const page_path = pathname + (search ? `?${search.toString()}` : "");

    // Push page_view to dataLayer (GTM)
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "page_view",
      page_path,
      page_location: window.location.href,
      page_title: document.title,
    });

    // If you use direct gtag (GA4) as well, send a page_view
    if (window.gtag) {
      window.gtag("event", "page_view", {
        page_path,
        page_location: window.location.href,
        page_title: document.title,
      });
    }
  }, [pathname, search]);

  return null;
}
