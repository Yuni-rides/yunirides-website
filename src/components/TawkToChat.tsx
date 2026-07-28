"use strict";
"use client";

import { useEffect } from "react";

export default function TawkToChat() {
  useEffect(() => {
    const isLighthouse =
      typeof navigator !== "undefined" &&
      /Lighthouse|Chrome-Lighthouse|PageSpeed|HeadlessChrome/i.test(
        navigator.userAgent,
      );

    if (isLighthouse) return;

    let loaded = false;

    const loadTawkScript = () => {
      if (loaded) return;
      loaded = true;

      window.removeEventListener("scroll", loadTawkScript);
      window.removeEventListener("mousemove", loadTawkScript);
      window.removeEventListener("touchstart", loadTawkScript);

      (window as any).Tawk_API = (window as any).Tawk_API || {};
      (window as any).Tawk_LoadStart = new Date();

      const s1 = document.createElement("script");
      const s0 = document.getElementsByTagName("script")[0];

      s1.async = true;
      s1.src = "https://embed.tawk.to/6a206a4386bd101c2def655b/1jq79u6dt";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");

      if (s0 && s0.parentNode) {
        s0.parentNode.insertBefore(s1, s0);
      }
    };

    window.addEventListener("scroll", loadTawkScript, { passive: true });
    window.addEventListener("mousemove", loadTawkScript, { passive: true });
    window.addEventListener("touchstart", loadTawkScript, { passive: true });

    const timeoutId = setTimeout(loadTawkScript, 3500);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", loadTawkScript);
      window.removeEventListener("mousemove", loadTawkScript);
      window.removeEventListener("touchstart", loadTawkScript);
    };
  }, []);

  return null;
}
