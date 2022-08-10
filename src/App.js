import './App.css';
import React, {useState} from 'react';

function App() {

  const [tasks, setTasks] = useState([
    //tasks go in here
    { name: "Eat Jaffa cakes", priority: "high", isDone: false },
    { name: "Watch Empire Strikes Back", priority: "medium", isDone: false },
    { name: "Watch Last Jedi", priority: "low", isDone: false }
  ]);

  const [newTask, setNewTask] = useState('');
  const [newTaskPriority, setNewPriority] = useState('');


  //making the list

  const taskNodes = tasks.map((task, index) => {
    return(
      <li key={index} id='taskItem' className={
        task.isDone === true ? 'done' :
        task.priority === 'high' ? 'high' : task.priority === 'medium' ? 'medium' : 'low'}>
        <span>{task.name}</span>

        {task.isDone ? <span className='done'>Task completed!</span> : <button onClick={() => changeIsDone(index)}>Done?</button>}
      </li>
    );
  });

  const handleTaskInput = (event) => {
    setNewTask(event.target.value);
  }

  const handleTaskPriority = (event) => {
    setNewPriority(event.target.value);
  }

  const saveNewTask = (event) => {
    event.preventDefault();
    if(newTask.length > 0 && (newTaskPriority == 'high' || newTaskPriority == 'medium' || newTaskPriority == 'low')){
      const copyTasks = [...tasks];
      copyTasks.push({name: newTask, priority: newTaskPriority, isDone: false});
      setTasks(copyTasks);
      setNewTask('');
    }
  }

  const changeIsDone = (index) => {
    const copyTasks = [...tasks];
    copyTasks[index].isDone = true;
    setTasks(copyTasks);
  }


  //editing the list

  const handleRemoveAll = (event) => {
    event.preventDefault();
    const emptyArray = [];
    setTasks(emptyArray);
  }

  const handleRemoveDone = (event) => {
    event.preventDefault();
    const filteredTasks = tasks.filter(task => task.isDone === false);
    setTasks(filteredTasks);
  }


  return (
    <div className="App">

      <h1>To-Do List</h1>
      <hr></hr>

{/* making list */}
      <form onSubmit={saveNewTask}>
        <input id='new-task' type='text' value={newTask} onChange={handleTaskInput} />
        
        <input type='radio' id='priorityHigh' name="priority" value='high' onChange={handleTaskPriority} />
          <label htmlFor='priorityHigh'>High</label>

        <input type='radio' id='priorityMed' name="priority" value='medium' onChange={handleTaskPriority} />
          <label htmlFor='priorityMed'>Medium</label>

        <input type='radio' id='priorityLow' name="priority" value='low' onChange={handleTaskPriority} />
          <label htmlFor='priorityLow'>Low</label>

        <input id='save-task' type='submit' value='Save Task'/>
      </form>

{/* editing list */}
      <form id='removeForm'>
        <button onClick={handleRemoveAll}>Remove all</button>
        <button onClick={handleRemoveDone}>Remove done</button>
      </form>

{/* list */}
      <ul>
        {taskNodes}
      </ul>

    </div>
  );
}

export default App;
