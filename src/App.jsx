import { useState } from "react";

// custom componenets
import CustomForm from "./components/CustomForm";
import EditForm from "./components/EditForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const addTask = (task) => {
    setTasks((prevState) => [...prevState, task]);
  };

  const deleteTask = (id) => {
    setTasks((prevState) => prevState.filter((task) => task.id !== id));
  };

  const updateTask = (task2) => {
    setTasks((prevState) =>
      prevState.map((task) =>
        task.id === task2.id ? { ...task, name: task.name } : task
      )
    );
    //TODO: close the edit mode
  };

  const enterEditMode = (task) => {
    setEditedTask(task);
  };

  return (
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>
      <EditForm editedTask={editedTask} updateTask={updateTask} />
      <CustomForm addTask={addTask} />
      {tasks && (
        <TaskList
          updateTask={updateTask}
          deleteTask={deleteTask}
          tasks={tasks}
        />
      )}
    </div>
  );
}

export default App;
