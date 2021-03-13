import './App.css';
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

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

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id)) 
}

  return (
    <div className='container'>
      <Header title='Hello'/>
      <Tasks tasks= {tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
