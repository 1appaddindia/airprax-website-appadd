"use client";
import React, { useEffect } from "react";

const TagManager = () => {
  useEffect(() => {
    // Function to handle tag management
    const handleTagManage = () => {
      const eppathurl = window.location.origin + window.location.pathname;
      const eptagmanage = new XMLHttpRequest();
      eptagmanage.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          if (this.response) {
            const temp = this.response.split("||||||||||");
            // Manipulate DOM using jQuery
            if (window.jQuery) {
              jQuery("head").find("title").remove();
              jQuery("head").append(temp[0]);
              jQuery("body").append(temp[1]);
            } else {
              console.error("jQuery is not loaded.");
            }
          }
        }
      };
      eptagmanage.open(
        "GET",
        atob(
          "aHR0cHM6Ly9wbHVnaW5zLmFwcGFkZC5pbi5uZXQvYWxsaGVhZGRhdGE/ZWtleT1lLUFQUEFERDQ4Njc4NjA0MDEmZWtleXBhc3M9SnV4NDJlaFdOUjJHZHFDMGxFdkhJcUFkOERMemlYdThUQnVIJnNpdGV1cmw9"
        ) + eppathurl
      );
      eptagmanage.send();
    };

    // Load jQuery dynamically if not already loaded
    if (typeof window !== "undefined" && !window.jQuery) {
      const jqueryScript = document.createElement("script");
      jqueryScript.src =
        "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
      document.head.appendChild(jqueryScript);
      jqueryScript.onload = () => {
        handleTagManage();
      };
    } else {
      handleTagManage();
    }
  }, []); // Empty dependency array ensures this effect runs only once

  return null; // Since this component handles side-effects only, return null
};

export default TagManager;
