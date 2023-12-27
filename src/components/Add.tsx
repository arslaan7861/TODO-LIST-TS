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
    setTodos([...todos, { task, completed: false, id: Date.now() }]);
    setTask("");
  };

  return (
    <form
      onSubmit={addTask}
      className="w-full shadow-lg rounded-md overflow-hidden flex  h-10"
    >
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className=" h-full w-full px-2 flex-grow rounded-md"
      />
      <button
        type="submit"
        className=" h-full text-xs sm:text-sm flex-shrink-0 font-bold p-2 text-white uppercase bg-cyan-400"
      >
        add task
      </button>
    </form>
  );
}

export default Add;
