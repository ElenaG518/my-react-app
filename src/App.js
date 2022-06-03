import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';
import useTasks from './hooks/useTasks';

function App() {
const [tasks, {createTask, toggleTask}] = useTasks();

// const handleNewTask = (task) => setTasks([...tasks, {completed: false, label: task}]);
// const handleToggleTask = (taskIdx) => {
//   const newTasks = [...tasks];
//   newTasks[taskIdx] = {...newTasks[taskIdx], completed: !newTasks[taskIdx].completed};
//   setTasks(newTasks);
// };

  return (
    <div>
      <TaskInput onSubmit={createTask}/>
      <TaskList tasks={tasks} onToggleTask={toggleTask}/>
    </div>
  );
}

export default App;
