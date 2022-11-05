import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useDocumentHead, useLocation } from "@builder.io/qwik-city";
// @ts-nocheck
export default component$(() => {
  const { pathname } = useLocation();
  return (
    <>
      <h1>Welcome to reactive-react-hooks package</h1>
      <h2>Motivation:</h2>
      <ul>
        <li>
          rxjs is so powerful , but it is hardly to see developers use it with
          react.
        </li>
        <li>
          we should not reinvent the wheel if rxjs already solved lots of
          problems for us.
        </li>
        <li>
          you cannot do it better than rxjs if you need to solve these issues:
          <ol>
            <li>api race</li>
            <li>api cache</li>
            <li>state management</li>
            <li>reactive to changes</li>
            <li>retry on errors</li>
          </ol>
        </li>
      </ul>
      <p>
        Let's check the{" "}
        <strong>
          <a href="/docs">Docs</a>
        </strong>{" "}
        now!
      </p>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to reactive react hooks",
};
