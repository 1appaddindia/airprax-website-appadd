"use client";

import { useEffect } from "react";

const CustomScriptComponent = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check if jQuery is loaded, otherwise load it
      if (!window.jQuery) {
        const script = document.createElement("script");
        script.src =
          "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
        script.async = true;
        document.body.appendChild(script);
      }

      const eppathurl = window.location.origin + window.location.pathname;
      const eptagmanage = new XMLHttpRequest();
      eptagmanage.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          if (this.response !== 0) {
            var temp = this.response.split("||||||||||");
            jQuery("head").find("title").remove();
            jQuery("head").append(temp[0]);
            jQuery("body").append(temp[1]);
          }
        }
      };
      eptagmanage.open(
        "GET",
        atob(
          "aHR0cHM6Ly9wbHVnaW5zLmF1dG9zZW9wbHVnaW4uY29tL2FsbGhlYWRkYXRhP2VrZXk9ZS1BUFBBREQ2NjMzNzc3NDI1JmVrZXlwYXNzPTRhaDF1bVhHZUo2U3lYRTZKZnBvVUEzbHVoRXRjNHJnM0FmRSZzaXRldXJsPQ=="
        ) + eppathurl
      );
      eptagmanage.send();
    }
  }, []);

  return null; // SEO component doesn't render anything
};

export default CustomScriptComponent;
