import React from "react";
import ITodo from "../interfaces/Interfaces";

interface props {
  task: ITodo;
  deleteToDoItem(taskName: string): void;
}

function ToDOCART({ task, deleteToDoItem }: props) {
  return (
    <div key={task.taskName}>
      <p>{task.taskName}</p>
      <p>{task.taskDays}</p>
      <button
        onClick={() => {
          deleteToDoItem(task.taskName);
        }}
      >
        X
      </button>
    </div>
  );
}

export default ToDOCART;
