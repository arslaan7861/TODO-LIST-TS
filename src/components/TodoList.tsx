import React from "react";

type props = {
  children: React.ReactNode[];
};

function TodoList({ children }: props) {
  return (
    <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 overflow-y-scroll scrollbar-none w-full gap-5 auto-rows-max">
      {children}
    </div>
  );
}

export default TodoList;
