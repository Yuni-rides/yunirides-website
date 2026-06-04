"use strict";
"use client";

import { useEffect } from "react";

export default function TawkToChat() {
  useEffect(() => {
    // Tawk_API ko window object par initialize karna
    (window as any).Tawk_API = (window as any).Tawk_API || {};
    (window as any).Tawk_LoadStart = new Date();

    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];
    
    s1.async = true;
    // Aapka specific property ID wala URL
    s1.src = "https://embed.tawk.to/6a206a4386bd101c2def655b/1jq79u6dt";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    
    if (s0 && s0.parentNode) {
      s0.parentNode.insertBefore(s1, s0);
    }
  }, []);

  return null; // Yeh component UI mein kuch render nahi karega
}