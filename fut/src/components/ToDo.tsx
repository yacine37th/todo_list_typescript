import React from "react";
import ItodoItems from "../interfaces/Interfaces";

interface props {
  todo: ItodoItems;
  develetTask(toName: string): void;
}

function ToDo({ todo, develetTask }: props) {
  return (
    <div key={todo.days}>
      <p>{todo.task}</p>
      <p>{todo.days}</p>
      <button
        onClick={() => {
          develetTask(todo.task);
        }}
      >
        X
      </button>
    </div>
  );
}

export default ToDo;
