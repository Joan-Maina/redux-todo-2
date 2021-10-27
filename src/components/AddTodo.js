import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions/todosActions";
import "../App.css";

function AddTodo() {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const todoItem = {
    id: Math.floor(Math.random() * 100000000),
    title,
    is_complete: false,
  };

  const addingTodo = (e) => {
    e.preventDefault();

    dispatch(addTodo(todoItem));
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={addingTodo}>
        <input
          type="text"
          placeholder="Enter todo title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add!</button>
      </form>
    </div>
  );
}

export default AddTodo;
