import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

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

  // Delete task by filtering out, setting the tasks to the filtered tasks 
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=> task.id !== id));
  };

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task)=> task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : <h3>💪 No more tasks! 🦾</h3>}
    </div>
  );
}

export default App;
