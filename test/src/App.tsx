import { useState } from "react";
import "./App.css";
import ITodo from "./interfaces/Interfaces";
import ToDOCART from "./components/ToDOCART";

function App() {
  const [task, settask] = useState<string>("");
  const [days, setdays] = useState<number>(0);
  const [todoList, settodoList] = useState<ITodo[]>([]);
  const deleteToDoItem = (taskName: string): void => {
    settodoList(todoList.filter((todo) => todo.taskName !== taskName));
  };
  return (
    <>
      <div>
        <div>
          <input
            type="text"
            placeholder="task"
            onChange={(e) => {
              settask(String(e.target.value));
            }}
          />
          <input
            type="number"
            placeholder="days"
            onChange={(e) => {
              setdays(Number(e.target.value));
            }}
          />
          <button
            onClick={() => {
              settodoList([...todoList, { taskName: task, taskDays: days }]);
            }}
          >
            OK
          </button>
        </div>
        <div>
          {todoList.map((e: ITodo) => (
            <ToDOCART task={e} deleteToDoItem={deleteToDoItem} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
