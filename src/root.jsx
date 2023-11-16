import React from "react";
import CounterApp from "./counter_app/CounterApp";
import TodoList from "./todo_list/TodoList";
import Header from "./components/header";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div className="">
      <Header />
      <Outlet />
    </div>
  )
}

export default Root;