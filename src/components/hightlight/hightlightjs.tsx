import { $, useOnWindow } from "@builder.io/qwik";

const useHighlightJS$ = () =>
  useOnWindow(
    "popstate",
    $((event) => {
      console.log("event", event);
      // @ts-ignore
      console.log("script", event?.currentTarget.document);
      // @ts-ignore
      const document = event.currentTarget.document;
      const headElement = document.querySelector("head");
      // const script = document.createElement("script");
      // script.src =
      //   "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/highlight.min.js";
      // headElement.appendChild(script);
      // const hightlightCSS = document.createElement("link");
      // hightlightCSS.href =
      //   "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/default.min.css";
      // hightlightCSS.rel = "stylesheet";
      // headElement.appendChild(hightlightCSS);
      const script2 = document.createElement("script");
      script2.innerHTML = "window.hljs.highlightAll()";
      script2.async = true;
      setTimeout(() => {
        headElement.appendChild(script2);
      }, 1000);
    })
  );

export default useHighlightJS$;
