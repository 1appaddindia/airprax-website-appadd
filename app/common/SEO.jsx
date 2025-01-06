"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { seometa } from "../../utils/metadata/seometa";
import { useEffect, useState } from "react";

const SEO = () => {
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
  console.log(value);

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

export default SEO;
