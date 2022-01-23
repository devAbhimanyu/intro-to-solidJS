import { createSignal } from "solid-js";

/**
 * Counter variable to play with createSignal and state
 * @returns
 */
const Counter = () => {
  //   const [getCounterList, setItemList] = createSignal(initialState);
  const [getCounter, setCounter] = createSignal(0);
  const increment = () => {
    const currentCount = getCounter();
    const newVal = currentCount + 1;
    setCounter(newVal);
  };
  const decrement = () => setCounter((prev) => prev - 1);
  return (
    <section>
      <header>current count = {getCounter()}</header>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </section>
  );
};

export default Counter;
