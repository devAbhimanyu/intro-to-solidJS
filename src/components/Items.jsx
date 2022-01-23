import { createSignal, For } from "solid-js";
import Item from "./Item";
// const initialState = ["use createSignal", "use createMemo", "use Effect"];
const Items = (props) => {
  //   const [getItemsList, setItemList] = createSignal(initialState);
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

export default Items;
