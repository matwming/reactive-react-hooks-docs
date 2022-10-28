import { component$, Slot } from "@builder.io/qwik";
const Store = component$(() => {
  return (
    <div>
      <p> It has similar apis to redux.</p>
      <ol>
        <li>
          A react application can have multiple stores (unlike redux). When
          creating an instace of the store, it accepts an initialState. The
          initialState has to be an object. Note: the store instance needs to be
          defined outside a react component.
          <Slot name={"code1"} />
        </li>
        <li>
          You can get the current state as observable like this:
          <Slot name={"code2"} />
        </li>
        <li>
          In order to change the state, you need to dispatch an action. States
          can be changed synchronously or asynchronously.
          <ul>
            <li>
              To change it synchronously, just dispatch an action with a todo
              function: The todo function has two parameters, initialState and
              the current payload. It must return the new state.
            </li>
            <li>
              To change it asynchronously: it needs a bit of work, but it is not
              that hard.
              <br />
              1. Firstly, dispatch an action without todo like this:
              <Slot name={"code3"} />
              <br />
              2. Secondly, use actions$ observable to filter out the target
              action type and do the asynchronous task. When you are ready to
              update the state, dispatch the action with todo. Here is an
              example:
              <details>
                <pre>
                  <code>
                    <Slot name={"code4"} />
                  </code>
                </pre>
              </details>
            </li>
          </ul>
        </li>
      </ol>
      <p>
        Example:
        <iframe
          src="https://codesandbox.io/embed/reactive-react-hooks-async-example-lszr1x?autoresize=1&fontsize=14&hidenavigation=1&theme=dark&view=editor"
          style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
          title="reactive-react-hooks-async-example"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
      </p>
    </div>
  );
});

export default Store;
