import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, markTodoAsComplete ,markTodoAsIncomplete} from "../redux/actions/todosActions";
import "../App.css";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div className="todo">
      {todos.map((todo) => (
        <>
        <button className="removetodo" onClick={() => dispatch(removeTodo(todo.id))}>x</button>
          <h4
            key={todo.id}
            style={{ textDecoration: todo.is_complete ? "line-through" : "" }}
          >
            {todo.title}
          </h4>
          <div style={{ display: "flex" }}>
            
           <button onClick={() => dispatch(markTodoAsComplete(todo.id))}> {todo.is_complete ? 
              'Mark as undone' :
              'Mark as done'}
            </button>
            
          </div>
        </>
      ))}
    </div>
  );
}

export default Todos;
