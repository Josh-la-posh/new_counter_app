import React from "react";
import { useState } from "react";

function CounterApp() {

  const [value, setValue] = useState(0)

  function onIncrease() {
    setValue(value + 1);
    console.log(value)
  }

  return (
    <div className="flex gap-[20px] text-3xl">
      <button className="border border-red-600 px-[8px]">-</button>
      <p>{value} is working</p>
      <button onClick={onIncrease} className="border border-red-600 px-[8px]">+</button>
    </div>
  )
}

export default CounterApp;