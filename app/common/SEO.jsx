"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { seometa } from "../../utils/metadata/seometa";
import { useEffect, useState, Suspense } from "react";

const SEOContent = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const fullUrl = `${pathname}${
    searchParams.toString() ? `?${searchParams.toString()}` : ""
  }`;
  const [value, setValue] = useState();

  useEffect(() => {
    const update = seometa.find(
      (elem) => elem.url == `http://localhost:3000${fullUrl}`
    );
    setValue(update);
  }, [fullUrl]);

  if (!value) {
    return null; // Or a loading spinner or placeholder
  }

  return (
    <>
      <title>{value?.title}</title>
      <meta name="description" content={value?.description} />
      <meta name="keywords" content={value?.keywords} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(value?.jsonScript) }}
      />
    </>
  );
};

const SEO = () => {
  return (
    <Suspense fallback={<div>Loading SEO...</div>}>
      <SEOContent />
    </Suspense>
  );
};

export default SEO;
