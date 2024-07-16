// components/CustomScriptComponent.js

"use client";
import { useEffect } from "react";

const CustomScriptComponent = () => {
  useEffect(() => {
    const loadScript = () => {
      // Load jQuery dynamically if not already loaded
      if (!window.jQuery) {
        const script = document.createElement("script");
        script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
        script.async = true;
        script.onload = () => {
          executeCustomScript(); // Once jQuery is loaded, execute custom script
        };
        document.body.appendChild(script);
      } else {
        executeCustomScript(); // If jQuery is already loaded, execute immediately
      }
    };

    const executeCustomScript = () => {
      // Replace with your actual custom script logic
      console.log("Custom script execution...");
      // Example: Update UI or perform operations that require jQuery
      // jQuery("body").append("<div>Hello jQuery!</div>");
    };

    loadScript(); // Load the script when the component mounts

    // Optional cleanup function
    return () => {
      // Perform any cleanup here (e.g., remove event listeners)
      console.log("Cleanup...");
    };
  }, []); // Empty dependency array ensures this runs only once

  return null; // Component doesn't render anything
};

export default CustomScriptComponent;
