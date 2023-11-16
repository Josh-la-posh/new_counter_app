import React from "react";
import { useState } from "react";

function CounterApp() {

  const [value, setValue] = useState(0)

  function onIncrease() {
    setValue(value + 1);
    console.log(value)
  }

  return (
    <div className="">

      <h1 className="text-3xl font-bold mb-10 text-center">Project 1</h1>
    <div className="flex gap-[20px] text-3xl">
      <button className="border border-red-600 px-[8px]">-</button>
      <p>{value} is working</p>
      <button onClick={onIncrease} className="border border-red-600 px-[8px]">+</button>
    </div>
    </div>
  )
}

export default CounterApp;