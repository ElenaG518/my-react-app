import React from "react";
import Task from "./Task";

const TaskList = ({tasks, onToggleTask}) => {
    return (
        <ul>
            {tasks.map((task, idx) => 
            <Task key={idx} task={task} onToggle={() => onToggleTask(idx)}/>
            )}
        </ul>
    );
};

export default TaskList;