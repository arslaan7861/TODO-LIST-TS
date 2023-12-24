import React from "react";

type props = {
  children: React.ReactNode;
};

function TodoList({ children }: props) {
  return <div>{children}</div>;
}

export default TodoList;
