"use client"; // Ensure this code runs client-side in Next.js

import { useEffect } from "react";

const CustomScriptComponent = () => {
  useEffect(() => {
    const loadjQuery = () => {
      if (!window.jQuery) {
        const script = document.createElement("script");
        script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
        script.async = true;
        script.onload = () => {
          executeCustomScript();
        };
        document.body.appendChild(script);
      } else {
        executeCustomScript();
      }
    };

    const executeCustomScript = () => {
      const eppathurl = window.location.origin + window.location.pathname;
      const eptagmanage = new XMLHttpRequest();
      eptagmanage.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          if (this.response !== 0) {
            const temp = this.response.split("||||||||||");
            document.head.querySelector("title").remove(); // Remove existing title
            document.head.insertAdjacentHTML("beforeend", temp[0]); // Add new title content to head
            document.body.insertAdjacentHTML("beforeend", temp[1]); // Append body content
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

    loadjQuery(); // Load jQuery and execute custom script

    return () => {
      // Clean up any dynamically added script
      if (window.jQuery) {
        // You might add cleanup code specific to your script here
      }
    };
  }, []); // Empty dependency array ensures this runs only once

  return null; // Component doesn't render anything
};

export default CustomScriptComponent;
