/*
- import useState from react
- Call useState inside our function with an initial value
- get back two thing in our array
- use array destructuring to unpack those two things
- use them to make our UI interactive

const [something, setSomething] = useState(initialValue)
*/

import React, { useState } from "react";

function App(){

  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task=>task.completed).length
  const remainingTask = totalTasks - completedTasks;

  const completedPercentage = totalTasks > 0 ? Math.round((completedTasks/totalTasks)*100):0;
  
  console.log('stats - total:',totalTasks, 'completed:', completedTasks, 'Remaining:', remainingTask);

  const handleAddTask = () => {
    if(newTask.trim()){
      const task = {
        id: Date.now(),
        text: newTask,
        completed:false
      }

      console.log('creating Task object:', task);
      setTasks([...tasks, task]);
      setNewTask('');
    }
  }

  const toggleTask = (id) => {
    console.log('Toggling task with id:', id);
    setTasks(tasks.map(task=>{
      // if this is the task we want to toggle
      if(task.id === id){
        //create a new task object with completed flipped
        return {...task, completed:!task.completed}        
      }
      // othewise return the task unchanges
      return task
    }))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task=>task.id !== id))
  }

  return(
    <div>
      <h1>My Task List</h1>
      <div style={{backgroundColor:'#f0f0f0', padding:"10px",  margin: '10px 0', borderRadius: '5px'  }}>
        <h3>Task Statistics</h3>
        <p>Total Tasks : {totalTasks}</p>
        <p>Completed Tasks : {completedTasks}</p>
        <p>Remaining Tasks : {remainingTask}</p>

        <div style={{width:'100%', height:'20px', background:'#ddd', borderRadius:'10px', overflow:'hidden'}}>
          <div style={{width:`${completedPercentage}%`, height: '100%', background:'#4caf50', transition:'width 0.3s ease'}}></div>
        </div>
        <p>Progress: {completedPercentage}%</p>
      </div>
      <input value={newTask} onChange={(e)=>setNewTask(e.target.value)} placeholder="Enter a task..."/>
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks?.map((task, index)=>(
          <li key={task.id}>
            <input type="checkbox" checked={task?.completed} onChange={()=> toggleTask(task.id)}/> <span>{task.text}</span> <button onClick={()=>deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;