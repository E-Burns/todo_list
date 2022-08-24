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
    if(newTask.length > 0 && (newTaskPriority === 'high' || newTaskPriority === 'medium' || newTaskPriority === 'low')){
      const copyTasks = [...tasks];
      copyTasks.push({name: newTask, priority: newTaskPriority, isDone: false});
      setTasks(copyTasks);
      setNewTask('');
    }
  }

  const changeIsDone = (index) => {
    const copyTasks = [...tasks];
    copyTasks[index].isDone = true;
    copyTasks[index].priority = 'none';
    setTasks(copyTasks);
  }


  //editing the list
  const handleOrder = (event) => {
    event.preventDefault();
    const taskDone = tasks.filter(task => task.isDone === true);
    const priorityHigh = tasks.filter(task => task.priority === 'high');
    const priorityMed = tasks.filter(task => task.priority === 'medium');
    const priorityLow = tasks.filter(task => task.priority === 'low');
    const orderedList = taskDone.concat(priorityHigh, priorityMed, priorityLow);
    setTasks(orderedList);
  }

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
      <form className='submit-form' onSubmit={saveNewTask}>

        <div id='prio-div'> 
          <section>
            <input type='radio' id='priorityHigh' name="priority" value='high' onChange={handleTaskPriority} />
              <label htmlFor='priorityHigh'>High</label>
          </section>

          <section>
            <input type='radio' id='priorityMed' name="priority" value='medium' onChange={handleTaskPriority} />
              <label htmlFor='priorityMed'>Medium</label>
          </section>

          <section>
            <input type='radio' id='priorityLow' name="priority" value='low' onChange={handleTaskPriority} />
              <label htmlFor='priorityLow'>Low</label>
          </section>
        </div>

        <input id='new-task' type='text' value={newTask} onChange={handleTaskInput} placeholder='Enter task' />

        <input id='save-task' type='submit' value='Save Task'/>
      </form>

{/* editing list */}
      <form className='edit-form'>
        <button onClick={handleOrder} className='reorder' id='order'>Order tasks</button>
        <button onClick={handleRemoveDone} className='remove' id='rm-done'>Remove done</button>
        <button onClick={handleRemoveAll} className='remove' id='rm-all'>Remove all</button>
      </form>

{/* list */}
      <ul>
        {taskNodes}
      </ul>

    </div>
  );
}

export default App;
