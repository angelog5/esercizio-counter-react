import { useState } from "react";
import CounterDisplay from "./CounterDisplay";

function Counter({
  initialValue = 0,
  incrementAmount = 1,
  decrementAmount = 1,
}) {
  const [counter, setCounter] = useState(initialValue);

  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + incrementAmount);
  };

  const decrementCounter = () => {
    setCounter((prevCounter) => prevCounter - decrementAmount);
  };

  const resetCounter = () => {
    setCounter(initialValue);
  };

  return (
    <div>
      <CounterDisplay count={counter} />
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
      <button onClick={resetCounter}>Reset</button>
    </div>
  );
}

export default Counter;
