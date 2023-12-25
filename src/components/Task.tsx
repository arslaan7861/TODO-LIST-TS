import React from "react";
import { Todo } from "../App";
import { Delete, Tick } from "../utils/icons";
type props = {
  todo: Todo;
  removeTask: (id: number) => void;
  index: number;
  toggleCompleted: (i: number) => void;
};

function Task({ todo, removeTask, toggleCompleted, index }: props) {
  return (
    <div className="bg-cyan-400 hover:rounded-b-none rounded-lg shadow-xl group gap-3 flex items-start p-3 relative">
      <p
        className={`flex-grow break-all text-ellipsis line-clamp-1 ${
          todo.completed && "line-through"
        }`}
      >
        {todo.task}
      </p>
      <button
        onClick={() => toggleCompleted(index)}
        className={`${todo.completed && "text-green-700"} p-0 rounded-full`}
      >
        <Tick />
      </button>
      <button onClick={() => removeTask(todo.id)}>
        <Delete />
      </button>
      <section className="absolute top-full break-words h-0 group-hover:h-full group-focus:h-max z-10 overflow-hidden transition-all bg-white w-full left-0 rounded-b-lg shadow-2xl">
        <p className="px-2">{todo.task}</p>
      </section>
    </div>
  );
}

export default Task;
