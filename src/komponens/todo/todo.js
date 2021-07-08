import "./todo.css";
import { useState } from "react";
import Todolist from "../todo-list/todolist";
import TodoCreate from "../todocreate/TodoCreate";

const Todo = () => {
  const [getTodos, setTodos] = useState([
    {
      id: 1,
      title: "Eat",
    },
    {
      id: 2,
      title: "Sleep",
    },
    {
      id: 3,
      title: "Code",
    },
  ]);

  const eventCreateTodo = (todo) => {
    setTodos(getTodos.concat(todo));
    console.log(getTodos);
  };

  return (
    <div>
      <h1>todolist</h1>
      <TodoCreate onCreateTodo={eventCreateTodo} />
      <Todolist dataTodos={getTodos} />
    </div>
  );
};

export default Todo;
