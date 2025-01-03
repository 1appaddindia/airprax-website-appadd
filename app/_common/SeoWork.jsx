"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { metadata } from "@/utils/metadata";
import { useRouter } from "next/router";

export function SeoWork() {
  const [metaValue, setMetaValue] = useState();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const fullUrl = `${window.location.origin}${pathname}`;
    console.log("Current URL:", fullUrl);

    const meta = metadata.find((elem) => elem.url === fullUrl);
    console.log("Matching Meta:", meta);

    setMetaValue(meta);

    // Update the document title
    if (meta) {
      document.title = meta.title;
    }
  }, [pathname]);

  useEffect(() => {
    // Update metadata when route changes
    const handleRouteChange = () => {
      const fullUrl = `${window.location.origin}${router.pathname}`;
      const meta = metadata.find((elem) => elem.url === fullUrl);
      if (meta) {
        document.title = meta.title;
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  if (!metaValue) {
    return null;
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(metaValue.jsonScript) }}
      />
    </>
  );
}

