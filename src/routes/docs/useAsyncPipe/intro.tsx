import useHighlightJS$ from "~/components/hightlight/hightlightjs";

const Intro = () => {
  return (
    <div>
      <h1>Why is it called useAsyncPipe?</h1>
      <p>
        when I first started to learn rxjs, I was confused about the usage of
        async pipe in angular. What it does is to subscribe to the observable
        and when it gets the data, it will update the view. It will also
        unsubscribe to the observable when the component is destroyed.
        <br />
        In angular world, it is a pipe and called async.
        <br />
        In react world, hook (name starts with 'use') is a very popular concept.
        If I combine the names ('use','async' and 'pipe') together, I thought
        useAsyncPipe should be a good name.
      </p>
      <h2>How to use it?</h2>
      <p>
        The purpose of useAsyncPipe is to connect rxjs to react by subscribing
        to the observables it receives and unsubscribing to it when the
        component is destroyed.
      </p>
      <p>Example:</p>
      <iframe
        src="https://codesandbox.io/embed/reactive-react-hooks-zreilu?autoresize=1&fontsize=14&hidenavigation=1&theme=dark&view=editor"
        style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
        title="reactive-react-hooks"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>

      <p>
        we used 'of' to create a cold observable. It means that the observable
        is a cold observable and not shareable.
        <br />
        If you would like to create a shareable value, please use
        Subject/RelaySubject/BehaviourSubject. Please refer to the example in
        the Store api section.
      </p>
    </div>
  );
};

export default Intro;
