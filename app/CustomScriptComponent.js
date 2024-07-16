"use client";

// components/CustomScriptComponent.js

import Script from "next/script";
import { useEffect } from "react";

const CustomScriptComponent = () => {
  useEffect(() => {
    // Function to handle tag management
    const handleTagManage = () => {
      console.log("Running handleTagManage function");

      const eppathurl = window.location.origin + window.location.pathname;
      const eptagmanage = new XMLHttpRequest();
      eptagmanage.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          if (this.response !== "0") {
            console.log("Received response:", this.response);

            const temp = this.response.split("||||||||||");

            // Use jQuery to manipulate DOM
            if (window.jQuery) {
              console.log("jQuery is loaded");
              jQuery("head").find("title").remove();
              jQuery("head").append(temp[0]);
              jQuery("body").append(temp[1]);
            } else {
              console.error("jQuery is not loaded");
            }
          } else {
            console.error("Received unexpected response:", this.response);
          }
        } else if (this.readyState === 4) {
          console.error(
            "Failed to load response:",
            this.status,
            this.statusText
          );
        }
      };
      // Replace the URL with your actual endpoint
      const url = atob(
        "aHR0cHM6Ly9wbHVnaW5zLmF1dG9zZW9wbHVnaW4uY29tL2FsbGhlYWRkYXRhP2VrZXk9ZS1BUFBBREQ2NjMzNzc3NDI1JmVrZXlwYXNzPTRhaDF1bVhHZUo2U3lYRTZKZnBvVUEzbHVoRXRjNHJnM0FmRSZzaXRldXJsPQ=="
      );
      console.log("Requesting URL:", url + eppathurl);
      eptagmanage.open("GET", url + eppathurl);
      eptagmanage.send();
    };

    // Execute tag management function
    if (typeof window !== "undefined") {
      if (!window.jQuery) {
        console.log("jQuery is not loaded, loading jQuery...");
        const script = document.createElement("script");
        script.src =
          "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
        document.head.appendChild(script);
        script.onload = () => {
          console.log("jQuery loaded");
          handleTagManage();
        };
        script.onerror = () => {
          console.error("Failed to load jQuery");
        };
      } else {
        console.log("jQuery is already loaded");
        handleTagManage();
      }
    }
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
