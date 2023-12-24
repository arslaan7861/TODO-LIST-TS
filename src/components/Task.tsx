import React from "react";
import { Todo } from "../App";
type props = {
  todo: Todo;
};

function Task({ todo }: props) {
  return <div>{todo.task}</div>;
}

export default Task;
