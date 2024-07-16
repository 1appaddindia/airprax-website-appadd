// components/CustomScriptComponent.js

"use client";

import { useEffect } from "react";

const CustomScriptComponent = () => {
  useEffect(() => {
    const loadScript = () => {
      if (!window.jQuery) {
        const script = document.createElement("script");
        script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
        script.async = true;
        script.onload = () => {
          console.log("jQuery loaded.");
          executeCustomScript();
        };
        script.onerror = () => {
          console.error("Failed to load jQuery.");
        };
        document.head.appendChild(script);
      } else {
        console.log("jQuery is already loaded.");
        executeCustomScript();
      }
    };

    const executeCustomScript = () => {
      console.log("Executing custom script...");

      const eppathurl = window.location.origin + window.location.pathname;
      const eptagmanage = new XMLHttpRequest();
      eptagmanage.onreadystatechange = function () {
        if (this.readyState === 4) {
          if (this.status === 200) {
            if (this.response !== "0") {
              console.log("Response received:", this.response);
              const temp = this.response.split("||||||||||");

              if (window.jQuery) {
                if (jQuery("head").length > 0 && jQuery("body").length > 0) {
                  jQuery("head").find("title").remove();
                  jQuery("head").append(temp[0]);
                  jQuery("body").append(temp[1]);
                  console.log("DOM manipulation completed with jQuery.");
                } else {
                  console.error("jQuery did not find the expected elements.");
                }
              } else {
                console.error("jQuery is not available for DOM manipulation.");
              }
            } else {
              console.warn("Received response: 0");
            }
          } else {
            console.error(
              "Failed to load response:",
              this.status,
              this.statusText
            );
          }
        }
      };

      const url = atob(
        "aHR0cHM6Ly9wbHVnaW5zLmF1dG9zZW9wbHVnaW4uY29tL2FsbGhlYWRkYXRhP2VrZXk9ZS1BUFBBREQ2NjMzNzc3NDI1JmVrZXlwYXNzPTRhaDF1bVhHZUo2U3lYRTZKZnBvVUEzbHVoRXRjNHJnM0FmRSZzaXRldXJsPQ=="
      );
      console.log("Requesting URL:", url + eppathurl);
      eptagmanage.open("GET", url + eppathurl);
      eptagmanage.send();
    };

    loadScript();

    return () => {
      console.log("Cleaning up...");
    };
  }, []);

  return null;
};

export default CustomScriptComponent;
