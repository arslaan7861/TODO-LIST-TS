import React, { useEffect, useState } from "react";
import Add from "./components/Add";
import TodoList from "./components/TodoList";
import Task from "./components/Task";

export type Todo = {
  task: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos: string | null = localStorage.getItem("todos");
    if (!savedTodos) return [] as Todo[];
    return JSON.parse(savedTodos);
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <div>
      <Add todos={todos} setTodos={setTodos}></Add>
      <TodoList>
        {todos.map((todo, i) => (
          <Task key={i} todo={todo} />
        ))}
      </TodoList>
    </div>
  );
}

export default App;
