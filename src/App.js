import './App.css';
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Grocery Shopping',
      day: 'Feb 5th at 10pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Christmas Shopping',
      day: 'Dec 15th at 12pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Skiing',
      day: 'March 10th at 3pm',
      reminder: false,
    },
  ])

  // Add Task
  const addTask = (task) => {
    console.log(task)
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id
      ? { ...task, reminder: !task.reminder }
      : task))
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className='container'>
      <Header title='Task Tracker' />
      <AddTask onAdd={addTask}/>
      {tasks.length > 0 ?
        (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />)
        : (
          'No tasks to show')}
    </div>
  );
}

export default App;
