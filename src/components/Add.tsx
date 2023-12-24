import React, { useState } from "react";
import { Todo } from "../App";

type props = {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  todos: Todo[];
};
type AddTask = (e: React.FormEvent<HTMLFormElement>) => void;

function Add({ setTodos, todos }: props) {
  const [task, setTask] = useState("");
  const addTask: AddTask = (e) => {
    e.preventDefault();
    if (!task) return;
    setTodos([...todos, { task, completed: false }]);
    setTask("");
  };

  return (
    <form onSubmit={addTask}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">add todo</button>
    </form>
  );
}

export default Add;
