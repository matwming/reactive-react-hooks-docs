import { $, useOnWindow } from "@builder.io/qwik";

const useGoogleAnalytics$ = () =>
  useOnWindow(
    "load",
    $(() => {
      const headElement = document.querySelector("head");
      const script1 = document.createElement("script");
      script1.src = "https://www.googletagmanager.com/gtag/js?id=G-H3D1VPXHTC";

      const script2 = document.createElement("script");
      script2.innerHTML =
        "window.dataLayer = window.dataLayer || []; function gtag()\n" +
        "        {window.dataLayer.push(arguments)}\n" +
        "        gtag('js', new Date()); gtag('config', 'G-H3D1VPXHTC');";

      console.log("headElement", headElement);
      console.log("script", script2);
      headElement?.appendChild(script1);
      headElement?.appendChild(script2);
    })
  );

export default useGoogleAnalytics$;
