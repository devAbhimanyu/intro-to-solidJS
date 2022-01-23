import { createSignal } from "solid-js";
let renderCount = 0;

const TextCheck = () => {
  const [getValue, setValue] = createSignal("value");
  const [getValue1, setValue1] = createSignal("value", { equals: () => true });

  const changeHandler = (e) => {
    const { value } = e.currentTarget;
    setValue(value);
  };
  renderCount++;
  console.log("render count = ", renderCount);

  return (
    <div>
      <div>{getValue1()}</div>
      <input type="text" value={getValue()} onChange={changeHandler} />
      <button onClick={() => setValue1(getValue())}> render </button>
    </div>
  );
};

export default TextCheck;
