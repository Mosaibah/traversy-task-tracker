import { useState } from "react"

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import NoTask  from "./components/NoTask";
import Alert from "./components/Alert";
import Footer from "./components/Footer";

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Doctors Appointment",
        day: 'Feb 5th at 9:10pm',
        reminder: true
    },
    {
        id: 2,
        text: " Shoping",
        day: 'Feb 7th at 1:30pm',
        reminder: true
    },
    {
        id: 3,
        text: "Visit my Friends",
        day: 'Feb 10th at 8:00am',
        reminder: false
    }
])

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle Reminder
const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) =>
    task.id === id?
    {...task, reminder: !task.reminder}
    : task)
  )
}

// Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10)+4
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
} 

  return (
    <div className="App">
      
      <Header onAdd={addTask}/>

      <Alert/>

      {tasks.length > 0 ?
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      : <NoTask/>}

      <Footer/>

    </div>
  );
}

export default App;
