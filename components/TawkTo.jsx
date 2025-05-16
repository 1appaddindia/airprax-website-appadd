"use client";

import React, { useEffect } from "react";

const TawkTo = () => {
  useEffect(() => {
    if (window.Tawk_API) return;

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/6826e9923aaa97190d877eeb/1irc00q15";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    document.body.appendChild(script);

    // Cleanup if needed
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // This component does not render anything visible
};

export default TawkTo;
