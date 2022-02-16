import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Hello</h1>
      <h2>Counter {counter}</h2>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
      {isLogged ? <h3>Valueable Infomation I should not see</h3> : ""}
    </div>
  );
}

export default App;
