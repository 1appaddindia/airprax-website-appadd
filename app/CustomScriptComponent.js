"use client";

/// components/CustomScriptComponent.js

import Script from "next/script";
import { useEffect } from "react";

const CustomScriptComponent = () => {
  useEffect(() => {
    // Function to handle tag management
    const handleTagManage = () => {
      const eppathurl = window.location.origin + window.location.pathname;
      const eptagmanage = new XMLHttpRequest();
      eptagmanage.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          if (this.response !== 0) {
            const temp = this.response.split("||||||||||");

            // Use jQuery to manipulate DOM
            if (window.jQuery) {
              jQuery("head").find("title").remove();
              jQuery("head").append(temp[0]);
              jQuery("body").append(temp[1]);
            }
          }
        }
      };
      // Replace the URL with your actual endpoint
      eptagmanage.open(
        "GET",
        atob(
          "aHR0cHM6Ly9wbHVnaW5zLmF1dG9zZW9wbHVnaW4uY29tL2FsbGhlYWRkYXRhP2VrZXk9ZS1BUFBBREQ2NjMzNzc3NDI1JmVrZXlwYXNzPTRhaDF1bVhHZUo2U3lYRTZKZnBvVUEzbHVoRXRjNHJnM0FmRSZzaXRldXJsPQ=="
        ) + eppathurl
      );
      eptagmanage.send();
    };

    // Execute tag management function
    handleTagManage();
  }, []);

  return (
    <>
      {/* Fallback to load jQuery if not already loaded */}
      <Script
        id="jquery-cdn"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.jQuery || document.write("<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js'><\\/script>");
          `,
        }}
      />
    </>
  );
};

export default CustomScriptComponent;
