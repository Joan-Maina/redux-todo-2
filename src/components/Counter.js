import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCount, subtractCount } from "../redux/actions/counterActions";
import "../App.css";

function Counter() {
  const count = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(addCount())}>+</button>
      <h3>{count}</h3>
      <button onClick={() => dispatch(subtractCount())}>-</button>
    </div>
  );
}

export default Counter;
