import { useState } from "react";

function Counter() {
  // Step 1: Declare a state variable
  const [count, setCount] = useState(0);

  // Step 2: Function to increment the counter
  function increase() {
    setCount(count + 1);
  }

  // Step 3: Function to decrement the counter
  function decrease() {
    setCount(count - 1);
  }

  // Step 4: Function to reset the counter
  function reset() {
    setCount(0);
  }

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
