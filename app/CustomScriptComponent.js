"use client";

import { useEffect } from "react";

const PluginScript = () => {
  useEffect(() => {
    // Check if jQuery is loaded, if not load it from CDN
    if (!window.jQuery) {
      const script = document.createElement("script");
      script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
      script.async = true;
      document.body.appendChild(script);
    }

    // Fetch and inject plugin content
    const eppathurl = window.location.origin + window.location.pathname;
    const eptagmanage = new XMLHttpRequest();
    eptagmanage.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        if (this.response !== 0) {
          const temp = this.response.split("||||||||||");
          document.head.querySelector("title").remove();
          document.head.insertAdjacentHTML("beforeend", temp[0]);
          document.body.insertAdjacentHTML("beforeend", temp[1]);
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
  }, []);

  return null; // This component does not render any UI
};

export default PluginScript;
