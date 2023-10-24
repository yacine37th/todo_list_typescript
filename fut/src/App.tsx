import { ChangeEvent, useState } from "react";
import "./App.css";
import ItodoItems from "./interfaces/Interfaces";
import ToDo from "./components/ToDo";

function App() {
  const [taskText, settaskText] = useState<string>("");
  const [taskDays, settaskDays] = useState<number>(0);
  const [toDo, settoDo] = useState<ItodoItems[]>([]);
  console.log(taskText);
  console.log(taskDays);

  const submit = (): void => {
    settoDo([...toDo, { task: taskText, days: taskDays }]);
  };
  const develetTask = (toName: string): void => {
    settoDo(toDo.filter((toto) => toto.task !== toName));
  };
  return (
    <>
      <div>
        <div>
          <input
            type="text"
            placeholder="task"
            style={{
              borderWidth: 1,
            }}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              settaskText(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder="task"
            style={{
              borderWidth: 1,
            }}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              settaskDays(Number(e.target.value));
            }}
          />
          <button onClick={submit}>DONE</button>
          <div>
            {toDo.map((todo: ItodoItems) => (
              <ToDo todo={todo} develetTask={develetTask} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
