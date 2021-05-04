import { useState } from "react";

import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { concatSeries } from "async";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Consulta com o dentista",
      day: "13 de Maio às 09:00 am",
      reminder: true,
    },
    {
      id: 2,
      text: "Entrevista",
      day: "04 de Maio às 14:45 pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Cozinhar receitas saudáveis",
      day: "05 de Maio às 11:00 am",
      reminder: false,
    },
  ]);

  // Add tasks
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete task by filtering out, setting the tasks to the filtered tasks 
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=> task.id !== id));
  };

  // Toggle reminder, if we where using backend them here we would do fetch requests to our server as well
  const toggleReminder = (id) => {
    setTasks(tasks.map((task)=> task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : <h3>💪 No more tasks! 🦾</h3>}
    </div>
  );
}

export default App;
