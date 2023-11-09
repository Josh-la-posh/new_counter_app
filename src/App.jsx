import React from "react";
import CounterApp from "./counter_app/CounterApp";
import TodoList from "./todo_list/TodoList";

function App() {
  return (
    <div className="">
      <CounterApp />
      <br />
      <br /><br />
      <TodoList />
    </div>
  )
}

export default App;