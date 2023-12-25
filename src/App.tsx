import React, { useEffect, useState } from "react";
import Add from "./components/Add";
import TodoList from "./components/TodoList";
import Task from "./components/Task";

export type Todo = {
  task: string;
  completed: boolean;
  id: number;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos: string | null = localStorage.getItem("todos");
    if (!savedTodos) return [] as Todo[];
    return JSON.parse(savedTodos);
  });

  //REMOVE TASK
  const removeTask = (id: number): void => {
    setTodos((oldTodos) => oldTodos.filter((todo) => todo.id !== id));
  };

  //TOOGLE COMPLETE
  const toggleCompleted = (i: number): void => {
    const arr = [...todos];
    arr[i].completed = !arr[i].completed;
    setTodos(arr);
  };

  // SAVE TODOS IN LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="h-screen gap-5 w-screen font-mono bg-cyan-100 flex flex-col items-center p-5">
      <Add todos={todos} setTodos={setTodos}></Add>
      <h3 className="text-3xl text-center uppercase font-extrabold">tasks</h3>
      <TodoList>
        {todos.map((todo, index) => (
          <Task
            removeTask={removeTask}
            toggleCompleted={toggleCompleted}
            key={todo.id}
            todo={todo}
            index={index}
          />
        ))}
      </TodoList>
    </div>
  );
}

export default App;
