"use client";
import { useEffect } from "react";

const CustomScriptComponent = () => {
  useEffect(() => {
    // Check if jQuery is loaded, otherwise load it dynamically
    if (!window.jQuery) {
      const script = document.createElement("script");
      script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
      script.async = true;
      document.body.appendChild(script);
    }

    // Execute your custom script
    const eppathurl = window.location.origin + window.location.pathname;
    const eptagmanage = new XMLHttpRequest();
    eptagmanage.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        if (this.response !== 0) {
          const temp = this.response.split("||||||||||");
          document.head.querySelector("title").remove(); // Remove existing title
          document.head.insertAdjacentHTML("beforeend", temp[0]); // Add new title content to head
          document.body.insertAdjacentHTML("beforeend", temp[1]); // Append body content
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

    // Clean up on unmount
    return () => {
      // Remove jQuery if it was dynamically added
      if (!window.jQuery) {
        document.body.removeChild(script);
      }
    };
  }, []); // Empty dependency array means this effect runs only once

  return null; // Return null because this component doesn't render anything
};

export default CustomScriptComponent;
