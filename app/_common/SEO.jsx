"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { seometa } from "../../utils/metadata/seometa";

const SEO = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const fullUrl = `${pathname}${
    searchParams.toString() ? `?${searchParams.toString()}` : ""
  }`;
  const [metaData, setMetaData] = useState(null);

  useEffect(() => {
    const currentMeta = seometa.find(
      (item) => item.url === `http://localhost:3000${fullUrl}`
    );
    setMetaData(currentMeta || {});
  }, [fullUrl]);

  return (
    <>
      <title>{metaData?.title || "Default Title"}</title>
      <meta
        name="description"
        content={metaData?.description || "Default Description"}
      />
      <meta name="keywords" content={metaData?.keywords || ""} />
      {metaData?.jsonScript && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(metaData.jsonScript),
          }}
        />
      )}
    </>
  );
};

export default SEO;
