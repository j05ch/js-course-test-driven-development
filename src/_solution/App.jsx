import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <>
      <h1>Counter</h1>
      <div data-testid="counter-value">{counter}</div>
      <button onClick={increment}>Increment</button>
    </>
  );
}

export default App;
