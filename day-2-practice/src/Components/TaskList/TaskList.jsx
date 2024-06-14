import { useState } from "react";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [inputvalue, setInputValue] = useState("");
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleClick = () => {
    setTasks([...tasks, inputvalue]);
    setInputValue("");
  };
  return (
    <>
      <h1>To-Do List</h1>
      <input type="text" onChange={handleChange} value={inputvalue} />
      <button onClick={handleClick}>Add Task</button>
      {/* {tasks.map((tasks,index) = () => {
            return <h3 key={index}>{tasks}</h3>;
        })
      } */}
      {tasks.map((task, index) => {
        return <h4 key={index}>{task}</h4>;
      })}
    </>
  );
}

export default TaskList;
